import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import Todos from "./components/Todos";
import Comments from "./components/Comments";
import PostOfComments from "./components/PostOfComments";
import Albums from "./components/Albums";

function App() {
  return (
    <div>

      <ul>
          <li><Link to={'/'}>home page</Link></li>
          <li><Link to={'/todos'}>todos page</Link></li>
          <li><Link to={'/albums'}>albums</Link></li>
          <li><Link to={'/comments'}>comments page</Link></li>
      </ul>

        <hr/>

      <Routes>
          <Route path={'todos'} element={<Todos/>}/>
          <Route path={'albums'} element={<Albums/>}/>
          <Route path={'comments'} element={<Comments/>}>
              <Route path={':id'} element={<PostOfComments/>} />
          </Route>
      </Routes>

    </div>
  );
}

export default App;
