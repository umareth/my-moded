import React from "react";
import './Main.css';
import space from '../../assets/space.png'
import whales from '../../assets/wales.png'
import rec from '../../assets/Rectangle.png'
import book from '../../assets/book.png'



const Main = () => {
  return (
    <>
    <div>
    <div className="banner-content">
        <div className="text-content">
          <h1 className="title">Your Path to Academic
          Excellence</h1>
          <h2 className="subtitle">We understand that every student is unique and has their own set of knowledge and skills. If you think you are ready to share your formulas and provide a different learning experience, we invite you to join our group! Join us and become part of a community that values ​​education and supports each other</h2>
          <a href="#learn-more" className="cta-button">Начать обучение</a>
        </div>
        <div className="image-content">
          <img src={book} alt="Banner" />
        </div>
      </div>
      <section className="card-section">
      <img className="whales" src={whales} alt="" />
        <img className="space" src={space} alt="" />
        <img className="rec" src={rec} alt="" />

      <div className="card">
        <img src="https://knowledgeone.ca/wp-content/uploads/2020/08/kids-learning.jpg" alt="Card 1" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">English Tutor</h3>
          <p className="card-subtitle">Take this course to improve your English from A to C1. </p>
          <a href="#learn-more" className="card-button">Learn More</a>
        </div>
      </div>
      <div className="card">
        <img src="https://cdn.ymaws.com/thelifeinstitute.ca/resource/resmgr/blogs-news.jpg" alt="Card 2" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">English Tutor</h3>
          <p className="card-subtitle">Take this course to improve your English from A to C1.</p>
          <a href="#learn-more" className="card-button">Learn More</a>
        </div>
      </div>
      <div className="card">
        <img src="https://melbournechildpsychology.com.au/wp-content/uploads/2017/09/shutterstock_95571685.jpg" alt="Card 3" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Cheildren leadrn</h3>
          <p className="card-subtitle">Take this course to improve your English from A to C1.</p>
          <a href="#learn-more" className="card-button">Learn More</a>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default Main;