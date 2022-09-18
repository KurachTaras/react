import './User.css'
import {FaUserCircle} from 'react-icons/fa'

function User(props) {
    let {item: user, postsOfUser} = props;

    return (
        <div className="user_card">
            <div className="user_info">
                <h2>{user.id} - {user.name}</h2>
                <div className="user_btn">
                    <button className="btn" onClick={() => {
                        postsOfUser(user.id)
                    }}>details
                    </button>
            </div>
            </div>
            <div className="user_photo">
                <FaUserCircle color="blueviolet" fontSize="100px" />
            </div>
        </div>
    );
}

export default User;