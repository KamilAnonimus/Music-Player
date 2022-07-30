import { Routes, Route } from "react-router-dom";
import All from "./components/All";
import { useState } from "react";
import Trending from "./components/Trending";
import Featured from "./components/Featured";
import NewReleases from "./components/NewReleases";
import Genres from "./components/Genres";
import MostPlayed from "./components/MostPlayed";
import Homepage from "./Homepage";
import AlbumsPage from "./AlbumsPage";
import BandanAlbumImg from './components/Music albums/Bandana/Bandana_I.jpg';
import BandanAlbumTrackImg1 from './components/Music albums/Bandana/Big Baby Tape kizaru - 99 Problems/Big Baby Tape kizaru - 99 Problems.jpeg';
import BandanAlbumTrackImg2 from './components/Music albums/Bandana/Big Baby Tape kizaru - Andrew Story/4ce060e6a227604982673e9763c76225.1000x1000x1.jpg';
import BandanAlbumTrackImg3 from './components/Music albums/Bandana/Big Baby Tape kizaru - Bandana/jIhub_up7sHKMb_370x370.jpeg';
import BandanAlbumTrackImg4 from './components/Music albums/Bandana/kizaru - 5 Nights Crazy/maxresdefault.jpg';
import BandanAlbumTrackImg5 from './components/Music albums/Bandana/Big Baby Tape kizaru - Big Tymers-music-2021.ru/bandana-tekst.jpg';
import BandanAlbumTrackImg6 from './components/Music albums/Bandana/Big Baby Tape kizaru - Bon Voyage-music-2021.ru/15214723067079867908_mq.jpg';
import BandanAlbumTrackImg7 from './components/Music albums/Bandana/Big Baby Tape kizaru - Dirrt-music-2021.ru/1634530612_dirty-music-techno-fx.jpg';
import BandanAlbumTrackImg8 from './components/Music albums/Bandana/Big Baby Tape kizaru - Errbody Sleeping-music-2021.ru/Big-Baby-Tape-kizaru-Errbody-Sleeping-Lyrics-600x380.webp';
import BandanAlbumTrackImg9 from './components/Music albums/Bandana/Big Baby Tape kizaru - Mama Makusa-music-2021.ru/hqdefault.jpg';
import BandanAlbumTrackImg10 from './components/Music albums/Bandana/Big Baby Tape kizaru - Million-music-2021.ru/Без названия.jpeg';
import BandanAlbumTrackImg11 from './components/Music albums/Bandana/Big Baby Tape kizaru - Ride Or Die-music-2021.ru/artworks-mvgi4j3aiDvTDDgG-PLHQyQ-t500x500.jpeg';
import BandanAlbumTrackImg12 from './components/Music albums/Bandana/Big Baby Tape kizaru - Slip  Slide-music-2021.ru/Без названия.jpeg';
import BandanAlbumTrackImg13 from './components/Music albums/Bandana/So Icy Nihao-music-2021.ru/3840x2160mv.jpg';
import MillionDollarBusinessAlbumImg from './components/Music albums/Million Dollar: Business/mqdefault.jpg';
import MillionDollarBusinessAlbumTrackImg1 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Aristocrat/maxresdefault.jpg';
import MillionDollarBusinessAlbumTrackImg2 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Dinero/maxresdefault (1).jpg';
import MillionDollarBusinessAlbumTrackImg3 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - GTA/hqdefault.jpg';
import MillionDollarBusinessAlbumTrackImg4 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Hublot/20914dff41a86128311979d523022e93-250x250-11-11.jpg';
import MillionDollarBusinessAlbumTrackImg5 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Nominalo/maxresdefault.jpg';
import MillionDollarBusinessAlbumTrackImg6 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - OLALA/maxresdefault (1).jpg';
import MillionDollarBusinessAlbumTrackImg7 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Pull Up/maxresdefault.jpg';
import MillionDollarBusinessAlbumTrackImg8 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Когда Нас Отпустит/maxresdefault (1).jpg';
import MillionDollarBusinessAlbumTrackImg9 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Мания/maxresdefault.jpg';
import MillionDollarBusinessAlbumTrackImg10 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Папин Танк/maxresdefault (1).jpg';
import MillionDollarBusinessAlbumTrackImg11 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Скит От @vsbattlevideo/473be38c2aa60e0c60777528098b9e01.1000x1000x1.png';
import MillionDollarBusinessAlbumTrackImg12 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Я Когда-Нибудь Уйду/maxresdefault.jpg';
import MillionDollarBusinessAlbumTrackImg13 from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Я На Таблах/maxresdefault (1).jpg';
import MiyaGiAndyPandaAlbumImg from './components/Music albums/MiyaGi & Andy Panda/miyagi-andy-panda-yamakasi.jpg';
import MiyaGiAndyPandaAlbumTrackImg1 from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Medicine/maxresdefault.jpg';
import MiyaGiAndyPandaAlbumTrackImg2 from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Minor/MiyaGi & Andy Panda - Minor.jpeg';
import MiyaGiAndyPandaAlbumTrackImg3 from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Tantra/maxresdefault.jpg';
import MiyaGiAndyPandaAlbumTrackImg4 from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Yamakasi/maxresdefault (1).jpg';
import MiyaGiAndyPandaAlbumTrackImg5 from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Атлант/mqdefault.jpg';
import MiyaGiAndyPandaAlbumTrackImg6 from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Мало Нам/maxresdefault.jpg';
import MiyaGiAndyPandaAlbumTrackImg7 from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Психопатия/maxresdefault (1).jpg';
import MiyaGiAndyPandaAlbumTrackImg8 from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Там Ревели Горы/maxresdefault.jpg';
import MiyaGiAndyPandaAlbumTrackImg9 from './components/Music albums/MiyaGi & Andy Panda/MiyaGi feat. Andy Panda - Utopia/ab67616d0000b2739524ceed456af9f753f75dd8.jpeg';

export default function ButtonApp() {
  const massAlbum = []
  massAlbum[0] = {
    imgAlbum:BandanAlbumImg,
    nameAlbum:"BANDANA",
    nameArtist:"KIZARU & BIG BABY TAPE",
    numberOfArtists:"2",
    numberOfTracks:"13",
    durationAlbum:"36mins"
  }
  const [massAlbumTrack0] = useState([
    {id:1, imgTrack:BandanAlbumTrackImg1, name:"99 Problems", durationTrack:"2:39", artist:"Big Baby Tape", album:"Bandana"},
    {id:2, imgTrack:BandanAlbumTrackImg2, name:"Andrew Story", durationTrack:"3:12", artist:"Big Baby Tape", album:"Bandana"},
    {id:3, imgTrack:BandanAlbumTrackImg3, name:"Bandana", durationTrack:"2:31", artist:"Montana", album:"Bandana"},
    {id:4, imgTrack:BandanAlbumTrackImg4, name:"5 Nights Crazy", durationTrack:"2:19", artist:"Deyjan Beats", album:"Bandana"},
    {id:5, imgTrack:BandanAlbumTrackImg5, name:"Big Tymers", durationTrack:"3:11", artist:"Culoso & beatsFlory", album:"Bandana"},
    {id:6, imgTrack:BandanAlbumTrackImg6, name:"Bon Voyage", durationTrack:"2:14", artist:"Evince Beats & Call Me G", album:"Bandana"},
    {id:7, imgTrack:BandanAlbumTrackImg7, name:"Dirrt", durationTrack:"2:41", artist:"Big Baby Tape", album:"Bandana"},
    {id:8, imgTrack:BandanAlbumTrackImg8, name:"Errbody Sleeping", durationTrack:"2:43", artist:"-", album:"Bandana"},
    {id:9, imgTrack:BandanAlbumTrackImg9, name:"Mama Makusa", durationTrack:"2:52", artist:"YG Woods", album:"Bandana"},
    {id:10, imgTrack:BandanAlbumTrackImg10, name:"Million", durationTrack:"2:14", artist:"Big Baby Tape", album:"Bandana"},
    {id:11, imgTrack:BandanAlbumTrackImg11, name:"Ride Or Die", durationTrack:"3:03", artist:"JunioR Beats", album:"Bandana"},
    {id:12, imgTrack:BandanAlbumTrackImg12, name:"Slip & Slide", durationTrack:"1:54", artist:"Big Baby Tape", album:"Bandana"},
    {id:13, imgTrack:BandanAlbumTrackImg13, name:"So Icy Nihao", durationTrack:"2:33", artist:"Big Baby & TapeWaves B", album:"Bandana"}
  ])

  massAlbum[1] = {
    imgAlbum:MillionDollarBusinessAlbumImg,
    nameAlbum:"MILLION DOLLAR",
    nameArtist:"MORGENSHTERN",
    numberOfArtists:"1",
    numberOfTracks:"13",
    durationAlbum:"28mins"
  }
  const [massAlbumTrack1] = useState([
    {id:1, imgTrack:MillionDollarBusinessAlbumTrackImg1, name:"Aristocrat", durationTrack:"2:06", artist:"Алишер Моргенштерн & Александр Марков", album:"Million Dollar"},
    {id:2, imgTrack:MillionDollarBusinessAlbumTrackImg2, name:"Dinero", durationTrack:"2:38", artist:"Алишер Моргенштерн & Руслан Валеев", album:"Million Dollar"},
    {id:3, imgTrack:MillionDollarBusinessAlbumTrackImg3, name:"GTA", durationTrack:"2:07", artist:"Алишер Моргенштерн & Руслан Валеев", album:"Million Dollar"},
    {id:4, imgTrack:MillionDollarBusinessAlbumTrackImg4, name:"Hublot", durationTrack:"2:03", artist:"Алишер Моргенштерн & Артём Готлиб", album:"Million Dollar"},
    {id:5, imgTrack:MillionDollarBusinessAlbumTrackImg5, name:"Nominalo", durationTrack:"2:12", artist:"Алишер Моргенштерн & Игорь Власов", album:"Million Dollar"},
    {id:6, imgTrack:MillionDollarBusinessAlbumTrackImg6, name:"Olala", durationTrack:"2:22", artist:"Алишер Моргенштерн & Александр Марков", album:"Million Dollar"},
    {id:7, imgTrack:MillionDollarBusinessAlbumTrackImg7, name:"Pull Up", durationTrack:"2:12", artist:"Алишер Моргенштерн & Алексей Сехов & Олег Гладьянов", album:"Million Dollar"},
    {id:8, imgTrack:MillionDollarBusinessAlbumTrackImg8, name:"Когда нас отпустит", durationTrack:"2:49", artist:"Алишер Моргенштерн & Роман Миронченко & Виктор Безруков", album:"Million Dollar"},
    {id:9, imgTrack:MillionDollarBusinessAlbumTrackImg9, name:"Мания", durationTrack:"2:00", artist:"Алишер Моргенштерн & Искандер Сулейманов", album:"Million Dollar"},
    {id:10, imgTrack:MillionDollarBusinessAlbumTrackImg10, name:"Папин танк", durationTrack:"2:07", artist:"Алишер Моргенштерн & Diamond Style", album:"Million Dollar"},
    {id:11, imgTrack:MillionDollarBusinessAlbumTrackImg11, name:"Скит от @VSBattleVide", durationTrack:"0:46", artist:"Алишер Моргенштерн", album:"Million Dollar"},
    {id:12, imgTrack:MillionDollarBusinessAlbumTrackImg12, name:"Я когда-нибудь уйду", durationTrack:"2:40", artist:"Алишер Моргенштерн & Даниэль Альгуасиль Монсо & Луис Виткевиц", album:"Million Dollar"},
    {id:13, imgTrack:MillionDollarBusinessAlbumTrackImg13, name:"Я на таблах", durationTrack:"2:26", artist:"Алишер Моргенштерн & Александр Запорожец", album:"Million Dollar"}
  ])

  massAlbum[2] = {
    imgAlbum:MiyaGiAndyPandaAlbumImg,
    nameAlbum:"YAMAKASI",
    nameArtist:"MiyaGi & Andy Panda",
    numberOfArtists:"2",
    numberOfTracks:"9",
    durationAlbum:"30mins"
  }
  const [massAlbumTrack2] = useState([
    {id:1, imgTrack:MiyaGiAndyPandaAlbumTrackImg1, name:"Medicine", durationTrack:"3:07", artist:"MiyaGi & Andy Panda", album:"Yamakasi"},
    {id:2, imgTrack:MiyaGiAndyPandaAlbumTrackImg2, name:"Minor", durationTrack:"2:55", artist:"MiyaGi & Andy Panda", album:"Yamakasi"},
    {id:3, imgTrack:MiyaGiAndyPandaAlbumTrackImg3, name:"Tantra", durationTrack:"4:15", artist:"MiyaGi & Andy Panda", album:"Yamakasi"},
    {id:4, imgTrack:MiyaGiAndyPandaAlbumTrackImg4, name:"Yamakasi", durationTrack:"4:23", artist:"MiyaGi & Andy Panda", album:"Yamakasi"},
    {id:5, imgTrack:MiyaGiAndyPandaAlbumTrackImg5, name:"Atlant", durationTrack:"3:07", artist:"MiyaGi & Andy Panda", album:"Yamakasi"},
    {id:6, imgTrack:MiyaGiAndyPandaAlbumTrackImg6, name:"Мало нам", durationTrack:"3:48", artist:"MiyaGi & Andy Panda", album:"Yamakasi"},
    {id:7, imgTrack:MiyaGiAndyPandaAlbumTrackImg7, name:"Психопатия", durationTrack:"3:28", artist:"MiyaGi & Andy Panda", album:"Yamakasi"},
    {id:8, imgTrack:MiyaGiAndyPandaAlbumTrackImg8, name:"Там ревели горы", durationTrack:"2:56", artist:"MiyaGi & Andy Panda", album:"Yamakasi"},
    {id:9, imgTrack:MiyaGiAndyPandaAlbumTrackImg9, name:"Utopia", durationTrack:"3:29", artist:"MiyaGi & Andy Panda", album:"Yamakasi"}
  ])

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
        <Route path="/albumsPage" element={<AlbumsPage/>}></Route>
        <Route path="/bandana" element={<AlbumsPage massAlbum={massAlbum[0]} massAlbumTrack={massAlbumTrack0}/>}></Route>
        <Route path="/millionDollar" element={<AlbumsPage massAlbum={massAlbum[1]} massAlbumTrack={massAlbumTrack1}/>}></Route>
        <Route path="/yamakasi" element={<AlbumsPage massAlbum={massAlbum[2]} massAlbumTrack={massAlbumTrack2}/>}></Route>
      </Route>
    </Routes>
  );
}