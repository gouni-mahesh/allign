import React from 'react';
import './home.css'; 
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import BrandStrip from '../BrandStrip/BrandStrip';
import Footer from '../Footer/Footer';
import BlogsAndInsights from '../Blog/Blog';
import TeamSection from '../TeamMembers/TeamMembers';
import GetInTouchSection from '../GetInTouch/GetInTouch';
import HeroTrust from '../HeroTrust/HeroTrust';
import SecuirtyStep from '../SecurityStep/SecuirtyStep';
import Team from '../Team/Team';
import Partners from '../Partners/Partners';

const Home: React.FC = () => {
  return (
    <>
   <Header/>
   <HomePage/>
   <BrandStrip/>
   <HeroTrust/>
   <Partners/>
   <SecuirtyStep/>
   <GetInTouchSection/>
   <TeamSection/>
   <BlogsAndInsights/>
   <Footer/>
   </>
  );
};

export default Home;
