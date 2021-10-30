import React from "react";
import logo from "./images/150X150-LOGO.png";
import { Link } from "react-router-dom";
import { db } from "../../src/pages/firebase-config";
import { useQuery } from "react-query";

export default function Profile() {
  var docsid = "";
  let invites_array = [];
  var inviteslength = 0;

  // const [state, setstate] = useState({
  //   username: "",
  //   profession: "",
  //   education: "",
  //   specialization: "",
  //   address: "",
  //   notificationlength: 0,
  //   notificationdata: [],
  //   gallery: [],
  //   notificationid: "",
  //   userid: "",
  //   data: [],
  // });

  const profiles = useQuery(
    "profile",
    () => {
      const email = localStorage.getItem("email");
      console.log(localStorage.getItem("userid"));
      return db.collection("users").where("email", "==", email).get();
    },
    {
      select: (querySnapshot) => {
        const doc = querySnapshot.docs[0].data();
        docsid = querySnapshot.docs[0].id;
        console.log("DOC ::", doc);
        console.log("DOC ::", docsid);
        localStorage.setItem("loggedin-userid", localStorage.getItem("userid"));
        localStorage.setItem("profilepic", doc.profilepic);
        localStorage.setItem("username", doc.profile.fullname);

        return doc;
      },
      onError: (error) => console.log("Error getting documents: ", error),
    }
  );
  const invites = useQuery(
    "invites",
    () => {
      return db.collection("invites").where("recieverid", "==", docsid).get();
    },
    {
      select: (querySnapshot) => {
        // let temp = [];
        const doc = querySnapshot.docs[0].data();

        console.log("Invite docs", doc);

        const invite_array = [];
        console.log(querySnapshot.docs[0].data());
        for (var i = 0; i < querySnapshot.docs.length; i++) {
          invite_array.push({
            data: querySnapshot.docs[i].data(),
            userid: querySnapshot.docs[i].id,
          });
        }

        invites_array = invite_array;
        console.log(invite_array.length);
        inviteslength = invites_array.length;
        localStorage.setItem("inviteslength", invite_array.length);
      },
      onError: (error) => console.log("Error getting documents: ", error),
    }
  );

  if (!profiles.data)
    return (
      <div
        class="lds-heart"
        style={{ position: "absolute", top: "50%", left: "50%" }}
      >
        <div></div>
      </div>
    );

  console.warn("profiles ::  ", profiles.data);
  console.warn("invites ::  ", invites.data);

  return (
    <div>
      <body class="hold-transition sidebar-mini" />
      <div class="wrapper">
        {/*  <!-- Navbar --> */}
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
          {/*   <!-- Left navbar links --> */}
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" href="#">
                <i class="fas fa-bars"></i>
              </a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
              <a href=" index.html" class="nav-link">
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
            {/* <li class="nav-item">
              <a
                class="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                href="#"
              >
                <i class="fas fa-th-large"></i>
              </a>
            </li> */}
          </ul>
        </nav>
        {/*  <!-- /.navbar --> */}

        {/*  <!-- Main Sidebar Container --> */}
        <aside
          class="main-sidebar sidebar-dark-primary elevation-4"
          style={{ background: "#EDCBBD " }}
        >
          {/* <!-- Brand Logo --> */}
          <a href="index.html" class="brand-link">
            <img
              src={logo}
              alt="AdminLTE"
              style={{ height: "auto", width: "70%", paddingLeft: "30%" }}
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
            {/*  <!-- /.sidebar-menu --> */}
          </div>
          {/*  <!-- /.sidebar --> */}
        </aside>

        {/*  <!-- Content Wrapper. Contains page content --> */}
        <div class="content-wrapper">
          {/*  <!-- Content Header (Page header) --> */}
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>My Profile</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active"> My Profile</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </section>

          {/* <!-- Main content --> */}
          <section class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  {/*   <!-- Profile Image --> */}
                  <div class="card card-primary card-outline">
                    <div class="card-body box-profile">
                      <div class="text-center">
                        <img
                          class="profile-user-img img-fluid img-circle"
                          src={profiles.data.profilepic}
                          alt="Profile"
                          style={{ height: 200, width: 200 }}
                        />
                      </div>

                      <h3 class="profile-username text-center">
                        {profiles.data.profile.fullname}
                      </h3>

                      <p
                        class="text-muted text-center"
                        style={{ fontSize: 24 }}
                      >
                        {profiles.data.registration_token}
                      </p>

                      {/* <a
                        href="#"
                        class="btn btn-primary btn-block"
                        style={{ backgroundColor: "#ed225c", fontSize: 10 }}
                      >
                        <b>Send Chat Request</b>
                      </a> */}
                      {/* <a
                        href="#"
                        class="btn btn-primary btn-block"
                        style={{ backgroundColor: "#ed225c", fontSize: 10 }}
                      >
                        <b>Like</b>
                      </a> */}
                      <div class="card-body">
                        <strong>
                          <i class="fas fa-book mr-1"></i> Education
                        </strong>

                        <p class="text-muted">
                          {profiles.data.profile.education}
                          {profiles.data.profile.specialization}
                        </p>

                        <hr></hr>

                        <strong>
                          <i class="fas fa-map-marker-alt mr-1"></i> Location
                        </strong>

                        <p class="text-muted">
                          {profiles.data.profile.address}
                        </p>

                        <hr></hr>

                        <strong>
                          <i class="fas fa-pencil-alt mr-1"></i> General
                          Information
                        </strong>

                        <p class="text-muted">
                          <span class="tag tag-danger">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Caste:{" "}
                            </span>{" "}
                            {profiles.data.profile.cast}
                          </span>
                          <br />
                          <span class="tag tag-success">
                            {" "}
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Age:
                            </span>{" "}
                            {profiles.data.profile.age}
                          </span>
                          <br />
                          <span class="tag tag-info">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Religion:
                            </span>{" "}
                            {profiles.data.profile.religion}
                          </span>
                          <br />
                          <span class="tag tag-info">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Sect:
                            </span>{" "}
                            {profiles.data.profile.sect}
                          </span>
                          <br />
                          <span class="tag tag-info">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Status:
                            </span>{" "}
                            {profiles.data.profile.martial}
                          </span>
                          <br />
                          <span class="tag tag-warning">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Job Location:
                            </span>{" "}
                            {profiles.data.profile.joblocation}
                          </span>
                        </p>

                        <hr></hr>

                        <strong>
                          <i class="far fa-file-alt mr-1"></i> Other Information
                        </strong>

                        <p class="text-muted">
                          <span class="tag tag-info">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Created By:
                            </span>{" "}
                            {profiles.data.profile.created}
                          </span>
                          <br />
                          <span class="tag tag-info">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Gender:
                            </span>{" "}
                            {profiles.data.profile.gender}
                          </span>
                          <br />
                          <span class="tag tag-info">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Height:
                            </span>{" "}
                            {profiles.data.profile.height}
                          </span>
                          <br />
                          <span class="tag tag-info">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Nationality:
                            </span>{" "}
                            {profiles.data.profile.nationality}
                          </span>
                          <br />
                          <span class="tag tag-info">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Parent's Status:
                            </span>{" "}
                            {profiles.data.profile.parentstatus}
                          </span>
                          <br />
                        </p>

                        <hr></hr>

                        <strong>
                          <i class="far fa-file-alt mr-1"></i> Favourites
                        </strong>

                        <p class="text-muted">
                          <span class="tag tag-info">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Favourites:
                            </span>{" "}
                            {profiles.data.favrioutes.length}
                          </span>
                          <br />
                        </p>

                        <hr></hr>

                        <strong>
                          <i class="far fa-file-alt mr-1"></i> Friends
                        </strong>

                        <p class="text-muted">
                          <span class="tag tag-info">
                            <span
                              style={{
                                fontSize: 16,
                                color: "black",
                                fontFamily: "cursive",
                              }}
                            >
                              Total Friends:
                            </span>{" "}
                            {profiles.data.friends.length}
                          </span>
                          <br />
                        </p>
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}

                  {/*   <!-- About Me Box --> */}

                  {/*  <!-- /.card --> */}
                </div>
                {/*   <!-- /.col --> */}
                <div class="col-md-9">
                  <div class="card">
                    <div class="card-header p-2">
                      <ul class="nav nav-pills">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            href="#activity"
                            data-toggle="tab"
                            style={{ backgroundColor: "#ed225c" }}
                          >
                            Gallery
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#timeline"
                            data-toggle="tab"
                          >
                            Favourites
                          </a>
                        </li>
                        {/* <li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Settings</a></li> */}
                      </ul>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div class="card-body">
                      <div class="tab-content">
                        <div class="active tab-pane" id="activity">
                          {/* <!-- Post --> */}

                          {/*  <!-- /.post --> */}

                          {/* <!-- Post --> */}
                          {/* <div class="post clearfix">
                      <div class="user-block">
                        <img class="img-circle img-bordered-sm" src= { logo1 } alt="User Image"/>
                        <span class="username">
                          <a href="#">Sarah Ross</a>
                          <a href="#" class="float-right btn-tool"><i class="fas fa-times"></i></a>
                        </span>
                        <span class="description">Sent you a message - 3 days ago</span>
                      </div>
                      {/* <!-- /.user-block --> */}
                          {/* <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore the hate as they create awesome
                        tools to help create filler text for everyone from bacon lovers
                        to Charlie Sheen fans.
                      </p>

                      <form class="form-horizontal">
                        <div class="input-group input-group-sm mb-0">
                          <input class="form-control form-control-sm" placeholder="Response"/>
                          <div class="input-group-append">
                            <button type="submit" class="btn btn-danger">Send</button>
                          </div>
                        </div> */}
                          {/* </form>
                    </div> */}
                          {/*   <!-- /.post --> */}

                          {/*  <!-- Post --> */}
                          <div class="post">
                            {/*  <!-- /.user-block --> */}
                            <div class="row mb-3">
                              {profiles.data.gallery
                                ? profiles.data.gallery.map((val) => (
                                    <div class="col-sm-6 mt-3">
                                      <img
                                        class="img-fluid"
                                        src={val}
                                        alt="Photo"
                                        style={{ height: 400, width: 400 }}
                                      />
                                    </div>
                                  ))
                                : null}

                              {/* <!-- /.col --> */}
                              {/* <div class="col-sm-6">
                                  <div class="row">
                                    <div class="col-sm-6">
                                      <img class="img-fluid mb-3" src={pic2} alt="Photo" />
                                      <img class="img-fluid" src={pic3} alt="Photo" />
                                    </div> */}
                              {/*  <!-- /.col --> */}
                              {/* <div class="col-sm-6">
                                      <img class="img-fluid mb-3" src={pic4} alt="Photo" />
                                      <img class="img-fluid" src={pic1} alt="Photo" />
                                    </div> */}
                              {/*  <!-- /.col --> */}
                              {/* </div> */}
                              {/*  <!-- /.row --> */}
                              {/* </div> */}
                              {/* <!-- /.col --> */}
                            </div>
                            {/*  <!-- /.row --> */}
                          </div>
                          {/*  <!-- /.post --> */}
                        </div>
                        {/*   <!-- /.tab-pane --> */}
                        <div class="tab-pane" id="timeline">
                          {/* <!-- The timeline --> */}

                          {/*  <!-- timeline time label --> */}

                          <div class="row d-flex align-items-stretch">
                            <div class="col-12 d-flex align-items-stretch">
                              {profiles.data.favrioutes
                                ? profiles.data.favrioutes.map((val) => (
                                    <div class="card bg-light m-2">
                                      <div
                                        class="card-header text-muted border-bottom-0"
                                        style={{ textAlign: "center" }}
                                      >
                                        {val.address}
                                      </div>
                                      <div class="card-body pt-0">
                                        <div class="row">
                                          <div class="col-7">
                                            <h2 class="lead">
                                              <b>{val.name}</b>
                                            </h2>
                                            <p class="text-muted text-sm">
                                              <b>About: </b> {val.education}{" "}
                                            </p>
                                            <ul class="ml-4 mb-0 fa-ul text-muted">
                                              <li class="small">
                                                <span class="fa-li">
                                                  <i class="fas fa-lg fa-building"></i>
                                                </span>{" "}
                                                Address: {val.address}
                                              </li>
                                              <li class="small">
                                                <span class="fa-li">
                                                  <i class="fas fa-lg fa-phone"></i>
                                                </span>{" "}
                                                Phone #: + 800 - 12 12 23 52
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="col-5 text-center">
                                            <img
                                              src={val.profilepic}
                                              alt=""
                                              class="img-circle img-fluid"
                                              style={{
                                                height: 150,
                                                width: 150,
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="card-footer">
                                        <div class="text-right">
                                          <a
                                            href="composeMessage.html"
                                            class="btn btn-sm bg-teal"
                                          >
                                            <i class="fas fa-comments"></i>
                                          </a>
                                          <Link
                                            to={{
                                              pathname: "/otherprofile",
                                              query: { userid: val.userid },
                                            }}
                                            class="btn btn-sm btn-primary"
                                            style={{
                                              backgroundColor: "#ed225c",
                                            }}
                                          >
                                            <i class="fas fa-user"></i> View
                                            Profile
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  ))
                                : null}
                            </div>
                          </div>
                          {/*  <!-- /.timeline-label -->
                      <!-- timeline item --> */}
                          {/* <div>
                              <i class="fas fa-envelope bg-primary"></i>

                              <div class="timeline-item">
                                <span class="time">
                                  <i class="far fa-clock"></i> 12:05
                                </span>

                                <h3 class="timeline-header">
                                  <a href="#">Support Team</a> sent you an email
                                </h3>

                                <div class="timeline-body">Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...</div>
                                <div class="timeline-footer">
                                  <a href="#" class="btn btn-primary btn-sm">
                                    Read more
                                  </a>
                                  <a href="#" class="btn btn-danger btn-sm">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div> */}
                          {/* <!-- END timeline item -->
                      <!-- timeline item --> */}
                          {/* <div>
                              <i class="fas fa-user bg-info"></i>

                              <div class="timeline-item">
                                <span class="time">
                                  <i class="far fa-clock"></i> 5 mins ago
                                </span>

                                <h3 class="timeline-header border-0">
                                  <a href="#">Sarah Young</a> accepted your friend request
                                </h3>
                              </div>
                            </div> */}
                          {/*  <!-- END timeline item -->
                      <!-- timeline item --> */}
                          {/* <div>
                              <i class="fas fa-comments bg-warning"></i>

                              <div class="timeline-item">
                                <span class="time">
                                  <i class="far fa-clock"></i> 27 mins ago
                                </span>

                                <h3 class="timeline-header">
                                  <a href="#">Jay White</a> commented on your post
                                </h3>

                                <div class="timeline-body">Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!</div>
                                <div class="timeline-footer">
                                  <a href="#" class="btn btn-warning btn-flat btn-sm">
                                    View comment
                                  </a>
                                </div>
                              </div>
                            </div> */}
                          {/* <!-- END timeline item -->
                      <!-- timeline time label --> */}
                          {/* <div class="time-label">
                              <span class="bg-success">3 Jan. 2014</span>
                            </div> */}
                          {/*  <!-- /.timeline-label -->
                      <!-- timeline item --> */}
                          {/* <div>
                              <i class="fas fa-camera bg-purple"></i>

                              <div class="timeline-item">
                                <span class="time">
                                  <i class="far fa-clock"></i> 2 days ago
                                </span>

                                <h3 class="timeline-header">
                                  <a href="#">Mina Lee</a> uploaded new photos
                                </h3>

                                <div class="timeline-body">
                                  <img src="http://placehold.it/150x100" alt="..." />
                                  <img src="http://placehold.it/150x100" alt="..." />
                                  <img src="http://placehold.it/150x100" alt="..." />
                                  <img src="http://placehold.it/150x100" alt="..." />
                                </div>
                              </div>
                            </div> */}
                          {/* <!-- END timeline item --> */}
                          {/* <div>
                              <i class="far fa-clock bg-gray"></i>
                            </div> */}
                        </div>
                        {/*  <!-- /.tab-pane --> */}

                        <div class="tab-pane" id="settings">
                          <form class="form-horizontal">
                            <div class="form-group row">
                              <label
                                for="inputName"
                                class="col-sm-2 col-form-label"
                              >
                                Name
                              </label>
                              <div class="col-sm-10">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="inputName"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label
                                for="inputEmail"
                                class="col-sm-2 col-form-label"
                              >
                                Email
                              </label>
                              <div class="col-sm-10">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="inputEmail"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label
                                for="inputName2"
                                class="col-sm-2 col-form-label"
                              >
                                Name
                              </label>
                              <div class="col-sm-10">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="inputName2"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label
                                for="inputExperience"
                                class="col-sm-2 col-form-label"
                              >
                                Experience
                              </label>
                              <div class="col-sm-10">
                                <textarea
                                  class="form-control"
                                  id="inputExperience"
                                  placeholder="Experience"
                                ></textarea>
                              </div>
                            </div>
                            <div class="form-group row">
                              <label
                                for="inputSkills"
                                class="col-sm-2 col-form-label"
                              >
                                Skills
                              </label>
                              <div class="col-sm-10">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="inputSkills"
                                  placeholder="Skills"
                                />
                              </div>
                            </div>
                            <div class="form-group row">
                              <div class="offset-sm-2 col-sm-10">
                                <div class="checkbox">
                                  <label>
                                    <input type="checkbox" /> I agree to the{" "}
                                    <a href="#">terms and conditions</a>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="form-group row">
                              <div class="offset-sm-2 col-sm-10">
                                <button type="submit" class="btn btn-danger">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/*  <!-- /.tab-pane --> */}
                      </div>
                      {/* <!-- /.tab-content --> */}
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.nav-tabs-custom --> */}
                </div>
                {/* <!-- /.col --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
          </section>
          {/* <!-- /.content --> */}
        </div>
        {/* <!-- /.content-wrapper --> */}
        <footer class="main-footer">
          <strong>
            Copyright &copy; 2021 <a href="www.quellxcode.com"> QuellxCode</a>.
          </strong>
          All rights reserved.
        </footer>

        {/*   <!-- Control Sidebar --> */}
        <aside class="control-sidebar control-sidebar-dark">
          {/* <!-- Control sidebar content goes here --> */}
        </aside>
        {/* <!-- /.control-sidebar --> */}
      </div>
      {/* <!-- ./wrapper --> */}
    </div>
  );
}
