import React from 'react'
import './Aboutt.css'
//import play_icon from '../assets/play-icon.png'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const Aboutt = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem  ipsum dolor sit amet consectetur adipisicing elit. 
                Nisi maiores quisquam dicta voluptatibus blanditiis ullam! Consequatur 
                quis eaque unde placeat, alias quibusdam. Deserunt sequi est labore consequuntur nemo odit sunt.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere assumenda voluptatibus ducimus ab error at commodi eaque cumque 
                doloremque quibusdam autem placeat ullam architecto, vitae possimus? Maxime, beatae sapiente.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quam, veritatis beatae nam non, velit sunt necessitatibus voluptas molestias, 
                nesciunt expedita optio deserunt exercitationem nobis laborum ut ducimus impedit quisquam!</p>
        </div>
      
    </div>
  )
}

export default Aboutt
