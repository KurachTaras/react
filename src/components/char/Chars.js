import './Char.css'
import {chars} from "../../data";
import Char from "./Char";

export default function Chars() {

    return (<div className="SomeCharacters">
        {chars.map((char, index) => (<Char item={char} key={index}/>))}
    </div>)

}