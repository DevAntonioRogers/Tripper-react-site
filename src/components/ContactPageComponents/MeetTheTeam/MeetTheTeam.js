import './MeetTheTeam.css'
import Member2 from '../../../assets/TeamImages/team2.jpeg'
import Member3 from '../../../assets/TeamImages/team3.jpeg'
import Member1 from '../../../assets/TeamImages/team1.jpg'
import Member4 from '../../../assets/TeamImages/team4.jpeg'
import Member5 from '../../../assets/TeamImages/team5.jpeg'
import Member6 from '../../../assets/TeamImages/team6.jpeg'
import Member7 from '../../../assets/TeamImages/team7.jpeg'
import Member8 from '../../../assets/TeamImages/team8.jpeg'
import Member9 from '../../../assets/TeamImages/team9.jpeg'

import { useRef, useEffect } from 'react'
import { useInView, useAnimation, motion } from 'framer-motion';

import { mttAnimations } from '../../../shared/Animations'



const MeetTheTeam = () => {


  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mttControls = useAnimation()
  const mttTitleControls = useAnimation()



  useEffect(() => {
    if (isInView) {
      mttControls.start('enter')
      mttTitleControls.start('titleEnter')


    }
    if (!isInView) {
      mttControls.start('exit')
      mttTitleControls.start('titleExit')
    }
  }, [isInView])

  return (
    <div ref={ref} className='mtt-container'>
      <motion.h1 animate={mttTitleControls} variants={mttAnimations}>Meet The Team</motion.h1>
      <motion.div animate={mttControls} variants={mttAnimations} className='mtt-flex'>
        <div className='team-box'>
          <img src={Member4} alt='CEO' />
          <h2>Julian Folder</h2>
          <h3>Co-Founder CEO</h3>
        </div>
        <div className='team-box'>
          <img src={Member2} alt='CEO' />
          <h2>Danial Anderson</h2>
          <h3>Co-Founder CFO</h3>
        </div>
        <div className='team-box'>
          <img src={Member3} alt='CEO' />
          <h2>Johnathan Oliver</h2>
          <h3>Web Devolper</h3>
        </div>
        <div className='team-box'>
          <img src={Member5} alt='CEO' />
          <h2>Aiya Alber</h2>
          <h3>Creative Content Writer</h3>
        </div>
        <div className='team-box'>
          <img src={Member1} alt='CEO' />
          <h2>Robert Halk</h2>
          <h3>Digital Marketer</h3>
        </div>
        <div className='team-box'>
          <img src={Member6} alt='CEO' />
          <h2>Saymon Faikop</h2>
          <h3>Software Engineer</h3>
        </div>
        <div className='team-box'>
          <img src={Member7} alt='CEO' />
          <h2>Ryan Adlard</h2>
          <h3>Product Manager</h3>
        </div>
        <div className='team-box'>
          <img src={Member8} alt='CEO' />
          <h2>Naiomi Norman</h2>
          <h3>IT Specialist</h3>
        </div>
        <div className='team-box'>
          <img src={Member9} alt='CEO' />
          <h2>Michael Aiden</h2>
          <h3>Team Lead</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default MeetTheTeam;
