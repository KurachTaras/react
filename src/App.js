import './App.css';
import Simpsons from "./components/simpsons/Simpsons";
import Characters from "./components/characters/Characters";
import Chars from "./components/char/Chars";

function App() {


  return (
    <div >

      <div className="simpsons_family"> <Simpsons/> </div>
      <div className="rickAndMorty_family"> <Characters/> </div>
      <div className="characters"> <Chars/> </div>
    </div>
  )

}

export default App;
