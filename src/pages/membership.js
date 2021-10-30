import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/150X150-LOGO.png";

class membership extends React.Component {
  render() {
    return (
      <div>
        <body class="hold-transition sidebar-mini" />
        {/* <!-- Site wrapper --> */}
        <div class="wrapper">
          {/* <!-- Navbar --> */}
          <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            {/* <!-- Left navbar links --> */}
            <ul class="navbar-nav">
              {/* <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#">
                  <i class="fas fa-bars"></i>
                </a>
              </li> */}
              <li class="nav-item d-none d-sm-inline-block">
                <a href="index.html" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item d-none d-sm-inline-block">
                <a href="findMatch.html" class="nav-link">
                  Find Match
                </a>
              </li>
            </ul>

            {/* <!-- SEARCH FORM --> */}
            <form class="form-inline ml-3">
              <div class="input-group input-group-sm">
                <input
                  class="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div class="input-group-append">
                  <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>

            {/* <!-- Right navbar links --> */}
            <ul class="navbar-nav ml-auto">
              {/* <!-- Messages Dropdown Menu --> */}
              {/*  */}
              {/* <!-- Notifications Dropdown Menu --> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  // data-toggle="dropdown"
                  href="/notifications"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <i class="far fa-bell"></i>
                  <span class="badge badge-warning navbar-badge">
                    {localStorage.getItem("inviteslength")}
                  </span>
                </a>
                {/* <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <span class="dropdown-item dropdown-header">
                    15 Notifications
                  </span>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                    <i class="fas fa-envelope mr-2"></i> 4 new messages
                    <span class="float-right text-muted text-sm">3 mins</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                    <i class="fas fa-users mr-2"></i> 8 friend requests
                    <span class="float-right text-muted text-sm">12 hours</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                    <i class="fas fa-file mr-2"></i> 3 new reports
                    <span class="float-right text-muted text-sm">2 days</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item dropdown-footer">
                    See All Notifications
                  </a>
                </div> */}
              </li>
            </ul>
          </nav>
          {/* <!-- /.navbar --> */}

          {/* <!-- Main Sidebar Container --> */}
          <aside
            class="main-sidebar sidebar-dark-primary elevation-4"
            style={{ background: "#EDCBBD " }}
          >
            {/* <!-- Brand Logo --> */}
            <a href="index.html" class="brand-link">
              <img
                src={logo}
                alt="AdminLTE Logo"
                style={{ height: "auto", width: "100%" }}
              />
            </a>

            {/*  <!-- Sidebar --> */}
            <div class="sidebar">
              {/* <!-- Sidebar user (optional) --> */}
              <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div
                  class="image"
                  style={{
                    display: "flex",
                    paddingLeft: "0.8rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={localStorage.getItem("profilepic")}
                    class="img-circle elevation-2"
                    alt="Profile"
                    style={{ width: "2.1rem", height: "2.1rem" }}
                  />
                </div>
                <div class="info">
                  <Link
                    to={"/profile"}
                    class="d-block"
                    style={{ color: "black" }}
                  >
                    {localStorage.getItem("username")}
                  </Link>
                </div>
              </div>

              {/* <!-- Sidebar Menu --> */}
              <nav class="mt-2">
                <ul
                  class="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  {/* <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library --> */}

                  <li class="nav-item">
                    <Link
                      to={"/profile"}
                      class="nav-link"
                      style={{ color: "black" }}
                    >
                      <i class="nav-icon fas fa-user"></i>
                      <p>My Profile</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to={"/MatchMaking"}
                      class="nav-link"
                      style={{ color: "black" }}
                    >
                      <i class="nav-icon fas fa-search"></i>
                      <p>Find Match</p>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link
                      to={"/search"}
                      class="nav-link"
                      style={{ color: "black" }}
                    >
                      <i class="nav-icon fas fa-search"></i>
                      <p>Search</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to={"/chat"}
                      class="nav-link"
                      style={{ color: "black" }}
                    >
                      <i class="nav-icon fas fa-envelope"></i>
                      <p>Chat</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to={"/preferences"}
                      class="nav-link"
                      style={{ color: "black" }}
                    >
                      <i class="nav-icon fas fa-envelope"></i>
                      <p>Set Preferences</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to={"/register"}
                      class="nav-link"
                      style={{ color: "black" }}
                    >
                      <i class="nav-icon fas fa-user"></i>
                      <p>Update Pofile</p>
                      {/* <MDBBadge color="danger" className="ml-2">{inviteslength}</MDBBadge> */}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to={"/membership"}
                      class="nav-link"
                      style={{ color: "black" }}
                    >
                      <i class="nav-icon fas fa-user"></i>
                      <p>Membership</p>
                      {/* <MDBBadge color="danger" className="ml-2">{inviteslength}</MDBBadge> */}
                    </Link>
                  </li>
                  {/* <li class="nav-item">
                  <Link
                    to={"/notifications"}
                    class="nav-link"
                    style={{ color: "black" }}
                  >
                    <i class="nav-icon fas fa-user"></i>
                    <p>Notifications</p>
                    <MDBBadge color="danger" className="ml-2">
                      {inviteslength}
                    </MDBBadge>
                  </Link>
                </li> */}
                </ul>
              </nav>
              {/*  <!-- /.sidebar-menu --> */}
            </div>
            {/* <!-- /.sidebar --> */}
          </aside>

          {/* <!-- Content Wrapper. Contains page content --> */}
          <div class="content-wrapper">
            {/*   <!-- Content Header (Page header) --> */}
            <section class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1>Membership</h1>
                  </div>
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="breadcrumb-item active">Membership</li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* <!-- /.container-fluid --> */}
            </section>

            {/* <!-- Main content --> */}
            <section class="content">
              {/* <!-- Default box --> */}
              {/* <div class="card card-solid"> */}
              {/* <div class="card-body pb-0"> */}
              <form>
                <div class="card card--payment">
                  <div
                    class="card-header"
                    style={{ backgroundColor: "#ed225c" }}
                  >
                    Select Membership Plan
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-2"></div>
                      <div class="col-lg-8">
                        <div>
                          <h2>Packages</h2>
                          <div class="payment-card-radios">
                            <div class="col-lg-4 col-md-6">
                              <input
                                type="radio"
                                id="control_01"
                                name="select"
                                value="1"
                              />
                              <label for="control_01">
                                <h2>Basic</h2>
                                <p class="duration">
                                  Access to 5 contacts from your favourites
                                </p>
                                <p class="duration">
                                  Direct Chat Facility (Self)
                                </p>
                                <p class="duration">Not direct message</p>
                                <p class="duration">Expire in 3 months</p>

                                <p class="price">
                                  PKR <span class="amount">1950</span>
                                </p>
                              </label>
                            </div>
                            <div class="col-lg-4 col-md-6">
                              <input
                                type="radio"
                                id="control_02"
                                name="select"
                                value="2"
                              />
                              <label for="control_02">
                                <h2> Silver </h2>

                                <p class="duration">
                                  Access to 20 contacts from your favourites
                                </p>
                                <p class="duration">
                                  Direct Chat Facility (Self)
                                </p>
                                <p class="duration">Not direct message</p>
                                <p class="duration">Expire in 3 months</p>
                                <p class="price">
                                  PKR <span class="amount">3950</span>
                                </p>
                              </label>
                            </div>
                            <div class="col-lg-4 col-md-6">
                              <input
                                type="radio"
                                id="control_03"
                                name="select"
                                value="3"
                              />
                              <label class="premium" for="control_03">
                                <h2> Gold </h2>
                                <span class="badge badge-dark">Premium</span>
                                <p class="duration">
                                  Access to 60 contacts from your favourites
                                </p>
                                <p class="duration">
                                  Direct Chat Facility (Self)
                                </p>
                                <p class="duration">Not direct message</p>
                                <p class="duration">Expire in 3 months</p>
                                <p class="price">
                                  PKR <span class="amount">6950</span>
                                </p>
                              </label>
                            </div>

                            {/*  <!-- <div>
                                <input type="radio" id="control_04" name="select" value="4" disabled>
                                <label for="control_04">
                                  <h2>Mental</h2>
                                  <p>Prepare for glory! This is going to be one hell of a no-holds-barred ride.</p>
                                </label>
                              </div>
                              <div>
                                <input type="radio" id="control_05" name="select" value="5">
                                <label for="control_05">
                                  <h2>Suicidal</h2>
                                  <p>You will not live. Strap in and write a heart-felt letter to your loved ones.</p>
                                </label>
                              </div> --> */}
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-2">
                        <div class="text-center">
                          <h3>Select Add-on Packages</h3>
                        </div>
                        {/* <div class="row addon-section">
                       <div class="col-lg-12 ">
                        <div class="addon">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="addon-1" name="addon-1"/>
                                <label class="custom-control-label" for="addon-1">Profile Highlighter</label>
                                <p class="price">PKR <span class="amount">3,000</span></p>
                                <p class="addon-detail">
                                    Feature your profile on top of search results at just PKR 3,000.
                                    Get maximum visibility.
                                </p>


                              </div>
                        </div>  
                      </div>

                        <div class="col-lg-12">
                            <div class="addon">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="addon-2" name="addon-2"/>
                                    <label class="custom-control-label" for="addon-2">AstroMatch</label>
                                    <p class="price">PKR <span class="amount">2,400</span></p>
                                    <p class="addon-detail">
                                        Compare your horoscope with a prospective match and get a compatibility report at just PKR 2,400.
                                    </p>
                                  </div>
                            </div>  
                        </div>

                     </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div class="card card--payment">
                <div class="card-header">
                    Your Selection
                </div>
                <div class="card-body">
                  <div class="row  text-center">
                    <div class="col-lg-4">
                      <h4 class="mb-2">Membership</h4>
                      <ul style={{listStyle:"none",    padding: "0px"}}>
                        <li>Sliver Plan - 3 months</li>
                      </ul>
                    </div>


                    <div class="col-lg-4">
                        <h4 class="mb-2">Add-on package</h4>
                        <ul style={{listStyle:"none",    padding:" 0px"}}>
                          <li>No Add-on Selected</li>
                        </ul>
                      </div>

                      <div class="col-lg-4">
                          <h4 class="mb-2" style={{    fontSize:" 25px"}}>Your Total:</h4>
                        <p style={{fontSize: "19px"}}>
                        <span>PKR</span> <strong>5000</strong>
                        </p>
                      </div>
           

                  </div>
                </div>
              </div>


              <div class="card card--payment">
                  <div class="card-header">
                      Select Payment Option
                  </div>
                  <div class="card-body">
                    <div class="row">
                       <div class="col-lg-12">
                         <div>
                           <h2>Payment Options</h2>
                           <div class="payment-card-radios payment-card-radios--methods">
                              <div class="col-md-4 col-lg-3">
                                  <input type="radio" id="control_10" name="select_method" value="10"/>
                                  <label class="easy_paisa" for="control_10">
                                  </label>
                                  <h2>EasyPaisa</h2>

                                </div>
                                <div class="col-md-4 col-lg-3">
                                  <input type="radio" id="control_11" name="select_method" value="11"/>
                                  <label class="meezan_bank" for="control_11">
                                  </label>
                                  <h2>Meezan Bank</h2>
                                </div>
                                <div class="col-md-4 col-lg-3">
                                    <input type="radio" id="control_12" name="select_method" value="12"/>
                                    <label class="jazz-cash" for="control_12">
                                    </label>
                                    <h2>Jazz Cash</h2>
                                  </div>
  
                                  <div class="col-md-4 col-lg-3">
                                      <input type="radio" id="control_16" name="select_method" value="16"/>
                                      <label  for="control_16" class="cards">
                                      </label>
                                      <h2>Debit  Credit Card</h2>
                                    </div>
                              {/*   <!-- <div>
                                  <input type="radio" id="control_04" name="select" value="4" disabled>
                                  <label for="control_04">
                                    <h2>Mental</h2>
                                    <p>Prepare for glory! This is going to be one hell of a no-holds-barred ride.</p>
                                  </label>
                                </div>
                                <div>
                                  <input type="radio" id="control_05" name="select" value="5">
                                  <label for="control_05">
                                    <h2>Suicidal</h2>
                                    <p>You will not live. Strap in and write a heart-felt letter to your loved ones.</p>
                                  </label>
                                </div> --> */}

                {/* </div>
                         </div>
  
                       </div>
  
  
                    </div>

                    <div class="row " id="form-billing" style={{display:" none",   paddingLeft: "60px"}}>
                      <div class="col-lg-8">
                          <div class="form-group">
                              <label for="exampleInputEmail1">Card Name:</label>
                              <input type="text" name="name" class="form-control"  placeholder="Enter Name" required/>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Card Number:</label>
                                <input size="20" maxlength="20" type="text" name="name" class="form-control"  placeholder="20 Digit Card Number" required/>
                              </div>

                              <div class="row">
                                
                              <div class="col-md-6">
                                  <div class="form-group">
                                  <label for="">Expiry Month:</label>
                                    <select name="e-month" class="form-control">
                                        <option disabled value="01">01 (Jan)</option>
                                        <option disabled value="02">02 (Feb)</option>
                                        <option disabled value="03">03 (Mar)</option>
                                        <option value="04">04 (Apr)</option>
                                        <option value="05">05 (May)</option>
                                        <option value="06">06 (Jun)</option>
                                        <option value="07">07 (Jul)</option>
                                        <option value="08">08 (Aug)</option>
                                        <option value="09">09 (Sep)</option>
                                        <option value="10">10 (Oct)</option>
                                        <option value="11">11 (Nov)</option>
                                        <option value="12">12 (Dec)</option>
                                      </select>
                                      </div>
                                </div>
  
                                <div class="col-md-6">
                                    <div class="form-group">
                                    <label for="">Expiry year:</label>
                                    <select name="e-year" class="form-control">
                                        <option value="19">2019</option>
                                        <option value="20">2020</option>
                                        <option value="21">2021</option>
                                        <option value="22">2022</option>
                                        <option value="23">2023</option>
                                        <option value="24">2024</option>
                                        <option value="25">2025</option>
                                        <option value="26">2026</option>
                                        <option value="27">2027</option>
                                        <option value="28">2028</option>
                                        <option value="29">2029</option>
                                        <option value="30">2030</option>
                                        <option value="31">2031</option>
                                        <option value="32">2032</option>
                                        <option value="33">2033</option>
                                        <option value="34">2034</option>
                                        <option value="35">2035</option>
                                        <option value="36">2036</option>
                                        <option value="37">2037</option>
                                        <option value="38">2038</option>
                                        <option value="39">2039</option> 
                                      </select>
                                      </div>
                                </div>
                              </div>

                              <div class="row">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">CVV:</label>
                                        <input type="password" size="3" maxlength="3" name="cvv" class="form-control"  placeholder="3 Digit CVV" required/>
                                      </div>
                                </div>
                              </div>

                              

                      </div>
                    </div>

                  </div>
                </div> */}

                <button
                  type="button"
                  style={{ backgroundColor: "#ed225c" }}
                  class="btn btn-primary btn-md float-right mb-3"
                >
                  Proceed
                </button>
              </form>
              {/* </div> */}
              {/*  <!-- /.card-body --> */}

              {/*  <!-- /.card --> */}
            </section>
            {/*   <!-- /.content --> */}
          </div>
          {/* <!-- /.content-wrapper --> */}

          <footer class="main-footer">
            <strong>
              Copyright &copy; 2021 <a href="www.quellxcode.com"> QuellxCode</a>
              .
            </strong>
            All rights reserved.
          </footer>

          {/* <!-- Control Sidebar --> */}
          <aside class="control-sidebar control-sidebar-dark">
            {/*  <!-- Control sidebar content goes here --> */}
          </aside>
          {/*  <!-- /.control-sidebar --> */}
        </div>
        {/* <!-- ./wrapper --> */}
      </div>
    );
  }
}
export default membership;
