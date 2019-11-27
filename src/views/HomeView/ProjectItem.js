import React from 'react'
import {
  Image,
  Button
} from "../../components"
import { Row, Col } from "styled-bootstrap-grid";
import "./HomeView.css"

const ProjectItem = ({ isImgRight, ...rest }) =>
  isImgRight ? (
    <Row style={{ paddingTop: 64, paddingBottom: 64 }}>
      <Col sm={12} md={4} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
        <h4 className="project-heading">{rest.projectTitle}</h4>
        <p className="project-description">{rest.projectDescription}</p>
        <div style={{ textAlign: "center" }}>
          {rest.links.map((link, i) => (
            <Button
              key={i}
              style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
              onClick={() => window.location.assign(link.url)}
            >
              {link.text}
            </Button>
          ))}
        </div>
      </Col>
      <Col hiddenSmDown md={1} mdOrder={1}></Col>
      <Col
        xsOrder="first"
        smOrder="first"
        sm={12}
        md={7}
        alignSelf="center"
        style={{ marginTop: ".5rem", marginBottom: ".5rem" }}
      >
        <Image
          src={rest.img}
          style={{ maxWidth: "100%", width: "100%", borderRadius: 16 }}
        />
      </Col>
    </Row>
  ) : (
    <Row style={{ paddingTop: 64, paddingBottom: 64 }}>
      <Col
        sm={12}
        xsOrder="first"
        smOrder="first"
        md={7}
        alignSelf="center"
        style={{ marginTop: ".5rem", marginBottom: ".5rem" }}
      >
        <Image
          src={rest.img}
          style={{ maxWidth: "100%", width: "100%", borderRadius: 16 }}
        />
      </Col>
      <Col hiddenSmDown md={1} mdOrder={1}></Col>
      <Col sm={12} md={4} style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
        <h4 className="project-heading">{rest.projectTitle}</h4>
        <p className="project-description">{rest.projectDescription}</p>
        <div style={{ textAlign: "center" }}>
          {rest.links.map((link, i) => (
            <Button
              key={i}
              style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
              onClick={() => window.location.assign(link.url)}
            >
              {link.text}
            </Button>
          ))}
        </div>
      </Col>
    </Row>
  );

  export default ProjectItem