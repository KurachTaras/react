import './characters.css'

export default function Character (props) {
    let {item: character} = props;

    return (<div className= "character_card">
        <div>
            <div className = "info">
                <div className="article">
                    <h2>{character.id} - {character.name}</h2>
                </div>
                <div className="char_info">
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                </div>
            </div>
            <div className = "photo">
                <img src = {character.image} alt= {character.name} />
            </div>
        </div>
    </div>);
}