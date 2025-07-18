import React from "react";
import "./FaqAccordion.css";
import Accordion from "react-bootstrap/Accordion";

function FaqAccordion() {
  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          Frequently asked questions
        </h2>

        <p className="text-center mb-5">
          We understand you may have questions about our programs and offerings.
          Below are answers to some of the most frequently asked questions about
          Syed Ammal Nursing College.
        </p>

        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What courses are offered at our College?
            </Accordion.Header>
            <Accordion.Body>
              Currently, we offer the GNM (General Nursing and Midwifery)
              course. Our curriculum is designed to provide a solid foundation
              in nursing and healthcare practices.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What are the eligibility criteria for admission?
            </Accordion.Header>
            <Accordion.Body>
              Students must have completed their 10+2 education with a focus on
              science (preferably biology) and meet the guidelines set by the
              nursing council. For detailed information, visit our Admission
              section.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Does the college provide clinical training?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we ensure hands-on clinical training in reputed hospitals to
              give our students real-world experience and prepare them for
              professional challenges.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Are there any hostel facilities available?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we provide secure and comfortable hostel facilities for
              students, ensuring a safe environment conducive to learning.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqAccordion;
