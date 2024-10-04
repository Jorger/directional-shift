import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { Suspense, lazy } from "react";
import Loading from "../../components/loading";

const AboutPage = lazy(() => import("../about"));
const LobbyPage = lazy(() => import("../lobby"));
const LevelsPage = lazy(() => import("../levels"));

const Router = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LobbyPage />} />
        <Route path={ROUTES.LOBBY} element={<LobbyPage />} />
        <Route path={ROUTES.LEVELS} element={<LevelsPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default Router;
