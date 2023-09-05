import React from 'react'
import Common from './Common'
import ab from '../images/ab.jpeg'


const About = () => {
  return (
    <>
     <Common name='Welcome to About Page' imgsrc={ab} visit='/contact' btname="Contact Now" /> 
    </>
  )
}

export default About
