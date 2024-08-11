import React from 'react';
import Banner from '../components/Banner';
import BestSellerBooks from './BestSellerBooks';
import FavBook from './FavBook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';

const Home = () => {
  return (
    <div>
      <section id="home-section">
        <Banner />
      </section>
      <section id="about-section">
        <BestSellerBooks />
        <FavBook />
      </section>
      <section id="blog-section">
        <PromoBanner />
        <OtherBooks />
        <Review />
      </section>
      {/* Other sections */}
    </div>
  );
}

export default Home;
