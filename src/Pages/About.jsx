import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { TabContainer, Col, TabContent } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import { TabPane } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container >
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <NavItem>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link eventKey="fourth">Framework</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link eventKey="fifth">Libaries</Nav.Link>
                </NavItem>
              </Nav>
            </Col>
            <Col sm={9}>
              <TabContent className="mt-3">
                <TabPane eventKey="first">
                  <img
                    src="https://thebrandingstore.net/wp-content/uploads/2019/04/figma-covers-in-action.gif"
                    alt="img"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </TabPane>
                <TabPane eventKey="second">
                  <img
                    src="https://static2.clutch.co/s3fs-public/software-development-team-1.jpg"
                    alt="img"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </TabPane>
                <TabPane eventKey="third">
                  <img
                    src="https://tech101.com.np/wp-content/uploads/2019/08/Which-programming-langauge-should-i-learn-first-ITonlinelearning.jpg"
                    alt="img"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </TabPane>
                <TabPane eventKey="fourth">
                  <img
                    src="https://www.scnsoft.com/blog-pictures/web-apps/image-thumb__16272__author_page-top-article/web-application-vs-website-01~-~767w.png"
                    alt="img"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum.
                  </p>
                </TabPane>
                <TabPane eventKey="fifth">
                  <img
                    src="https://cdn-images-1.medium.com/max/800/1*QxjHVvJDIaKZCCZFDSrahA.gif?w=736"
                    alt="img"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    );
  }
}
