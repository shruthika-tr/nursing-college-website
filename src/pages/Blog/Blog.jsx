import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Blog1Img from "../../utils/images/blog1-img.jpg";
import Blog2Img from "../../utils/images/blog2-img.avif";
import Blog3Img from "../../utils/images/blog3-img.jpg";
import Blog4Img from "../../utils/images/blog4-img.jpg";
import Blog5Img from "../../utils/images/blog5-img.jpg";
import Blog6Img from "../../utils/images/blog6-img.jpg";

const blogs = [
  {
    id: 1,
    img: Blog1Img,
    title: "The Journey to Becoming a Nurse",
    description:
      "A group of nursing students gathered in a classroom, actively participating in a hands-on training session. The image highlights their enthusiasm, collaboration, and dedication to learning the skills essential for becoming successful healthcare professionals.",
  },
  {
    id: 2,
    img: Blog2Img,
    title: "Why Choose Nursing as a Career?",
    description:
      "A compassionate nurse helping a patient, showcasing the core values of empathy, care, and professionalism. This image embodies the rewarding nature of the nursing profession and its significant role in transforming lives.",
  },
  {
    id: 3,
    img: Blog3Img,
    title: "Life at Syed Ammal Nursing College",
    description:
      "A cheerful group of students enjoying campus life, surrounded by a modern and welcoming environment. The image reflects the dynamic culture, extracurricular activities, and supportive atmosphere offered by Syed Ammal Nursing College.",
  },
  {
    id: 4,
    img: Blog4Img,
    title: "Career Opportunities in Nursing",
    description:
      "A comprehensive guide to diverse career paths in nursing, including hospital care, research, public health, and specialized fields. This blog provides insights into the potential growth and opportunities in the nursing profession.",
  },
  {
    id: 5,
    img: Blog5Img,
    title: "Importance of Mental Health in Nursing",
    description:
      "An insightful look into the significance of mental health for nurses, covering stress management, burnout prevention, and strategies to maintain a healthy work-life balance in the demanding healthcare industry.",
  },
  {
    id: 6,
    img: Blog6Img,
    title: "Community Health & Rural Nursing",
    description:
      "Explore the vital role of nurses in community health initiatives, rural healthcare programs, and outreach efforts that improve access to quality medical care in underserved areas.",
  },
];

function Blog() {
  return (
    <div className="blog-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Blog</h1>
          <p className="text-center w-75 mb-5">
            Explore insightful articles, expert opinions, and the latest updates
            in the field of nursing and healthcare. Our blog covers essential
            topics, including medical advancements, career guidance, student
            experiences, and professional growth. Stay informed, inspired, and
            connected with valuable knowledge that empowers aspiring nurses and
            healthcare professionals.
          </p>
        </div>
      </header>
      <div className="bg-body-tertiary py-5">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect bg-dark text-light border-0">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5 d-flex flex-column align-items-center">
                      <Card.Title className="fs-2 mb-4">
                        {blog.title}
                      </Card.Title>
                      <Card.Text className="text-center">
                        {blog.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
