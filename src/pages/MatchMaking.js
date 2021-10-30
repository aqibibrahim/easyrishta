import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./images/150X150-LOGO.png";
import { useHistory } from "react-router-dom";
import { db } from "../../src/pages/firebase-config";
// import { useQuery } from "react-query";
import * as _ from "lodash";

export default function MatchMaking(props) {
  // var docsid = "";
  const history = useHistory();
  const [users_array, setUsers_array] = useState([]);
  // const [loader, setLoader] = React.useState(false);
  useEffect(() => {
    // setLoader(true);
    ///---------- get login user prefernces

    const userid = localStorage.getItem("userid");
    //console.log(localStorage.getItem("userid"));
    db.collection("prefernces")
      .where("userid", "==", userid)
      .get()
      .then(async (data) => {
        console.log(data);
        // setLoader(false);
        if (data.empty) {
          window.open("/preferences", "_blank");
          //history.push("/preferences");
          return;
        }
        const uesrPrefences = data.docs[0].data();
        const citiesRef = db.collection("users");
        console.log({ uesrPrefences });

        const cast = await citiesRef
          .where("profile.caste", "==", uesrPrefences.cast)
          .get();

        const gender = await citiesRef
          .where("profile.gender", "==", uesrPrefences.gender)
          .get();

        const mini_height = await citiesRef
          .where("profile.height", ">=", uesrPrefences.minmumheight)
          .get();
        const max_height = await citiesRef
          .where("profile.height", "<=", uesrPrefences.maximumheight)
          .get();
        const max_age = await citiesRef
          .where("profile.age", "<=", uesrPrefences.maximumage)
          .get();
        const min_age = await citiesRef
          .where("profile.age", ">=", uesrPrefences.minimumage)
          .get();

        const sect = await citiesRef
          .where("profile.age", ">=", uesrPrefences.sect)
          .get();
        const education = await citiesRef
          .where("profile.age", ">=", uesrPrefences.education)
          .get();
        const nationality = await citiesRef
          .where("profile.age", ">=", uesrPrefences.nationality)
          .get();

        // const [gender1, cast1, mini_height1, max_height1, min_age1, max_age1] =
        //   Promise.all([
        //     gender,
        //     cast,
        //     mini_height,
        //     max_height,
        //     min_age,
        //     max_age,
        //   ]);

        const genderArray = gender.docs;
        const cast1Array = cast.docs;
        const mini_height1Array = mini_height.docs;
        const max_height1Array = max_height.docs;
        const min_age1Array = min_age.docs;
        const max_age1Array = max_age.docs;
        const sect_Array = sect.docs;
        const education_Array = education.docs;
        const nationality_Array = nationality.docs;
        // console.log({
        //   genderArray,
        //   cast1Array,
        //   mini_height1Array,
        //   max_height1Array,
        //   min_age1Array,
        //   max_age1Array,
        // });

        const citiesArray = _.concat(
          genderArray,
          cast1Array,
          mini_height1Array,
          max_height1Array,
          min_age1Array,
          max_age1Array,
          sect_Array,
          education_Array,
          nationality_Array
        );

        // console.log({ citiesArray });

        const finalData = await _.uniqWith(citiesArray, _.isEqual).map((e) => {
          let total = 0;
          let match = 0;
          if (uesrPrefences.gender) {
            total++;
            if (uesrPrefences.gender === e.data().profile.gender) match++;
          }
          if (uesrPrefences.cast) {
            total++;
            if (uesrPrefences.cast === e.data().profile.caste) match++;
          }
          if (uesrPrefences.maximumage) {
            total++;
            if (uesrPrefences.maximumage >= e.data().profile.age) match++;
          }
          if (uesrPrefences.minimumage) {
            total++;
            if (uesrPrefences.minimumage <= e.data().profile.age) match++;
          }
          if (uesrPrefences.maximumheight) {
            total++;
            if (uesrPrefences.maximumheight >= e.data().profile.height) match++;
          }
          if (uesrPrefences.minmumheight) {
            total++;
            if (uesrPrefences.minmumheight <= e.data().profile.height) match++;
          }
          if (uesrPrefences.sect) {
            total++;
            if (uesrPrefences.sect === e.data().profile.sect) match++;
          }
          if (uesrPrefences.education) {
            total++;
            if (uesrPrefences.education === e.data().profile.education) match++;
          }
          if (uesrPrefences.nationality) {
            total++;
            if (uesrPrefences.nationality === e.data().profile.nationality)
              match++;
          }

          match = Math.round((match / total) * 100);
          console.log(e.data());
          return { data: e.data(), match: match, userid: e.id };
        });
        setUsers_array(finalData);
        console.log({ finalData });
      });

    ///---------- get login user prefernces End
  }, []);
  // const profiles = useQuery(
  //   "profile",
  //   () => {
  //     const email = localStorage.getItem("email");
  //     //   console.log(localStorage.getItem("userid"));
  //     return db.collection("users").where("email", "==", email).get();
  //   },
  //   {
  //     select: (querySnapshot) => {
  //       const doc = querySnapshot.docs[0].data();
  //       docsid = querySnapshot.docs[0].id;
  //       // console.log("DOC ::", doc);
  //       console.log("DOC ::", docsid);
  //       return doc;
  //     },
  //     onError: (error) => console.log("Error getting documents: ", error),
  //   }
  // );

  return (
    <div>
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
              <a href="/" class="nav-link">
                Home
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
            {/* <li class="nav-item dropdown">
              <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="far fa-comments"></i>
                <span class="badge badge-danger navbar-badge">3</span>
              </a>
              <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" class="dropdown-item">
                  <div class="media">
                    <img
                      src={userAvatar}
                      alt="User Avatar"
                      class="img-size-50 mr-3 img-circle"
                    />
                    <div class="media-body">
                      <h3 class="dropdown-item-title">
                        Brad Diesel
                        <span class="float-right text-sm text-danger">
                          <i class="fas fa-star"></i>
                        </span>
                      </h3>
                      <p class="text-sm">Call me whenever you can...</p>
                      <p class="text-sm text-muted">
                        <i class="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                  <div class="media">
                    <img
                      src={userAvatar}
                      alt="User Avatar"
                      class="img-size-50 img-circle mr-3"
                    />
                    <div class="media-body">
                      <h3 class="dropdown-item-title">
                        John Pierce
                        <span class="float-right text-sm text-muted">
                          <i class="fas fa-star"></i>
                        </span>
                      </h3>
                      <p class="text-sm">I got your message bro</p>
                      <p class="text-sm text-muted">
                        <i class="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                  <div class="media">
                    <img
                      src={userAvatar}
                      alt="User Avatar"
                      class="img-size-50 img-circle mr-3"
                    />
                    <div class="media-body">
                      <h3 class="dropdown-item-title">
                        Nora Silvester
                        <span class="float-right text-sm text-warning">
                          <i class="fas fa-star"></i>
                        </span>
                      </h3>
                      <p class="text-sm">The subject goes here</p>
                      <p class="text-sm text-muted">
                        <i class="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item dropdown-footer">
                  See All Messages
                </a>
              </div>
            </li> */}
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
                <a  class="dropdown-item">
                  <i class="fas fa-envelope mr-2"></i> 4 new messages
                  <span class="float-right text-muted text-sm">3 mins</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">
                  <i class="fas fa-users mr-2"></i> 8 friend requests
                  <span class="float-right text-muted text-sm">12 hours</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">
                  <i class="fas fa-file mr-2"></i> 3 new reports
                  <span class="float-right text-muted text-sm">2 days</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div> */}
            </li>
            {/* <li class="nav-item">
              <a
                class="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
              >
                <i class="fas fa-th-large"></i>
              </a>
            </li> */}
          </ul>
        </nav>
        {/* <!-- /.navbar -->

  <!-- Main Sidebar Container --> */}
        <aside
          class="main-sidebar sidebar-dark-primary elevation-4"
          style={{ background: "#EDCBBD " }}
        >
          {/* <!-- Brand Logo --> */}
          <a href="/" class="brand-link">
            <img
              src={logo}
              alt="AdminLTE Logo"
              style={{ height: "auto", width: "70%", paddingLeft: "30%" }}
            />
          </a>

          {/* <!-- Sidebar --> */}
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
                    to={"/friends"}
                    class="nav-link"
                    style={{ color: "black" }}
                  >
                    <i class="nav-icon fas fa-user"></i>
                    <p>Friends</p>
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
            {/* <!-- /.sidebar-menu --> */}
          </div>
          {/* <!-- /.sidebar --> */}
        </aside>

        {/* <!-- Content Wrapper. Contains page content --> */}
        <div class="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>Match Making</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active">Find Match</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </section>

          <section class="content">
            <div class="row">
              <div class="col-md-2">
                <Link
                  to="/search"
                  type="button"
                  class="btn btn-block btn-danger"
                  style={{ marginTop: "30px" }}
                >
                  Search
                </Link>
              </div>
            </div>
          </section>
          {/* <!-- Main content --> */}
          <section class="content">
            {/* <!-- Default box --> */}
            {/* <div class="card card-solid">
        <div class="card-body pb-0"> */}
            <div class="row d-flex align-items-stretch">
              <div class="d-flex align-items-stretch flex-wrap justify-content-center">
                {users_array != null ? (
                  users_array.length > 0 ? (
                    users_array.map((val) => {
                      return (
                        <div
                          class="card bg-light m-2"
                          style={{
                            width: "23%",
                            height: "450px",
                            marginLeft: "2.5%",
                          }}
                        >
                          <div
                            class="card-header text-muted border-bottom-0"
                            style={{ textAlign: "center" }}
                          >
                            {val.email}
                          </div>
                          <div class="card-body pt-0">
                            <div class="row mt-2">
                              <div class="col-7">
                                <h2 class="lead p-1">
                                  <b>{val.data.profile.fullname}</b>
                                </h2>
                                <p class="text-muted text-sm text-center">
                                  <b>{val.data.profile.education} </b>
                                </p>
                              </div>
                              <div class="col-5 text-center">
                                <img
                                  src={val.data.profilepic || logo}
                                  alt=""
                                  class="img-circle img-fluid"
                                  style={{ height: "100px", width: "100px" }}
                                />
                              </div>
                              <div className="mt-3">
                                <ul class="ml-4 mb-0 fa-ul text-muted">
                                  <li>
                                    <span class="fa-li small">
                                      <i class="fas fa-lg fa-building"></i>
                                    </span>{" "}
                                    <span style={{ fontSize: "medium" }}>
                                      <span
                                        style={{
                                          color: "black",
                                          fontFamily: "sans-serif",
                                        }}
                                      >
                                        {" "}
                                        Address:
                                      </span>{" "}
                                      <span style={{ fontWeight: "600" }}>
                                        {" "}
                                        {val.data.profile.address}
                                      </span>
                                    </span>
                                  </li>
                                  <li class="mt-2">
                                    <span class="fa-li small">
                                      <i class="fas fa-lg fa-user-tie"></i>
                                    </span>{" "}
                                    <span
                                      style={{
                                        color: "black",
                                        fontFamily: "sans-serif",
                                      }}
                                    >
                                      {" "}
                                      Profession:
                                    </span>{" "}
                                    <span style={{ fontSize: "medium" }}>
                                      {val.data.profile.profession}
                                    </span>
                                  </li>
                                  <li class="mt-2">
                                    <span class="fa-li small">
                                      <i class="fas fa-lg fa-mosque"></i>
                                    </span>{" "}
                                    <span
                                      style={{
                                        color: "black",
                                        fontFamily: "sans-serif",
                                      }}
                                    >
                                      {" "}
                                      Religion:
                                    </span>{" "}
                                    <span style={{ fontSize: "medium" }}>
                                      {val.data.profile.sect}
                                    </span>
                                  </li>
                                  <li class="mt-2">
                                    <span class="fa-li small">
                                      <i class="fas fa-lg fa-ring"></i>
                                    </span>{" "}
                                    <span
                                      style={{
                                        color: "black",
                                        fontFamily: "sans-serif",
                                      }}
                                    >
                                      {" "}
                                      Marital Status:
                                    </span>{" "}
                                    <span style={{ fontSize: "medium" }}>
                                      {val.data.profile.martial}
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              {/* {val.data.profilepic ?():()} */}
                            </div>
                          </div>
                          <div class="card-footer">
                            <div class="text-right">
                              <b className="pr-8">{val.match}%</b>

                              <Link
                                to={{
                                  pathname: "/otherprofile",
                                  query: { userid: val.userid },
                                }}
                                class="btn btn-sm btn-primary"
                                style={{ backgroundColor: "#ed225c" }}
                              >
                                <i class="fas fa-user"></i> View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      class="lds-heart"
                      style={{ position: "absolute", top: "50%", left: "50%" }}
                    >
                      <div></div>
                    </div>
                  )
                ) : (
                  <div
                    class="lds-heart"
                    style={{ position: "absolute", top: "50%", left: "50%" }}
                  >
                    <div></div>
                  </div>
                )}
              </div>
            </div>
            {/* </div> */}
            {/* <!-- /.card-body --> */}
            {/* <div class="card-footer">
              <nav aria-label="Find Matchs Page Navigation">
                <ul class="pagination justify-content-center m-0">
                  <li class="page-item active">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      6
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      7
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      8
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}
            {/* <!-- /.card-footer --> */}
            {/* </div> */}
            {/* <!-- /.card --> */}
          </section>
          {/* <!-- /.content --> */}
        </div>
        {/* <!-- /.content-wrapper --> */}

        <footer class="main-footer">
          <strong>
            Copyright &copy; 2021{" "}
            <a href="https://quellxcode.com/"> QuellxCode</a>.
          </strong>
          All rights reserved.
        </footer>

        {/* <!-- Control Sidebar --> */}
        <aside class="control-sidebar control-sidebar-dark">
          {/* <!-- Control sidebar content goes here --> */}
        </aside>
        {/* <!-- /.control-sidebar --> */}
      </div>
    </div>
  );
}
