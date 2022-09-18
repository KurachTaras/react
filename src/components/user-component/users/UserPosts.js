import './User.css'

function UserPosts(props) {
    let {item: post} = props;

    return (
        <div>
            <p>{post.id} - {post.title}</p>
        </div>
    );
}

export default UserPosts;