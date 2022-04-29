import FavoriteVideos from "../FavoriteVideos/FavoriteVideos";

const DisplayFavoriteVideos = (props) => {
    console.log(props.parentFavoriteVideos)
    return ( 
        <div>
        <h3>Favorite Video Id's</h3>
            <table>
                <tbody>
                {props.parentFavoriteVideos.map((favoriteVideos, index) => {
                    return (
                        <FavoriteVideos parentFavoriteVideo={favoriteVideos} key={index} />
                    )
                })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayFavoriteVideos;