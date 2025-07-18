import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import StartCoursesImg from "../../utils/images/start-courses-img.avif";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { Card } from "react-bootstrap";
import Blog1Img from "../../utils/images/blog1-img.jpg";
import Blog2Img from "../../utils/images/blog2-img.avif";
import Blog3Img from "../../utils/images/blog3-img.jpg";
const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: "The Journey to Becoming a Nurse",
    description:
      "A group of nursing students gathered in a classroom, actively participating in a hands-on training session. The image highlights their enthusiasm, collaboration, and dedication to learning the skills essential for becoming successful healthcare professionals.",
  },
  {
    id: 2,
    img: [Blog2Img],
    title: "Why Choose Nursing as a Career?",
    description:
      "A compassionate nurse helping a patient, showcasing the core values of empathy, care, and professionalism. This image embodies the rewarding nature of the nursing profession and its significant role in transforming lives.",
  },
  {
    id: 3,
    img: [Blog3Img],
    title: "Life at Syed Ammal Nursing College",
    description:
      "A cheerful group of students enjoying campus life, surrounded by a modern and welcoming environment. The image reflects the dynamic culture, extracurricular activities, and supportive atmosphere offered by Syed Ammal Nursing College.",
  },
];
function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome To</h2>
          <h1 className="text-center fw-semibold">
            Syed Ammal School of Nursing
          </h1>
          <p>
            At Syed Ammal School of Nursing, we are dedicated to nurturing
            compassionate and skilled healthcare professionals. Our mission is
            to empower students with knowledge, hands-on experience, and ethical
            values to excel in the field of nursing and healthcare.
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/courses">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Our Courses
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="py-5">
        <ChooseSection />
      </div>
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">2024 start courses</h2>
              <p>
                Kickstart your nursing career with our comprehensive 2024
                programs! Gain hands-on training, expert guidance, and access to
                cutting-edge facilities, ensuring you're ready to excel in the
                healthcare field
              </p>
              <Link to="/courses">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={StartCoursesImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <FaqAccordion />
      </div>
      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">
            Latest on the blog
          </h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type="button" className="btn btn-danger btn-lg mt-5">
              Read More Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
