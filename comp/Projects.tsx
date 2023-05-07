import React from 'react'
import Project from './project'
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <div id='project'>
        <h1 className=' text-2xl lg:text-4xl font-bold  text-center my-4'>Projects</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <Project 
    text='An App for latest currency conversion of the Naira'
    imgurl='https://i.ibb.co/2n3DQp9/currency-exchange-app.png'
    link='https://rainbow-swan-473fcb.netlify.app/'/>
    {/* <Project/> */}
    </div>
    </div>
    
  )
}

export default Projects