import FavoriteVideos from "../FavoriteVideos/FavoriteVideos";

const DisplayFavoriteVideos = (props) => {
    return ( 
        <div>
        <h3>Favorite Videos</h3>
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