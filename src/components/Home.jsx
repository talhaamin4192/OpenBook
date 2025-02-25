import React from 'react';
import Header from './Header';
import Featured from './Featured';
import Info from './Info';
import Explore from './Explore';
import SmoothScrollWrapper from './SmoothScrollWrapper'; // Import the wrapper

const Home = () => {
  return (
    <SmoothScrollWrapper>
      <div>
        <Header />
        <Featured />
        <Info />
        <Explore />
      </div>
    </SmoothScrollWrapper>
  );
};

export default Home;