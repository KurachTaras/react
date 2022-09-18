import {useEffect, useState} from "react";
import {getFlightNumber} from "../../../services/spacex.api.axios";
import Launch from "./Launch";
import './Launch.css'

function Launches() {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        getFlightNumber().then(value => setLaunches(value.data))
    }, []);

    return (
        <div className="Launches">
            {launches.filter(value => value.launch_year !== '2020').map((launch, index) => <Launch item={launch} key={index} />)}
        </div>
    );
}

export default Launches;