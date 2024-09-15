import './App.css'
import MainCard from './components/main-card/MainCard'
import OverlayImage from './design/desktop-design.jpg'

export default function App() {
  return (
    <>
    <img src={OverlayImage} className='absolute left-0 top-0 w-full h-full opacity-[20%]' />
    <MainCard />
    </>
  )
};