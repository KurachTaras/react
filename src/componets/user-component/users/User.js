import './User.css'

function User(props) {
    let {item: user, lift} = props;

    return (
        <div className="user_card">
            <div className="user_info">
                <h2>{user.id} - {user.name}</h2>
            </div>
            <div className="btn">
                <button className="addInfo" onClick={() => {
                    lift(user);
                }}> Details
                </button>
            </div>
        </div>

    );
}

export default User;