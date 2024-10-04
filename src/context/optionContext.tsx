import { getValueFromCache, savePropierties } from "../utils/storage";
import { Howl } from "howler";
import {
  EOptionsGame,
  ESounds,
  INITIAL_OPTIONS_GAME,
} from "../utils/constants";
import backgroundSound from "./sounds/background.mp3";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
// import soundsSource from "./sounds/soundsSource.mp3";
import type {
  IOptionsContext,
  IOptionsGame,
  IEOptionsGame,
  IESounds,
} from "../interfaces";

/**
 * Para e sonido de fondo...
 */
const ambientSound = new Howl({
  src: [backgroundSound],
  autoplay: getValueFromCache("options", INITIAL_OPTIONS_GAME).MUSIC,
  loop: true,
  volume: 0.5,
});

/**
 * Para los sonidos de la UI...
 */
// const sounds = new Howl({
//   src: [soundsSource],
//   sprite: {
//     CLICK: [0, 180],
//     GAMER_OVER: [3900, 6000],
//   },
// });

const OptionsContext = createContext<IOptionsContext | undefined>(undefined);

interface OptionProviderProps {
  children: React.ReactNode;
}

const OptionProvider: React.FC<OptionProviderProps> = ({ children }) => {
  const [optionsGame, setOptionsGame] = useState<IOptionsGame>(() =>
    getValueFromCache("options", INITIAL_OPTIONS_GAME)
  );

  /**
   * Para habilitar o deshabilitar las opciones del juego...
   * @param type
   */
  const toogleOptions = (type: IEOptionsGame) => {
    const copyOptions: IOptionsGame = { ...optionsGame };
    copyOptions[type] = !copyOptions[type];

    setOptionsGame(copyOptions);

    /**
     * Si es de tipo sonido de fondo, lo habilita o lo deshabilita....
     */
    if (type === EOptionsGame.MUSIC) {
      ambientSound[copyOptions.MUSIC ? "play" : "stop"]();
    }

    /**
     * Guarda la información en localStorage...
     */
    savePropierties("options", copyOptions);
  };

  /**
   * Método para validar si se reproduce o no el sonido...
   */
  const playSound = useCallback(
    (type: IESounds) => {
      if (optionsGame.SOUND) {
        // sounds.play(type);
        console.log("PARA LOS SONIDOS");
      }
    },
    [optionsGame.SOUND]
  );

  /**
   * Efecto que establece un click global...
   */
  useEffect(() => {
    const onClickEvent = (e: MouseEvent) => {
      const target = e.target as Element;

      /**
       * Sólo se tienen en cuenta algunos tags...
       */
      if (["a", "button", "input"].includes(target?.tagName?.toLowerCase())) {
        playSound(ESounds.CLICK);
      }
    };

    window.addEventListener("click", onClickEvent);

    return () => {
      window.removeEventListener("click", onClickEvent);
    };
  }, [playSound]);

  return (
    <OptionsContext.Provider value={{ optionsGame, toogleOptions, playSound }}>
      {children}
    </OptionsContext.Provider>
  );
};

/**
 * Hook que permite leer el contexto de las opciones del juego...
 * @returns
 */
const useOptionsContext = (): IOptionsContext => {
  const context = useContext(OptionsContext);

  if (!context) {
    throw new Error("useOptionsContext must be used within a OptionProvider");
  }

  return context;
};

export { OptionProvider, useOptionsContext };
