import UserInfo from "./UserInfo";

function Comment(props) {
  console.log(props.author);
  return (
    <div className="Comment componentBox">
      <UserInfo author={props.author} />
      {/* <div className="comment-text">{props.text}</div> */}
      <div className='comment-date'>{props.date}</div>
    </div>
  );
}

export default Comment;
