import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

// import your profile images from images folder
import profile from "../images/profile.png";

// react-icons from https://react-icons.github.io/react-icons/
import { BsGithub } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const MainPage = () => {
  // change your link here------------
  const github = "https://github.com/mi-codex";
  const figma = "https://www.figma.com/@muhammadirfan1";
  const instagram = "https://www.instagram.com/mhd_irfan.dev/";
  const youtube = "https://www.youtube.com/channel/UCs1bEDiXKRdjDbubUpiL2kA";
  //-------------------------------

  // copyright year
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      {/* --------------- profile--------------- */}
      <section className="section-profile">
        <Container className="mt-5">
          <Row>
            <Col className="d-flex justify-content-center">
              {/* your profile image */}
              <img src={profile} alt="profile-logo" className="img-profile" />
            </Col>
          </Row>
          <Row className="text-center mt-3">
            <Col>
              <h1>MUHAMMAD IRFAN</h1>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <h2>UI UX AND WEB DEVELOPER</h2>
            </Col>
          </Row>
        </Container>
      </section>

      {/* -------------link buttons---------------- */}
      <section className="section-link-buttons mt-3">
        <Container>
          <div class="d-grid gap-2 col-md-5 mx-auto">
            <Button
              variant="outline-dark"
              href={github}
              target="_blank"
              size="lg"
            >
              <BsGithub /> Github
            </Button>
            <Button
              variant="outline-dark"
              href={figma}
              target="_blank"
              size="lg"
            >
              <CgFigma /> Figma
            </Button>
            <Button
              variant="outline-dark"
              href={instagram}
              target="_blank"
              size="lg"
            >
              <AiFillInstagram /> Instagram
            </Button>
            <Button
              variant="outline-dark"
              href={youtube}
              target="_blank"
              size="lg"
            >
              <BsYoutube /> Youtube
            </Button>
          </div>
        </Container>
      </section>

      {/* -------------footer---------------- */}
      <section className="section-footer text-center mt-5">
        <h1>
          © {year} <a href={github}>MUHAMMAD IRFAN</a>{" "}
        </h1>
      </section>
    </div>
  );
};

export default MainPage;
