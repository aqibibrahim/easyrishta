import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/150X150-LOGO.png";

import chatlogo from "./images/BGChat.jpg";

import { db } from "../../src/pages/firebase-config";
import firebase from "firebase";
// import { useQuery } from "react-query";

export default function Char() {
  //   useEffect(() => {});
  // var docsid = "";

  const [selectedUser, setSelectedUSer] = useState("");
  const [message, setMessage] = useState("");
  const [chat_array, setChat_array] = useState("");
  // var accepted_chat_array = [];
  var chat_ids = [];
  var [lastMessage, setLastMessage] = useState("");
  // var [lastSeen, setLastSeen] = useState("");

  // const GetChats = useQuery(
  //   "getchats",
  //   () => {
  //     const userid = localStorage.getItem("userid");
  //     //console.log(localStorage.getItem("userid"));
  //     return db.collection("users").doc(userid).get();
  //   },
  //   {
  //     select: (querySnapshot) => {
  //       console.log("Chat ids", querySnapshot.data().chat_ids);
  //       const doc = {
  //         // accepted_chat_array: querySnapshot.data().accepted_chat_request,
  //         chat_ids: querySnapshot.data().chat_ids,
  //       };
  //       // console.log("userData", doc);
  //       chat_ids = doc.chat_ids;
  //       accepted_chat_array = doc.accepted_chat_array;
  //       console.log("Accepted char array", accepted_chat_array);
  //       console.log(chat_ids);
  //       return doc;
  //     },
  //     onError: (error) => console.log("Error getting documents: ", error),
  //   }
  // );
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

  const onSelectUesr = async (userid) => {
    setSelectedUSer(userid);
    console.log(userid);

    // if (chat_ids.includes(selectedUser + localStorage.getItem("userid"))) {
    db.collection("chats")
      .doc(userid)
      .collection("messages")
      // .orderBy("timeStamp", "asc")
      .onSnapshot((val) => {
        const messages = [];
        console.log("true If");
        var bar = new Promise((resolve, reject) => {
          val.docs.forEach((mes, index, array) => {
            messages.push(mes.data());
            if (index === array.length - 1) resolve();
          });
        });
        bar.then(() => {
          console.log({ messages });
          setChat_array(messages);
          console.log("Last Message", messages[messages.length - 1]);
          setLastMessage(messages[messages.length - 1].messageText);
          // secondsToHms(messages[messages.length - 1].timeStamp.seconds);
          // for(var i=0;i<messages.length;i++){
          //   console.log("Last Message",messages[messages.length-1]);
          // }
        });
      });
    // }
    // else if (
    //   chat_ids.includes(localStorage.getItem("userid") + selectedUser)
    // ) {
    //   db.collection("chat")
    //     .doc(localStorage.getItem("userid") + selectedUser)
    //     .collection("messages")
    //     .orderBy("timeStamp", "asc")
    //     .onSnapshot((val) => {
    //       const messages = [];
    //       console.log("true else");
    //       var bar = new Promise((resolve, reject) => {
    //         val.docs.forEach((mes, index, array) => {
    //           messages.push(mes.data());
    //           if (index === array.length - 1) resolve();
    //         });
    //       });
    //       bar.then(() => {
    //         console.log({ messages });
    //         setChat_array(messages);
    //         console.log("Last Message", messages[messages.length - 1]);
    //         // setLastMessage(messages[messages.length - 1].messageText);
    //         // secondsToHms(messages[messages.length - 1].timeStamp.seconds);
    //         // //  for(var i=0;i<messages.length;i++){

    //         // }
    //       });
    //     });
    // }
  };

  const handleSendMessage = async () => {
    db.collection("chats")
      .doc(localStorage.getItem("userid") + selectedUser)
      .collection("messages")
      .get()
      .then((res) => {
        if (res.empty) {
          db.collection("chats")
            .doc(selectedUser + localStorage.getItem("userid"))
            .collection("messages")
            .get()
            .then((res2) => {
              if (res2.empty) {
                db.collection("chats")
                  .doc(selectedUser + localStorage.getItem("userid"))
                  .collection("messages")
                  .add({
                    messageText: message,
                    senderId: localStorage.getItem("userid"),
                    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                  })
                  .then((res3) => {
                    console.log(res3);
                    db.collection("users")
                      .doc(localStorage.getItem("userid"))
                      .update({
                        chat_ids: firebase.firestore.FieldValue.arrayUnion(
                          selectedUser + localStorage.getItem("userid")
                        ),
                      });
                    db.collection("users")
                      .doc(selectedUser)
                      .update({
                        chat_ids: firebase.firestore.FieldValue.arrayUnion(
                          selectedUser + localStorage.getItem("userid")
                        ),
                      });
                  });
              } else {
                db.collection("chats")
                  .doc(selectedUser + localStorage.getItem("userid"))
                  .collection("messages")
                  .add({
                    messageText: message,
                    senderId: localStorage.getItem("userid"),
                    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                  });
              }
              console.log("preChat2", res2.empty);
            });
        } else {
          db.collection("chats")
            .doc(localStorage.getItem("userid") + selectedUser)
            .collection("messages")
            .add({
              messageText: message,
              senderId: localStorage.getItem("userid"),
              timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then((res) => {
              console.log(res);
              db.collection("users")
                .doc(localStorage.getItem("userid"))
                .update({
                  chat_ids: firebase.firestore.FieldValue.arrayUnion(
                    localStorage.getItem("userid") + selectedUser
                  ),
                });
              db.collection("users")
                .doc(selectedUser)
                .update({
                  chat_ids: firebase.firestore.FieldValue.arrayUnion(
                    localStorage.getItem("userid") + selectedUser
                  ),
                });
            });
        }
        console.log("preChat", res.empty);
      });
  };
  // const secondsToHms = (d) => {
  //   console.clear();
  //   d = Number(d);
  //   var date1 = new Date(d * 1000);
  //   var date2 = new Date(Date.now());

  //   // To calculate the time difference of two dates
  //   var Difference_In_Time = date2.getTime() - date1.getTime();

  //   // To calculate the no. of days between two dates
  //   console.log(convertHMS(Difference_In_Time / 1000));
  //   // console.log(Difference_In_Seconds);

  //   function convertHMS(value) {
  //     const sec = parseInt(value, 10); // convert value to number if it's string
  //     let hours = Math.floor(sec / 3600); // get hours
  //     let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  //     let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  //     // add 0 if value < 10; Example: 2 => 02
  //     if (hours < 10) {
  //       hours = "0" + hours;
  //     }
  //     if (minutes < 10) {
  //       minutes = "0" + minutes;
  //     }
  //     if (seconds < 10) {
  //       seconds = "0" + seconds;
  //     }

  //     if (hours <= 0 && minutes <= 1) {
  //       console.log("Active");
  //       setLastSeen("Active");
  //     } else if (hours <= 0 && minutes <= 15) {
  //       console.log(`last seen ${minutes} min ago`);
  //       setLastSeen(`last seen ${minutes} min ago`);
  //     } else if (hours <= 0 && minutes <= 30) {
  //       console.log(`last seen 15 min ago`);
  //       setLastSeen(`last seen 15 min ago`);
  //     } else if (hours <= 1 && minutes <= 0) {
  //       console.log(`last seen 30 min ago`);
  //       setLastSeen(`last seen 30 min ago`);
  //     } else if (hours <= 2) {
  //       console.log(`last seen 1 hr ago`);
  //       setLastSeen(`last seen 1 hr ago`);
  //     } else if (hours <= 12) {
  //       console.log(`last seen few hrs ago`);
  //       setLastSeen(`last seen few hrs ago`);
  //     } else {
  //       console.log(`last seen days ago`);
  //       setLastSeen(`last seen days ago`);
  //     }

  //     return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
  //   }
  // };
  return (
    <div>
      <div class="wrapper">
        {/* <!-- Navbar --> */}
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
          {/* <!-- Left navbar links --> */}
          <ul class="navbar-nav">
            {/* <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu">
                <i class="fas fa-bars"></i>
              </a>
            </li> */}
            <li class="nav-item d-none d-sm-inline-block">
              <a href="/" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
              <a href="/MatchMaking" class="nav-link">
                {" "}
                Match Making{" "}
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

            {/* <!-- Notifications Dropdown Menu --> */}
            <li class="nav-item dropdown">
              {/* <Link 
                    to={"/notifications"}
                    class="nav-link"
                    style={{ color: "black" }}

                    
                  /> */}
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
            <li class="nav-item">
              <p
                class="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
              >
                <i class="fas fa-th-large"></i>
              </p>
            </li>
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
              style={{
                height: "auto",
                width: "70%",
                paddingLeft: "30%",
              }}
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
                  style={{ height: "2.1rem", width: "2.1rem" }}
                />
              </div>
              <div class="info">
                <Link
                  to={"/profile"}
                  class="d-block topbar"
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
                    <i class="nav-icon fas fa-heart"></i>
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
                    <i class="nav-icon fas fa-comment"></i>
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
                    <i class="nav-icon fas fa-refresh"></i>
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
                    <i class="nav-icon fas fa-bell"></i>
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
                  <h1>Chat Room</h1>
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

          <section class="content d-flex  justify-content-center">
            <div class="row">
              <div class="col-md-2"></div>
            </div>
          </section>
          {/* <!-- Main content --> */}
          <section class="content d-flex ">
            {/* <!-- Default box --> */}
            <div
              class="row d-flex"
              style={{
                width: "30%",
                flexDirection: "column",
                backgroundColor: "antiquewhite",
                margin: "1%",
                borderRadius: 10,
              }}
            >
              <form class="mb-2 ml-3 mt-2">
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

              {chat_ids.map((val) => (
                <div
                  class="ml-2 mt-2"
                  style={
                    {
                      // margin: "20px",
                    }
                  }
                  onClick={() => {
                    onSelectUesr(val.chatid);
                  }}
                >
                  <div class="d-flex">
                    <img
                      alt="User pic"
                      src={val.userpic}
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                      }}
                    />{" "}
                    <div class="d-flex flex-row pl-2">
                      <p>
                        <span className="font-weight-bold">
                          {val.chatperson}
                        </span>{" "}
                        <br />
                        <span
                          style={{
                            fontSize: "12px",
                            maxWidth: "15ch",
                            display: "inline-block",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {
                            /* {messages[messages.length - 1].messageText} */
                            lastMessage
                          }
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* <img
                    src={val.userpic}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <label style={{ fontSize: "17px", margin: "10px", fontWeight:400 }}>
                    {" "}
                    {val.name}
                  </label> */}
                </div>
              ))}
            </div>
            <div
              class="row d-flex  justify-content-center w-100 ml-1 mt-2"
              style={{ flexDirection: "column" }}
            >
              <div class="d-flex align-items-stretch flex-wrap justify-content-center">
                <div
                  class=" card-body ml-2 mr-2 mt-2 p-2"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "100%",
                  }}
                >
                  <div class="d-flex flex-row align-items-center">
                    <div>
                      <img
                        alt="Logo"
                        src="https://firebasestorage.googleapis.com/v0/b/easyrishta-29888.appspot.com/o/easyrishta%2F1622704672561_profile.jpg?alt=media&token=bc13652d-cff3-4686-8835-3cc258c1e085"
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div
                      class="pb-3 pt-3  ml-2 mr-2 font-weight-bold"
                      style={{
                        backgroundColor: "white",
                        borderRadius: "4px",
                        color: "grey",
                      }}
                    >
                      Aqib Ibrahim <br />{" "}
                      {/* <span style={{ fontSize: "12px" }}>{lastSeen}</span> */}
                    </div>
                  </div>
                </div>

                <div
                  class="card ml-2 mb-2 mr-2 mt-1 w-100"
                  style={{
                    maxHeight: "500px",
                    overflow: "overlay",
                    marginLeft: "2.5%",
                    paddingLeft: "1%",
                    paddingRight: "3%",
                    backgroundColor: "white",
                    backgroundImage: `url(${chatlogo})`,

                    display: selectedUser ? "" : "none",
                  }}
                >
                  {chat_array.length > 0 ? (
                    chat_array.map((val) => (
                      <div
                        style={{
                          justifyContent:
                            val.senderId === localStorage.getItem("userid")
                              ? "right"
                              : "left",
                          display: "flex",
                        }}
                      >
                        <p
                          style={{
                            width: "fit-content",
                            // minWidth: "200px",
                            border:
                              val.senderId === localStorage.getItem("userid")
                                ? "3px solid green"
                                : "3px solid deeppink",
                            color:
                              val.senderId === localStorage.getItem("userid")
                                ? "black"
                                : "black",
                            backgroundColor:
                              val.senderId === localStorage.getItem("userid")
                                ? "grey"
                                : "grey",

                            padding: "8px",
                            borderRadius: "15px",
                            maxWidth: "350px",
                            fontSize: "14px",
                          }}
                        >
                          {val.messageText}
                        </p>
                      </div>
                    ))
                  ) : (
                    <h1>No Message Found</h1>
                  )}
                </div>
              </div>
              <div
                class="form-inline ml-1 mr-2 d-flex align-items-stretch flex-wrap justify-content-center"
                style={{ margin: "0.5%" }}
              >
                <div
                  class="input-group input-group-sm w-100"
                  style={{ display: selectedUser ? "" : "none" }}
                >
                  <input
                    class="form-control form-control-navbar"
                    type="search"
                    style={{ borderRadius: "50px" }}
                    placeholder="Type Message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-navbar"
                      type="submit"
                      style={{
                        background: "#FCD6E1",
                        borderRadius: "50px",
                      }}
                      onClick={handleSendMessage}
                    >
                      {/* <i class="fa fa-paper-plane"></i> */}
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
