import {Link, Routes, Route} from "react-router-dom";
import {Comments, Posts, Users} from "./components";


function App() {

  return (
    <div>

      <ul>
        <li><Link to={'/users'}>users page</Link></li>
          <li><Link to={'/posts'}>posts page</Link></li>
          <li><Link to={'/comments'}>comments page</Link></li>
      </ul>

      <hr/>

      <Routes>
          <Route path={'users'} element={<Users/>}/>
          <Route path={'posts'} element={<Posts/>}/>
          <Route path={'comments'} element={<Comments/>}/>
      </Routes>

    </div>
  );
}

export default App;
