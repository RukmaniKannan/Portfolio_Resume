import React from 'react'
import "./header.css"
import imglogo from "../Assets/image2.png"
import imglog from "../Assets/image1.jpg"
import imgreact from "../Assets/png-transparent-js-react-js-logo-react-react-native-logos-icon.png"


const Header = () => {
  return (
    <>
      <header className='header '>
        <img src={imglogo} alt="Logo" className='logo' />
        <span className='mx-2 port'>Portfolio</span>
        <ul className='d-flex '>
          <a href="#about" className='px-3'>About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </ul>
        <div className='github'>
          <a href="https://github.com/RukmaniKannan" className='pe-2'>Github Profile</a>
        </div>
      </header>
      
      <div className='row'>
        <div className={`col-12 col-md-6 col-sm-6 ${window.innerWidth <= 576 ? 'p-5' : ''} order-2  order-md-1`}>
        {/* <div className="col-12 col-md-6 col-sm-6  order-2"> */}

          <h1 className=''>Hi, I am</h1>
          <h1 className=''>Rukmani K</h1>
          <span className='field'>I am a </span><span className='fields'>Front-End Developer</span>
          <p>I am a qualified and professional web developer with one year of
            experience in front-end web development,
            focusing on React.js. I possess strong creative and analytical skills,
            with a proven ability to design and implement responsive user interfaces.
            A team player with an eye for detail,
            always staying updated with emerging trends and technologies in frontend development</p>

          <div className='resume mt-5' style={{}}>
            <a href="https://drive.google.com/file/d/1v9gO1PU2dhDUY_N854kwOul7TuCI4kpB/view?usp=drive_link" className='resum px-5 ' style={{ textDecoration: "none" }}>Check Resume</a>
          </div>
        </div>
        <div className='col-12 col-md-6 col-sm-6 order-1 order-md-2 '>
          <img src={imglog} alt="Logo" className='logos' />

        </div>

        

      </div>
      <div className='row'>
        <h3 className='mt-5 text-white'>Skills</h3>
        <p>Here are some of my skills on which I have been working on for the</p>
        <p>past 1 years.</p>
        <div className='col'>
            <h3 className='text-white'>Frontend</h3>
            <img src={imgreact} alt="imgreact" className='w-50 h-50'/>
            <span>React Js</span>
        </div>
        <div className='col'>

        </div>

      </div>

    </>
  )
}

export default Header