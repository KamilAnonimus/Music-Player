import { Routes, Route } from "react-router-dom";
import All from "./components/All";
import Trending from "./components/Trending";
import Featured from "./components/Featured";
import NewReleases from "./components/NewReleases";
import Genres from "./components/Genres";
import MostPlayed from "./components/MostPlayed";
import Homepage from "./Homepage";
import AlbumsPage from "./AlbumsPage";

export default function buttonApp() {
    return (
          <Routes>
            <Route path="/" element={<Homepage />} >
              <Route index element={<All />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="/newreleases" element={<NewReleases />} />
              <Route path="/genres" element={<Genres/>} />
              <Route path="/mostPlayed" element={<MostPlayed/>} />
            </Route>
            <Route>              
              <Route index element={<All />}></Route>
              <Route path="/albumsPage" element={<AlbumsPage />}></Route>
            </Route>
          </Routes>
    );
}