import './App.css';
import Users from "./componets/user-component/users/Users";
import Launches from "./componets/spacex-component/launches/Launches";

function App() {
  return (
    <div>
        <div className="header flex">
            <h2>users component</h2>
        </div>
        <div className="users_component flex">
            <Users/>
        </div>
        <div className="article flex">
            <h2>launches component</h2>
        </div>
        <div className="launch_component flex">
            <Launches/>
        </div>
    </div>
  );
}

export default App;
