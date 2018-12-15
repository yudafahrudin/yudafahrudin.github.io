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
                      <div className="d-flex">
                        <img
                          style={{ height: "640px" }}
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
                            programming. Understanding laravel , code igniter,
                            ruby on rail, android native and react native.
                          </p>
                          <ul className="list basic_info">
                            <li>
                              <a href="#">
                                <i class="fa fa-calendar" /> 26 February, 1996
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-phone" /> 085708880099
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-envelope" />{" "}
                                ahmadyudafahrudin@gmail.com
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-address" /> Surabaya - Mojokerto
                              </a>
                            </li>
                          </ul>
                          <ul className="list personal_social">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/in/yuda-fahrudin-537288118/">
                                <i className="fa fa-linkedin" />
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
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
