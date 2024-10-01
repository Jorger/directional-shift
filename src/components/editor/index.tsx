import "./styles.css";
import { Arrow, Stopper } from "../uiGame";
import {
  ARROW_SIZE,
  BASE_HEIGHT,
  BASE_WIDTH,
  ELineFinish,
  ELineOrigin,
  ELineScale,
  EOrietantation,
  EStateArrow,
  LINE_SIZE,
} from "../../utils/constants";
import Arrival from "../uiGame/arrival";
import cloneDeep from "lodash.clonedeep";
import ImageUploader from "./imageLoader";
import Line from "../uiGame/line";
import React, { useEffect, useState } from "react";
import type {
  IArrival,
  IArrow,
  ICoordinate,
  ILevel,
  Iline,
  IPathArrow,
  IStopper,
  ITargetPositions,
  TLineFinish,
  TLineOrigin,
  TLineScale,
  TOrietantation,
} from "../../interfaces";
import { copyToClipboard } from "../../utils/helpers";

interface IPosition {
  coordinate: ICoordinate;
  orientation: TOrietantation;
}

type TArrowLinks = Record<
  number,
  { lines: number[]; arrival: number; positions: IPosition[] }
>;

const fillArray = (length = 1) => Array.from({ length }, (_, index) => index);

const TYPE_ELEMENTS = ["Arrow", "Line", "Arrival", "Stopper"];

const ROTATION: Record<TOrietantation, number> = {
  TOP: 0,
  LEFT: 270,
  RIGHT: 90,
  BOTTOM: 180,
};

interface IArrowGhost {
  index: number;
  orientation: TOrietantation;
  coordinate: ICoordinate;
  isSelected?: boolean;
  indexArrow?: number;
}

interface ArrowGhostProps extends IArrowGhost {
  onSelect: (index: number) => void;
}

const ArrowGhost = ({
  index = 0,
  orientation = EOrietantation.TOP,
  coordinate,
  isSelected = false,
  onSelect,
}: ArrowGhostProps) => {
  return (
    <button
      className={`editor-arrow-ghost ${isSelected ? "selected" : ""}`}
      style={{
        width: ARROW_SIZE,
        height: ARROW_SIZE,
        left: coordinate.x,
        top: coordinate.y,
      }}
      onClick={() => onSelect(index)}
    >
      {orientation}
    </button>
  );
};

interface RangeProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

const Range = ({
  label,
  value,
  min = 0,
  max = BASE_HEIGHT,
  onChange,
}: RangeProps) => (
  <div>
    <div>
      {label}:{" "}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(+e.currentTarget.value)}
      />
    </div>
    <input
      value={value}
      type="range"
      min={min}
      max={max}
      onChange={(e) => onChange(+e.currentTarget.value)}
    />
  </div>
);

interface PositionsProps {
  coordinate: ICoordinate;
  onChange: (type: string, value: number) => void;
}

const Positions = ({ coordinate, onChange }: PositionsProps) => {
  return (
    <div className="editor-range">
      <Range
        label="X"
        value={coordinate.x}
        max={BASE_WIDTH}
        onChange={(value) => onChange("x", value)}
      />
      <Range
        label="Y"
        value={coordinate.y}
        onChange={(value) => onChange("y", value)}
      />
    </div>
  );
};

interface RenderOptionsArrowProps extends PositionsProps {
  orientation: TOrietantation;
  orderLines: number[];
  handleOrientation: (orientation: TOrietantation) => void;
  handleOrder: (newOrder: string) => void;
}

// onChange={(e) => handleAction("select", +e.target.value)}
const RenderOptionsArrow = ({
  coordinate,
  orientation,
  orderLines = [],
  onChange,
  handleOrientation,
  handleOrder,
}: RenderOptionsArrowProps) => {
  const [localOrder, setLocalOrder] = useState("");

  useEffect(() => {
    setLocalOrder(orderLines.join(","));
  }, [orderLines]);

  const handleChangeOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOrder = e.target.value;
    setLocalOrder(newOrder);
  };

  const handleSaveNewOrder = () => {
    handleOrder(localOrder);
  };

  return (
    <div className="editor-arrow-options">
      <Positions coordinate={coordinate} onChange={onChange} />
      <select
        onChange={(e) => handleOrientation(e.target.value as TOrietantation)}
        value={orientation}
      >
        {Object.keys(EOrietantation).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input type="text" value={localOrder} onChange={handleChangeOrder} />
      <button onClick={handleSaveNewOrder}>Save</button>
    </div>
  );
};

interface RenderIndexArrowProps {
  indexArrow: number;
  totalArrows: number;
  handleChangeValue: (value: string) => void;
}

const RenderIndexArrow = ({
  indexArrow,
  totalArrows,
  handleChangeValue,
}: RenderIndexArrowProps) => {
  return (
    <select
      value={indexArrow}
      onChange={(e) => handleChangeValue(e.target.value)}
    >
      <option value={-1}>Arrow</option>
      {fillArray(totalArrows).map((v) => (
        <option key={v} value={v}>
          {v}
        </option>
      ))}
    </select>
  );
};

interface RenderLineOptionsProps extends Iline {
  indexArrow?: number;
  totalArrows: number;
  order: number;
  maxOrder: number;
  onChange: (type: string, value: number) => void;
  handleChangeValue: (type: string, value: string) => void;
}

const RenderLineOptions = ({
  coordinate,
  width,
  height,
  transform,
  value,
  indexArrow = -1,
  totalArrows = 0,
  finish,
  order = 0,
  maxOrder = 0,
  onChange,
  handleChangeValue,
}: RenderLineOptionsProps) => {
  const { scale, origin } = transform;

  const finalOrigin = Object.keys(ELineOrigin).filter((v) => {
    const newOrigin = v as TLineOrigin;

    return scale === "scaleX"
      ? newOrigin === "left" || newOrigin === "right"
      : newOrigin === "top" || newOrigin === "bottom";
  });

  // console.log({ maxOrder });

  return (
    <div>
      <div className="editor-arrow-options">
        <Positions coordinate={coordinate} onChange={onChange} />
        <Range
          label="W"
          value={width}
          max={BASE_WIDTH}
          onChange={(value) => handleChangeValue("width", String(value))}
        />
        <Range
          label="H"
          value={height}
          max={BASE_HEIGHT}
          onChange={(value) => handleChangeValue("height", String(value))}
        />
      </div>
      <div className="editor-arrow-options">
        <RenderIndexArrow
          indexArrow={indexArrow}
          totalArrows={totalArrows}
          handleChangeValue={(value) => handleChangeValue("indexArrow", value)}
        />
        <select
          value={scale}
          onChange={(e) => handleChangeValue("scale", e.target.value)}
        >
          {Object.keys(ELineScale).map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
        <select
          value={origin}
          onChange={(e) => handleChangeValue("origin", e.target.value)}
        >
          {finalOrigin.map((v) => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            );
          })}
        </select>

        <select
          value={finish}
          onChange={(e) => handleChangeValue("finish", e.target.value)}
        >
          {Object.keys(ELineFinish).map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={value}
          step="0.1"
          min="0"
          max="1"
          onChange={(e) => handleChangeValue("value", e.target.value)}
        />

        <select
          value={order}
          onChange={(e) => handleChangeValue("order", e.target.value)}
        >
          <option value={-1}>Order</option>
          {fillArray(maxOrder).map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

interface RenderSelectElementsProps {
  handleAction: (action: string, image?: string) => void;
}

const RenderSelectElements = ({ handleAction }: RenderSelectElementsProps) => (
  <div className="editor-btns">
    {TYPE_ELEMENTS.map((type, index) => (
      <button key={index} onClick={() => handleAction(type)}>
        {type}
      </button>
    ))}
    <button onClick={() => handleAction("ghost")}>Ghost</button>
    <ImageUploader handleImage={(image) => handleAction("image", image)} />
    <button onClick={() => handleAction("save")}>Save</button>
  </div>
);

interface ShowIndexLabelProps {
  coordinate: ICoordinate;
  value: string;
}

const ShowIndexLabel = ({ coordinate, value }: ShowIndexLabelProps) => {
  return (
    <div
      className="editor-label"
      style={{ left: coordinate.x, top: coordinate.y }}
    >
      {value}
    </div>
  );
};

// Para la posición de la línea en el path del arrow...
const getPositionLine = (
  indexArrow = 0,
  index = 0,
  arrowsLinks: TArrowLinks
) => {
  return indexArrow >= 0
    ? arrowsLinks[indexArrow].lines.findIndex((v) => v === index)
    : -1;
};

const getIndexArrow = (type = "", index = 0, arrowsLinks: TArrowLinks) => {
  // console.log({ type, index, arrowsLinks });

  if (type === "Arrival") {
    for (let link in arrowsLinks) {
      if (index >= 0) {
        if (arrowsLinks[link].arrival === index) {
          return +link;
        }
      }
    }
  }

  for (let link in arrowsLinks) {
    const indexLine = arrowsLinks[link].lines.findIndex((v) => v === index);

    if (indexLine >= 0) {
      return +link;
    }
  }

  return -1;
};

const Editor = () => {
  const [imageURL, setImageURL] = useState("");
  const [arrows, setArrows] = useState<IArrow[]>([]);
  const [arrivals, setArrivals] = useState<IArrival[]>([]);
  const [stoppers, setStoppers] = useState<IStopper[]>([]);
  const [lines, setLines] = useState<Iline[]>([]);

  // Donde se guarda la data a donde irán los arrows...
  const [arrowsGhost, setArrowsGhost] = useState<IArrowGhost[]>([]);

  // const [lines, setLines] = useState<Iline[]>([]);

  // Para guardar la relación del arrow con las líneas y el punto final.
  const [arrowsLinks, setArrowsLinks] = useState<TArrowLinks>({});

  const [selectElement, setEelectElement] = useState({
    type: "",
    index: -1,
  });

  const handleAction = (action = "", image = "") => {
    if (action === "ghost") {
      const indexArrowsGhost = arrowsGhost.length;

      const newArrowsGhost: IArrowGhost = {
        index: indexArrowsGhost,
        orientation: EOrietantation.TOP,
        coordinate: {
          x: BASE_WIDTH / 2 - ARROW_SIZE / 2,
          y: BASE_HEIGHT / 2 - ARROW_SIZE / 2,
        },
        indexArrow: -1,
      };

      const copyArrowsGhost = cloneDeep(arrowsGhost);
      copyArrowsGhost.push(newArrowsGhost);

      setArrowsGhost(copyArrowsGhost);

      setEelectElement({ type: action, index: indexArrowsGhost });
    }

    if (action === "save") {
      const newArrows: IPathArrow[] = [];

      for (let i = 0; i < arrows.length; i++) {
        const newTargetPositions: ITargetPositions[] = arrowsGhost
          .filter((v) => v.indexArrow === i)
          .map(({ coordinate, orientation }) => ({
            coordinate,
            orientation,
          }));

        // La coordenada final...
        newTargetPositions.push({
          coordinate: arrivals[i].coordinate,
          orientation: EOrietantation.LEFT,
        });

        newArrows.push({
          arrow: arrows[i],
          indexLines: arrowsLinks[i].lines,
          targetPositions: newTargetPositions,
          indexArrival: i,
        });
      }

      const newLevel: ILevel = {
        arrows: newArrows,
        lines,
        stoppers,
        arrivals,
      };
      console.log("CREAR LA DATA PARA EL NIVEL");

      console.log("newLevel: ", newLevel);

      const saveLevel = {
        newLevel,
        arrows,
        lines,
        arrivals,
        stoppers,
        arrowsLinks,
        arrowsGhost,
      };

      copyToClipboard(JSON.stringify(saveLevel));

      console.log("arrows: ", arrows);
      console.log("lines: ", lines);
      console.log("arrivals: ", arrivals);
      console.log("stoppers: ", stoppers);
      console.log("arrowsLinks: ", arrowsLinks);
      console.log("arrowsGhost: ", arrowsGhost);
    }

    if (action === "Arrow") {
      // Se agrega un nuevo Arrow...
      //setEelectElement({type: TYPE_ELEMENTS[type], index})
      const indexArrow = arrows.length;
      const newArrow: IArrow = {
        index: indexArrow,
        orientation: EOrietantation.TOP,
        coordinate: {
          x: BASE_WIDTH / 2 - ARROW_SIZE / 2,
          y: BASE_HEIGHT / 2 - ARROW_SIZE / 2,
        },
        state: EStateArrow.IDLE,
        rotation: 0,
      };

      const copyArrows = cloneDeep(arrows);
      copyArrows.push(newArrow);

      // Agrega el arrow
      setArrows(copyArrows);

      setEelectElement({ type: action, index: indexArrow });

      // Para los enlaces...
      const copyArrowsLinks = cloneDeep(arrowsLinks);

      copyArrowsLinks[indexArrow] = {
        lines: [],
        arrival: -1,
        positions: [],
      };

      setArrowsLinks(copyArrowsLinks);
    }

    if (action === "Arrival") {
      const indexArrival = arrivals.length;

      const newArrival: IArrival = {
        index: indexArrival,
        coordinate: {
          x: BASE_WIDTH / 2 - ARROW_SIZE / 2,
          y: BASE_HEIGHT / 2 - ARROW_SIZE / 2,
        },
      };

      const copyArrivals = cloneDeep(arrivals);
      copyArrivals.push(newArrival);

      setArrivals(copyArrivals);

      setEelectElement({ type: action, index: indexArrival });
    }

    if (action === "Stopper") {
      const indexStoper = stoppers.length;

      const newStoper: IStopper = {
        index: indexStoper,
        coordinate: {
          x: BASE_WIDTH / 2 - ARROW_SIZE / 2,
          y: BASE_HEIGHT / 2 - ARROW_SIZE / 2,
        },
      };

      const copyStoppers = cloneDeep(stoppers);
      copyStoppers.push(newStoper);

      setStoppers(copyStoppers);

      setEelectElement({ type: action, index: indexStoper });
    }

    if (action === "Line") {
      const indexLine = lines.length;

      const newLine: Iline = {
        index: indexLine,
        coordinate: {
          x: BASE_WIDTH / 2 - ARROW_SIZE / 2,
          y: BASE_HEIGHT / 2 - ARROW_SIZE / 2,
        },
        height: LINE_SIZE,
        width: 100,
        transform: {
          scale: "scaleX",
          origin: "left",
        },
        value: 1,
        finish: ELineFinish.NEXT,
        // fullStop: { x: 0, y: 0 },
      };

      const copyLines = cloneDeep(lines);
      copyLines.push(newLine);

      setLines(copyLines);

      setEelectElement({ type: action, index: indexLine });
    }

    if (action === "image") {
      setImageURL(image);
    }
  };

  const handlePositionElement = (type = "", axis = "", value = 0) => {
    if (type === "Arrow") {
      // console.log(selectElement);
      const copy = cloneDeep(arrows);
      // @ts-ignore
      copy[selectElement.index].coordinate[axis] = value;
      setArrows(copy);
    }

    // "Arrow", "Line", "Arrival", "Stopper"

    if (type === "Arrival") {
      // console.log(selectElement);
      const copy = cloneDeep(arrivals);
      // @ts-ignore
      copy[selectElement.index].coordinate[axis] = value;
      setArrivals(copy);
    }

    if (type === "Stopper") {
      const copy = cloneDeep(stoppers);
      // @ts-ignore
      copy[selectElement.index].coordinate[axis] = value;
      setStoppers(copy);
    }

    if (type === "Line") {
      const copy = cloneDeep(lines);
      // @ts-ignore
      copy[selectElement.index].coordinate[axis] = value;
      setLines(copy);
    }

    if (type === "ghost") {
      const copy = cloneDeep(arrowsGhost);
      // @ts-ignore
      copy[selectElement.index].coordinate[axis] = value;
      setArrowsGhost(copy);
    }
  };

  const handleOrientationArrow = (orientation: TOrietantation) => {
    const copyArrows = cloneDeep(arrows);
    copyArrows[selectElement.index].orientation = orientation;
    copyArrows[selectElement.index].rotation = ROTATION[orientation];
    setArrows(copyArrows);
  };

  const handleChangeValue = (index = 0, type = "", value = "") => {
    if (type === "indexArrow") {
      const indexArrow = +value;
      const currentArrow = getIndexArrow("Line", index, arrowsLinks);

      if (indexArrow !== currentArrow) {
        const copyArrowsLinks = cloneDeep(arrowsLinks);

        if (currentArrow >= 0) {
          // Se saca del listado de lineas del arrow que tenía...
          copyArrowsLinks[currentArrow].lines.splice(currentArrow, 1);
        }

        // Se agrega al listado del arrow seleccionado...
        if (copyArrowsLinks?.[indexArrow]) {
          if (!copyArrowsLinks?.[indexArrow].lines.includes(index)) {
            copyArrowsLinks?.[indexArrow].lines.push(index);
          }
        }

        setArrowsLinks(copyArrowsLinks);
      }
    }

    if (type === "scale") {
      const copyLines = cloneDeep(lines);
      const { transform, width, height } = copyLines[index];

      const newScale = value as TLineScale;
      const origin: TLineOrigin = newScale === "scaleX" ? "top" : "left";

      copyLines[index].transform = { scale: newScale, origin };

      copyLines[index].height =
        transform.scale === "scaleX" ? width : LINE_SIZE;

      copyLines[index].width = height;

      setLines(copyLines);
    }

    if (type === "origin") {
      const copyLines = cloneDeep(lines);
      const { transform } = copyLines[index];
      const origin = value as TLineOrigin;

      copyLines[index].transform = { scale: transform.scale, origin };

      setLines(copyLines);
    }

    if (type === "finish") {
      const copyLines = cloneDeep(lines);
      const finish = value as TLineFinish;
      copyLines[index].finish = finish;

      setLines(copyLines);
    }

    if (type === "value") {
      const copyLines = cloneDeep(lines);
      const newValue = +value;

      copyLines[index].value = newValue;

      setLines(copyLines);
    }

    if (type === "width" || type === "height") {
      const copyLines = cloneDeep(lines);
      const newValue = +value;
      // @ts-ignore
      copyLines[index][type] = newValue;

      setLines(copyLines);
    }

    // if(type === "order") {
    //   const newOrder = +value;
    //   const currentArrow = getIndexArrow("Line", index, arrowsLinks);
    //   const copyArrowsLinks = cloneDeep(arrowsLinks);

    //   if (copyArrowsLinks?.[currentArrow]) {
    //     copyArrowsLinks?.[indexArrow].lines.push(index);
    //   }
    // }

    // console.log({ index, type, value });
  };

  // const handleArrivalArrowIndex = (arrivalIndex = 0, indexArrow = 0) => {
  //   console.log({ arrivalIndex, indexArrow });

  //   if (indexArrow >= 0) {
  //     const copyArrowsLinks = cloneDeep(arrowsLinks);

  //     //

  //     if (copyArrowsLinks?.[indexArrow]) {
  //       const currentArrow = getIndexArrow(
  //         "Arrival",
  //         arrivalIndex,
  //         arrowsLinks
  //       );

  //       if (currentArrow !== indexArrow) {
  //         if (currentArrow >= 0) {
  //           copyArrowsLinks[currentArrow].arrival = -1;
  //         }
  //       }

  //       copyArrowsLinks[indexArrow].arrival = arrivalIndex;
  //       setArrowsLinks(copyArrowsLinks);
  //     }
  //   }
  // };

  const handleNewOrder = (index = 0, newOrder = "") => {
    const copyArrowsLinks = cloneDeep(arrowsLinks);

    // console.log("handleNewOrder: ", { index, newOrder });

    if (copyArrowsLinks?.[index]) {
      copyArrowsLinks[index].lines = newOrder.split(",").map((v) => +v);
      setArrowsLinks(copyArrowsLinks);
    }
  };

  const handleOrientationGhost = (index = 0, orientation: TOrietantation) => {
    const copy = cloneDeep(arrowsGhost);
    copy[index].orientation = orientation;
    setArrowsGhost(copy);
  };

  const handleIndexArrowGhost = (index = 0, newIndexArrow: number) => {
    const copy = cloneDeep(arrowsGhost);
    copy[index].indexArrow = newIndexArrow;

    setArrowsGhost(copy);

    // if (arrowsLinks[newIndexArrow]) {
    //   const copyArrowsLinks = cloneDeep(arrowsLinks);

    //   copyArrowsLinks[newIndexArrow].positions.push({
    //     coordinate: copy[index].coordinate,
    //     orientation: copy[index].orientation,
    //   });

    //   setArrowsLinks(copyArrowsLinks);
    // }
  };

  const selectCoordinate =
    selectElement.type !== ""
      ? selectElement.type === "Arrow"
        ? arrows[selectElement.index].coordinate
        : selectElement.type === "Arrival"
        ? arrivals[selectElement.index].coordinate
        : selectElement.type === "Stopper"
        ? stoppers[selectElement.index].coordinate
        : selectElement.type === "Line"
        ? lines[selectElement.index].coordinate
        : arrowsGhost[selectElement.index].coordinate
      : { x: 0, y: 0 };

  const totalArrows = arrows.length;

  let indexArrowRender = 0;
  let order = 0;

  if (selectElement.type === "Line") {
    indexArrowRender = getIndexArrow("Line", selectElement.index, arrowsLinks);
    order = getPositionLine(indexArrowRender, selectElement.index, arrowsLinks);

    // console.log({ order });
  }

  if (selectElement.type === "Arrival") {
    indexArrowRender = getIndexArrow(
      "Arrival",
      selectElement.index,
      arrowsLinks
    );
  }

  return (
    <div className="editor">
      {imageURL !== "" && (
        <img className="editor-container-image" src={imageURL} alt="Base" />
      )}
      <RenderSelectElements handleAction={handleAction} />

      {lines.map((line) => {
        const indexArrowLine = getIndexArrow("Line", line.index, arrowsLinks);
        const orderLine = getPositionLine(
          indexArrowLine,
          line.index,
          arrowsLinks
        );

        return (
          <React.Fragment key={line.index}>
            <ShowIndexLabel
              coordinate={{
                x: line.coordinate.x,
                y: line.coordinate.y - 20,
              }}
              value={`${line.index}|${indexArrowLine}|${orderLine}`}
            />
            <Line
              isSelected={
                selectElement.type === "Line" &&
                selectElement.index === line.index
              }
              highlight={
                !(
                  selectElement.type === "Line" &&
                  selectElement.index === line.index
                )
              }
              {...line}
              onSelect={(value) => {
                setEelectElement({ type: "Line", index: value });
              }}
            />
          </React.Fragment>
        );
      })}

      {stoppers.map((stopper) => {
        return (
          <Stopper
            key={stopper.index}
            isSelected={
              selectElement.type === "Stopper" &&
              selectElement.index === stopper.index
            }
            {...stopper}
            onSelect={(value) => {
              setEelectElement({ type: "Stopper", index: value });
            }}
          />
        );
      })}

      {arrivals.map((arrival) => {
        return (
          <React.Fragment key={arrival.index}>
            <ShowIndexLabel
              coordinate={{
                x: arrival.coordinate.x,
                y: arrival.coordinate.y - 20,
              }}
              value={String(arrival.index)}
            />
            <Arrival
              isSelected={
                selectElement.type === "Arrival" &&
                selectElement.index === arrival.index
              }
              {...arrival}
              onSelect={(value) => {
                setEelectElement({ type: "Arrival", index: value });
              }}
            />
          </React.Fragment>
        );
      })}

      {arrows.map((arrow) => {
        return (
          <React.Fragment key={arrow.index}>
            <ShowIndexLabel
              coordinate={{
                x: arrow.coordinate.x,
                y: arrow.coordinate.y - 20,
              }}
              value={String(arrow.index)}
            />
            <Arrow
              {...arrow}
              isSelected={
                selectElement.type === "Arrow" &&
                selectElement.index === arrow.index
              }
              onSelect={(value) => {
                setEelectElement({ type: "Arrow", index: value });
              }}
            />
          </React.Fragment>
        );
      })}

      {arrowsGhost.map((ghost) => {
        return (
          <React.Fragment key={ghost.index}>
            <ShowIndexLabel
              coordinate={{
                x: ghost.coordinate.x,
                y: ghost.coordinate.y - 20,
              }}
              value={`${ghost.index}|${ghost.indexArrow}`}
            />
            <ArrowGhost
              {...ghost}
              isSelected={
                selectElement.type === "ghost" &&
                selectElement.index === ghost.index
              }
              onSelect={(value) => {
                setEelectElement({ type: "ghost", index: value });
              }}
            />
          </React.Fragment>
        );
      })}

      <div className="editor-options">
        {selectElement.type === "Arrow" && (
          <RenderOptionsArrow
            coordinate={selectCoordinate}
            orientation={arrows[selectElement.index].orientation}
            orderLines={arrowsLinks[selectElement.index].lines}
            handleOrientation={handleOrientationArrow}
            onChange={(axis, value) => {
              handlePositionElement("Arrow", axis, value);
            }}
            handleOrder={(newOrder) =>
              handleNewOrder(selectElement.index, newOrder)
            }
          />
        )}
        {["Arrival", "Stopper", "ghost"].includes(selectElement.type) && (
          <React.Fragment>
            <Positions
              coordinate={selectCoordinate}
              onChange={(axis, value) => {
                handlePositionElement(selectElement.type, axis, value);
              }}
            />
            {selectElement.type === "ghost" && (
              <React.Fragment>
                <select
                  onChange={(e) =>
                    handleOrientationGhost(
                      selectElement.index,
                      e.target.value as TOrietantation
                    )
                  }
                  value={arrowsGhost[selectElement.index].orientation}
                >
                  {Object.keys(EOrietantation).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <RenderIndexArrow
                  indexArrow={arrowsGhost[selectElement.index].indexArrow ?? -1}
                  totalArrows={totalArrows}
                  handleChangeValue={(value) =>
                    handleIndexArrowGhost(selectElement.index, +value)
                  }
                />
              </React.Fragment>
            )}

            {/* {selectElement.type === "Arrival" && (
              <RenderIndexArrow
                indexArrow={indexArrowRender}
                totalArrows={totalArrows}
                handleChangeValue={(value) =>
                  handleArrivalArrowIndex(selectElement.index, +value)
                }
              />
            )} */}
          </React.Fragment>
        )}
        {selectElement.type === "Line" && (
          <RenderLineOptions
            {...lines[selectElement.index]}
            indexArrow={indexArrowRender}
            order={order}
            maxOrder={
              indexArrowRender >= 0
                ? arrowsLinks[indexArrowRender].lines.length
                : 0
            }
            totalArrows={totalArrows}
            onChange={(axis, value) => {
              handlePositionElement("Line", axis, value);
            }}
            handleChangeValue={(type, value) =>
              handleChangeValue(selectElement.index, type, value)
            }
          />
        )}
      </div>
    </div>
  );
};

export default Editor;
