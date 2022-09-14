import './simpsons.css'

export default function Simpson (props) {
    let {item: simpson} = props;


    return (<div className = "simpson_card">
        <div className= "member">
        <div className="simpson-info">
            <h2>{simpson.name} - {simpson.age}</h2>
        </div>
        <div className="photo">
            <img className="sims" src= {simpson.photo} alt= {simpson.name}/>
        </div>
        </div>
    </div>);
}