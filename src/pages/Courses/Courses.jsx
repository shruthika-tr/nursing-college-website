import React from "react";
import "./Courses.css";
import { Card } from "react-bootstrap";
import GnmCourseImg from "../../utils/images/gnm-course1.jpg";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";

const course = {
  id: 1,
  img: GnmCourseImg,
  title: "GENERAL NURSING AND MIDWIFERY (GNM)",
  description:
    "Begin your journey in healthcare with our GNM course, where you’ll master nursing fundamentals, patient care techniques, and hands-on clinical training. Develop expertise in medical-surgical nursing, maternity care, pediatrics, and community health, preparing for a dynamic role in hospitals, clinics, and healthcare institutions. " +
    "With experienced faculty, modern labs, and real-world exposure, this program equips you with the skills and confidence to excel in the nursing profession. Start your path to a rewarding career in healthcare today!",
};

function Courses() {
  return (
    <div className="courses-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Our Courses</h1>
          <p className="text-center w-75 mb-5">
            Discover transformative learning opportunities with our
            comprehensive nursing courses, designed to prepare future healthcare
            leaders. From foundational knowledge to advanced practical skills,
            our programs are tailored to meet the dynamic needs of the medical
            field, empowering you to make a lasting difference in patient care
            and community health.
          </p>
        </div>
      </header>

      {/* Course Section */}
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          {/* Image Section */}
          <div className="col-lg-6">
            <Card className="text-white shadow scale-hover-effect">
              <Card.Img src={course.img} />
            </Card>
          </div>

          {/* Text Section */}
          <div className="col-lg-6">
            <h2 className="text-danger">{course.title}</h2>
            <p className="text-muted">{course.description}</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-dark text-light py-5">
        <FaqAccordion />
      </div>
    </div>
  );
}

export default Courses;
