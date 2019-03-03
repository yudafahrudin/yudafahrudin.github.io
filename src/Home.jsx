import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "bio"
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <section className="home_banner_area">
        <Container className="h-100">
          <Row className="align-items-center h-100">
            <Col md="12" xs="12">
              <div className="container box_1620">
                <div className="banner_inner d-flex align-items-center">
                  <div className="banner_content">
                    <Nav className="mb-3">
                      <NavItem>
                        <NavLink href="#">Biodata</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Portfolio</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Photo</NavLink>
                      </NavItem>
                    </Nav>
                    <div className="media">
                      <div className="mr-4">
                        <img
                          style={{ height: "75vh" }}
                          className="img-fluid"
                          src="/public/assets/images/personal-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <div className="personal_text">
                          <h6>Hey, I am</h6>
                          <h3>Yuda</h3>
                          <h4>Programmer, Pro gamers, Novelist</h4>
                          <p>
                            Experience with backend, Restful API and Mobile
                            programming. Understanding Laravel, Ruby on Rail, 
                            ReactJS and React Native.
                          </p>
                          <ul className="list basic_info">
                            <li>
                              <a href="#">
                                <i className="far fa-calendar-alt" />
                                26 February
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-whatsapp" /> 085708880099
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="far fa-envelope-open" />{" "}
                                ahmadyudafahrudin@gmail.com
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="far fa-address-card" />
                                Surabaya
                              </a>
                            </li>
                          </ul>
                          <ul className="list personal_social">
                          <li>
                              <a href="https://github.com/yudafahrudin">
                                <i className="fab fa-github" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/in/yuda-fahrudin-537288118/">
                                <i className="fab fa-linkedin" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Home;
