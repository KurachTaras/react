import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {MainPage} from "./pages";

const App = () => {

  return (
    <div>
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'/Main'}/>}/>
              <Route path={'/Main'} element={<MainPage/>}/>
          </Route>
      </Routes>

    </div>
  );
}

export {App};
