import React, { useEffect, useState } from "react";
import logo from "./images/150X150-LOGO.png";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { db } from "../../src/pages/firebase-config";

export default function Preferences() {
  const [preferences, setPreferences] = useState({
    cast: "Abbasi",
    gender: "male",
    maximumage: "18",
    minimumage: "18",
    maximumheight: "4.6",
    minmumheight: "4.6",
    religion: "Islam",
    sect: "Sunni",
    education: "Matriculation",
    nationality: "Pakistani",
    location: "lahore",
    userid: localStorage.getItem("userid"),
  });

  const [preferencesId, setPreferencesId] = useState("");

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

  useEffect(() => {
    db.collection("prefernces")
      .where("userid", "==", localStorage.getItem("userid"))
      .get()
      .then((doc) => {
        if (doc.docs.length > 0) {
          setPreferences(doc.docs[0].data());
          setPreferencesId(doc.docs[0].id);
        }
      });
  }, []);
  // if (!profiles.data) return <div>Loading...</div>;

  // console.warn("profiles ::  ", profiles.data);

  const handleChange = async (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    if (preferencesId) {
      db.collection("prefernces").doc(preferencesId).set(preferences);
      swal("", "Data Update Successfully", "success");
    } else {
      if (await db.collection("prefernces").add(preferences)) {
        swal("", "Data Save Successfully", "success");
      }
    }
  };
  return (
    <div>
      <body class="hold-transition sidebar-mini" />
      <div class="wrapper">
        {/*  <!-- Navbar --> */}
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
          {/*   <!-- Left navbar links --> */}
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
              alt="AdminLTE Logo"
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
                  <h1>Set Your Preferences</h1>
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
                {/*   <!-- /.col --> */}
                <div class="col-md-12">
                  <div class="card">
                    {/* <!-- /.card-header --> */}
                    <div class="card-body">
                      <div class="tab-content">
                        <div class="form-group row">
                          <label class="col-lg-2 col-form-label">Cast:</label>
                          <div class="col-lg-10">
                            <select
                              name="cast"
                              class="form-control"
                              onChange={handleChange}
                              value={preferences.cast}
                            >
                              <option value="Abbasi">Abbasi</option>
                              <option value="Abidi">Abidi</option>
                              <option value="Abro">Abro</option>
                              <option value="Achakzai">Achakzai</option>
                              <option value="Afridi">Afridi</option>
                              <option value="Agha">Agha</option>
                              <option value="Akakhel">Akakhel</option>
                              <option value="Alizai">Alizai</option>
                              <option value="Alpial">Alpial</option>
                              <option value="Alvi">Alvi</option>
                              <option value="Ansari">Ansari</option>
                              <option value="Arain">Arain</option>
                              <option value="Askari">Askari</option>
                              <option value="Aulakh">Aulakh</option>
                              <option value="Awan">Awan</option>
                              <option value="Babar">Babar</option>
                              <option value="Badrashi">Badrashi</option>
                              <option value="Bahmani">Bahmani</option>
                              <option value="Bahrani tribe">
                                Bahrani tribe
                              </option>
                              <option value="Baig">Baig</option>
                              <option value="Bajwa">Bajwa</option>
                              <option value="Bangash">Bangash</option>
                              <option value="Bangial">Bangial</option>
                              <option value="Bangulzai tribe">
                                Bangulzai tribe
                              </option>
                              <option value="Banuchi">Banuchi</option>
                              <option value="Baqri">Baqri</option>
                              <option value="Barlas">Barlas</option>
                              <option value="Barsar">Barsar</option>
                              <option value="Basra">Basra</option>
                              <option value="Batwal">Batwal</option>
                              <option value="Bettani">Bettani</option>
                              <option value="Bhabra">Bhabra</option>
                              <option value="Bhait">Bhait</option>
                              <option value="Bhan">Bhan</option>
                              <option value="Bhangar">Bhangar</option>
                              <option value="Bhati">Bhati</option>
                              <option value="Bhatia">Bhatia</option>
                              <option value="Bhatti">Bhatti</option>
                              <option value="Bhutta">Bhutta</option>
                              <option value="Bhutto">Bhutto</option>
                              <option value="Bizenjo tribe">
                                Bizenjo tribe
                              </option>
                              <option value="Bosan">Bosan</option>
                              <option value="Bukhari">Bukhari</option>
                              <option value="Buledi">Buledi</option>
                              <option value="Bulfati">Bulfati</option>
                              <option value="Buriro">Buriro</option>
                              <option value="Burki">Burki</option>
                              <option value="Butt">Butt</option>
                              <option value="Buttar">Buttar</option>
                              <option value="Buzdar">Buzdar</option>
                              <option value="Chachar">Chachar</option>
                              <option value="Chamkanni">Chamkanni</option>
                              <option value="Chandio">Chandio</option>
                              <option value="Chandio (Baloch)">
                                Chandio (Baloch)
                              </option>
                              <option value="Chatha">Chatha</option>
                              <option value="Chaudhry">Chaudhry</option>
                              <option value="Chauhan">Chauhan</option>
                              <option value="Cheema">Cheema</option>
                              <option value="Chhalgari">Chhalgari</option>
                              <option value="Chishti">Chishti</option>
                              <option value="Chughtai">Chughtai</option>
                              <option value="Chughtai">Chughtai</option>
                              <option value="Damanis">Damanis</option>
                              <option value="Dar">Dar</option>
                              <option value="Darzada">Darzada</option>
                              <option value="Dashti">Dashti</option>
                              <option value="Daudpota">Daudpota</option>
                              <option value="Daulat Khel">Daulat Khel</option>
                              <option value="Davi">Davi</option>
                              <option value="Dawar">Dawar</option>
                              <option value="Dehwar">Dehwar</option>
                              <option value="Derawal">Derawal</option>
                              <option value="Dewala">Dewala</option>
                              <option value="Dhanial">Dhanial</option>
                              <option value="Dhariwal">Dhariwal</option>
                              <option value="Dhillon">Dhillon</option>
                              <option value="Dilazak">Dilazak</option>
                              <option value="Dogar">Dogar</option>
                              <option value="Domki">Domki</option>
                              <option value="Duggal">Duggal</option>
                              <option value="Durrani">Durrani</option>
                              <option value="Effendi">Effendi</option>
                              <option value="Ehsan">Ehsan</option>
                              <option value="Fareedi">Fareedi</option>
                              <option value="Farooqi">Farooqi</option>
                              <option value="Firdausi">Firdausi</option>
                              <option value="Gabol">Gabol</option>
                              <option value="Gadhi">Gadhi</option>
                              <option value="Gakhar">Gakhar</option>
                              <option value="Gandapur">Gandapur</option>
                              <option value="Gardezi">Gardezi</option>
                              <option value="Gashkori">Gashkori</option>
                              <option value="Ghazali">Ghazali</option>
                              <option value="Ghazini">Ghazini</option>
                              <option value="Gilani">Gilani</option>
                              <option value="Gill">Gill</option>
                              <option value="Golo">Golo</option>
                              <option value="Gujjar">Gujjar</option>
                              <option value="Gujjar">Gujjar</option>
                              <option value="Gul">Gul</option>
                              <option value="Gurmani">Gurmani</option>
                              <option value="Hamadani">Hamadani</option>
                              <option value="Hameed">Hameed</option>
                              <option value="Hashmi">Hashmi</option>
                              <option value="Hasni">Hasni</option>
                              <option value="Hassan">Hassan</option>
                              <option value="Hingora">Hingora</option>
                              <option value="Hingorja">Hingorja</option>
                              <option value="Hussain">Hussain</option>
                              <option value="Hussaini">Hussaini</option>
                              <option value="Hyderi">Hyderi</option>
                              <option value="Ibrahim">Ibrahim</option>
                              <option value="Idrisi">Idrisi</option>
                              <option value="Indra">Indra</option>
                              <option value="Iqbal">Iqbal</option>
                              <option value="Isa Khel">Isa Khel</option>
                              <option value="Isfahani">Isfahani</option>
                              <option value="Jadgal">Jadgal</option>
                              <option value="Jadoon">Jadoon</option>
                              <option value="Jafari">Jafari</option>
                              <option value="Jagirani">Jagirani</option>
                              <option value="Jalali">Jalali</option>
                              <option value="Jalbani">Jalbani</option>
                              <option value="Jamali">Jamali</option>
                              <option value="Jamshidi">Jamshidi</option>
                              <option value="Janjua">Janjua</option>
                              <option value="Jarral">Jarral</option>
                              <option value="Jarwar">Jarwar</option>
                              <option value="Jaspal">Jaspal</option>
                              <option value="Jatoi">Jatoi</option>
                              <option value="Jatt">Jatt</option>
                              <option value="Jhalawan">Jhalawan</option>
                              <option value="Jiskani">Jiskani</option>
                              <option value="Jogi">Jogi</option>
                              <option value="Johiya">Johiya</option>
                              <option value="Junejo">Junejo</option>
                              <option value="Jutt">Jutt</option>
                              <option value="Kahloon">Kahloon</option>
                              <option value="Kakakhel">Kakakhel</option>
                              <option value="Kakar">Kakar</option>
                              <option value="Kakazai">Kakazai</option>
                              <option value="Kalhoro">Kalhoro</option>
                              <option value="Kalmati">Kalmati</option>
                              <option value="Kalpar">Kalpar</option>
                              <option value="Kalwar">Kalwar</option>
                              <option value="Kambarzahi">Kambarzahi</option>
                              <option value="Kamboh">Kamboh</option>
                              <option value="Kashani">Kashani</option>
                              <option value="Kashmiri Shaikh">
                                Kashmiri Shaikh
                              </option>
                              <option value="Kasi">Kasi</option>
                              <option value="Kathia">Kathia</option>
                              <option value="Kayani">Kayani</option>
                              <option value="Kazmi">Kazmi</option>
                              <option value="Kenagzai">Kenagzai</option>
                              <option value="Kermani">Kermani</option>
                              <option value="Khagga">Khagga</option>
                              <option value="Khakwani">Khakwani</option>
                              <option value="Khalil (tribe)">
                                Khalil (tribe)
                              </option>
                              <option value="Khalol">Khalol</option>
                              <option value="Khan">Khan</option>
                              <option value="Khan-e-Qalat">Khan-e-Qalat</option>
                              <option value="Khandowa">Khandowa</option>
                              <option value="Khara">Khara</option>
                              <option value="Kharal">Kharal</option>
                              <option value="Kharoti">Kharoti</option>
                              <option value="Khaskheli">Khaskheli</option>
                              <option value="Khattak">Khattak</option>
                              <option value="Khawaja">Khawaja</option>
                              <option value="Khetran">Khetran</option>
                              <option value="Khizarkhel">Khizarkhel</option>
                              <option value="Khokhar">Khokhar</option>
                              <option value="Khorasani">Khorasani</option>
                              <option value="Khosa">Khosa</option>
                              <option value="Khoso (Baloch)">
                                Khoso (Baloch)
                              </option>
                              <option value="Khudiadadzai">Khudiadadzai</option>
                              <option value="Khuhro">Khuhro</option>
                              <option value="Khulozai">Khulozai</option>
                              <option value="Khushk">Khushk</option>
                              <option value="Khushk (Baloch)">
                                Khushk (Baloch)
                              </option>
                              <option value="Kirmani">Kirmani</option>
                              <option value="Korai">Korai</option>
                              <option value="Kuchis">Kuchis</option>
                              <option value="Kumbhar">Kumbhar</option>
                              <option value="Kundi">Kundi</option>
                              <option value="Kurd">Kurd</option>
                              <option value="Laar">Laar</option>
                              <option value="Lakhani">Lakhani</option>
                              <option value="Langah ( Baloch )">
                                Langah ( Baloch )
                              </option>
                              <option value="Langhani">Langhani</option>
                              <option value="Lango">Lango</option>
                              <option value="Langra">Langra</option>
                              <option value="Langrial">Langrial</option>
                              <option value="Lanjwani">Lanjwani</option>
                              <option value="Lau">Lau</option>
                              <option value="Leel">Leel</option>
                              <option value="Lehri">Lehri</option>
                              <option value="Lodhi">Lodhi</option>
                              <option value="Lohani (Rohani)">
                                Lohani (Rohani)
                              </option>
                              <option value="Loharani">Loharani</option>
                              <option value="Loharani (khel)">
                                Loharani (khel)
                              </option>
                              <option value="Lone">Lone</option>
                              <option value="Longi">Longi</option>
                              <option value="Lund">Lund</option>
                              <option value="Machi">Machi</option>
                              <option value="Maghdud Khel">Maghdud Khel</option>
                              <option value="Magsi">Magsi</option>
                              <option value="Mahesar">Mahesar</option>
                              <option value="Mahmud Khel">Mahmud Khel</option>
                              <option value="Mahsud">Mahsud</option>
                              <option value="Mahtam">Mahtam</option>
                              <option value="Makhdoom">Makhdoom</option>
                              <option value="Malak">Malak</option>
                              <option value="Malik">Malik</option>
                              <option value="Malik clan (Kashmir)">
                                Malik clan (Kashmir)
                              </option>
                              <option value="Mamund">Mamund</option>
                              <option value="Mandokhel">Mandokhel</option>
                              <option value="Mangi">Mangi</option>
                              <option value="Marri">Marri</option>
                              <option value="Marwat">Marwat</option>
                              <option value="Masood">Masood</option>
                              <option value="Mazari">Mazari</option>
                              <option value="Meghwar">Meghwar</option>
                              <option value="Memon">Memon</option>
                              <option value="Memon people">Memon people</option>
                              <option value="Mengal">Mengal</option>
                              <option value="Meo">Meo</option>
                              <option value="Mian">Mian</option>
                              <option value="Miana">Miana</option>
                              <option value="Mighiana">Mighiana</option>
                              <option value="Minhas">Minhas</option>
                              <option value="Mir">Mir</option>
                              <option value="Mirani">Mirani</option>
                              <option value="Mirbahar">Mirbahar</option>
                              <option value="Mirwani">Mirwani</option>
                              <option value="Mirza">Mirza</option>
                              <option value="Montazeri">Montazeri</option>
                              <option value="Mousavi">Mousavi</option>
                              <option value="Mughal">Mughal</option>
                              <option value="Mugheri">Mugheri</option>
                              <option value="Mugheri (Baloch)">
                                Mugheri (Baloch)
                              </option>
                              <option value="Muhammad Shahi">
                                Muhammad Shahi
                              </option>
                              <option value="Muker">Muker</option>
                              <option value="Musakhel">Musakhel</option>
                              <option value="Muslim Khatris">
                                Muslim Khatris
                              </option>
                              <option value="Najafi">Najafi</option>
                              <option value="Nanda">Nanda</option>
                              <option value="Naqvi">Naqvi</option>
                              <option value="Niazi">Niazi</option>
                              <option value="Nishapuri">Nishapuri</option>
                              <option value="Noon">Noon</option>
                              <option value="Noorani">Noorani</option>
                              <option value="Noorzai">Noorzai</option>
                              <option value="Nothazai">Nothazai</option>
                              <option value="Orakzai">Orakzai</option>
                              <option value="Osmani">Osmani</option>
                              <option value="Panni (Balailzai)">
                                Panni (Balailzai)
                              </option>
                              <option value="Panwar">Panwar</option>
                              <option value="Paracha">Paracha</option>
                              <option value="Parihar">Parihar</option>
                              <option value="Pasha">Pasha</option>
                              <option value="Passi">Passi</option>
                              <option value="Patel">Patel</option>
                              <option value="Pirzada">Pirzada</option>
                              <option value="Pitafi">Pitafi</option>
                              <option value="Popalzai">Popalzai</option>
                              <option value="Qadiri">Qadiri</option>
                              <option value="Qaisrani">Qaisrani</option>
                              <option value="Qazi">Qazi</option>
                              <option value="Qizilbash">Qizilbash</option>
                              <option value="Qureshi">Qureshi</option>
                              <option value="Rahija">Rahija</option>
                              <option value="Rahmanzai">Rahmanzai</option>
                              <option value="Raisani">Raisani</option>
                              <option value="Raja">Raja</option>
                              <option value="Rajput">Rajput</option>
                              <option value="Ranjha">Ranjha</option>
                              <option value="Raronjah">Raronjah</option>
                              <option value="Ravani">Ravani</option>
                              <option value="Razavi">Razavi</option>
                              <option value="Reza">Reza</option>
                              <option value="Rind">Rind</option>
                              <option value="Rind (Baloch)">
                                Rind (Baloch)
                              </option>
                              <option value="Rizvi">Rizvi</option>
                              <option value="Rodini">Rodini</option>
                              <option value="Rouhani">Rouhani</option>
                              <option value="Roy">Roy</option>
                              <option value="Sadat">Sadat</option>
                              <option value="Sadduzai">Sadduzai</option>
                              <option value="Sadozai">Sadozai</option>
                              <option value="Saeed">Saeed</option>
                              <option value="Sahi clan">Sahi clan</option>
                              <option value="Sahni">Sahni</option>
                              <option value="Saifi">Saifi</option>
                              <option value="Sajjadi">Sajjadi</option>
                              <option value="Salarzai">Salarzai</option>
                              <option value="Salehi">Salehi</option>
                              <option value="Samejo">Samejo</option>
                              <option value="Samma">Samma</option>
                              <option value="Sandhu">Sandhu</option>
                              <option value="Sangha">Sangha</option>
                              <option value="Sangha">Sangha</option>
                              <option value="Sanghera">Sanghera</option>
                              <option value="Sanjrani">Sanjrani</option>
                              <option value="Sanwal">Sanwal</option>
                              <option value="Sarbani">Sarbani</option>
                              <option value="Sarpara">Sarpara</option>
                              <option value="Sasooli">Sasooli</option>
                              <option value="Satti">Satti</option>
                              <option value="Sayyid">Sayyid</option>
                              <option value="Sethi">Sethi</option>
                              <option value="Sethwi">Sethwi</option>
                              <option value="Shah">Shah</option>
                              <option value="Shahwani">Shahwani</option>
                              <option value="Shaikh">Shaikh</option>
                              <option value="Shambhani">Shambhani</option>
                              <option value="Shanzay">Shanzay</option>
                              <option value="Shar">Shar</option>
                              <option value="Sheedi">Sheedi</option>
                              <option value="Sheikh (Punjabi)">
                                Sheikh (Punjabi)
                              </option>
                              <option value="Sheikh">Sheikh</option>
                              <option value="Sehgal">Sehgal</option>
                              <option value="Sherzai">Sherzai</option>
                              <option value="Shilmani">Shilmani</option>
                              <option value="Shirani">Shirani</option>
                              <option value="Shirazi">Shirazi</option>
                              <option value="Sial">Sial</option>
                              <option value="Siddiqui">Siddiqui</option>
                              <option value="Sidhu">Sidhu</option>
                              <option value="Singh">Singh</option>
                              <option value="Sipra">Sipra</option>
                              <option value="Sirki">Sirki</option>
                              <option value="Sistani">Sistani</option>
                              <option value="Siyal">Siyal</option>
                              <option value="Soomro">Soomro</option>
                              <option value="Sukhera">Sukhera</option>
                              <option value="Sulemani">Sulemani</option>
                              <option value="Sulemankhel">Sulemankhel</option>
                              <option value="Sumalani">Sumalani</option>
                              <option value="Suri">Suri</option>
                              <option value="Swati">Swati</option>
                              <option value="Syed">Syed</option>
                              <option value="Talpur">Talpur</option>
                              <option value="Tangwani">Tangwani</option>
                              <option value="Tanoli/Tani">Tanoli/Tani</option>
                              <option value="Taqvi">Taqvi</option>
                              <option value="Tarar">Tarar</option>
                              <option value="Tareen">Tareen</option>
                              <option value="Tarkani">Tarkani</option>
                              <option value="Thingani">Thingani</option>
                              <option value="Tirmizi">Tirmizi</option>
                              <option value="Tiwana">Tiwana</option>
                              <option value="Tokhi">Tokhi</option>
                              <option value="Turabi">Turabi</option>
                              <option value="Turkhel">Turkhel</option>
                              <option value="Umarzai">Umarzai</option>
                              <option value="Umrani">Umrani</option>
                              <option value="Usmani">Usmani</option>
                              <option value="Uthman khel">Uthman khel</option>
                              <option value="Uzair">Uzair</option>
                              <option value="Virk">Virk</option>
                              <option value="Wadeyla">Wadeyla</option>
                              <option value="Wagon">Wagon</option>
                              <option value="Wani">Wani</option>
                              <option value="Warraich">Warraich</option>
                              <option value="Wasti">Wasti</option>
                              <option value="Wazir">Wazir</option>
                              <option value="Wur">Wur</option>
                              <option value="Yazdani">Yazdani</option>
                              <option value="Yousafzai">Yousafzai</option>
                              <option value="Yusaf Khel">Yusaf Khel</option>
                              <option value="Zaidi">Zaidi</option>
                              <option value="Zain">Zain</option>
                              <option value="Zand">Zand</option>
                              <option value="Zardari">Zardari</option>
                              <option value="Zimri">Zimri</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                        <div
                          class="form-group form-radio row "
                          id="parentstatus"
                        >
                          <label
                            for="example-date-input"
                            class="col-2 col-form-label"
                          >
                            Gender
                          </label>
                          <div class="col-10">
                            <div class="form-radio-flex form-flex">
                              <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                                onChange={handleChange}
                                checked={preferences.gender === "male"}
                              />

                              <label for="male">Male</label>

                              <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                onChange={handleChange}
                                checked={preferences.gender === "female"}
                              />
                              <label for="female">Female</label>
                            </div>
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="col-2 col-form-label">
                            Minimum Height:
                          </label>
                          <div class="col-10">
                            <select
                              name="minmumheight"
                              class="form-control "
                              onChange={handleChange}
                              value={preferences.minmumheight}
                            >
                              <option value="4-6" selected>
                                4ft 6in / 137 cms
                              </option>
                              <option value="4.7">4ft 7in / 139 cms</option>
                              <option value="4.8">4ft 8in / 142 cms</option>
                              <option value="4.9">4ft 9in / 144 cms</option>
                              <option value="4.10">4ft 10in / 147 cms</option>
                              <option value="4.11">4ft 11in / 149 cms</option>
                              <option value="5">5ft / 152 cms</option>
                              <option value="5.1">5ft 1in / 154 cms</option>
                              <option value="5.2">5ft 2in / 157 cms</option>
                              <option value="5.3">5ft 3in / 160 cms</option>
                              <option value="5.4">5ft 4in / 162 cms</option>
                              <option value="5.5">5ft 5in / 165 cms</option>
                              <option value="5.6">5ft 6in / 167 cms</option>
                              <option value="5.7">5ft 7in / 170 cms</option>
                              <option value="5.8">5ft 8in / 172 cms</option>
                              <option value="5.9">5ft 9in / 175 cms</option>
                              <option value="5.10">5ft 10in / 177 cms</option>
                              <option value="5.11">5ft 11in / 180 cms</option>
                              <option value="6">6ft / 182 cms</option>
                              <option value="6.1">6ft 1in / 185 cms</option>
                              <option value="6.2">6ft 2in / 187 cms</option>
                              <option value="6.3">6ft 3in / 190 cms</option>
                              <option value="6.4">6ft 4in / 193 cms</option>
                              <option value="6.5">6ft 5in / 195 cms</option>
                              <option value="6.6">6ft 6in / 198 cms</option>
                              <option value="6.7">6ft 7in / 200 cms</option>
                              <option value="6.8">6ft 8in / 203 cms</option>
                              <option value="6.9">6ft 9in / 205 cms</option>
                              <option value="6.10">6ft 10in / 208 cms</option>
                              <option value="6.11">6ft 11in / 210 cms</option>
                              <option value="7">7ft / 213 cms</option>
                            </select>
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="col-2 col-form-label">
                            Maximum Height:
                          </label>
                          <div class="col-10">
                            <select
                              name="maximumheight"
                              class="form-control "
                              onChange={handleChange}
                              value={preferences.maximumheight}
                            >
                              <option value="4-6" selected>
                                4ft 6in / 137 cms
                              </option>
                              <option value="4.7">4ft 7in / 139 cms</option>
                              <option value="4.8">4ft 8in / 142 cms</option>
                              <option value="4.9">4ft 9in / 144 cms</option>
                              <option value="4.10">4ft 10in / 147 cms</option>
                              <option value="4.11">4ft 11in / 149 cms</option>
                              <option value="5">5ft / 152 cms</option>
                              <option value="5.1">5ft 1in / 154 cms</option>
                              <option value="5.2">5ft 2in / 157 cms</option>
                              <option value="5.3">5ft 3in / 160 cms</option>
                              <option value="5.4">5ft 4in / 162 cms</option>
                              <option value="5.5">5ft 5in / 165 cms</option>
                              <option value="5.6">5ft 6in / 167 cms</option>
                              <option value="5.7">5ft 7in / 170 cms</option>
                              <option value="5.8">5ft 8in / 172 cms</option>
                              <option value="5.9">5ft 9in / 175 cms</option>
                              <option value="5.10">5ft 10in / 177 cms</option>
                              <option value="5.11">5ft 11in / 180 cms</option>
                              <option value="6">6ft / 182 cms</option>
                              <option value="6.1">6ft 1in / 185 cms</option>
                              <option value="6.2">6ft 2in / 187 cms</option>
                              <option value="6.3">6ft 3in / 190 cms</option>
                              <option value="6.4">6ft 4in / 193 cms</option>
                              <option value="6.5">6ft 5in / 195 cms</option>
                              <option value="6.6">6ft 6in / 198 cms</option>
                              <option value="6.7">6ft 7in / 200 cms</option>
                              <option value="6.8">6ft 8in / 203 cms</option>
                              <option value="6.9">6ft 9in / 205 cms</option>
                              <option value="6.10">6ft 10in / 208 cms</option>
                              <option value="6.11">6ft 11in / 210 cms</option>
                              <option value="7">7ft / 213 cms</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-lg-2 col-form-label">
                            Minimum Age:
                          </label>
                          <div class="col-lg-10">
                            <input
                              type="number"
                              class="form-control"
                              name="minimumage"
                              id="minimumage"
                              min="18"
                              onChange={handleChange}
                              value={preferences.minimumage}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-lg-2 col-form-label">
                            Maximum Age:
                          </label>
                          <div class="col-lg-10">
                            <input
                              type="number"
                              class="form-control"
                              name="maximumage"
                              id="maximumage"
                              min="18"
                              onChange={handleChange}
                              value={preferences.maximumage}
                            />
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="col-lg-2 col-form-label">
                            Location:
                          </label>
                          <div class="col-lg-10">
                            <input
                              type="text"
                              class="form-control"
                              name="location"
                              id="location"
                              onChange={handleChange}
                              value={preferences.location}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-lg-2 col-form-label">
                            Select Religion:
                          </label>
                          <div class="col-lg-10">
                            <select
                              name="religion"
                              class="form-control "
                              onChange={handleChange}
                              value={preferences.religion}
                            >
                              <option value="Islam" selected>
                                Islam
                              </option>
                              <option value="Christianity">Christianity</option>
                              <option value="Sikh">Sikh</option>
                              <option value="Hindu">Hindu</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-lg-2 col-form-label">Sect:</label>
                          <div class="col-lg-10">
                            <select
                              name="sect"
                              class="form-control "
                              onChange={handleChange}
                              value={preferences.sect}
                            >
                              <option value="Sunni">Sunni</option>
                              <option value="Shia">Shia</option>
                              <option value="Ahl-e-Hadith">Ahl-e-Hadith</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-2 col-form-label">
                            Higher Education:
                          </label>
                          <div class="col-10">
                            <select
                              name="education"
                              class="form-control"
                              onChange={handleChange}
                              value={preferences.education}
                            >
                              <optgroup label=" Qualification ">
                                <option value="Matriculation">
                                  Matriculation
                                </option>
                                <option value="Intermediate">
                                  Intermediate{" "}
                                </option>
                                <option value="Bachelors ( 4 years )">
                                  {" "}
                                  Bachelors ( 4 years )
                                </option>
                                <option value="Bachelors ( 2 years )">
                                  {" "}
                                  Bachelors ( 2 years )
                                </option>
                                <option value="Masters">Masters</option>
                                <option value="Ph.D">Ph.D</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="col-2 col-form-label">
                            Nationality:
                          </label>
                          <div class="col-10">
                            <select
                              name="nationality"
                              class="form-control"
                              onChange={handleChange}
                              value={preferences.nationality}
                            >
                              <option value="Pakistani">Pakistani</option>
                              <option value="European Union">
                                European Union{" "}
                              </option>
                              <option value="American">American </option>
                              <option value="Canadian">Canadian</option>
                              <option value="Australian">Australian</option>
                              <option value="Middle East">Middle East</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row justify-content-center">
                          <div class="col-lg-2 ">
                            <button
                              class="registerMenuButton button btn-lg btn-colored full-rounded "
                              onClick={handleClick}
                            >
                              {preferencesId ? "Update" : "Save"}
                            </button>
                          </div>
                        </div>
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
