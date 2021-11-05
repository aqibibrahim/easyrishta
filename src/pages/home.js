// import react from "react";
import React from "react";
// import { db } from "../firestore";
/* import {BrowserRouter, Link, Switch} from 'react-router-dom'; */
import { Link } from "react-router-dom";
import preloader from "./../../src/pages/images/easyrishtapre.png";
import logo from "./../../src/pages/images/350x150-logo.png";

import logo3 from "./../../src/pages/images/web-banner5.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import ReactModalLogin from "react-modal-login";
import { facebookConfig, googleConfig } from "../../src/pages/social-config";
import { auth, db } from "../../src/pages/firebase-config";
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      loading: false,
      error: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.finishLoading = this.finishLoading.bind(this);
  }
  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null,
    });
  }

  async onLogin() {
    console.log("__onLogin__");
    console.log("email: " + document.querySelector("#email").value);
    console.log("password: " + document.querySelector("#password").value);
    this.setState({ loading: true });
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    await auth.signInWithEmailAndPassword(email, password);
    console.log(auth.currentUser);
    db.collection("users")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.setState({ loading: false });
          console.log(doc.id, " => ", doc.data());
          localStorage.setItem("email", email);
          localStorage.setItem("userid", doc.id);
          this.props.history.push({
            pathname: "/profile",
            //data: doc.data() // your data array of objects
          });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    //  getprofile(email);
    if (!email || !password) {
      this.setState({
        error: true,
      });
    } else {
      this.onLoginSuccess("form");
    }
  }

  async onRegister() {
    console.log("__onRegister__");
    // console.log("login: " + document.querySelector("#login").value);
    console.log("email: " + document.querySelector("#email").value);
    console.log("password: " + document.querySelector("#password").value);

    // const login = document.querySelector("#login").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!email || !password) {
      this.setState({
        error: true,
      });
    } else {
      //    ------------- Faizan's Code Start  -----------------
      ////////////// ---------------------   52PCT3d9zlT8FpAhourLZCsCmuB2

      await auth.createUserWithEmailAndPassword(email, password).then(async (res) => {
        let user = res.user;

        // await db.collection('users').doc(user.uid).delete();

        const userRef = db.doc(`users/${user.uid}`);

        // Go and fetch a document from that location.
        const snapshot = await userRef.get();

        // If there isn't a document for that user. Let's use information
        // that we got from either Google or our sign up form.
        if (!snapshot.exists) {
          const createdAt = new Date();
          const token = "ER-" + Math.floor(Math.random() * (100000 - 101) + 101);
          try {
            await userRef.set({
              email,
              password,
              plan: "basic",
              playerstatus: "available",
              registration_token: token,
              source: "custom",
              createdAt,
            });
            localStorage.setItem("email", email);
            localStorage.setItem("userid", user.uid);
            this.props.history.push({
              pathname: "/register",
            });
          } catch (error) {}
        }
        this.openModal();
        // veriry data

        db.collection("users")
          .doc(user.uid)
          .get()
          .then((querySnapshot) => {
            console.log({ VarifyData: querySnapshot });
          });
      });

      // Verify is ueser save or not

      //    ------------- Faizan Code End  -----------------

      // this.onLoginSuccess("form");
    }
  }

  onRecoverPassword() {
    console.log("__onFotgottenPassword__");
    console.log("email: " + document.querySelector("#email").value);

    const email = document.querySelector("#email").value;

    if (!email) {
      this.setState({
        error: true,
        recoverPasswordSuccess: false,
      });
    } else {
      this.setState({
        error: null,
        recoverPasswordSuccess: true,
      });
    }
  }

  onLoginSuccess(method, response) {
    console.log("logged successfully with " + method);
  }

  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    this.setState({
      error: response,
    });
  }

  startLoading() {
    this.setState({
      loading: true,
    });
  }

  finishLoading() {
    this.setState({
      loading: false,
    });
  }

  afterTabsChange() {
    this.setState({
      error: null,
    });
  }
  // showModal = () => {
  //   this.setState({ show: true });
  // };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };

  getprofile(email) {
    // db.collection("users").get((querysnapshot) => {
    //   const data = querysnapshot.docs.map((doc) => {
    //     doc.data();
    //   });
    //   console.log(data);
    //   this.setState({ users: data });
    // });
  }
  render() {
    const mystyle = {
      color: "black",
      backgroundColor: "#006600",
      // padding: "10px",
      // fontFamily: "Arial"
    };
    // const { users } = this.state;
    return (
      <div>
        <div id="preloader">
          <div class="clear-loading loading-effect">
            <img src={preloader} alt="Preloader" />
          </div>
        </div>
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
                          <a href="/">
                            <img src={logo} alt="Logo" style={{ maxHeight: "100px" }} />
                          </a>
                        </li>
                      </ul>
                      {/* <!-- menu links --> */}
                      {/* <Modal show={this.state.show} handleClose={this.hideModal}>
                        <p>Modal</p>
                      </Modal> */}
                      <ul class="menu-links">
                        {/* <!-- active class --> */}

                        <li>
                          <button
                            onClick={this.openModal}
                            style={mystyle}
                            class="registerMenuButton button btn-lg btn-colored full-rounded "
                            style={{
                              color: "white",
                              backgroundColor: "#D96C94",
                            }}
                          >
                            Register
                          </button>
                        </li>

                        <li>
                          <button
                            onClick={this.openModal}
                            style={mystyle}
                            class="loginMenuButton button btn-lg btn-colored full-rounded "
                            style={{
                              color: "white",
                              backgroundColor: "#D96C94",
                            }}
                          >
                            Login
                          </button>
                        </li>
                      </ul>
                      {/* <ReactModalLogin
                        visible={this.state.showModal}
                        onCloseModal={this.closeModal.bind(this)}
                        loading={this.state.loading}
                        error={this.state.error}
                        tabs={{
                          afterChange: this.afterTabsChange.bind(this),
                        }}
                        startLoading={this.startLoading.bind(this)}
                        finishLoading={this.finishLoading.bind(this)}
                        form={{
                          onLogin: this.onLogin.bind(this),
                          onRegister: this.onRegister.bind(this),
                          onRecoverPassword: this.onRecoverPassword.bind(this),

                          recoverPasswordSuccessLabel: this.state.recoverPasswordSuccess
                            ? {
                                label: "New password has been sent to your mailbox!",
                              }
                            : null,
                          recoverPasswordAnchor: {
                            label: "Forgot your password?",
                          },
                          loginBtn: {
                            label: "Sign in",
                          },
                          registerBtn: {
                            label: "Sign up",
                          },
                          recoverPasswordBtn: {
                            label: "Send new password",
                          },
                          loginInputs: [
                            {
                              containerClass: "RML-form-group",
                              label: "Email",
                              type: "email",
                              inputClass: "RML-form-control",
                              id: "email",
                              name: "email",
                              placeholder: "Email",
                            },
                            {
                              containerClass: "RML-form-group",
                              label: "Password",
                              type: "password",
                              inputClass: "RML-form-control",
                              id: "password",
                              name: "password",
                              placeholder: "Password",
                            },
                          ],
                          registerInputs: [
                            // {
                            //   containerClass: "RML-form-group",
                            //   label: "Nickname",
                            //   type: "text",
                            //   inputClass: "RML-form-control",
                            //   id: "login",
                            //   name: "login",
                            //   placeholder: "Nickname"
                            // },
                            {
                              containerClass: "RML-form-group",
                              label: "Email",
                              type: "email",
                              inputClass: "RML-form-control",
                              id: "email",
                              name: "email",
                              placeholder: "Email",
                            },
                            {
                              containerClass: "RML-form-group",
                              label: "Password",
                              type: "password",
                              inputClass: "RML-form-control",
                              id: "password",
                              name: "password",
                              placeholder: "Password",
                            },
                          ],
                          recoverPasswordInputs: [
                            {
                              containerClass: "RML-form-group",
                              label: "Email",
                              type: "email",
                              inputClass: "RML-form-control",
                              id: "email",
                              name: "email",
                              placeholder: "Email",
                            },
                          ],
                        }}
                        separator={{
                          label: "or",
                        }}
                        loginError={{
                          label: "Couldn't sign in, please try again.",
                        }}
                        registerError={{
                          label: "Couldn't sign up, please try again.",
                        }}
                        providers={{
                          facebook: {
                            config: facebookConfig,
                            onLoginSuccess: this.onLoginSuccess.bind(this),
                            onLoginFail: this.onLoginFail.bind(this),
                            label: "Continue with Facebook",
                          },
                          google: {
                            config: googleConfig,
                            onLoginSuccess: this.onLoginSuccess.bind(this),
                            onLoginFail: this.onLoginFail.bind(this),
                            label: "Continue with Google",
                          },
                        }}
                      /> */}
                    </div>
                  </div>
                </div>
              </section>
            </nav>
            {/* <!-- menu end --> */}
          </div>
        </header>
        {/*
  <!--=================================
 header -->

  <!--================================= */}
        {/* banner --> */}
        <section id="home-slider" class="fullscreen" style={{ height: "auto" }}>
          <div id="kb" class="carousel kb_elastic animate_text kb_wrapper" data-ride="carousel" data-interval="6000" data-pause="hover">
            {/* <ul class="carousel-indicators">
              <li data-target="#kb" data-slide-to="0"></li>
              <li data-target="#kb" data-slide-to="1"></li>
              <li data-target="#kb" data-slide-to="2"></li>
              <li data-target="#kb" data-slide-to="3" class="active"></li>
              <li data-target="#kb" data-slide-to="4"></li>
              <li data-target="#kb" data-slide-to="5"></li>
              <li data-target="#kb" data-slide-to="6"></li>
              <li data-target="#kb" data-slide-to="7"></li>
            </ul> */}

            {/* <!--======= Wrapper for Slides =======--> */}
            <div class="carousel-inner" role="listbox">
              {/* <!--========= First Slide =========--> */}
              <div class="carousel-item item active non-animated">
                <img class="non-animated" src={logo3} alt="slider 01" />
              </div>

              {/* <!--========= Second Slide =========--> */}
              {/* <div class="carousel-item item">
                <img src={logo6} alt="slider 02" />
              </div> */}

              {/* <!--========= Third Slide =========--> */}
              {/* <div class="carousel-item item">
                <img src={logo7} alt="Logo7" />
              </div> */}

              {/* <!--========= Third Slide =========--> */}

              {/* <div class="carousel-item item non-animated">
                <div>
                  <img class="non-animated" src={logo3} alt="Logo3" />
                </div>
              </div> */}

              {/* <div class="carousel-item item non-animated">
                <div>
                  <img class="non-animated" src={logo4} alt="Logo4" />
                </div>
              </div> */}

              {/* <div class="carousel-item item non-animated">
                <div>
                  <img class="non-animated" src={logo5} alt="Logo5" />
                </div>
              </div> */}

              {/* <div class="carousel-item item non-animated">
                <div>
                  <img class="non-animated" src={logo6} alt="slider 06" />
                </div>
              </div> */}
            </div>

            {/* <!--======= Navigation Buttons =========-->

      <!--======= Left Button =========--> */}
            {/* <a
              class="left carousel-control kb_control_left"
              href="#kb"
              role="button"
              data-slide="prev"
            >
              <span class="fa fa-angle-left kb_icons" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a> */}

            {/* <!--======= Right Button =========--> */}
            {/* <a
              class="right carousel-control kb_control_right"
              href="#kb"
              role="button"
              data-slide="next"
            >
              <span
                class="fa fa-angle-right kb_icons"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a> */}
          </div>
          {/* <!-- ++++++++++++++++++++++ END BOOTSTRAP CAROUSEL +++++++++++++++++++++++ --> */}
        </section>
        ;
        {/* <!--=================================
 banner -->

  <!--=================================
 Page Section --> */}
        {localStorage.getItem("username") != null ? (
          <section style={mystyle} class="form-1 py-3 carousel-form wow fadeInLeft" data-wow-delay="2.4s">
            {/* <div
              class="container-fluid"
              style={{ padding: "0 35px", maxWidth: "1000px" }}
            >
              <div class="banner-form">
                <div class="row">
                  <div class="col-10 pt-4 text-center text-light">
                    <div class="form-group row">
                      <div class="col-lg-12">
                        <p style={{ fontSize: "xx-large" }}>
                          Search Your Soul Mate
                        </p>
                      </div>


                    </div>
                  </div>

                  <div class="col-xl-2">
                    <a
                      href="/search"
                      class="button btn-lg btn-colored full-rounded animated right-icn"
                      style={{ marginTop: "20px" }}
                    >

                      <span class="text-white">
                        search
                        <i
                          class="glyph-icon flaticon-hearts"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            <div class="container-fluid" style={{ padding: "0px,35px", maxWidth: 1000 }}>
              <div class="banner-form">
                <div class="row">
                  <div class="col-xl-2 col-lg-6">
                    <div class="form-group row">
                      <div class="col-lg-12">
                        <label class="control-label text-white">Looking For:</label>
                        <select tabindex="-98" className="form-control">
                          <option value="Choose One">Choose One</option>
                          <option value="Groom">Groom</option>
                          <option value="Bride"> Bride</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-2 col-lg-6">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <div class="col-lg-12">
                            <label class="control-label text-white">Age From:</label>
                          </div>
                          <div class="col-lg-12">
                            <select className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                              <option>13</option>
                              <option>14</option>
                              <option>15</option>
                              <option>16</option>
                              <option>17</option>
                              <option>18</option>
                              <option>19</option>
                              <option>20</option>
                              <option>21</option>
                              <option>22</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <div class="col-lg-12 ">
                            <label class="control-label text-white pl-0">Age To:</label>
                          </div>
                          <div class="col-lg-12">
                            <select className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                              <option>13</option>
                              <option>14</option>
                              <option>15</option>
                              <option>16</option>
                              <option>17</option>
                              <option>18</option>
                              <option>19</option>
                              <option>20</option>
                              <option>21</option>
                              <option>22</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-2 col-lg-6">
                    <div class="form-group row">
                      <div class="col-lg-12">
                        <label class="control-label text-white">Religion:</label>
                      </div>
                      <div class="col-lg-12">
                        <select className="form-control">
                          <option value="Choose One">Choose One</option>
                          <option value="Groom">Islam</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-2 col-lg-6">
                    <div class="form-group row">
                      <div class="col-lg-12">
                        <label class="control-label text-white pl-2">Mother Tongue:</label>
                        <div class="col-lg-12">
                          <select class="form-control">
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
                            <option value="32">Hiligaynon/Ilonggo (Visayan)</option>
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
                            <option value="56">Mandarin (entire branch)</option>
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
                    </div>
                  </div>

                  <div class="col-xl-2 col-lg-6">
                    <div class="form-group row">
                      <div class="col-lg-12">
                        <label class="control-label text-white pl-2">Country:</label>
                        <div class="col-lg-12">
                          <select class="form-control">
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
                            <option value="27">Bosnia and Herzegovina</option>
                            <option value="28">Botswana</option>
                            <option value="29">Bouvet Island</option>
                            <option value="30">Brazil</option>
                            <option value="31">British Indian Ocean Territory</option>
                            <option value="32">Brunei</option>
                            <option value="33">Bulgaria</option>
                            <option value="34">Burkina Faso</option>
                            <option value="35">Burundi</option>
                            <option value="36">Cambodia</option>
                            <option value="37">Cameroon</option>
                            <option value="38">Canada</option>
                            <option value="39">Cape Verde</option>
                            <option value="40">Cayman Islands</option>
                            <option value="41">Central African Republic</option>
                            <option value="42">Chad</option>
                            <option value="43">Chile</option>
                            <option value="44">China</option>
                            <option value="45">Christmas Island</option>
                            <option value="46">Cocos (Keeling) Islands</option>
                            <option value="47">Colombia</option>
                            <option value="48">Comoros</option>
                            <option value="49">Republic Of The Congo</option>
                            <option value="50">Democratic Republic Of The Congo</option>
                            <option value="51">Cook Islands</option>
                            <option value="52">Costa Rica</option>
                            <option value="53">Cote D Ivoire (Ivory Coast)</option>
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
                            <option value="70">External Territories of Australia</option>
                            <option value="71">Falkland Islands</option>
                            <option value="72">Faroe Islands</option>
                            <option value="73">Fiji Islands</option>
                            <option value="74">Finland</option>
                            <option value="75">France</option>
                            <option value="76">French Guiana</option>
                            <option value="77">French Polynesia</option>
                            <option value="78">French Southern Territories</option>
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
                            <option value="96">Heard and McDonald Islands</option>
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
                            <option value="154">Netherlands Antilles</option>
                            <option value="155">Netherlands The</option>
                            <option value="156">New Caledonia</option>
                            <option value="157">New Zealand</option>
                            <option value="158">Nicaragua</option>
                            <option value="159">Niger</option>
                            <option value="160">Nigeria</option>
                            <option value="161">Niue</option>
                            <option value="162">Norfolk Island</option>
                            <option value="163">Northern Mariana Islands</option>
                            <option value="164">Norway</option>
                            <option value="165">Oman</option>
                            <option value="166">Pakistan</option>
                            <option value="167">Palau</option>
                            <option value="168">Palestinian Territory Occupied</option>
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
                            <option value="186">Saint Pierre and Miquelon</option>
                            <option value="187">Saint Vincent And The Grenadines</option>
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
                            <option value="199">Smaller Territories of the UK</option>
                            <option value="200">Solomon Islands</option>
                            <option value="201">Somalia</option>
                            <option value="202">South Africa</option>
                            <option value="203">South Georgia</option>
                            <option value="204">South Sudan</option>
                            <option value="205">Spain</option>
                            <option value="206">Sri Lanka</option>
                            <option value="207">Sudan</option>
                            <option value="208">Suriname</option>
                            <option value="209">Svalbard And Jan Mayen Islands</option>
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
                            <option value="232">United States Minor Outlying Islands</option>
                            <option value="233">Uruguay</option>
                            <option value="234">Uzbekistan</option>
                            <option value="235">Vanuatu</option>
                            <option value="236">Vatican City State (Holy See)</option>
                            <option value="237">Venezuela</option>
                            <option value="238">Vietnam</option>
                            <option value="239">Virgin Islands (British)</option>
                            <option value="240">Virgin Islands (US)</option>
                            <option value="241">Wallis And Futuna Islands</option>
                            <option value="242">Western Sahara</option>
                            <option value="243">Yemen</option>
                            <option value="244">Yugoslavia</option>
                            <option value="245">Zambia</option>
                            <option value="246">Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-2">
                    <a href="/search" class="button btn-colored full-rounded animated right-icn" style={{ marginTop: 20 }}>
                      <span class="text-white">
                        search <i class="glyph-icon flaticon-hearts" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}
        <section class="page-section-ptb text-center wow fadeInLeft" data-wow-delay=".1s" data-wow-offset="200" style={{ backgroundColor: "white" }}>
          <div class="container">
            <div class="row justify-content-center mb-5 sm-mb-3">
              <div class="col-md-8">
                <h2 class="title divider-2 mb-3" style={{ color: "#00bcd5" }}>
                  Steps To Find Your Soulmate
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 sm-mb-3">
                <div class="timeline-badge mb-2">
                  <img class="img-center img-icon" src="../../assets/images/icons/Sign-Up.png" alt="" />
                </div>
                <h4 class="title divider-3 mb-3" style={{ color: "#00bcd5" }}>
                  CREATE PROFILE
                </h4>
                <p style={{ color: "black" }}>Create your profile by entering all the details. The better you set up your profile, the more chances of you to match most relevant profile.</p>
              </div>
              <div class="col-md-4 sm-mb-3">
                <div class="timeline-badge mb-2">
                  {/* <!-- <img class="img-center img-icon" src="images/icons/matching.png" alt=""> --> */}
                  <img class="img-center img-icon" src="../../assets/images/icons/best-match.png" alt="" />
                </div>
                <h4 class="title divider-3 mb-3" style={{ color: "#00bcd5" }}>
                  PERFECT MATCH
                </h4>
                <p style={{ color: "black" }}>Our website uses an algorithm to match you with the profile having most similarities to your profile. Whatever you requirements are, we make sure to match you with nothing but the best.</p>
              </div>
              <div class="col-md-4">
                <div class="timeline-badge mb-2">
                  {/* <!-- <img class="img-center img-icon" src="images/icons/trust.png" alt=""> --> */}
                  <img class="img-center img-icon" src="../../assets/images/icons/trusted.png" alt="" />
                </div>
                <h4 class="title divider-3 mb-3" style={{ color: "#00bcd5" }}>
                  GET MARRIED
                </h4>
                <p style={{ color: "black" }}>Become a premium member to get the contact information of the profiles you like. Escalate things further leading towards the path designed for you, your marriage!</p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ height: 650 }}>
          <div className="row">
            <div
              className="col-12 font-weight-bolder size-50 text-center mt-5 mb-5"
              style={{
                fontFamily: "cursive",
                fontSize: "xx-large",
                color: "#ed2d93",
              }}
            >
              Introducing Easy Rishta App
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div>
                <img class="img-fluid" src="../../assets/images/story/website-add.png" alt="" />
              </div>
            </div>
            <div className="col-6">
              <div>
                <img class="img-fluid" src="../../assets/images/story/blue.png" alt="" />
              </div>
              <div
                className="ml-xl-n4 mt-5"
                style={{
                  fontSize: "xx-large",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              >
                Now Meet Your Best Matches
              </div>
              <div>
                <div className="ml-5 mt-5">
                  <img class="img-fluid" src="../../assets/images/story/lineborder.png" alt="" />
                </div>
              </div>
              <div
                className="ml-4"
                style={{
                  fontSize: "xx-large",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  color: "#ed2d93",
                }}
              >
                Available On Play Store
              </div>
              <div>
                <div style={{ marginLeft: "9%" }}>
                  <img class="img-fluid" src="../../assets/images/story/badge.png" alt="" style={{ width: "40%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div
            class="container"
            style={{
              backgroundImage: "url(../../assets/images/appbanner.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "860px",
              maxWidth: "100%",
            }}
          ></div>
        </section> */}
        {/* <div
          style={{
            backgroundImage:
              "url(../../assets/images/appbanner.jpeg) no-repeat 0 0",
          }}
        ></div> */}
        {/* <!-- background: url(images/bg/bg-3.jpg) --> */}
        <section
          class="page-section-ptb bg-overlay-black-60 text-white"
          style={{
            background: "url(../../assets/images/inner-Banners/14.jpg) no-repeat 0 0",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div class="container wow pulse" data-wow-delay=".3s" data-wow-offset="100">
            <div class="row justify-content-center mb-5 sm-mb-3">
              <div class="col-md-8 text-center">
                <h2 class="title divider " style={{ color: "#00bcd5" }}>
                  Most trusted Matrimonial Website
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <h4 class="title text-center ">With our tons of professionals working day and night we assure you, you’re in safe hands at the best matrimonial website Easyrishta for your best match.</h4>
              </div>
            </div>
          </div>
        </section>
        {/* <!--=================================
 Page Section --> */}
        <section
          class="page-section-ptb pb-130 sm-pb-6 grey-bg story-slider "
          style={{
            // background: "url(../../assets/images/pattern/01.png) no-repeat 0 0",
            backgroundSize: "cover",
          }}
        >
          <div class="wow fadeInUp" data-wow-offset="200">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-8 text-center">
                  <h2 class="title divider-2" style={{ color: "#00bcd5" }}>
                    Success Stories
                  </h2>
                  <p class="lead m-0">The stories of love that started right at our Easyrishta.</p>
                </div>
              </div>
              <OwlCarousel className="owl-theme" loop margin={10} nav>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/marriage4.jpeg" alt="" />
                </div>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/marriage3.jpeg" alt="" />
                </div>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/01.jpg" alt="" />
                </div>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/01.jpg" alt="" />
                </div>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/01.jpg" alt="" />
                </div>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/01.jpg" alt="" />
                </div>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/01.jpg" alt="" />
                </div>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/01.jpg" alt="" />
                </div>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/01.jpg" alt="" />
                </div>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/01.jpg" alt="" />
                </div>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/01.jpg" alt="" />
                </div>
                <div class="item">
                  <img style={{ height: "260px", width: "100%" }} src="../../assets/images/story/01.jpg" alt="" />
                </div>
              </OwlCarousel>
            </div>
            <div class="owl-carousel" data-nav-dots="true" data-items="5" data-md-items="4" data-sm-items="2" data-xx-items="1" data-space="30">
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/01.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">Quinnel &amp; Jonet</h5>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/02.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">Adam &amp; Eve</h5>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/03.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">Bella &amp; Edward</h5>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/04.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">DEMI &amp; HEAVEN</h5>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/05.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">David &amp; Bathsheba</h5>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/06.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">Eros &amp; Psychi</h5>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/07.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">Hector &amp; Andromache</h5>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/08.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">Bonnie &amp; Clyde</h5>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/09.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">Henry &amp; Clare</h5>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/10.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">Casanova &amp; Francesca</h5>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/11.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">Jack &amp; Sally</h5>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="story-item">
                  <div class="story-image clearfix">
                    <img class="img-fluid" src="../../assets/images/story/12.jpg" alt="" />
                    <div class="story-link">
                      <a href="stories-details.html">
                        <i class="glyph-icon flaticon-add"></i>
                      </a>
                    </div>
                  </div>
                  <div class="story-details text-center">
                    <div class="about-des">Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in</div>
                  </div>
                  <div class="yellow-bg story-text py-3 text-white text-center">
                    <h5 class="title text-uppercase">James &amp; Lilly</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="page-section pt-4 pb-4 bg fixed page-section--ps bg-overlay-black-50 text-white"
          style={{
            backgroundImage: "url(../../assets/images/bg/Personal-Service-BG.jpg)",
          }}
        >
          <div class="container">
            <div class="row justify-content-center mb-1 sm-mb-3">
              <div class="col-md-8 text-center">
                <h2 class="title divider wow fadeInLeft" style={{ color: "#00bcd5" }}>
                  Personalized Services
                </h2>
                <h5 class="text-center mt-4"> Personalized matchmaking services Easyrishta.com provides you.</h5>
              </div>
            </div>
            {/* </div> */}

            <div class="row mt-7 mb-6">
              <div class="col-lg-4 col-md-6 text-center">
                <div class="ss-box  wow fadeInLeft" data-wow-delay="0.2s" data-wow-offset="100">
                  <div class="timeline-badge">
                    <img class="img-center" src="../../assets/images/icons/advisor.png" alt="" />
                  </div>
                  <h4 class="title divider-3 mb-3">Personal Advisor</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 text-center">
                <div class="ss-box  wow fadeInLeft" data-wow-delay="0.7s" data-wow-offset="100">
                  <div class="timeline-badge">
                    <img class="img-center" src="../../assets/images/icons/personal-matchmaking.png" alt="" />
                  </div>
                  <h4 class="title divider-3 mb-3">Personal Matchmaking</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 text-center">
                <div class="ss-box  wow fadeInLeft" data-wow-delay="1.1s" data-wow-offset="100">
                  <div class="timeline-badge">
                    <img class="img-center" src="../../assets/images/icons/arrange-meeting.png" alt="" />
                  </div>
                  <h4 class="title divider-3 mb-3">Intro And Meeting</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis</p>
                </div>
              </div>
            </div>

            {/* </div>       */}

            {/* <!-- <div class="row">
        <div class="col-lg-3 col-md-6 text-center">
          <div class="counter wow fadeInLeft" data-wow-delay="0.2s">
            <div>
              <img src="images/icons/ps-icons/Personal-Advisor-512x512.png" alt="">
            </div>

            <span>Personal Advisor</span>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="counter wow fadeInLeft" data-wow-delay="0.4s">
            <img src="images/icons/ps-icons/personal-matchmaking-512x512.png" alt="">
            <span>Personal Matchmaking</span>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="counter wow fadeInLeft" data-wow-delay="0.6s"> <img
              src="images/icons/ps-icons/Intro-and-meetings-512x512.png" alt="">
            <span>Intro And Meeting</span>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="counter wow  fadeInLeft" data-wow-delay="0.8s"> <img
              src="images/icons/ps-icons/guaranteed-response-512x512.png" alt="">
            <span>Guaranteed Response</span>
          </div>
        </div>
      </div> --> */}
          </div>
        </section>
        {/* <section class="page-section-ptb profile-slider pb-3 sm-pb-6">
          <div class="container wow zoomIn" data-wow-offset="300">
            <div class="row justify-content-center mb-2 sm-mb-0">
              <div class="col-md-8 text-center">
                <h2 class="title divider">Top Searches</h2>
              </div>
            </div>
            <div class="row">
              {users.map((user) => {
                <div class="col-md-12">
                  <div class="owl-carousel" data-nav-arrow="true" data-items="4" data-lg-items="4" data-md-items="3" data-sm-items="2" data-space="30">
                    <div class="item">

                      <a href="profile-details.html" class="profile-item">
                        <div class="profile-image clearfix">
                          <img class="img-fluid w-100" src="../../assets/images/profile/01.jpg" alt="" />
                        </div>
                        <div class="profile-details text-center">
                          <h5 class="title">{user.email}</h5>
                          <span>{user.plan}</span>
                        </div>
                      </a>
                    </div>
                    <div class="item">

                      <a href="profile-details.html" class="profile-item">
                        <div class="profile-image clearfix">
                          <img class="img-fluid w-100" src="../../assets/images/profile/02.jpg" alt="" />
                        </div>
                        <div class="profile-details text-center">
                          <h5 class="title">Francisco Pierce</h5>
                          <span>21 Years Old</span>
                        </div>
                      </a>
                    </div>
                    <div class="item">

                      <a href="profile-details.html" class="profile-item">
                        <div class="profile-image clearfix">
                          <img class="img-fluid w-100" src="../../assets/images/profile/06.jpg" alt="" />
                        </div>
                        <div class="profile-details text-center">
                          <h5 class="title">Nelle Townsend</h5>
                          <span>19 Years Old</span>
                        </div>
                      </a>
                    </div>
                    <div class="item">

                      <a href="profile-details.html" class="profile-item">
                        <div class="profile-image clearfix">
                          <img class="img-fluid w-100" src="../../assets/images/profile/01.jpg" alt="" />
                        </div>
                        <div class="profile-details text-center">
                          <h5 class="title">Glen Bell</h5>
                          <span>20 Years Old</span>
                        </div>
                      </a>
                    </div>
                    <div class="item">

                      <a href="profile-details.html" class="profile-item">
                        <div class="profile-image clearfix">
                          <img class="img-fluid w-100" src="../../assets/images/profile/06.jpg" alt="" />
                        </div>
                        <div class="profile-details text-center">
                          <h5 class="title">Bill Nelson</h5>
                          <span>22 Years Old</span>
                        </div>
                      </a>
                    </div>
                    <div class="item">

                      <a href="profile-details.html" class="profile-item">
                        <div class="profile-image clearfix">
                          <img class="img-fluid w-100" src="../../assets/images/profile/02.jpg" alt="" />
                        </div>
                        <div class="profile-details text-center">
                          <h5 class="title">Francisco Pierce</h5>
                          <span>23 Years Old</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>;
              })}
            </div>
          </div>
          ;
        </section> */}
        {/* <!-- images/bg/bg-4.jpg --> */}
        {/* <section class="page-section-ptb bg fixed text-white bg-overlay-black-50" style={{ backgroundImage: "url(../../assets/images/inner-Banners/20.jpg)" }}>
          <div class="container wow bounceIn" data-wow-offset="120">
            <div class="row justify-content-center">
              <div class="col-md-8 text-center">
                <h2 class="title title2 divider mb-3">Your story is waiting to happen!</h2>
                <h5 class="pb-20">Register now at the best matrimonial website and make it happen.</h5>
                <a href="www.google.com" class="button btn-lg btn-colored full-rounded animated right-icn registerMenuButton">
                  <span>
                    Register Now! <i class="fa fa-user-plus" style={{ fontSize: "20px" }} aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!--=================================
footer --> */}
        <footer
          class="page-section-pt contact-section text-center"
          style={{
            backgroundColor: "white",
            backgroundSize: "cover",
          }}
        >
          <div class="container wow fadeInUp" data-wow-delay=".2s" data-wow-offset="200">
            <div class="row justify-content-center ">
              <div class="col-md-10">
                <div class="row mb-5">
                  <div class="col-md-12">
                    <h2 class="title divider mb-3" style={{ color: "#00bcd5" }}>
                      Contact Us
                    </h2>
                    <p class="lead" style={{ color: "black" }}>
                      Contact the best matrimonial website ¬for any queries, issues or concerns you have.
                    </p>
                  </div>
                </div>
                <div class="row mb-5 sm-mb-2">
                  <div class="col-md-4">
                    <div class="address-block">
                      <i class="fa fa-desktop" aria-hidden="true"></i>
                      <a href="mailto:info@Easyrishta.com " style={{ color: "black" }}>
                        info@Easyrishta.com
                      </a>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="address-block">
                      <i class="fa fa-home" aria-hidden="true"></i>
                      <a href="www.google.com" style={{ color: "black" }}>
                        EasyRishta, 369 D, Street 17 <br />
                        PWD Housing Society, Islamabad
                      </a>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="address-block">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <a href="tel:+923111 222 541" style={{ color: "black" }}>
                        +92 331 338 7710
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-- <div class="row">
            <div class="col-md-12 mb-3">
              <h4 class="title divider-3">We Love Talking</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div id="formmessage" style="display:none">Success/Error Message Goes Here</div>
              <form id="contactform" class="main-form" method="post" action="">
                <div class=" form-group half-group">
                <div class="input-group">
                  <input id="name" required placeholder="Your name here" class="form-control" name="name" type="text">
                </div>
            </div>
            <div class="form-group half-group">
              <div class="input-group">
                <input placeholder="Your mail here" class="form-control" required name="email" type="email">
              </div>
            </div>
            <div class=" form-group half-group">
                <div class="input-group">
                  <input id="subject" required placeholder="Your Subject" class="form-control" name="subject" type="text">
                </div>
            </div>
            <div class="form-group half-group">
              <div class="input-group">
                <input placeholder="Your Phone" class="form-control" required name="phone" type="text">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <textarea class="form-control input-message" required placeholder="Your message here*" rows="7"
                  name="message"></textarea>
              </div>
            </div>
            <div class="form-group sm-mb-0">
              <input type="hidden" name="action" value="sendEmail" required />
              <button id="submit" name="submit" type="submit" value="Send"
                class="button btn-lg btn-theme full-rounded animated right-icn"><span>Submit Now<i
                    class="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></button>
            </div>

            </form>
            <div id="ajaxloader" style="display:none"><img class="center-block" src="images/loading.gif" alt="" />
            </div>
          </div>
        </div> --> */}
              </div>
            </div>
            {/* </div> */}
          </div>
          <div class="footer-widget sm-mt-3">
            <div
              class="footer-middle"
              style={{
                background: "url(../../assets/images/pattern/01.png) no-repeat 0 0",
                backgroundSize: "cover",
              }}
            >
              <div class="container wow fadeIn" data-wow-offset="50">
                <div class="row">
                  <div class="col-lg-2 offset-lg-1 col-sm-12">
                    {/* <!--Column1--> */}
                    <div class="footer-pad">
                      <h4 style={{ color: "#ed225c" }}>Company</h4>
                      <ul class="list-unstyled">
                        <li>
                          <Link to={"/"} style={{ color: "white" }}>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to={"/About us"} style={{ color: "white" }}>
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to={"/membership"} style={{ color: "white" }}>
                            Membership
                          </Link>
                        </li>
                        <li>
                          <Link to={"/career"} style={{ color: "white" }}>
                            Career
                          </Link>
                        </li>
                        <li>
                          <Link to={"/MatchMaking"} style={{ color: "white" }}>
                            Match Making
                          </Link>
                        </li>
                        <li>
                          <Link to={"/search"} style={{ color: "white" }}>
                            Search Profile
                          </Link>
                        </li>
                        <li>
                          <Link to={"/profile"} style={{ color: "white" }}>
                            Profile
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-2 col-sm-12">
                    {/* <!--Column1--> */}
                    <div class="footer-pad">
                      <h4 style={{ color: "#ed225c" }}>Policies</h4>
                      <ul class="list-unstyled">
                        <li>
                          <Link to={"/privacypolicy"} style={{ color: "white" }}>
                            Privacy and Policy
                          </Link>
                        </li>
                        <li>
                          <Link to={"/termscondition"} style={{ color: "white" }}>
                            Terms & Conditions
                          </Link>
                        </li>
                        <li>
                          <a href="./salami.html" style={{ color: "white" }}>
                            Salami
                          </a>
                        </li>
                        <li>
                          <a href="./event-management.html" style={{ color: "white" }}>
                            Event Management
                          </a>
                        </li>
                        <li>
                          <Link to={"/readmessage"} style={{ color: "white" }}>
                            Read message
                          </Link>
                        </li>

                        {/* <!-- <li><a href="./pricing.html">Pricing</a></li>
                    <li><a href="./careers.html">Careers</a></li>
                    <li><a href="./contact.html">Contact Us</a></li>
                    <li><a href="./events.html">Events</a></li> --> */}
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-2 col-sm-12">
                    {/* <!--Column1--> */}
                    <div class="footer-pad">
                      <h4 style={{ color: "#ed225c" }}>Partner Services</h4>
                      <ul class="list-unstyled">
                        <li>
                          <a href="./partner.html" style={{ color: "white" }}>
                            Be Our Partner
                          </a>
                        </li>
                        <li>
                          <a href="./partner.html#franchise" style={{ color: "white" }}>
                            Franchise Partnership
                          </a>
                        </li>
                        <li>
                          <a href="./partner.html#affiliate" style={{ color: "white" }}>
                            Affiliate Program
                          </a>
                        </li>
                        <li>
                          <a href="./partner.html#fieldforce" style={{ color: "white" }}>
                            Field Force
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-2 col-sm-12">
                    {/* <!--Column1--> */}
                    <div class="footer-pad">
                      <h4 style={{ color: "#ed225c" }}>Help</h4>
                      <ul class="list-unstyled">
                        <li>
                          <a href="./why-us.html" style={{ color: "white" }}>
                            Why Us?
                          </a>
                        </li>
                        <li>
                          <a href="./faqs.html" style={{ color: "white" }}>
                            FAQs
                          </a>
                        </li>
                        <li>
                          <Link to={"/Contact"} style={{ color: "white" }}>
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- <div class="col-md-3 col-sm-12">
                <div class="footer-pad">
                <h4>Need Help?</h4>
                <ul class="list-unstyled">
                  <li><a href="javascript:;">Sign Up</a></li>
                  <li><a href="javascript:;">Member Login</a></li>
                  <li><a href="javascript:;">Reset Password</a></li>
                  <li><a href="javascript:;">FAQ</a></li>
                  <li><a href="javascript:;">Example Link</a></li>
                </ul>
              </div>
            </div> --> */}

                  <div class="col-lg-2 col-sm-12">
                    {/* <!--Column1--> */}
                    <div class="footer-pad">
                      <h4 style={{ color: "#ed225c" }}>Contact Us</h4>

                      <div class="footer-logo mb-2" style={{ marginTop: "15px" }}>
                        <img style={{ maxWidth: "180px", maxHeight: "75px" }} src={logo} alt="Logo" />
                      </div>
                      <p style={{ color: "white" }}>
                        Shaadeeghar, Ground floor, Askari plaza, Behind habibi restaurant, Main highway, <br />
                        PWD Islamabad
                      </p>

                      <div class="social-icons color-hover">
                        <ul>
                          <li class="social-facebook">
                            <a href="www.google.com">
                              <i class="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li class="social-twitter">
                            <a href="www.google.com">
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li class="social-dribbble">
                            <a href="www.google.com">
                              <i class="fa fa-dribbble"></i>
                            </a>
                          </li>
                          <li class="social-gplus">
                            <a href="www.google.com">
                              <i class="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li class="social-youtube">
                            <a href="www.google.com">
                              <i class="fa fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid footer-bottom" style={{ backgroundColor: "#ed225c" }}>
              <div class="justify-content-center">
                <p class="text-white">© 2021 - QuellxCode Pvt Ltd All Right Reserved </p>
              </div>
            </div>
          </div>
        </footer>
        {/* <!--Register Modal --> */}



      </div>
    );
  }
}

export default Home;
