import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./images/150X150-LOGO.png";
import { db } from "../../src/pages/firebase-config";
import { useQuery } from "react-query";

export default function SearchResults(props) {
  let invites_array = [];
  var inviteslength = 0;
  var docsid = "";
  const { preferences } = props.location.state;
  useEffect(() => {
    console.log({ preferences });
  });
  var users_array = [];

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
  console.log(profiles);
  const MatchMaking = useQuery(
    "matchmaking",
    () => {
      // console.log(GetPreferences.data);
      const citiesRef = db.collection("users");
      console.log(preferences);
      return citiesRef
        .where("profile.gender", "==", preferences.gender)
        .where("profile.caste", "==", preferences.cast)
        .get();
    },
    {
      select: (querySnapshot) => {
        // const doc = querySnapshot;
        const user_array = [];
        console.log({ from: querySnapshot.docs[0].data() });
        for (var i = 0; i < querySnapshot.docs.length; i++) {
          if (preferences) {
            if (
              querySnapshot.docs[i].data().profile.height <=
                preferences.maximumheight &&
              querySnapshot.docs[i].data().profile.height >=
                preferences.minmumheight &&
              querySnapshot.docs[i].data().profile.age <=
                preferences.maximumage &&
              querySnapshot.docs[i].data().profile.age >= preferences.minimumage
            ) {
              user_array.push({
                data: querySnapshot.docs[i].data(),
                userid: querySnapshot.docs[i].id,
              });
            }
          } else {
            user_array.push({
              data: querySnapshot.docs[i].data(),
              userid: querySnapshot.docs[i].id,
            });
          }
        }
        //console.log(user_array);
        users_array = user_array;
        console.log({ users_array });
      },
      onError: (error) => console.log("Error getting documents: ", error),
    }
  );
  console.log(MatchMaking);
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
                data-toggle="dropdown"
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

          {/* <section class="content">
            <div class="card card-solid">
              <div class="row p-3">
                <div class="col-md-2">
                  <div class="form-group">
                    <label>Looking For </label>
                    <select class="custom-select">
                      <option>Choose One</option>
                      <option>Groom</option>
                      <option>Bride</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-2" style={{ paddingLeft: "15px" }}>
                  <label>Select Age Range</label>
                  <div class="slider-red">
                    <input
                      type="text"
                      value=""
                      class="slider form-control"
                      data-slider-min="18"
                      data-slider-max="100"
                      data-slider-step="1"
                      data-slider-value="[18,35]"
                      data-slider-orientation="horizontal"
                      data-slider-selection="before"
                      data-slider-tooltip="show"
                    />
                  </div>
                </div>

                <div class="col-md-2" style={{ paddingLeft: "40px" }}>
                  <div class="form-group">
                    <label>Religion</label>
                    <select class="custom-select">
                      <option>Choose One</option>
                      <option>Islam</option>
                      <option>Christian</option>
                      <option>Hindu</option>
                      <option>Sikh</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-2" style={{ paddingLeft: "20px" }}>
                  <div class="form-group">
                    <label>Mother Tongue</label>
                    <select class="custom-select">
                      <option value="2">Amharic</option>
                      <option value="3">Arabic</option>
                      <option value="4">Assamese</option>
                      <option value="5">Awadhi</option>
                      <option value="6">Azerbaijani</option>
                      <option value="7">Balochi</option>
                      <option value="8">Belarusian</option>
                      <option value="9">Bengali (Bangla)</option>
                      <option value="10">Bhojpuri</option>
                      <option value="11">Burmese</option>
                      <option value="12">Cebuano (Visayan)</option>
                      <option value="13">Chewa</option>
                      <option value="14">Chhattisgarhi</option>
                      <option value="15">Chittagonian</option>
                      <option value="16">Czech</option>
                      <option value="17">Deccan</option>
                      <option value="18">Dhundhari</option>
                      <option value="19">Dutch</option>
                      <option value="20">Eastern Min</option>
                      <option value="21">English</option>
                      <option value="22">French</option>
                      <option value="23">Fula</option>
                      <option value="24">Gan</option>
                      <option value="25">German</option>
                      <option value="26">Greek</option>
                      <option value="27">Gujarati</option>
                      <option value="28">Haitian Creole</option>
                      <option value="29">Hakka</option>
                      <option value="30">Haryanvi</option>
                      <option value="31">Hausa</option>
                      <option value="33">Hindi</option>
                      <option value="34">Hmong</option>
                      <option value="35">Hungarian</option>
                      <option value="36">Igbo</option>
                      <option value="37">Ilocano</option>
                      <option value="38">Italian</option>
                      <option value="39">Japanese</option>
                      <option value="40">Javanese</option>
                      <option value="41">Jin</option>
                      <option value="42">Kannada</option>
                      <option value="43">Kazakh</option>
                      <option value="44">Khmer</option>
                      <option value="45">Kinyarwanda</option>
                      <option value="46">Kirundi</option>
                      <option value="47">Konkani</option>
                      <option value="48">Korean</option>
                      <option value="49">Kurdish</option>
                      <option value="50">Madurese</option>
                      <option value="51">Magahi</option>
                      <option value="52">Maithili</option>
                      <option value="53">Malagasy</option>
                      <option value="54">Malay</option>
                      <option value="55">Malayalam</option>
                      <option value="57">Marathi</option>
                      <option value="58">Marwari</option>
                      <option value="59">Mossi</option>
                      <option value="60">Nepali</option>
                      <option value="61">Odia (Oriya)</option>
                      <option value="62">Oromo</option>
                      <option value="63">Pashto</option>
                      <option value="64">Persian</option>
                      <option value="65">Polish</option>
                      <option value="66">Portuguese</option>
                      <option value="67">Punjabi</option>
                      <option value="68">Quechua</option>
                      <option value="69">Romanian</option>
                      <option value="70">Russian</option>
                      <option value="71">Saraiki</option>
                      <option value="72">Serbo-Croatian</option>
                      <option value="73">Shona</option>
                      <option value="74">Sindhi</option>
                      <option value="75">Sinhalese</option>
                      <option value="76">Somali</option>
                      <option value="77">Spanish</option>
                      <option value="78">Sundanese</option>
                      <option value="79">Swedish</option>
                      <option value="80">Sylheti</option>
                      <option value="81">Tagalog (Filipino)</option>
                      <option value="82">Tamil</option>
                      <option value="83">Telugu</option>
                      <option value="84">Thai</option>
                      <option value="85">Turkish</option>
                      <option value="86">Turkmen</option>
                      <option value="87">Ukrainian</option>
                      <option value="88">Urdu</option>
                      <option value="89">Uyghur</option>
                      <option value="90">Uzbek</option>
                      <option value="91">Vietnamese</option>
                      <option value="92">Wu (Shanghainese)</option>
                      <option value="93">Xhosa</option>
                      <option value="94">Xiang</option>
                      <option value="95">Yoruba</option>
                      <option value="96">Yue (Cantonese)</option>
                      <option value="97">Zhuang</option>
                      <option value="98">Zulu</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-2" style={{ paddingLeft: "20px" }}>
                  <div class="form-group">
                    <label>Country</label>
                    <select class="custom-select">
                      <option value="2">Albania</option>
                      <option value="3">Algeria</option>
                      <option value="4">American Samoa</option>
                      <option value="5">Andorra</option>
                      <option value="6">Angola</option>
                      <option value="7">Anguilla</option>
                      <option value="8">Antarctica</option>
                      <option value="9">Antigua And Barbuda</option>
                      <option value="10">Argentina</option>
                      <option value="11">Armenia</option>
                      <option value="12">Aruba</option>
                      <option value="13">Australia</option>
                      <option value="14">Austria</option>
                      <option value="15">Azerbaijan</option>
                      <option value="16">Bahamas The</option>
                      <option value="17">Bahrain</option>
                      <option value="18">Bangladesh</option>
                      <option value="19">Barbados</option>
                      <option value="20">Belarus</option>
                      <option value="21">Belgium</option>
                      <option value="22">Belize</option>
                      <option value="23">Benin</option>
                      <option value="24">Bermuda</option>
                      <option value="25">Bhutan</option>
                      <option value="26">Bolivia</option>
                      <option value="28">Botswana</option>
                      <option value="29">Bouvet Island</option>
                      <option value="30">Brazil</option>
                      <option value="32">Brunei</option>
                      <option value="33">Bulgaria</option>
                      <option value="34">Burkina Faso</option>
                      <option value="35">Burundi</option>
                      <option value="36">Cambodia</option>
                      <option value="37">Cameroon</option>
                      <option value="38">Canada</option>
                      <option value="39">Cape Verde</option>
                      <option value="40">Cayman Islands</option>
                      <option value="42">Chad</option>
                      <option value="43">Chile</option>
                      <option value="44">China</option>
                      <option value="45">Christmas Island</option>
                      <option value="47">Colombia</option>
                      <option value="48">Comoros</option>
                      <option value="49">Republic Of The Congo</option>
                      <option value="51">Cook Islands</option>
                      <option value="52">Costa Rica</option>
                      <option value="54">Croatia (Hrvatska)</option>
                      <option value="55">Cuba</option>
                      <option value="56">Cyprus</option>
                      <option value="57">Czech Republic</option>
                      <option value="58">Denmark</option>
                      <option value="59">Djibouti</option>
                      <option value="60">Dominica</option>
                      <option value="61">Dominican Republic</option>
                      <option value="62">East Timor</option>
                      <option value="63">Ecuador</option>
                      <option value="64">Egypt</option>
                      <option value="65">El Salvador</option>
                      <option value="66">Equatorial Guinea</option>
                      <option value="67">Eritrea</option>
                      <option value="68">Estonia</option>
                      <option value="69">Ethiopia</option>
                      <option value="71">Falkland Islands</option>
                      <option value="72">Faroe Islands</option>
                      <option value="73">Fiji Islands</option>
                      <option value="74">Finland</option>
                      <option value="75">France</option>
                      <option value="76">French Guiana</option>
                      <option value="77">French Polynesia</option>
                      <option value="79">Gabon</option>
                      <option value="80">Gambia The</option>
                      <option value="81">Georgia</option>
                      <option value="82">Germany</option>
                      <option value="83">Ghana</option>
                      <option value="84">Gibraltar</option>
                      <option value="85">Greece</option>
                      <option value="86">Greenland</option>
                      <option value="87">Grenada</option>
                      <option value="88">Guadeloupe</option>
                      <option value="89">Guam</option>
                      <option value="90">Guatemala</option>
                      <option value="91">Guernsey and Alderney</option>
                      <option value="92">Guinea</option>
                      <option value="93">Guinea-Bissau</option>
                      <option value="94">Guyana</option>
                      <option value="95">Haiti</option>
                      <option value="97">Honduras</option>
                      <option value="98">Hong Kong S.A.R.</option>
                      <option value="99">Hungary</option>
                      <option value="100">Iceland</option>
                      <option value="101">India</option>
                      <option value="102">Indonesia</option>
                      <option value="103">Iran</option>
                      <option value="104">Iraq</option>
                      <option value="105">Ireland</option>
                      <option value="106">Israel</option>
                      <option value="107">Italy</option>
                      <option value="108">Jamaica</option>
                      <option value="109">Japan</option>
                      <option value="110">Jersey</option>
                      <option value="111">Jordan</option>
                      <option value="112">Kazakhstan</option>
                      <option value="113">Kenya</option>
                      <option value="114">Kiribati</option>
                      <option value="115">Korea North</option>
                      <option value="116">Korea South</option>
                      <option value="117">Kuwait</option>
                      <option value="118">Kyrgyzstan</option>
                      <option value="119">Laos</option>
                      <option value="120">Latvia</option>
                      <option value="121">Lebanon</option>
                      <option value="122">Lesotho</option>
                      <option value="123">Liberia</option>
                      <option value="124">Libya</option>
                      <option value="125">Liechtenstein</option>
                      <option value="126">Lithuania</option>
                      <option value="127">Luxembourg</option>
                      <option value="128">Macau S.A.R.</option>
                      <option value="129">Macedonia</option>
                      <option value="130">Madagascar</option>
                      <option value="131">Malawi</option>
                      <option value="132">Malaysia</option>
                      <option value="133">Maldives</option>
                      <option value="134">Mali</option>
                      <option value="135">Malta</option>
                      <option value="136">Man (Isle of)</option>
                      <option value="137">Marshall Islands</option>
                      <option value="138">Martinique</option>
                      <option value="139">Mauritania</option>
                      <option value="140">Mauritius</option>
                      <option value="141">Mayotte</option>
                      <option value="142">Mexico</option>
                      <option value="143">Micronesia</option>
                      <option value="144">Moldova</option>
                      <option value="145">Monaco</option>
                      <option value="146">Mongolia</option>
                      <option value="147">Montserrat</option>
                      <option value="148">Morocco</option>
                      <option value="149">Mozambique</option>
                      <option value="150">Myanmar</option>
                      <option value="151">Namibia</option>
                      <option value="152">Nauru</option>
                      <option value="153">Nepal</option>
                      <option value="155">Netherlands The</option>
                      <option value="156">New Caledonia</option>
                      <option value="157">New Zealand</option>
                      <option value="158">Nicaragua</option>
                      <option value="159">Niger</option>
                      <option value="160">Nigeria</option>
                      <option value="161">Niue</option>
                      <option value="162">Norfolk Island</option>
                      <option value="164">Norway</option>
                      <option value="165">Oman</option>
                      <option value="166">Pakistan</option>
                      <option value="167">Palau</option>
                      <option value="169">Panama</option>
                      <option value="170">Papua new Guinea</option>
                      <option value="171">Paraguay</option>
                      <option value="172">Peru</option>
                      <option value="173">Philippines</option>
                      <option value="174">Pitcairn Island</option>
                      <option value="175">Poland</option>
                      <option value="176">Portugal</option>
                      <option value="177">Puerto Rico</option>
                      <option value="178">Qatar</option>
                      <option value="179">Reunion</option>
                      <option value="180">Romania</option>
                      <option value="181">Russia</option>
                      <option value="182">Rwanda</option>
                      <option value="183">Saint Helena</option>
                      <option value="184">Saint Kitts And Nevis</option>
                      <option value="185">Saint Lucia</option>
                      <option value="188">Samoa</option>
                      <option value="189">San Marino</option>
                      <option value="190">Sao Tome and Principe</option>
                      <option value="191">Saudi Arabia</option>
                      <option value="192">Senegal</option>
                      <option value="193">Serbia</option>
                      <option value="194">Seychelles</option>
                      <option value="195">Sierra Leone</option>
                      <option value="196">Singapore</option>
                      <option value="197">Slovakia</option>
                      <option value="198">Slovenia</option>
                      <option value="200">Solomon Islands</option>
                      <option value="201">Somalia</option>
                      <option value="202">South Africa</option>
                      <option value="203">South Georgia</option>
                      <option value="204">South Sudan</option>
                      <option value="205">Spain</option>
                      <option value="206">Sri Lanka</option>
                      <option value="207">Sudan</option>
                      <option value="208">Suriname</option>
                      <option value="210">Swaziland</option>
                      <option value="211">Sweden</option>
                      <option value="212">Switzerland</option>
                      <option value="213">Syria</option>
                      <option value="214">Taiwan</option>
                      <option value="215">Tajikistan</option>
                      <option value="216">Tanzania</option>
                      <option value="217">Thailand</option>
                      <option value="218">Togo</option>
                      <option value="219">Tokelau</option>
                      <option value="220">Tonga</option>
                      <option value="221">Trinidad And Tobago</option>
                      <option value="222">Tunisia</option>
                      <option value="223">Turkey</option>
                      <option value="224">Turkmenistan</option>
                      <option value="225">Turks And Caicos Islands</option>
                      <option value="226">Tuvalu</option>
                      <option value="227">Uganda</option>
                      <option value="228">Ukraine</option>
                      <option value="229">United Arab Emirates</option>
                      <option value="230">United Kingdom</option>
                      <option value="231">United States</option>
                      <option value="233">Uruguay</option>
                      <option value="234">Uzbekistan</option>
                      <option value="235">Vanuatu</option>
                      <option value="237">Venezuela</option>
                      <option value="238">Vietnam</option>
                      <option value="240">Virgin Islands (US)</option>
                      <option value="242">Western Sahara</option>
                      <option value="243">Yemen</option>
                      <option value="244">Yugoslavia</option>
                      <option value="245">Zambia</option>
                      <option value="246">Zimbabwe</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-2">
                  <button
                    type="button"
                    class="btn btn-block btn-danger"
                    style={{ marginTop: "30px" }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </section> */}
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
                {users_array.length > 0 ? (
                  users_array.map((val) => (
                    <div
                      class="card bg-light m-2"
                      style={{
                        width: "23%",
                        height: "100%",
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
                        <div class="row">
                          <div class="col-7">
                            <h2 class="lead">
                              <b>{val.data.profile.fullname}</b>
                            </h2>
                            <p class="text-muted text-sm">
                              <b>About: </b> {val.data.profile.education}{" "}
                            </p>
                            <ul class="ml-4 mb-0 fa-ul text-muted">
                              <li class="small">
                                <span class="fa-li">
                                  <i class="fas fa-lg fa-building"></i>
                                </span>{" "}
                                Address: {val.data.profile.address}
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
                              src={val.data.profilepic}
                              alt=""
                              class="img-circle img-fluid"
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
                            style={{ backgroundColor: "#ed225c" }}
                          >
                            <i class="fas fa-user"></i> View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No Record Found</h1>
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
