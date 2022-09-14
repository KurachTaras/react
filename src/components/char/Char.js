import './Char.css'

export default function Char(props) {
    let {item: char} = props;

    return (<div className="char_card">
        <div>
        <div className="info">
            <div className="article">
                <h2>{char.id} - {char.name}</h2>
            </div>
            <div className="charac_info">
                <p>{char.status}</p>
                <p>{char.species}</p>
                <p>{char.gender}</p>
            </div>
        </div>
        <div className="photos">
            <img src= {char.photo} alt={char.name}/>
        </div>
        </div>
    </div>)
}