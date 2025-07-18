import "./App.css";

import { Link, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";

import Home from "./pages/Home/Home";

import Courses from "./pages/Courses/Courses";

import About from "./pages/About/About";

import Blog from "./pages/Blog/Blog";

import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg" className="position-absolute w-100">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="#dc3545"
                className="bi bi-backpack-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z" />
                <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5" />
              </svg>
              <span className="mx-3 text-light 1h-1 fw-semibold">
                NURSING
                <br />
                COLLEGE
                <br />
                RAMANATHAPURAM
              </span>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/" className="text-uppercase">
                Home
              </Nav.Link>
              <Nav.Link href="/courses" className="text-uppercase">
                Our Courses
              </Nav.Link>
              <Nav.Link href="/about" className="text-uppercase">
                About Us
              </Nav.Link>
              <Nav.Link href="/blog" className="text-uppercase">
                Blog
              </Nav.Link>
              <Nav.Link href="/contact" className="text-uppercase">
                Get in Touch
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer>
        <div className="container my-5">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-4">
              <Link to="/contact">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-lg mb-5 mb-md-4"
                >
                  Get In Touch
                </button>
              </Link>

              <ul className="footer-social-icons list-unstyled d-flex justify-content-between">
                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.582 0 8c0 4.02 2.926 7.347 6.75 7.951v-5.625h-2.03V8H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258V8h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951C16 3.582 12.418 0 8 0z" />
                    </svg>
                  </li>
                </Link>

                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </li>
                </Link>

                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </li>
                </Link>

                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </li>
                </Link>
              </ul>
            </div>

            {/* Newly Added Section */}
            <div className="col-md-7 col-lg-6">
              <div className="d-row d-md-flex justify-content-between align-items-center">
                <div className="col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0">
                  <ul className="footer-navigation list-unstyled mb-e">
                    <Link to="/" className="text-decoration-none text-danger">
                      <li className="text-uppercase fw-semibold">Home</li>
                    </Link>

                    <Link
                      to="/courses"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">
                        Our Courses
                      </li>
                    </Link>

                    <Link
                      to="/about"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">About Us</li>
                    </Link>

                    <Link
                      to="/blog"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">Blog</li>
                    </Link>

                    <Link
                      to="/contact"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">
                        Get In Touch
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <p>
                        Main Address - Dr. E.M. Abdullah Campus,Ilanthai
                        Village, Ramanathapuram District,Tamil Nadu - 623503,
                        India.
                      </p>
                    </li>
                    <li>
                      <p>Phone Number: +91 4567 304000</p>
                    </li>
                    <li>
                      <p>Email Address: office@syedengg.ac.in</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-teritary">
          <div className="container">
            <p className="p-3 m-0 text-center">
              © 2025 Syed Ammal School of Nursing. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
