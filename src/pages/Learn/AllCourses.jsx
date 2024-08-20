// src/pages/AllCourses.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllCourses.css';
import dos from '../../assets/courses.png';

const coursesData = [
  { id: 1, title: 'English for Beginners', subtitle: 'Learn the basics of English', image: 'https://www.shutterstock.com/shutterstock/photos/1043962963/display_1500/stock-vector-design-concept-of-word-english-website-banner-1043962963.jpg' },
  { id: 2, title: 'Intermediate English', subtitle: 'Expand your English skills', image: 'https://i.ytimg.com/vi/ErgLIkyDLZc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBYebTfQVUSK7Vf25BZJPtD5YhX8Q' },
  { id: 3, title: 'Advanced English', subtitle: 'Master advanced English concepts', image: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fdsgrcdnblobprod5u3.azureedge.net%2Fcmsassets%2FPromoVideos-HERO.webp&w=1920&q=75' },
  { id: 4, title: 'Business English', subtitle: 'English for professional settings', image: 'https://blog.woobox.com/wp-content/uploads/What-You-Need-to-Know-About-Creating-Promo-Codes.png' },
  { id: 5, title: 'English Grammar', subtitle: 'Deep dive into English grammar', image: 'https://pbskids.org/learn/img/promo-large-rjg.jpg' },
];

const AllCourses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCourseClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <div className="all-courses-container">
      <div className="all-courses-header">
        <h1 className="title">All Courses</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div key={course.id} className="course-card" onClick={() => handleCourseClick(course.id)}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-subtitle">{course.subtitle}</p>
                <button className="course-button">Learn</button>
              </div>
            </div>
          ))
        ) : (
          <p>No courses found</p>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
