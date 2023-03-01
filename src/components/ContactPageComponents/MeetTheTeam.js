import './MeetTheTeam.css'
import CEOImg from '../../assets/CEO.jpg'
import CFOImg from '../../assets/CFO.jpg'

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
