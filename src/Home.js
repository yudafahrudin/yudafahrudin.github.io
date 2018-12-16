import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <section className="home_banner_area">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12">
              <div className="container box_1620">
                <div className="banner_inner d-flex align-items-center">
                  <div className="banner_content">
                    <div className="media">
                      <div className="p-3 mr-4">
                        <img
                          style={{ width: "30vw", height: "65vh" }}
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
                            programming. Understanding laravel, code igniter,
                            ruby on rail, android native and react native.
                          </p>
                          <ul className="list basic_info">
                            <li>
                              <a href="#">
                                <i class="far fa-calendar-alt" />
                                26 February, 1996
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fab fa-whatsapp" /> 085708880099
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="far fa-envelope-open" />{" "}
                                ahmadyudafahrudin@gmail.com
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="far fa-address-card" />
                                Surabaya - Mojokerto
                              </a>
                            </li>
                          </ul>
                          <ul className="list personal_social">
                            <li>
                              <a href="#">
                                <i class="fab fa-facebook-square" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fab fa-twitter-square" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/in/yuda-fahrudin-537288118/">
                                <i class="fab fa-linkedin" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-2">
              <div className="right-tab-menu">
                <ul
                  className="nav flex-column"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
