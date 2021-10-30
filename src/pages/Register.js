import firebase from "firebase";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/350x150-logo.png";
import { db } from "../../src/pages/firebase-config";
import swal from "sweetalert";

class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {
        created: "Father",
        cast: "Abbasi",
        religion: "Islam",
        sect: "Sunni",
        height: "4.6",
        profession: "Student",
        education: "Matriculation",
        hobbies: "Cooking",
        nationality: "Pakistani",
      },
      uid: localStorage.getItem("userid"),
      userUpdate: false,
      nicFront: 0,
      nicBack: 0,
      galaryImage1: 0,
      galaryImage2: 0,
      galaryImage3: 0,
      galaryImage4: 0,
      loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNicFrontChange = this.handleNicFrontChange.bind(this);
    this.handleNicBackChange = this.handleNicBackChange.bind(this);

    this.handleG1Change = this.handleG1Change.bind(this);
    this.handleG2Change = this.handleG2Change.bind(this);
    this.handleG3Change = this.handleG3Change.bind(this);
    this.handleG4Change = this.handleG4Change.bind(this);
  }
  componentDidMount() {
    this.setState({ loading: true });
    db.collection("users")
      .doc(localStorage.getItem("userid"))
      .get()
      .then((doc) => {
        this.setState({ loading: false });
        this.setState({
          ...this.state,
          nicFront: doc.data().cnic_images
            ? doc.data().cnic_images.cnic_front
            : 0,
          nicBack: doc.data().cnic_images
            ? doc.data().cnic_images.cnic_back
            : 0,
          galaryImage1: doc.data().gallery ? doc.data().gallery[0] : 0,
          galaryImage2: doc.data().gallery ? doc.data().gallery[1] : 0,
          profileData: doc.data().profile
            ? doc.data().profile
            : this.state.profileData,
          userUpdate: true,
        });
      });
  }
  async handleClick() {
    this.setState({ loading: true });
    db.collection("users")
      .doc(this.state.uid)
      .update({
        profile: this.state.profileData,
        cnic_images: {
          cnic_back: this.state.nicBack,
          cnic_front: this.state.nicFront,
        },
        gallery: [
          this.state.galaryImage1,
          this.state.galaryImage2,
          this.state.galaryImage3,
          this.state.galaryImage4,
        ],
      })
      .then(() => {
        this.setState({ loading: false });
        this.props.history.push({
          pathname: "/profile",
        });
      });
    // db.collection("users").doc(this.state.uid).get().then((doc)=>{
    //   console.log(doc.data());
    // })
    // console.log(localStorage.getItem("userid"));
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      profileData: {
        ...this.state.profileData,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleNicFrontChange(e) {
    console.log("Showcase ", e.target.files);

    ////////  for image \\\\\\\\\\\

    if (e.target.files.length === 0) {
    }
    if (
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/jpeg"
    ) {
      this.setState({
        ...this.state,
        nicFront: 1,
      });
      const imageName = new Date().getTime() + "_galary";
      const uploadTask = firebase
        .storage()
        .ref(`easyrishta/${imageName}.jpg`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function 1%,2%...
          // const progress = Math.round(
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // );
        },
        (error) => {},
        () => {
          // get dowload url and upload the post info
          firebase
            .storage()
            .ref("easyrishta")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              this.setState({
                ...this.state,
                nicFront: imageUrl,
              });
            });
        }
      );
    } else {
      swal("", "Please Select Image File", "error");
    }
  }

  handleNicBackChange(e) {
    // console.log("Showcase ", e.target.files[0]);

    ////////  for image \\\\\\\\\\\

    if (e.target.files.length === 0) {
    }
    if (
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/jpeg"
    ) {
      this.setState({
        ...this.state,
        nicBack: 1,
      });
      const imageName = new Date().getTime() + "_galary";
      const uploadTask = firebase
        .storage()
        .ref(`easyrishta/${imageName}.jpg`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function 1%,2%...
          // const progress = Math.round(
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // );
        },
        (error) => {},
        () => {
          // get dowload url and upload the post info
          firebase
            .storage()
            .ref("easyrishta")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              this.setState({
                ...this.state,
                nicBack: imageUrl,
              });
            });
        }
      );
    } else {
      swal("", "Please Select Image File", "error");
    }
  }
  handleG1Change(e) {
    // console.log("Showcase ", e.target.files[0]);

    ////// ------------------ Galary Image 1 Start ------------------- //////

    if (e.target.files.length === 0) {
      swal("", "Please Select Image File", "error");
      return;
    }
    if (
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/jpeg"
    ) {
      this.setState({
        ...this.state,
        galaryImage1: 1,
      });
      const imageName = new Date().getTime() + "_galary";
      const uploadTask = firebase
        .storage()
        .ref(`easyrishta/${imageName}.jpg`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function 1%,2%...
          // const progress = Math.round(
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // );
        },
        (error) => {},
        () => {
          // get dowload url and upload the post info
          firebase
            .storage()
            .ref("easyrishta")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              this.setState({
                ...this.state,
                galaryImage1: imageUrl,
              });
            });
        }
      );
    } else {
      swal("", "Please Select Image File", "error");
    }
  }
  handleG2Change(e) {
    // console.log("Showcase ", e.target.files[0]);

    ////////  for image \\\\\\\\\\\

    if (e.target.files.length === 0) {
    }
    if (
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/jpeg"
    ) {
      this.setState({
        ...this.state,
        galaryImage2: 1,
      });
      const imageName = new Date().getTime() + "_galary";
      const uploadTask = firebase
        .storage()
        .ref(`easyrishta/${imageName}.jpg`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function 1%,2%...
          // const progress = Math.round(
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // );
        },
        (error) => {},
        () => {
          // get dowload url and upload the post info
          firebase
            .storage()
            .ref("easyrishta")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              this.setState({
                ...this.state,
                galaryImage2: imageUrl,
              });
            });
        }
      );
    } else {
      swal("", "Please Select Image File", "error");
    }
  }
  handleG3Change(e) {
    // console.log("Showcase ", e.target.files[0]);

    ////// ------------------ Galary Image 1 Start ------------------- //////

    if (e.target.files.length === 0) {
      swal("", "Please Select Image File", "error");
      return;
    }
    if (
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/jpeg"
    ) {
      this.setState({
        ...this.state,
        galaryImage3: 1,
      });
      const imageName = new Date().getTime() + "_galary";
      const uploadTask = firebase
        .storage()
        .ref(`easyrishta/${imageName}.jpg`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function 1%,2%...
          // const progress = Math.round(
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // );
        },
        (error) => {},
        () => {
          // get dowload url and upload the post info
          firebase
            .storage()
            .ref("easyrishta")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              this.setState({
                ...this.state,
                galaryImage3: imageUrl,
              });
            });
        }
      );
    } else {
      swal("", "Please Select Image File", "error");
    }
  }
  handleG4Change(e) {
    // console.log("Showcase ", e.target.files[0]);

    ////// ------------------ Galary Image 1 Start ------------------- //////

    if (e.target.files.length === 0) {
      swal("", "Please Select Image File", "error");
      return;
    }
    if (
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/jpeg"
    ) {
      this.setState({
        ...this.state,
        galaryImage4: 1,
      });
      const imageName = new Date().getTime() + "_galary";
      const uploadTask = firebase
        .storage()
        .ref(`easyrishta/${imageName}.jpg`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function 1%,2%...
          // const progress = Math.round(
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // );
        },
        (error) => {},
        () => {
          // get dowload url and upload the post info
          firebase
            .storage()
            .ref("easyrishta")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              this.setState({
                ...this.state,
                galaryImage4: imageUrl,
              });
            });
        }
      );
    } else {
      swal("", "Please Select Image File", "error");
    }
  }
  render() {
    return (
      <div>
        <header id="header">
          <div
            class="container profile-register-form"
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              marginTop: "25px",
            }}
          >
            <ul class="menu-logo">
              <li>
                {" "}
                <Link to={"/"}>
                  <img src={logo} alt="logo" style={{ maxWidth: "280px" }} />{" "}
                </Link>
                <div class="menu-mobile-collapse-trigger">
                  <span></span>
                </div>
              </li>
            </ul>
          </div>
        </header>

        <section class="page-section" style={{ padding: "30px 0px 90px" }}>
          <div class="container profile-register-form">
            <h2
              style={{
                paddingTop: "16px",
                paddingBottom: "6px",
                color: "darkslategray",
                fontSize: "36px",
              }}
            >
              Create Your New EasyRishta Profile
            </h2>

            {/* <div class="progress" style={{ height:"27px" }}>
        <div id="progressBar" class="progress-bar progress-bar-striped progress-bar-animated"
          style={{ width:"20%", fontWeight: "500" }}> 20% </div>
      </div> */}
            {/* <form class="signup-form" id="signup-form"> */}
            <h3>
              <span class="title_text">Basic Information</span>
            </h3>
            <fieldset>
              <div class="fieldset-content">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <div class="form-group row">
                      <label class="col-lg-2 col-form-label">Created BY:</label>
                      <div class="col-lg-10">
                        <select
                          name="created"
                          class="form-control"
                          onChange={this.handleChange}
                          value={this.state.profileData.created}
                        >
                          <option value="Father">Father</option>
                          <option value="Mother">Mother</option>
                          <option value="Sister">Sister </option>
                          <option value="Friend">Friend </option>
                          <option value="Self">Self</option>
                        </select>
                      </div>
                    </div>

                    {/* faizan code start */}

                    <div class="form-group row">
                      <label class="col-lg-2 col-form-label">Full Name:</label>
                      <div class="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          name="fullname"
                          id="fullname"
                          value={this.state.profileData.fullname}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-lg-2 col-form-label">Age:</label>
                      <div class="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          name="age"
                          id="age"
                          value={this.state.profileData.age}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-lg-2 col-form-label">Phone:</label>
                      <div class="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          name="phone"
                          id="phone"
                          value={this.state.profileData.phone}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-lg-2 col-form-label">Bio:</label>
                      <div class="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          name="bio"
                          id="bio"
                          value={this.state.profileData.bio}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-lg-2 col-form-label">Address:</label>
                      <div class="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          name="address"
                          id="address"
                          value={this.state.profileData.address}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-lg-2 col-form-label">State:</label>
                      <div class="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          name="state"
                          id="state"
                          value={this.state.profileData.state}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-lg-2 col-form-label">Caste:</label>
                      <div class="col-lg-10">
                        <select
                          name="cast"
                          class="form-control"
                          onChange={this.handleChange}
                          value={this.state.profileData.cast}
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
                          <option value="Bahrani tribe">Bahrani tribe</option>
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
                          <option value="Bizenjo tribe">Bizenjo tribe</option>
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
                          <option value="Khalil (tribe)">Khalil (tribe)</option>
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
                          <option value="Khoso (Baloch)">Khoso (Baloch)</option>
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
                          <option value="Muhammad Shahi">Muhammad Shahi</option>
                          <option value="Muker">Muker</option>
                          <option value="Musakhel">Musakhel</option>
                          <option value="Muslim Khatris">Muslim Khatris</option>
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
                          <option value="Rind (Baloch)">Rind (Baloch)</option>
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

                    <div class="form-group row">
                      <label class="col-lg-2 col-form-label">
                        Date Of Birth:
                      </label>
                      <div class="col-lg-10">
                        <input
                          class="form-control"
                          type="date"
                          id="example-date-input"
                          name="dob"
                          max="1998-12-30"
                          value={this.state.profileData.dob}
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
                          value={this.state.profileData.religion}
                        >
                          <option value="Islam">Islam</option>
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
                          onChange={this.handleChange}
                          value={this.state.profileData.sect}
                        >
                          <option value="Sunni">Sunni</option>
                          <option value="Shia">Shia</option>
                          <option value="Ahl-e-Hadith">Ahl-e-Hadith</option>
                        </select>
                      </div>
                    </div>

                    {/* <div class="form-group">
                  <div class="form-check col-lg-10 offset-lg-2">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" name="otherCommunity" />
                      Willing to marry from other communities also
                    </label>
                  </div>
                </div> */}

                    {/* <!-- 
                            <select name="RELIGION" id="RELIGION" size="1" onchange="makeDrequest1(this.value); _gaq.push(['_trackEvent', 'Bharathomepage-Desktop', 'Bharathomepage-Desktop-Default', 'Religion-SelectedFilled']); religioncountval(this.value);" style="color: rgb(0, 0, 0);">
                               
                              </select>

                               -->

                <!-- <div class="form-group row">
                              <label for="username" class="col-sm-2 col-form-label">Username</label>
                              <div class="col-sm-10">
                                <input type="text" class="form-control-plaintext" name="username" id="username" placeholder="User Name">
                              </div>
                            </div> --> */}

                    {/* <div class="form-group row">
                  <label class="col-lg-2 col-form-label">Email:</label>
                  <div class="col-lg-10">
                    <input type="email" class="form-control-plaintext" name="email" id="email" placeholder="Your Email"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-lg-2 col-form-label">Password:</label>
                  <div class="col-lg-10">
                    <input class="form-control" type="password" name="password" id="password" />
                  </div>
                </div> */}
                    {/* <!-- <div class="form-group">
                              <label for="username" class="form-label">Username</label>
                              <input type="text" name="username" id="username" placeholder="User Name" />
                          </div>
                          <div class="form-group">
                              <label for="email" class="form-label">Email</label>
                              <input type="email" name="email" id="email" placeholder="Your Email" />
                          </div> --> */}
                    {/* <!-- <div class="form-group form-password">
                              <label for="password" class="form-label">Password</label>
                              <input type="password" name="password" id="password" data-indicator="pwindicator" />
                              <div id="pwindicator">
                                  <div class="bar-strength">
                                      <div class="bar-process">
                                          <div class="bar"></div>
                                      </div>
                                  </div>
                                  <div class="label"></div>
                              </div>
                          </div> -->
                <!-- <div class="form-group">
                              <label for="your_avatar" class="form-label">Select avatar</label>
                              <div class="form-file">
                                  <input type="file" name="your_avatar" id="your_avatar" class="custom-file-input" />
                                  <span id='val'></span>
                                  <span id='button'>Select File</span>
                              </div>
                          </div> --> */}
                  </div>
                </div>
              </div>
              <div class="fieldset-footer">
                <span>Step 1 of 5</span>
              </div>
            </fieldset>

            <h3>
              <span class="title_text">Personal Information</span>
            </h3>
            <fieldset>
              <div class="fieldset-content">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <div class="form-group form-radio row">
                      <label class="col-2 col-form-label">Marital Status</label>
                      <div class="col-10">
                        <div class="form-radio-flex form-flex">
                          <input
                            type="radio"
                            name="martial"
                            id="never_married"
                            value="never married"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.martial === "never married"
                                ? true
                                : false
                            }
                          />
                          <label for="never_married">Never Married</label>

                          <input
                            type="radio"
                            name="martial"
                            id="widowed"
                            value="widowed"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.martial === "widowed"
                                ? true
                                : false
                            }
                          />
                          <label for="widowed">Widowed</label>

                          <input
                            type="radio"
                            name="martial"
                            id="divorced"
                            value="divorced"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.martial === "divorced"
                                ? true
                                : false
                            }
                          />
                          <label for="divorced">Divorced</label>
                          <input
                            type="radio"
                            name="martial"
                            id="khula"
                            value="khula"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.martial === "khula"
                                ? true
                                : false
                            }
                          />
                          <label for="divorced">Khula</label>

                          <input
                            type="radio"
                            name="martial"
                            id="awaiting_divorced"
                            value="awaiting_divorced"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.martial ===
                              "awaiting_divorced"
                                ? true
                                : false
                            }
                          />
                          <label for="awaiting_divorced">
                            Awaiting Divorced
                          </label>

                          <input
                            type="radio"
                            name="martial"
                            id="2ndmarriage"
                            value="2ndmarriage"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.martial === "2ndmarriage"
                                ? true
                                : false
                            }
                          />
                          <label for="divorced">Second Marriage</label>
                        </div>
                      </div>
                    </div>

                    {/* style={{ display: 'none' }} */}

                    <div class="form-group form-radio row">
                      <label class="col-2 col-form-label">
                        No. Of Children
                      </label>
                      <div class="col-10">
                        <div class="form-radio-flex form-flex">
                          <input
                            type="radio"
                            name="children"
                            id="children_none"
                            value="0"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.children === "0"
                                ? true
                                : false
                            }
                          />
                          <label for="children_none">None</label>

                          <input
                            type="radio"
                            name="children"
                            id="children_1"
                            value="1"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.children === "1"
                                ? true
                                : false
                            }
                          />
                          <label for="children_1">1</label>

                          <input
                            type="radio"
                            name="children"
                            id="children_2"
                            value="2"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.children === "2"
                                ? true
                                : false
                            }
                          />
                          <label for="children_2">2</label>

                          <input
                            type="radio"
                            name="children"
                            id="children_3"
                            value="3"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.children === "3"
                                ? true
                                : false
                            }
                          />
                          <label for="children_3">3</label>

                          <input
                            type="radio"
                            name="children"
                            id="children_4"
                            value="4"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.children === "4"
                                ? true
                                : false
                            }
                          />
                          <label for="children_4">4 and above</label>
                        </div>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-lg-2 col-form-label">Siblings:</label>
                      <div class="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          name="siblings"
                          id="siblings"
                          onChange={this.handleChange}
                          value={this.state.profileData.siblings}
                        />
                      </div>
                    </div>

                    <div class="form-group form-radio row " id="parentstatus">
                      <label
                        for="example-date-input"
                        class="col-2 col-form-label"
                      >
                        Parent Status
                      </label>
                      <div class="col-10">
                        <div class="form-radio-flex form-flex">
                          <input
                            type="radio"
                            name="parentstatus"
                            id="children_status_living"
                            value="Both alive"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.parentstatus ===
                              "Both alive"
                                ? true
                                : false
                            }
                          />
                          <label for="children_status_living">Both Alive</label>

                          <input
                            type="radio"
                            name="parentstatus"
                            id="children_status_not_living"
                            value="Father alive"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.parentstatus ===
                              "Father alive"
                                ? true
                                : false
                            }
                          />
                          <label for="children_status_not_living">
                            Father alive
                          </label>

                          <input
                            type="radio"
                            name="parentstatus"
                            id="children_status_not_living"
                            value="Mother alive"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.parentstatus ===
                              "Mother alive"
                                ? true
                                : false
                            }
                          />
                          <label for="children_status_not_living">
                            Mother Alive
                          </label>

                          <input
                            type="radio"
                            name="parentstatus"
                            id="children_status_not_living"
                            value="Both deceased"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.parentstatus ===
                              "Both deceased"
                                ? true
                                : false
                            }
                          />
                          <label for="children_status_not_living">
                            Both deceased
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-2 col-form-label">Height:</label>
                      <div class="col-10">
                        <select
                          name="height"
                          class="form-control "
                          onChange={this.handleChange}
                          value={this.state.profileData.height}
                        >
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
                      <label class="col-2 col-form-label">Profession:</label>
                      <div class="col-10">
                        <select
                          name="profession"
                          class="form-control "
                          onChange={this.handleChange}
                          value={this.state.profileData.profession}
                        >
                          <option value="Student"> Student </option>
                          <option value="Lawyer">Lawyer </option>
                          <option value="Teacher"> Teacher</option>
                          <option value="Accountant"> Accountant </option>
                          <option value="Designer"> Designer </option>
                          <option value="Businessman"> Businessman</option>
                          <option value="Engineer"> Engineer </option>
                          <option value="Gov Employee">Gov Employee</option>
                          <option value="Other"> Other </option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group form-radio row">
                      <label for="gender" class="col-2 col-form-label">
                        Gender
                      </label>
                      <div class="col-10">
                        <div class="form-radio-flex form-flex">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.gender === "male"
                                ? true
                                : false
                            }
                          />
                          <label for="male">Male</label>

                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="female"
                            onChange={this.handleChange}
                            checked={
                              this.state.profileData.gender === "female"
                                ? true
                                : false
                            }
                          />
                          <label for="female">Female</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="fieldset-footer">
                <span>Step 2 of 5</span>
              </div>
            </fieldset>

            <h3>
              <span class="title_text">Professional Details</span>
            </h3>
            <fieldset>
              <div class="fieldset-content">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <div class="form-group row">
                      <label class="col-2 col-form-label">
                        Higher Education:
                      </label>
                      <div class="col-10">
                        <select
                          name="education"
                          class="form-control"
                          onChange={this.handleChange}
                          value={this.state.profileData.education}
                        >
                          <optgroup label=" Qualification ">
                            <option value="Matriculation">Matriculation</option>
                            <option value="Intermediate">Intermediate </option>
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
                      <label class="col-lg-2 col-form-label">
                        Specialization:
                      </label>
                      <div class="col-lg-10">
                        <input
                          type="text"
                          class="form-control"
                          name="specialization"
                          id="specialization"
                          onChange={this.handleChange}
                          value={this.state.profileData.specialization}
                        />
                      </div>
                    </div>

                    <div
                      class="form-group row"
                      style={{ display: "none" }}
                      id="educationInDetail"
                    >
                      <label class="col-sm-2 col-form-label">
                        Education In Detail:
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          name="education_detail"
                          id="education_detail"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-2 col-form-label"> Interest </label>
                      <div class="col-10">
                        <select
                          name="hobbies"
                          class="form-control"
                          onChange={this.handleChange}
                          value={this.state.profileData.hobbies}
                        >
                          <option value="Cooking"> Cooking </option>
                          <option value="Travelling"> Travelling </option>
                          <option value="Reading">Reading </option>
                          <option value="Socialism">Socialism </option>
                          <option value="Sports">Sports </option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-2 col-form-label">Nationality:</label>
                      <div class="col-10">
                        <select
                          name="nationality"
                          class="form-control"
                          onChange={this.handleChange}
                          value={this.state.profileData.nationality}
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
                    <div class="form-group row">
                      <label class="col-2 col-form-label">Job Location:</label>
                      <div class="col-10">
                        <input
                          type="text"
                          class="form-control"
                          name="joblocation"
                          id="joblocation"
                          onChange={this.handleChange}
                          value={this.state.profileData.joblocation}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- <div class="form-row">
              <div class="form-group">
                <label for="credit_card" class="form-label">Credit Card</label>
                <input type="text" name="credit_card" id="credit_card" />
              </div>
              <div class="form-group">
                <label for="cvc" class="form-label">CVC</label>
                <input type="text" name="cvc" id="cvc" />
              </div>
            </div>
            <div class="form-date">
              <label for="expiry_date">Expiration Date</label>
              <div class="form-flex">
                <div class="form-date-item">
                  <select id="expiry_date" name="expiry_date"></select>
                  <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                </div>
                <div class="form-date-item">
                  <select id="expiry_year" name="expiry_year"></select>
                  <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="name_of_card" class="form-label">Name of card</label>
              <input type="text" name="name_of_card" id="name_of_card" />
            </div> --> */}
              </div>

              <div class="fieldset-footer">
                <span>Step 3 of 5</span>
              </div>
            </fieldset>

            <h3>
              <span class="title_text">About Yourself</span>
            </h3>
            <fieldset>
              <div class="fieldset-content">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <div class="form-group row">
                      <label
                        for="example-date-input"
                        class="col-2 col-form-label"
                      >
                        About Yourself:
                      </label>
                      <div class="col-10">
                        <textarea
                          class="form-control"
                          name="about"
                          rows="5"
                          onChange={this.handleChange}
                          value={this.state.profileData.about}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fieldset-footer">
                <span>Step 4 of 5</span>
              </div>
            </fieldset>

            <fieldset>
              <div class="fieldset-content">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <div class="form-group row">
                      <label
                        for="example-date-input"
                        class="col-2 col-form-label"
                      >
                        CNIC Images
                      </label>

                      <div class="col-4">
                        <img
                          alt="User pic"
                          // src={
                          //   this.state.nicFront
                          //     ? window.URL.createObjectURL(this.state.nicFront)
                          //     : "/assets/images/login-bg.png"
                          // }
                          src={
                            this.state.nicFront !== 0 &&
                            this.state.nicFront !== 1
                              ? this.state.nicFront
                              : "http://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1-300x171.jpg"
                          }
                          style={{ height: "100px" }}
                        />
                        <p>{this.state.nicFront === 1 ? "Uploading..." : ""}</p>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          style={{ opacity: 1 }}
                          onChange={this.handleNicFrontChange}
                        />
                      </div>
                      <div class="col-4">
                        <img
                          alt="user pic"
                          // src={
                          //   this.state.nicBack
                          //     ? window.URL.createObjectURL(this.state.nicBack)
                          //     : "/assets/images/login-bg.png"
                          // }

                          src={
                            this.state.nicBack !== 0 && this.state.nicBack !== 1
                              ? this.state.nicBack
                              : "http://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1-300x171.jpg"
                          }
                          style={{ height: "100px" }}
                        />
                        <p>{this.state.nicBack === 1 ? "Uploading..." : ""}</p>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          style={{ opacity: 1 }}
                          onChange={this.handleNicBackChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fieldset-footer">
                <span>Step 4 of 5</span>
              </div>
            </fieldset>

            <fieldset>
              <div class="fieldset-content">
                <div class="row">
                  <div class="col-lg-12 offset-lg-1">
                    <div class="form-group row">
                      <label
                        for="example-date-input"
                        class="col-2 col-form-label"
                      >
                        Galary Images
                      </label>
                      <div class="col-3">
                        <img
                          alt="Gallery"
                          // src={
                          //   this.state.galaryImage1
                          //     ? window.URL.createObjectURL(
                          //         this.state.galaryImage1
                          //       )
                          //     : "/assets/images/login-bg.png"
                          // }
                          src={
                            this.state.galaryImage1 !== 0 &&
                            this.state.galaryImage1 !== 1
                              ? this.state.galaryImage1
                              : "http://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1-300x171.jpg"
                          }
                          style={{ height: "100px" }}
                        />
                        <p>
                          {this.state.galaryImage1 === 1 ? "Uploading..." : ""}
                        </p>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          style={{ opacity: 1 }}
                          onChange={this.handleG1Change}
                        />
                      </div>
                      <div class="col-3">
                        <img
                          alt="user imagpice"
                          // src={
                          //   this.state.galaryImage2
                          //     ? window.URL.createObjectURL(
                          //         this.state.galaryImage2
                          //       )
                          //     : "/assets/images/login-bg.png"
                          // }

                          src={
                            this.state.galaryImage2 !== 0 &&
                            this.state.galaryImage2 !== 1
                              ? this.state.galaryImage2
                              : "http://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1-300x171.jpg"
                          }
                          style={{ height: "100px" }}
                        />
                        <p>
                          {this.state.galaryImage2 === 1 ? "Uploading..." : ""}
                        </p>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          style={{ opacity: 1 }}
                          onChange={this.handleG2Change}
                        />
                      </div>
                      <div class="col-2">
                        <img
                          alt="user impicage"
                          // src={
                          //   this.state.galaryImage2
                          //     ? window.URL.createObjectURL(
                          //         this.state.galaryImage2
                          //       )
                          //     : "/assets/images/login-bg.png"
                          // }

                          src={
                            this.state.galaryImage3 !== 0 &&
                            this.state.galaryImage3 !== 1
                              ? this.state.galaryImage3
                              : "http://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1-300x171.jpg"
                          }
                          style={{ height: "100px" }}
                        />
                        <p>
                          {this.state.galaryImage3 === 1 ? "Uploading..." : ""}
                        </p>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          style={{ opacity: 1 }}
                          onChange={this.handleG3Change}
                        />
                      </div>
                      {/* <div class="col-2">
                        <img
                          // src={
                          //   this.state.galaryImage2
                          //     ? window.URL.createObjectURL(
                          //         this.state.galaryImage2
                          //       )
                          //     : "/assets/images/login-bg.png"
                          // }

                          src={
                            this.state.galaryImage4 != 0 &&
                            this.state.galaryImage4 != 1
                              ? this.state.galaryImage4
                              : "http://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1-300x171.jpg"
                          }
                          style={{ height: "100px" }}
                        />
                        <p>
                          {this.state.galaryImage4 == 1 ? "Uploading..." : ""}
                        </p>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          onChange={this.handleG4Change}
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="fieldset-footer">
                <span>Step 4 of 5</span>
              </div>
            </fieldset>

            {/* <Link to={"/"} style = {mystyle} class="registerMenuButton button btn-lg btn-colored full-rounded ">
                            Save Profile{" "}
                          </Link> */}
            <div className="row">
              <div className="col-2"></div>
              <div className="col-4"></div>
              <div className="col-6">
                <button
                  class="registerMenuButton button btn-lg btn-colored full-rounded  mr-2"
                  style={{ left: "43%" }}
                  onClick={this.handleClick}
                >
                  {this.state.userUpdate ? "Update Profile" : "Save Profile"}
                </button>
                {/* <button
                class="registerMenuButton button btn-lg btn-colored full-rounded"
                style={{ left: "43%" }}
                onClick={this.cancelclick}
              >
                Cancel
              </button> */}
                <Link
                  to={"/profile"}
                  style={{ left: "43%" }}
                  class="registerMenuButton button btn-lg btn-colored full-rounded"
                >
                  Cancel{" "}
                </Link>
              </div>
            </div>

            <fieldset>
              <div class="fieldset-footer">
                <span>Step 5 of 5</span>
              </div>
            </fieldset>

            {/* </form> */}
          </div>
        </section>
      </div>
    );
  }
}

export default register;
