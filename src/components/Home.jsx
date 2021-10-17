import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const history = useHistory();

  return (
    <div
      style={{
        backgroundImage: `url("https://bit.ly/3aLB4ae")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className="data-block">
        <h1 className="home_data">Create your ALL TIME BEST</h1>
        <button className="home_button" onClick={e => history.push('/teams')}>
          Click here...
        </button>
      </div>
    </div>
  );
};

export default Home;
