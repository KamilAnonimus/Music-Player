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
import BandanAlbumTrackProblemsAudio from './components/Music albums/Bandana/Big Baby Tape kizaru - 99 Problems/Big Baby Tape kizaru - 99 Problems-music-2021.ru.mp3';
import BandanAlbumTrackAndrewStoryAudio from './components/Music albums/Bandana/Big Baby Tape kizaru - Andrew Story/Big Baby Tape kizaru - Andrew Story-music-2021.ru.mp3';
import BandanAlbumTrackBandanaAudio from './components/Music albums/Bandana/Big Baby Tape kizaru - Bandana/Big Baby Tape kizaru - Bandana-music-2021.ru.mp3';
import BandanAlbumTrackNightsCrazyAudio from './components/Music albums/Bandana/Big Baby Tape kizaru - Big Tymers-music-2021.ru/Big Baby Tape kizaru - Big Tymers-music-2021.ru.mp3'
import BandanAlbumTrackBigTymersAudio from './components/Music albums/Bandana/kizaru - 5 Nights Crazy/Big Baby Tape kizaru - 5 Nights Crazy-music-2021.ru.mp3'
import BandanAlbumTrackBonVoyageAudio from './components/Music albums/Bandana/Big Baby Tape kizaru - Bon Voyage-music-2021.ru/Big Baby Tape kizaru - Bon Voyage-music-2021.ru.mp3'
import BandanAlbumTrackDirrtAudio from './components/Music albums/Bandana/Big Baby Tape kizaru - Dirrt-music-2021.ru/Big Baby Tape kizaru - Dirrt-music-2021.ru.mp3'
import BandanAlbumTrackErrbodySleepingAudio from './components/Music albums/Bandana/Big Baby Tape kizaru - Errbody Sleeping-music-2021.ru/Big Baby Tape kizaru - Errbody Sleeping-music-2021.ru.mp3'
import BandanAlbumTrackMamaMakusaAudio from './components/Music albums/Bandana/Big Baby Tape kizaru - Mama Makusa-music-2021.ru/Big Baby Tape kizaru - Mama Makusa-music-2021.ru.mp3'
import BandanAlbumTrackMillionAudio from './components/Music albums/Bandana/Big Baby Tape kizaru - Million-music-2021.ru/Big Baby Tape kizaru - Million-music-2021.ru.mp3'
import BandanAlbumTrackRideOrDieAudio from './components/Music albums/Bandana/Big Baby Tape kizaru - Ride Or Die-music-2021.ru/Big Baby Tape kizaru - Ride Or Die-music-2021.ru.mp3'
import BandanAlbumTrackSlipSlideAudio from './components/Music albums/Bandana/Big Baby Tape kizaru - Slip  Slide-music-2021.ru/Big Baby Tape kizaru - Slip  Slide-music-2021.ru.mp3'
import BandanAlbumTrackSoIcyNihaoAudio from './components/Music albums/Bandana/So Icy Nihao-music-2021.ru/Big Baby Tape kizaru - So Icy Nihao-music-2021.ru.mp3'
import MillionDollarBusinessAlbumAristocratAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Aristocrat/MORGENSHTERN - Aristocrat.mp3'
import MillionDollarBusinessAlbumDineroAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Dinero/MORGENSHTERN - Dinero.mp3'
import MillionDollarBusinessAlbumGTAAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - GTA/MORGENSHTERN - GTA.mp3'
import MillionDollarBusinessAlbumHublotAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Hublot/MORGENSHTERN - Hublot.mp3'
import MillionDollarBusinessAlbumNominaloAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Nominalo/MORGENSHTERN - Nominalo.mp3'
import MillionDollarBusinessAlbumOLALAAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - OLALA/MORGENSHTERN - OLALA.mp3'
import MillionDollarBusinessAlbumPullUpAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Pull Up/MORGENSHTERN - Pull Up.mp3'
import MillionDollarBusinessAlbumКогдаНасОтпуститAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Когда Нас Отпустит/MORGENSHTERN - Когда Нас Отпустит.mp3'
import MillionDollarBusinessAlbumМанияAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Мания/MORGENSHTERN - Мания.mp3'
import MillionDollarBusinessAlbumПапинТанкAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Папин Танк/MORGENSHTERN - Папин Танк.mp3'
import MillionDollarBusinessAlbumСкитОтvsbattlevideoAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Скит От @vsbattlevideo/MORGENSHTERN - Скит От @vsbattlevideo.mp3'
import MillionDollarBusinessAlbumЯКогдаНибудьУйдуAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Я Когда-Нибудь Уйду/MORGENSHTERN - Я Когда-Нибудь Уйду.mp3'
import MillionDollarBusinessAlbumЯНаТаблахAudio from './components/Music albums/Million Dollar: Business/MORGENSHTERN - Я На Таблах/MORGENSHTERN - Я На Таблах.mp3'
import MiyaGiAndyPandaAlbumTrackMedicineAudio from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Medicine/MiyaGi & Andy Panda - Medicine.mp3'
import MiyaGiAndyPandaAlbumTrackMinorAudio from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Minor/MiyaGi & Andy Panda - Minor.mp3'
import MiyaGiAndyPandaAlbumTrackTantraAudio from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Tantra/MiyaGi & Andy Panda - Tantra.mp3'
import MiyaGiAndyPandaAlbumTrackYamakasiAudio from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Yamakasi/MiyaGi & Andy Panda - Yamakasi.mp3'
import MiyaGiAndyPandaAlbumTrackАтлантAudio from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Атлант/MiyaGi & Andy Panda - Атлант.mp3'
import MiyaGiAndyPandaAlbumTrackМалоНамAudio from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Мало Нам/MiyaGi & Andy Panda - Мало Нам.mp3'
import MiyaGiAndyPandaAlbumTrackПсихопатияAudio from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Психопатия/MiyaGi & Andy Panda - Психопатия.mp3'
import MiyaGiAndyPandaAlbumTrackТамРевелиГорыAudio from './components/Music albums/MiyaGi & Andy Panda/MiyaGi & Andy Panda - Там Ревели Горы/MiyaGi & Andy Panda - Там Ревели Горы.mp3'
import MiyaGiAndyPandaAlbumTrackUtopiaAudio from './components/Music albums/MiyaGi & Andy Panda/MiyaGi feat. Andy Panda - Utopia/MiyaGi feat. Andy Panda - Utopia.mp3'

export default function ButtonApp() {
  const massAlbum = []
  massAlbum[1] = {
    id:1,
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

  massAlbum[2] = {
    id:2,
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

  massAlbum[3] = {
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

  const massTrack = [
    [
      [0, BandanAlbumTrackProblemsAudio, BandanAlbumTrackImg1, "99 Problems", "Big Baby Tape"],
      [1, BandanAlbumTrackProblemsAudio, BandanAlbumTrackImg1, "99 Problems", "Big Baby Tape"],
      [2, BandanAlbumTrackAndrewStoryAudio, BandanAlbumTrackImg2 ,"Andrew Story", "Big Baby Tape"],
      [3, BandanAlbumTrackBandanaAudio, BandanAlbumTrackImg3 ,"Bandana", "Montana"],
      [4, BandanAlbumTrackNightsCrazyAudio, BandanAlbumTrackImg4 ,"5 Nights Crazy", "Deyjan Beats"],
      [5, BandanAlbumTrackBigTymersAudio, BandanAlbumTrackImg5 ,"Big Tymers", "Culoso & beatsFlory"],
      [6, BandanAlbumTrackBonVoyageAudio, BandanAlbumTrackImg6 ,"Bon Voyage", "Evince Beats & Call Me G"],
      [7, BandanAlbumTrackDirrtAudio, BandanAlbumTrackImg7 ,"Dirrt", "Big Baby Tape"],
      [8, BandanAlbumTrackErrbodySleepingAudio, BandanAlbumTrackImg8 ,"Errbody Sleepin", "-"],
      [9, BandanAlbumTrackMamaMakusaAudio, BandanAlbumTrackImg9 ,"Mama Makusa", "YG Woods"],
      [10, BandanAlbumTrackMillionAudio, BandanAlbumTrackImg10 ,"Million", "Big Baby Tape"],
      [11, BandanAlbumTrackRideOrDieAudio, BandanAlbumTrackImg11 ,"Ride Or Die", "JunioR Beats"],
      [12, BandanAlbumTrackSlipSlideAudio, BandanAlbumTrackImg12 ,"Slip & Slide", "Big Baby Tape"],
      [13, BandanAlbumTrackSoIcyNihaoAudio, BandanAlbumTrackImg13 ,"So Icy Nihao", "Big Baby & TapeWaves B"]
    ],
    [
      [0, MillionDollarBusinessAlbumAristocratAudio, MillionDollarBusinessAlbumTrackImg1, "Aristocrat", "Алишер Моргенштерн & Александр Марков"],
      [1, MillionDollarBusinessAlbumAristocratAudio, MillionDollarBusinessAlbumTrackImg1, "Aristocrat", "Алишер Моргенштерн & Александр Марков"],
      [2, MillionDollarBusinessAlbumDineroAudio, MillionDollarBusinessAlbumTrackImg2, "Dinero", "Алишер Моргенштерн & Руслан Валеев"],
      [3, MillionDollarBusinessAlbumGTAAudio, MillionDollarBusinessAlbumTrackImg3, "GTA", "Алишер Моргенштерн & Руслан Валеев"],
      [4, MillionDollarBusinessAlbumHublotAudio, MillionDollarBusinessAlbumTrackImg4, "Hublot", "Алишер Моргенштерн & Артём Готлиб"],
      [5, MillionDollarBusinessAlbumNominaloAudio, MillionDollarBusinessAlbumTrackImg5, "Nominalo", "Алишер Моргенштерн & Игорь Власов"],
      [6, MillionDollarBusinessAlbumOLALAAudio, MillionDollarBusinessAlbumTrackImg6, "Olala", "Алишер Моргенштерн & Александр Марков"],
      [7, MillionDollarBusinessAlbumPullUpAudio, MillionDollarBusinessAlbumTrackImg7, "Pull Up", "Алишер Моргенштерн & Алексей Сехов & Олег Гладьянов"],
      [8, MillionDollarBusinessAlbumКогдаНасОтпуститAudio, MillionDollarBusinessAlbumTrackImg8, "Когда нас отпустит", "Алишер Моргенштерн & Роман Миронченко & Виктор Безруков"],
      [9, MillionDollarBusinessAlbumМанияAudio, MillionDollarBusinessAlbumTrackImg9, "Мания", "Алишер Моргенштерн & Искандер Сулейманов"],
      [10, MillionDollarBusinessAlbumПапинТанкAudio, MillionDollarBusinessAlbumTrackImg10, "Папин танк", "Алишер Моргенштерн & Diamond Style"],
      [11, MillionDollarBusinessAlbumСкитОтvsbattlevideoAudio, MillionDollarBusinessAlbumTrackImg11, "Скит от @VSBattleVide", "Алишер Моргенштерн"],
      [12, MillionDollarBusinessAlbumЯКогдаНибудьУйдуAudio, MillionDollarBusinessAlbumTrackImg12, "Я когда-нибудь уйду", "Алишер Моргенштерн & Даниэль Альгуасиль Монсо & Луис Виткевиц"],
      [13, MillionDollarBusinessAlbumЯНаТаблахAudio, MillionDollarBusinessAlbumTrackImg13, "Я на таблах", "Алишер Моргенштерн & Александр Запорожец"]
    ],
    [
      [0, MiyaGiAndyPandaAlbumTrackMedicineAudio, MiyaGiAndyPandaAlbumTrackImg1, "Medicine", "MiyaGi & Andy Panda"],
      [1, MiyaGiAndyPandaAlbumTrackMedicineAudio, MiyaGiAndyPandaAlbumTrackImg1, "Medicine", "MiyaGi & Andy Panda"],
      [2, MiyaGiAndyPandaAlbumTrackMinorAudio, MiyaGiAndyPandaAlbumTrackImg2, "Minor", "MiyaGi & Andy Panda"],
      [3, MiyaGiAndyPandaAlbumTrackTantraAudio, MiyaGiAndyPandaAlbumTrackImg3, "Tantra", "MiyaGi & Andy Panda"],
      [4, MiyaGiAndyPandaAlbumTrackYamakasiAudio, MiyaGiAndyPandaAlbumTrackImg4, "Yamakasi", "MiyaGi & Andy Panda"],
      [5, MiyaGiAndyPandaAlbumTrackАтлантAudio, MiyaGiAndyPandaAlbumTrackImg5, "Atlant", "MiyaGi & Andy Panda"],
      [6, MiyaGiAndyPandaAlbumTrackМалоНамAudio, MiyaGiAndyPandaAlbumTrackImg6, "Малонам", "MiyaGi & Andy Panda"],
      [7, MiyaGiAndyPandaAlbumTrackПсихопатияAudio, MiyaGiAndyPandaAlbumTrackImg7, "Психопатия", "MiyaGi & Andy Panda"],
      [8, MiyaGiAndyPandaAlbumTrackТамРевелиГорыAudio, MiyaGiAndyPandaAlbumTrackImg8, "Тамревелигоры", "MiyaGi & Andy Panda"],
      [9, MiyaGiAndyPandaAlbumTrackUtopiaAudio, MiyaGiAndyPandaAlbumTrackImg9, "Utopia", "MiyaGi & Andy Panda"]
    ]
  ]
  return (
    <Routes>
        <Route path="/" element={<Homepage />} >
          <Route index element={<All massTrack={massTrack} massAlbumTrack0={massAlbumTrack0} massAlbumTrack1={massAlbumTrack1} massAlbumTrack2={massAlbumTrack2}/>} />
          <Route path="/trending" element={<Trending  massTrack={massTrack} massAlbumTrack0={massAlbumTrack0} massAlbumTrack1={massAlbumTrack1} massAlbumTrack2={massAlbumTrack2}/>} />
          <Route path="/featured" element={<Featured massTrack={massTrack} massAlbumTrack0={massAlbumTrack0} massAlbumTrack1={massAlbumTrack1} massAlbumTrack2={massAlbumTrack2}/>} />
          <Route path="/newreleases" element={<NewReleases massTrack={massTrack} massAlbumTrack0={massAlbumTrack0} massAlbumTrack1={massAlbumTrack1} massAlbumTrack2={massAlbumTrack2}/>} />
          <Route path="/genres" element={<Genres/>} />
          <Route path="/mostPlayed" element={<MostPlayed/>} />
        </Route>
      <Route>              
        <Route index element={<All />}></Route>
        <Route path="/albumsPage" element={<AlbumsPage/>}></Route>
        <Route path="/bandana" element={<AlbumsPage massAlbum={massAlbum[1]} massAlbumTrack={massAlbumTrack0} massTrack={massTrack[0]}/>}></Route>
        <Route path="/millionDollar" element={<AlbumsPage massAlbum={massAlbum[2]} massAlbumTrack={massAlbumTrack1} massTrack={massTrack[1]}/>}></Route>
        <Route path="/yamakasi" element={<AlbumsPage massAlbum={massAlbum[3]} massAlbumTrack={massAlbumTrack2} massTrack={massTrack[2]}/>}></Route>
      </Route>
    </Routes>
  );
}