import './MeetTheTeam.css'
import CEOImg from '../../assets/CEO.jpg'
import CFOImg from '../../assets/CFO.jpg'
import ClientServicesImg from '../../assets/clientservices.jpg'
import MeImg from '../../assets/me.jpg'

const MeetTheTeam = () => {
  return (
    <div className='mtt-container'>
      <h1>Meet The Team</h1>
      <div className='mtt-flex'>
        <div className='team-box'>
          <img src={CEOImg} alt='CEO' />
          <h2>Johnathan Brown</h2>
          <h3>Co-Founder CEO</h3>
        </div>
        <div className='team-box'>
          <img src={CFOImg} alt='CEO' />
          <h2>Howard Smith</h2>
          <h3>Co-Founder CFO</h3>
        </div>
        <div className='team-box'>
          <img src={ClientServicesImg} alt='CEO' />
          <h2>Amanda Philora</h2>
          <h3>Director of Client Services</h3>
        </div>
        <div className='team-box'>
          <img src={MeImg} alt='CEO' />
          <h2>Antonio Rogers</h2>
          <h3>Full Stack Engineer</h3>
        </div>
        <div className='team-box'>
          <img src={CEOImg} alt='CEO' />
          <h2>Johnathan Brown</h2>
          <h3>Co-Founder CEO</h3>
        </div>
        <div className='team-box'>
          <img src={CEOImg} alt='CEO' />
          <h2>Johnathan Brown</h2>
          <h3>Co-Founder CEO</h3>
        </div>
        <div className='team-box'>
          <img src={CEOImg} alt='CEO' />
          <h2>Johnathan Brown</h2>
          <h3>Co-Founder CEO</h3>
        </div>
        <div className='team-box'>
          <img src={CEOImg} alt='CEO' />
          <h2>Johnathan Brown</h2>
          <h3>Co-Founder CEO</h3>
        </div>
        <div className='team-box'>
          <img src={CEOImg} alt='CEO' />
          <h2>Johnathan Brown</h2>
          <h3>Co-Founder CEO</h3>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
