//import React, { Component } from "react";
import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div>
        <header id="header" class="dark">
          {/* <!--=================================
 mega menu --> */}

          <div>
            {/* <!-- menu start --> */}
            <nav id="menu" class="mega-menu">
              {/* <!-- menu list items container --> */}
              <section class="menu-list-items">
                <div class="container ">
                  <div class="row ">
                    <div class="col-md-12">
                      {/* <!-- menu logo --> */}
                      <ul class="menu-logo">
                        <li>
                          {" "}
                          <a href="index.html">
                            <img src="../../assets/images/logo-menu.png" alt="logo" />{" "}
                          </a>
                        </li>
                      </ul>
                      {/* <!-- menu links --> */}
                      <ul class="menu-links  ">
                        {/* <!-- active class --> */}

                        <li>
                          <a href="www.google.com" class="registerMenuButton button btn-lg btn-colored full-rounded ">
                            Register{" "}
                          </a>
                        </li>

                        <li>
                          <a href="www.google.com" class="loginMenuButton button btn-lg btn-colored full-rounded ">
                            {" "}
                            Login{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </nav>
            {/* <!-- menu end --> */}
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
