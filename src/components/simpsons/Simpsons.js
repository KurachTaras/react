import './simpsons.css'

import {simpsons} from "../../data";
import Simpson from "./Simpson";

export default function Simpsons() {

    return (<div className = "Simpsons">
        {simpsons.map((simpson, index) => (<Simpson item={simpson} key={index}/>))}
    </div>)


}