import React from "react";
import { Card } from "react-bootstrap";

function ChooseSection() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center mb-5">
          Why Is Syed Ammal the Best Place for Future Nurses?
        </h2>
        <div className="row g-4">
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-book-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Comprehensive Curriculum and Training
                </Card.Title>
                <Card.Text className="text-center">
                  We provide a well-rounded curriculum designed to equip
                  students with both theoretical knowledge and hands-on clinical
                  training, ensuring you're ready for the real-world challenges
                  of nursing.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-person-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
                  />
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Experienced Faculty and Support
                </Card.Title>
                <Card.Text className="text-center">
                  Our institution boasts a team of highly qualified and
                  experienced faculty who provide personalized guidance and
                  mentorship to every student, ensuring their academic and
                  professional success.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-buildings-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Modern Facilities and Career Placements
                </Card.Title>
                <Card.Text className="text-center">
                  With modern simulation labs, advanced medical equipment, and
                  strong ties to reputed hospitals, Syed Ammal ensures students
                  gain exposure to cutting-edge practices and excellent
                  placement opportunities.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSection;
