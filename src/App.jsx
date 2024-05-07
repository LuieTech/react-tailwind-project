import { useState } from 'react'
import './App.css'
import images from "./utils/images/images.json"
import Navbar from './components/Navbar/Navbar';
import Form from './pages/Form/Form';
import Gallery from './components/Gallery/Gallery';
import Loading from './components/Loading/Loading';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className='bg-gradient-to-tr from-cyan-600 to-teal-600'>
      <Navbar handleDark={() => setDarkMode(!darkMode)}/>
      <div className='m-10'>
        <Loading />
      </div>
      <Form />
      <Gallery images={images}/>
    </main>
  )
}

export default App
