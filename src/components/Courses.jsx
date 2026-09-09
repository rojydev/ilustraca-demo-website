import React, { useState } from 'react';
import { 
  FaBookOpen, 
  FaClock, 
  FaGraduationCap, 
  FaArrowRight, 
  FaCheck,
  FaFilter
} from 'react-icons/fa';
import './Courses.css';

const coursesData = [
  {
    id: 1,
    category: "STRUCTURAL",
    title: "Multi-Storey High-Rise Design (ETABS)",
    instructor: "Er. Saurabh Mishra",
    role: "Lead Structural Mentor",
    duration: "40 Hours",
    level: "Advanced",
    software: "ETABS & SAFE",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    description: "Complete design of G+32 commercial building including dynamic earthquake analysis, wind forces, and IS 1893 compliance.",
    topics: ["3D Frame Modeling", "IS 1893 Response Spectrum", "Rigid Diaphragms", "Column P-M Curves"]
  },
  {
    id: 2,
    category: "FOUNDATIONS",
    title: "Foundation & Raft Design (CSI SAFE)",
    instructor: "Er. Saurabh Mishra",
    role: "Lead Structural Mentor",
    duration: "25 Hours",
    level: "Intermediate",
    software: "CSI SAFE",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
    description: "Master isolated footings, combined mats, raft foundations with soil subgrade modulus and deep pile group design.",
    topics: ["Soil-Structure Interaction", "Punching Shear Checks", "Mat Settlement", "Pile Cap Design"]
  },
  {
    id: 3,
    category: "DETAILING",
    title: "Ductile Detailing & BBS Automation",
    instructor: "Jane Doe",
    role: "Senior Design Associate",
    duration: "20 Hours",
    level: "All Levels",
    software: "AutoCAD & Excel",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    description: "Industry-standard rebar scheduling, beam-column confining reinforcement, lap splices, and production drawings.",
    topics: ["IS 13920 Provisions", "Bar Bending Schedules", "Joint Confinement", "Site Execution Sheets"]
  },
  {
    id: 4,
    category: "COMPUTATIONAL",
    title: "Computational Design & Automation",
    instructor: "Alice Johnson",
    role: "BIM Specialist",
    duration: "18 Hours",
    level: "Intermediate",
    software: "Python & Excel VBA",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    description: "Automate structural calculation sheets, load takeoffs, wind load matrices, and ETABS API batch scripts.",
    topics: ["ETABS OAPI Scripts", "Excel Automation", "Load Matrix Generation", "Parametric Modeling"]
  },
  {
    id: 5,
    category: "CERTIFICATION",
    title: "Structural Consultant Exam Mastery",
    instructor: "John Smith",
    role: "Consulting Engineer",
    duration: "30 Hours",
    level: "Advanced",
    software: "Codes & Manuals",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    description: "Intensive training for municipal consultant licenses, structural peer-review tests, and professional certifications.",
    topics: ["IS Code Defense", "Stability Analysis", "Peer Review Vetting", "Viva Exam Prep"]
  },
  {
    id: 6,
    category: "COMMUNICATION",
    title: "Technical English & Design Defense",
    instructor: "Jane Doe",
    role: "Senior Design Associate",
    duration: "15 Hours",
    level: "Beginner to Pro",
    software: "Corporate Workflow",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    description: "Master technical structural report writing, corporate client design defense, and multinational RFP presentation skills.",
    topics: ["Design Report Writing", "Client Presentation", "RFP Submissions", "Technical Terminology"]
  }
];

const categories = ["ALL", "STRUCTURAL", "FOUNDATIONS", "DETAILING", "COMPUTATIONAL", "CERTIFICATION", "COMMUNICATION"];

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredCourses = activeFilter === "ALL" 
    ? coursesData 
    : coursesData.filter(c => c.category === activeFilter);

  return (
    <section className="section courses-section" id="courses">
      <div className="container">
        
        {/* Header */}
        <div className="courses-header">
          <div className="sketch-badge" style={{ marginBottom: '10px' }}>
            <FaBookOpen /> Industry Curated Curriculum
          </div>
          <h2 className="section-title">FEATURED COURSES</h2>
          <p className="courses-header-subtitle">
            Practical, project-centric engineering programs designed to transition engineers into high-paying structural consultancy roles.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="courses-filter-bar">
          <div className="filter-scroll-wrapper">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive CSS Grid (Zero JS resize listeners / zero auto-scroll timers) */}
        <div className="courses-pure-grid">
          {filteredCourses.map(course => (
            <div className="course-card-minimal" key={course.id}>
              
              {/* Course Top Image with Badges */}
              <div className="course-card-img-wrapper">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="course-card-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="course-card-badges-overlay">
                  <span className="course-cat-tag">{course.category}</span>
                  <span className="course-software-badge">{course.software}</span>
                </div>
              </div>

              <div className="course-card-body-content">
                <h3 className="course-card-heading">{course.title}</h3>
                <p className="course-card-summary">{course.description}</p>

                {/* Topics Bullets */}
                <div className="course-topics-list">
                  {course.topics.map((topic, i) => (
                    <span key={i} className="course-topic-item">
                      <FaCheck className="topic-check-icon" /> {topic}
                    </span>
                  ))}
                </div>

                {/* Course Meta Info */}
                <div className="course-meta-row">
                  <span className="meta-info-item">
                    <FaClock className="meta-icon" /> {course.duration}
                  </span>
                  <span className="meta-info-item">
                    <FaGraduationCap className="meta-icon" /> {course.level}
                  </span>
                </div>

                {/* Instructor Byline & Action */}
                <div className="course-footer-row">
                  <div className="course-instructor-info">
                    <div className="instructor-initials-badge">
                      {course.instructor.split(' ').map(n => n[0]).join('').replace('E', '') || 'IN'}
                    </div>
                    <div className="instructor-text">
                      <strong>{course.instructor}</strong>
                      <span>{course.role}</span>
                    </div>
                  </div>

                  <a href="#contact" className="course-enroll-link">
                    <span>Enroll</span>
                    <FaArrowRight className="enroll-arrow-icon" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;
