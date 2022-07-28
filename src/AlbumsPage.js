import ControllTrack from "./components/ControlTrack";
import "./components/style/albumsPage.scss";
import test1 from './components/Music albums/Bandana/Bandana_I.jpg';
import testimg1 from "./components/images/player-play.png";
import testimg2 from "./components/images/player-list-add.png";
import testimg3 from "./components/Music albums/Bandana/Big Baby Tape kizaru - 99 Problems/Big Baby Tape kizaru - 99 Problems.jpeg"
import testimg4 from "./components/images/plus.png";


export default function AlbumsPage() {
    return (
        <div className="containerAlbumPage">
            <div className="header">
                <div className="imgAndName">
                    <img className="img" src={test1}></img>
                    <div className="nameOnImg">KIZARA</div>
                </div>
                <div className="informationAlbum">
                    <h1 className="headerName">KIZARA</h1>
                    <div className="mountArtists">1 Artists</div>
                    <div className="mountSongs">15 Songs</div>
                    <div className="lenghtTime">2h 40mins</div>
                    <div className="buttons">
                        <div className="buttonPlay">Play<img src={testimg1}></img></div>
                        <div className="buttonSave">Save<img src={testimg2}></img></div>
                    </div>
                </div>
            </div>
            <div className="homepage">
                <div className="homepageUp">
                    <div className="columnHeadings">
                        <div className="number">#</div>
                        <div className="name">Songs</div>
                        <div className="column time">Duration</div>
                        <div className="column artist">Artist</div>
                        <div className="column album">Album</div>
                        <div className="column add">Add to playlist</div>
                    </div>
                    <div className="tracks">
                        <div className="number">1</div>
                        <div className="imgAndNameTrack">
                            <img className="trackImg" src={testimg3}></img>
                            <div className="trackName">99 Problems</div>   
                        </div>
                        <div className="duration">02:34</div>
                        <div className="artistNameTrack">Kizaru</div>
                        <div className="nameAlbumTrack">Solo</div>
                        <img className="buttonAddPlaylistTrack" src={testimg4}></img>
                    </div>
                </div>
                <div className="homepageDown">
                    <ControllTrack/>
                </div>
            </div>
        </div>
    );
}