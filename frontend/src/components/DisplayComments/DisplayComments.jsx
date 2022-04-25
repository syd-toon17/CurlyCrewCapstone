import Comments from "../Comments/Comments";

const DisplayComments = (props) => {
    return ( 
        <div>
        <h3>Comments</h3>
            <table>
                <tbody>
                {props.parentComment.map((comment, index) => {
                    return (
                        <Comments parentComment={comment} key={index} />
                    )
                })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayComments;