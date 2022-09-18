import './Launch.css'

function Launch(props) {
    let {item: launch} = props;

    return (
        <div className="launch_card">
            <div className="info">
                <h2>{launch.mission_name}</h2>
                <div className="launch_year"> Launch year - {launch.launch_year} </div>
            </div>
            <div className="photo">
                <img className="img" src= {launch.links.mission_patch_small} alt= {launch.mission_name} />
            </div>
        </div>
    );
}

export default Launch;