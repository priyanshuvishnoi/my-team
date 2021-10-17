import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <div style={{ backgroundImage: `url("https://bit.ly/3aLB4ae")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}>
            <div>
                <h1 className='home_data'>Create your ALL TIME BEST</h1>
                <button className='home_button' to="/team">Click here...</button>
            </div>
        </div>
    );
}

export default Home;