import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./Layouts";
import {CarsPage, PostsPage, UsersPage} from "./pages";

function App() {

  return (
    <div>
        <Routes>
            <Route path={'/'}  element={<MainLayout/>}>
                <Route index element={<Navigate to={'/Users'}/>}/>
                <Route path={'/Users'} element={<UsersPage/>}/>
                <Route path={'/Posts'} element={<PostsPage/>}/>
                <Route path={'/Cars'} element={<CarsPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
