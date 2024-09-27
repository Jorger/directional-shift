import './styles.css';
import { useWindowResize } from '../../../hooks';
// import { useUpdateServiceWorker, useWindowResize } from "../../../hooks";
// import AlertUpdateApp from "../../alertUpdateApp";
import React from 'react';

/**
 * COmponente que maneja el escalamiento del juego...
 * @param param0
 * @returns
 */
const Container = ({ children }: { children: React.ReactNode }) => {
  // const serviceWorkerInformation = useUpdateServiceWorker();
  useWindowResize();

  return (
    <div className="container">
      <div className="screen">{children}</div>
    </div>
  );
};

export default React.memo(Container);
