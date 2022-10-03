import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {MainPage} from "./pages";
import {PatsPage} from "./pages/PatsPage/Pats.page";

const App = () => {

  return (
    <div>
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'/Pats'}/>}/>
              <Route path={'/Main'} element={<MainPage/>}/>
              <Route path={'/Pats'} element={<PatsPage/>}/>
          </Route>
      </Routes>

    </div>
  );
}

export {App};
