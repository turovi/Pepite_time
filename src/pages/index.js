import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Offres from '../components/Offres'
import Footer from '../components/Footer'
import Clock from '../components/Clock'
import { useState } from 'react'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'


function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        {/* <Navbar toggle={toggle} /> */}
        <HeroSection/>
        <Clock/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Offres/>
        
        <Footer />
        

    </div>
  )
}

export default Home