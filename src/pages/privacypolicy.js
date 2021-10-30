import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../src/pages/images/350x150-logo.png";

class privacy extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "#ed225c",
      // padding: "10px",
      // fontFamily: "Arial"
    };

    return (
      <div>
        <header id="header" class="dark">
          {/*  <!--=================================
mega menu --> */}

          <div>
            {/* <!-- menu start --> */}
            <nav id="menu" class="mega-menu">
              {/*  <!-- menu list items container --> */}
              <section class="menu-list-items">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-12">
                      {/*  <!-- menu logo --> */}
                      <ul class="menu-logo">
                        <li>
                          {" "}
                          <a href="index.html">
                            <img
                              src={logo}
                              alt="pic"
                              style={{ maxHeight: "100px" }}
                            />{" "}
                          </a>
                        </li>
                      </ul>
                      {/* <!-- menu links --> */}
                      <ul class="menu-links  ">
                        {/*   <!-- active class --> */}

                        <li>
                          <Link
                            to={"/registeration"}
                            style={mystyle}
                            class="registerMenuButton button btn-lg btn-colored full-rounded "
                            style={{
                              color: "white",
                              backgroundColor: "#ed225c",
                            }}
                          >
                            Register{" "}
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={"/login"}
                            style={mystyle}
                            class="loginMenuButton button btn-lg btn-colored full-rounded "
                          >
                            {" "}
                            Login{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </nav>
            {/*  <!-- menu end --> */}
          </div>
        </header>

        {/* <!--=================================
 header --> 

<!--=================================
 banner --> */}

        <section
          class="inner-intro intro-page-top bg bg-fixed bg-overlay-black-70"
          style={{
            backgroundImage: "url(assets/images/bg/privacy.png)",
          }}
        >
          <div class="container">
            <div class="row intro-title text-center">
              <div class="col-md-12">
                <div class="section-title wow fadeIn">
                  <h1
                    class="position-relative divider"
                    style={{ color: "white" }}
                  >
                    Privacy Policy<span class="sub-title">Privacy Policy</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--=================================
 banner --> */}

        <section class="page-section-ptb section-about">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center mb-5 sm-mb-3">
                <h2
                  class="title divider mb-0 wow fadeInUp"
                  data-wow-offset="100"
                >
                  Privacy Policy
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 termsParas">
                <p class="text-justify">
                  The Shaadeeghar.com team understands your right to privacy,
                  and we have drawn have a privacy statement in place with
                  regard to the information we collect from you.
                </p>
                <p class="text-justify">
                  We use a secure server for credit card transactions to protect
                  the credit card information of our clients and Cookies are
                  used to store the login information.
                </p>
                <p class="text-justify">
                  <span class="text-bold">
                    1. What information does Shaadeeghar.com collect from you?
                  </span>
                </p>
                <p class="text-justify">
                  There are two types of user-submitted information we collect:
                  Public and Private. We define Public information as personal
                  information that may be displayed on the site at the behest of
                  the member, such as gender, age, height, telephone number,
                  photograph, etc. Private information is defined as any
                  information that allows others to contact a user other than
                  through Shaadeeghar.com or allows the collection of
                  information about the user other than what is displayed on the
                  site.
                </p>
                <p class="text-justify">
                  Public: To accomplish our goal of bringing compatible people
                  together, we must gather personal information, which may or
                  may not include: customer-specified Shaadeeghar.com username,
                  gender, age, religion, income range, profession, telephone
                  number, preference/lifestyle information, general geographic
                  location, photograph and horoscope.
                </p>
                <p class="text-justify">
                  Private: This information is gathered from members and guests
                  who apply for the various services our site offers. This
                  information includes, but is not limited to: email address,
                  first name, last name, credit card number or checking account
                  information for payment, a user-specified password, mailing
                  address, zip code and telephone number.
                </p>
                <p class="text-justify">
                  Shaadeeghar.com also allows members to submit public and
                  private information on behalf of others - child/ward, sibling
                  or friend. If such child/ward, sibling or friend does not wish
                  this information to be displayed, she/he has the option to
                  request removal of such information after providing the
                  necessary evidence that the information pertains to her/him.
                </p>
                <p class="text-justify">
                  <span class="text-bold">
                    2. How does Shaadeeghar.com use the information it collects?
                  </span>
                </p>
                <p class="text-justify">
                  We collect information from our members primarily to ensure
                  that we are able to fulfill your requirements and to deliver
                  personalized experience.
                </p>
                <p class="text-justify">
                  <span class="text-bold">
                    3. Does the site share the information it collects?
                  </span>
                </p>
                <p class="text-justify">
                  The information collected from our members is shared only with
                  members of Shaadeeghar.com or members of our partners. Any
                  information you give us is held with the utmost care and
                  security. We are also bound to cooperate fully should a
                  situation arise where we are required by law or legal process
                  to provide information about a customer.
                </p>
                <p class="text-justify">
                  <span class="text-bold">
                    4. What is the website’s policy on correcting, updating or
                    removing personal information?
                  </span>
                </p>
                <p class="text-justify">
                  Shaadeeghar.com allows you to modify or remove both public and
                  private information from our database. Private information
                  such as financial details submitted during the process of a
                  financial transaction &amp; certain account-related
                  information collected at the time of registration however
                  cannot be changed or removed by the user.
                </p>
                <p class="text-justify">
                  <span class="text-bold">
                    5. Tell me about security of my personal information.
                  </span>
                </p>
                <p class="text-justify">
                  Shaadeeghar.com takes every precaution to protect your
                  information, both online and offline.
                </p>
                <p class="text-justify">
                  When our registration/order process asks you to enter
                  sensitive information (such as a credit card number), such
                  information is encrypted and is protected with the best
                  encryption software in the industry - SSL.
                </p>
                <p class="text-justify">
                  While we use SSL encryption to protect sensitive information
                  online, we also do everything in our power to protect your
                  information offline. We follow generally accepted industry
                  standards to protect the personal information submitted to us,
                  both during transaction and once we receive it. All your
                  information, not just the sensitive information mentioned
                  above, is restricted in our offices. Only employees who need
                  the information to perform a specific job (for example, a
                  billing clerk or a customer service representative) are
                  granted access to personally identifiable information.
                </p>
                <p class="text-justify">
                  We have also done everything in our power to prevent misuse of
                  photographs. Apart from not allowing photographs to be
                  downloaded or copied, we have watermarked them with the
                  Shaadeeghar.com logo. This acts as a further deterrent for
                  illegal use elsewhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- 
<section class="page-section-ptb o-hidden grey-white">
  <div class="container">
    <div class="row justify-content-center mb-5 sm-mb-0">
      <div class="col-md-10 text-center">
        <h2 class="title divider mb-3">Why Choose Us</h2>
        <p class="lead mb-0">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis. Eum cu</p>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-5 offset-lg-1">
        
          <ul class="list list-mark">
              <li>randomised words which randomised words which</li>
              <li>making this the first randomised words which</li>
              <li>have put together randomised words which</li>
              <li>your favorites from randomised words which</li>
              <li>going through the cites randomised words which</li>
            </ul>
      </div>
      <div class="col-lg-5 offset-lg-1">
        
          <ul class="list list-mark">
              <li>randomised words which randomised words which</li>
              <li>making this the first randomised words which</li>
              <li>have put together randomised words which</li>
              <li>your favorites from randomised words which</li>
              <li>going through the cites randomised words which</li>
            </ul>
      </div>
    </div>


   
  </div>
</section>  -->

 */}

        <footer class="page-section contact-section text-center">
          <div class="footer-widget">
            <div
              class="footer-middle"
              style={{
                background:
                  "url(../../assets/images/pattern/01.png) no-repeat 0 0",
                backgroundSize: "cover",
              }}
            >
              <div class="container wow fadeIn" data-wow-offset="50">
                <div class="row">
                  <div class="col-lg-2 offset-lg-1 col-sm-12">
                    {/*  <!--Column1--> */}
                    <div class="footer-pad">
                      <h4 style={{ color: "#ed225c" }}>Company</h4>
                      <ul class="list-unstyled">
                        <Link to={"/"} style={{ color: "white" }}>
                          Home
                        </Link>
                        <li>
                          <Link to={"/"} style={{ color: "white" }}>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to={"/About us"} style={{ color: "white" }}>
                            {" "}
                            About Us{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/membership"} style={{ color: "white" }}>
                            {" "}
                            Membership{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to={"/career"} style={{ color: "white" }}>
                            {" "}
                            Career{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/messages"} style={{ color: "white" }}>
                            {" "}
                            Messages{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/MatchMaking"} style={{ color: "white" }}>
                            {" "}
                            Match Making{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/search"} style={{ color: "white" }}>
                            {" "}
                            Search Profile{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/profile"} style={{ color: "white" }}>
                            {" "}
                            Profile{" "}
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
                          <Link
                            to={"/privacypolicy"}
                            style={{ color: "white" }}
                          >
                            {" "}
                            Privacy and Policy{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/termscondition"}
                            style={{ color: "white" }}
                          >
                            {" "}
                            Terms & Conditions{" "}
                          </Link>
                        </li>
                        <li>
                          <a href="./salami.html" style={{ color: "white" }}>
                            Salami
                          </a>
                        </li>
                        <li>
                          <a
                            href="./event-management.html"
                            style={{ color: "white" }}
                          >
                            Event Management
                          </a>
                        </li>
                        <li>
                          <Link to={"/readmessage"} style={{ color: "white" }}>
                            Read message{" "}
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
                    {/*  <!--Column1--> */}
                    <div class="footer-pad">
                      <h4 style={{ color: "#ed225c" }}>Partner Services</h4>
                      <ul class="list-unstyled">
                        <li>
                          <a style={{ color: "white" }} href="./partner.html">
                            Be Our Partner
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ color: "white" }}
                            href="./partner.html#franchise"
                          >
                            Franchise Partnership
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ color: "white" }}
                            href="./partner.html#affiliate"
                          >
                            Affiliate Program
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ color: "white" }}
                            href="./partner.html#fieldforce"
                          >
                            Field Force
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-2 col-sm-12">
                    {/*   <!--Column1--> */}
                    <div class="footer-pad">
                      <h4 style={{ color: "#ed225c" }}>Help</h4>
                      <ul class="list-unstyled">
                        <li>
                          <a style={{ color: "white" }} href="./why-us.html">
                            Why Us?
                          </a>
                        </li>
                        <li>
                          <a style={{ color: "white" }} href="./faqs.html">
                            FAQs
                          </a>
                        </li>
                        <li>
                          <a style={{ color: "white" }} href="./Contact">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/*  <!-- <div class="col-md-3 col-sm-12">
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

                      <div
                        class="footer-logo mb-2"
                        style={{ marginTop: " 15px" }}
                      >
                        <img
                          class="img-center"
                          src={logo}
                          alt="Logo"
                          style={{ maxWidth: "180px", maxHeight: "75px" }}
                        />{" "}
                      </div>
                      <p style={{ color: "white" }}>
                        {" "}
                        Easyrishta, Ground floor, Askari plaza, Behind habibi
                        restaurant, Main highway, <br></br>PWD Islamabad
                      </p>

                      <div class="social-icons color-hover">
                        {/* <ul>
                          <li class="social-facebook">
                            <a href="#">
                              <i class="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li class="social-twitter">
                            <a href="#">
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li class="social-dribbble">
                            <a href="#">
                              <i class="fa fa-dribbble"></i>
                            </a>
                          </li>
                          <li class="social-gplus">
                            <a href="#">
                              <i class="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li class="social-youtube">
                            <a href="#">
                              <i class="fa fa-youtube"></i>
                            </a>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="container-fluid footer-bottom"
              style={{ backgroundColor: "#ed225c" }}
            >
              <div class="justify-content-center">
                <p class="text-white">©2021 - Easyrishta All Right Reserved </p>
              </div>
            </div>
          </div>
        </footer>

        {/* <!--Register Modal --> */}
        <div
          class="modal fade"
          id="registerModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-center">
                <div class="col-sm-12">
                  <h5 class="modal-title text-center" id="exampleModalLabel">
                    Register Free
                  </h5>
                </div>

                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body login-form">
                <div class="login-1-form register-1-form clearfix">
                  <form method="GET" id="modalRegisterForm">
                    <div class="section-field">
                      <div class="field-widget">
                        {" "}
                        <i class="glyph-icon flaticon-user"></i>
                        <input
                          id="Username"
                          required
                          name="username"
                          class="web"
                          type="text"
                          placeholder="User Name"
                        />
                      </div>
                    </div>
                    {/* <!-- <div class="section-field ">
        <div class="field-widget"> <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <input id="email" class="email" type="email" placeholder="Email" name="email"/>
        </div>
      </div> --> */}
                    <div class="section-field ">
                      <div class="field-widget">
                        {" "}
                        <i
                          style={{ transform: "translate(-4px ,-13px)" }}
                          class="glyph-icon flaticon-padlock"
                        ></i>
                        <input
                          id="Password"
                          required
                          class="Password"
                          type="password"
                          placeholder="Password"
                          name="Password"
                        />
                      </div>
                    </div>
                    {/* <!-- <div class="section-field ">
        <div class="field-widget"> <i  style={{transform: "translate(-4px ,-13px)"}} class="glyph-icon flaticon-padlock"></i>
          <input id="ConfirmPassword" class="Password" type="password" placeholder="Confirm Password"
            name="Password"/>
        </div>
      </div> --> */}

                    <div class="row">
                      <div class="col-5 ">
                        <div class="section-field ">
                          <div class="field-widget">
                            {" "}
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            {/* <!-- <input id="Collagename" class="web" type="text" placeholder="Code"> --> */}
                            <select name="code" id="code" class="Password">
                              <option value="" selected="">
                                Code
                              </option>
                              <option value="+93">Afghanistan (+93)</option>
                              <option value="+355">Albania (+355)</option>
                              <option value="+213">Algeria (+213)</option>
                              <option value="+1684">
                                American Samoa (+1684)
                              </option>
                              <option value="+376">Andorra (+376)</option>
                              <option value="+244">Angola (+244)</option>
                              <option value="+1264">Anguilla (+1264)</option>
                              <option value="+0">Antarctica (+0)</option>
                              <option value="+1268">
                                Antigua And Barbuda (+1268)
                              </option>
                              <option value="+54">Argentina (+54)</option>
                              <option value="+374">Armenia (+374)</option>
                              <option value="+297">Aruba (+297)</option>
                              <option value="+61">Australia (+61)</option>
                              <option value="+43">Austria (+43)</option>
                              <option value="+994">Azerbaijan (+994)</option>
                              <option value="+1242">Bahamas The (+1242)</option>
                              <option value="+973">Bahrain (+973)</option>
                              <option value="+880">Bangladesh (+880)</option>
                              <option value="+1246">Barbados (+1246)</option>
                              <option value="+375">Belarus (+375)</option>
                              <option value="+32">Belgium (+32)</option>
                              <option value="+501">Belize (+501)</option>
                              <option value="+229">Benin (+229)</option>
                              <option value="+1441">Bermuda (+1441)</option>
                              <option value="+975">Bhutan (+975)</option>
                              <option value="+591">Bolivia (+591)</option>
                              <option value="+387">
                                Bosnia and Herzegovina (+387)
                              </option>
                              <option value="+267">Botswana (+267)</option>
                              <option value="+0">Bouvet Island (+0)</option>
                              <option value="+55">Brazil (+55)</option>
                              <option value="+246">
                                British Indian Ocean Territory (+246)
                              </option>
                              <option value="+673">Brunei (+673)</option>
                              <option value="+359">Bulgaria (+359)</option>
                              <option value="+226">Burkina Faso (+226)</option>
                              <option value="+257">Burundi (+257)</option>
                              <option value="+855">Cambodia (+855)</option>
                              <option value="+237">Cameroon (+237)</option>
                              <option value="+1">Canada (+1)</option>
                              <option value="+238">Cape Verde (+238)</option>
                              <option value="+1345">
                                Cayman Islands (+1345)
                              </option>
                              <option value="+236">
                                Central African Republic (+236)
                              </option>
                              <option value="+235">Chad (+235)</option>
                              <option value="+56">Chile (+56)</option>
                              <option value="+86">China (+86)</option>
                              <option value="+61">
                                Christmas Island (+61)
                              </option>
                              <option value="+672">
                                Cocos (Keeling) Islands (+672)
                              </option>
                              <option value="+57">Colombia (+57)</option>
                              <option value="+269">Comoros (+269)</option>
                              <option value="+242">
                                Republic Of The Congo (+242)
                              </option>
                              <option value="+242">
                                Democratic Republic Of The Congo (+242)
                              </option>
                              <option value="+682">Cook Islands (+682)</option>
                              <option value="+506">Costa Rica (+506)</option>
                              <option value="+225">
                                Cote D Ivoire (Ivory Coast) (+225)
                              </option>
                              <option value="+385">
                                Croatia (Hrvatska) (+385)
                              </option>
                              <option value="+53">Cuba (+53)</option>
                              <option value="+357">Cyprus (+357)</option>
                              <option value="+420">
                                Czech Republic (+420)
                              </option>
                              <option value="+45">Denmark (+45)</option>
                              <option value="+253">Djibouti (+253)</option>
                              <option value="+1767">Dominica (+1767)</option>
                              <option value="+1809">
                                Dominican Republic (+1809)
                              </option>
                              <option value="+670">East Timor (+670)</option>
                              <option value="+593">Ecuador (+593)</option>
                              <option value="+20">Egypt (+20)</option>
                              <option value="+503">El Salvador (+503)</option>
                              <option value="+240">
                                Equatorial Guinea (+240)
                              </option>
                              <option value="+291">Eritrea (+291)</option>
                              <option value="+372">Estonia (+372)</option>
                              <option value="+251">Ethiopia (+251)</option>
                              <option value="+61">
                                External Territories of Australia (+61)
                              </option>
                              <option value="+500">
                                Falkland Islands (+500)
                              </option>
                              <option value="+298">Faroe Islands (+298)</option>
                              <option value="+679">Fiji Islands (+679)</option>
                              <option value="+358">Finland (+358)</option>
                              <option value="+33">France (+33)</option>
                              <option value="+594">French Guiana (+594)</option>
                              <option value="+689">
                                French Polynesia (+689)
                              </option>
                              <option value="+0">
                                French Southern Territories (+0)
                              </option>
                              <option value="+241">Gabon (+241)</option>
                              <option value="+220">Gambia The (+220)</option>
                              <option value="+995">Georgia (+995)</option>
                              <option value="+49">Germany (+49)</option>
                              <option value="+233">Ghana (+233)</option>
                              <option value="+350">Gibraltar (+350)</option>
                              <option value="+30">Greece (+30)</option>
                              <option value="+299">Greenland (+299)</option>
                              <option value="+1473">Grenada (+1473)</option>
                              <option value="+590">Guadeloupe (+590)</option>
                              <option value="+1671">Guam (+1671)</option>
                              <option value="+502">Guatemala (+502)</option>
                              <option value="+44">
                                Guernsey and Alderney (+44)
                              </option>
                              <option value="+224">Guinea (+224)</option>
                              <option value="+245">Guinea-Bissau (+245)</option>
                              <option value="+592">Guyana (+592)</option>
                              <option value="+509">Haiti (+509)</option>
                              <option value="+0">
                                Heard and McDonald Islands (+0)
                              </option>
                              <option value="+504">Honduras (+504)</option>
                              <option value="+852">
                                Hong Kong S.A.R. (+852)
                              </option>
                              <option value="+36">Hungary (+36)</option>
                              <option value="+354">Iceland (+354)</option>
                              <option value="+91">India (+91)</option>
                              <option value="+62">Indonesia (+62)</option>
                              <option value="+98">Iran (+98)</option>
                              <option value="+964">Iraq (+964)</option>
                              <option value="+353">Ireland (+353)</option>
                              <option value="+972">Israel (+972)</option>
                              <option value="+39">Italy (+39)</option>
                              <option value="+1876">Jamaica (+1876)</option>
                              <option value="+81">Japan (+81)</option>
                              <option value="+44">Jersey (+44)</option>
                              <option value="+962">Jordan (+962)</option>
                              <option value="+7">Kazakhstan (+7)</option>
                              <option value="+254">Kenya (+254)</option>
                              <option value="+686">Kiribati (+686)</option>
                              <option value="+850">Korea North (+850)</option>
                              <option value="+82">Korea South (+82)</option>
                              <option value="+965">Kuwait (+965)</option>
                              <option value="+996">Kyrgyzstan (+996)</option>
                              <option value="+856">Laos (+856)</option>
                              <option value="+371">Latvia (+371)</option>
                              <option value="+961">Lebanon (+961)</option>
                              <option value="+266">Lesotho (+266)</option>
                              <option value="+231">Liberia (+231)</option>
                              <option value="+218">Libya (+218)</option>
                              <option value="+423">Liechtenstein (+423)</option>
                              <option value="+370">Lithuania (+370)</option>
                              <option value="+352">Luxembourg (+352)</option>
                              <option value="+853">Macau S.A.R. (+853)</option>
                              <option value="+389">Macedonia (+389)</option>
                              <option value="+261">Madagascar (+261)</option>
                              <option value="+265">Malawi (+265)</option>
                              <option value="+60">Malaysia (+60)</option>
                              <option value="+960">Maldives (+960)</option>
                              <option value="+223">Mali (+223)</option>
                              <option value="+356">Malta (+356)</option>
                              <option value="+44">Man (Isle of) (+44)</option>
                              <option value="+692">
                                Marshall Islands (+692)
                              </option>
                              <option value="+596">Martinique (+596)</option>
                              <option value="+222">Mauritania (+222)</option>
                              <option value="+230">Mauritius (+230)</option>
                              <option value="+269">Mayotte (+269)</option>
                              <option value="+52">Mexico (+52)</option>
                              <option value="+691">Micronesia (+691)</option>
                              <option value="+373">Moldova (+373)</option>
                              <option value="+377">Monaco (+377)</option>
                              <option value="+976">Mongolia (+976)</option>
                              <option value="+1664">Montserrat (+1664)</option>
                              <option value="+212">Morocco (+212)</option>
                              <option value="+258">Mozambique (+258)</option>
                              <option value="+95">Myanmar (+95)</option>
                              <option value="+264">Namibia (+264)</option>
                              <option value="+674">Nauru (+674)</option>
                              <option value="+977">Nepal (+977)</option>
                              <option value="+599">
                                Netherlands Antilles (+599)
                              </option>
                              <option value="+31">Netherlands The (+31)</option>
                              <option value="+687">New Caledonia (+687)</option>
                              <option value="+64">New Zealand (+64)</option>
                              <option value="+505">Nicaragua (+505)</option>
                              <option value="+227">Niger (+227)</option>
                              <option value="+234">Nigeria (+234)</option>
                              <option value="+683">Niue (+683)</option>
                              <option value="+672">
                                Norfolk Island (+672)
                              </option>
                              <option value="+1670">
                                Northern Mariana Islands (+1670)
                              </option>
                              <option value="+47">Norway (+47)</option>
                              <option value="+968">Oman (+968)</option>
                              <option value="+92">Pakistan (+92)</option>
                              <option value="+680">Palau (+680)</option>
                              <option value="+970">
                                Palestinian Territory Occupied (+970)
                              </option>
                              <option value="+507">Panama (+507)</option>
                              <option value="+675">
                                Papua new Guinea (+675)
                              </option>
                              <option value="+595">Paraguay (+595)</option>
                              <option value="+51">Peru (+51)</option>
                              <option value="+63">Philippines (+63)</option>
                              <option value="+0">Pitcairn Island (+0)</option>
                              <option value="+48">Poland (+48)</option>
                              <option value="+351">Portugal (+351)</option>
                              <option value="+1787">Puerto Rico (+1787)</option>
                              <option value="+974">Qatar (+974)</option>
                              <option value="+262">Reunion (+262)</option>
                              <option value="+40">Romania (+40)</option>
                              <option value="+70">Russia (+70)</option>
                              <option value="+250">Rwanda (+250)</option>
                              <option value="+290">Saint Helena (+290)</option>
                              <option value="+1869">
                                Saint Kitts And Nevis (+1869)
                              </option>
                              <option value="+1758">Saint Lucia (+1758)</option>
                              <option value="+508">
                                Saint Pierre and Miquelon (+508)
                              </option>
                              <option value="+1784">
                                Saint Vincent And The Grenadines (+1784)
                              </option>
                              <option value="+684">Samoa (+684)</option>
                              <option value="+378">San Marino (+378)</option>
                              <option value="+239">
                                Sao Tome and Principe (+239)
                              </option>
                              <option value="+966">Saudi Arabia (+966)</option>
                              <option value="+221">Senegal (+221)</option>
                              <option value="+381">Serbia (+381)</option>
                              <option value="+248">Seychelles (+248)</option>
                              <option value="+232">Sierra Leone (+232)</option>
                              <option value="+65">Singapore (+65)</option>
                              <option value="+421">Slovakia (+421)</option>
                              <option value="+386">Slovenia (+386)</option>
                              <option value="+44">
                                Smaller Territories of the UK (+44)
                              </option>
                              <option value="+677">
                                Solomon Islands (+677)
                              </option>
                              <option value="+252">Somalia (+252)</option>
                              <option value="+27">South Africa (+27)</option>
                              <option value="+0">South Georgia (+0)</option>
                              <option value="+211">South Sudan (+211)</option>
                              <option value="+34">Spain (+34)</option>
                              <option value="+94">Sri Lanka (+94)</option>
                              <option value="+249">Sudan (+249)</option>
                              <option value="+597">Suriname (+597)</option>
                              <option value="+47">
                                Svalbard And Jan Mayen Islands (+47)
                              </option>
                              <option value="+268">Swaziland (+268)</option>
                              <option value="+46">Sweden (+46)</option>
                              <option value="+41">Switzerland (+41)</option>
                              <option value="+963">Syria (+963)</option>
                              <option value="+886">Taiwan (+886)</option>
                              <option value="+992">Tajikistan (+992)</option>
                              <option value="+255">Tanzania (+255)</option>
                              <option value="+66">Thailand (+66)</option>
                              <option value="+228">Togo (+228)</option>
                              <option value="+690">Tokelau (+690)</option>
                              <option value="+676">Tonga (+676)</option>
                              <option value="+1868">
                                Trinidad And Tobago (+1868)
                              </option>
                              <option value="+216">Tunisia (+216)</option>
                              <option value="+90">Turkey (+90)</option>
                              <option value="+7370">
                                Turkmenistan (+7370)
                              </option>
                              <option value="+1649">
                                Turks And Caicos Islands (+1649)
                              </option>
                              <option value="+688">Tuvalu (+688)</option>
                              <option value="+256">Uganda (+256)</option>
                              <option value="+380">Ukraine (+380)</option>
                              <option value="+971">
                                United Arab Emirates (+971)
                              </option>
                              <option value="+44">United Kingdom (+44)</option>
                              <option value="+1">United States (+1)</option>
                              <option value="+1">
                                United States Minor Outlying Islands (+1)
                              </option>
                              <option value="+598">Uruguay (+598)</option>
                              <option value="+998">Uzbekistan (+998)</option>
                              <option value="+678">Vanuatu (+678)</option>
                              <option value="+39">
                                Vatican City State (Holy See) (+39)
                              </option>
                              <option value="+58">Venezuela (+58)</option>
                              <option value="+84">Vietnam (+84)</option>
                              <option value="+1284">
                                Virgin Islands (British) (+1284)
                              </option>
                              <option value="+1340">
                                Virgin Islands (US) (+1340)
                              </option>
                              <option value="+681">
                                Wallis And Futuna Islands (+681)
                              </option>
                              <option value="+212">
                                Western Sahara (+212)
                              </option>
                              <option value="+967">Yemen (+967)</option>
                              <option value="+38">Yugoslavia (+38)</option>
                              <option value="+260">Zambia (+260)</option>
                              <option value="+263">Zimbabwe (+263)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-7 pl-0">
                        <div class="section-field">
                          <div class="field-widget">
                            <input
                              id="Mobilename"
                              required
                              class="web"
                              type="tel"
                              placeholder="Mobile Number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="section-field ">
                      <div class="field-widget">
                        {" "}
                        <i class="fa fa-group" aria-hidden="true"></i>
                        {/*  <!-- <input id="Collagename" class="web" type="text" placeholder="Code"> --> */}
                        <select name="code" id="code">
                          <option selected="">Profile Created For</option>
                          <option value="1">Self</option>
                          <option value="2">Son or Daughter</option>
                          <option value="4">Brother or Sister</option>
                          <option value="3">Friend</option>
                          <option value="5">Relative</option>
                          <option value="6">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* <!-- <div class="section-field">
          <div class="field-widget d-flex"> 
            
            <input id="termsCheckbox" class="web" type="checkbox" />
            <span>
                I agree to the Terms and Conditions
            </span>
             
          </div>
        </div> --> */}

                    <div class="clearfix"></div>
                    <div class="section-field text-uppercase text-right mt-2">
                      <button
                        class="button btn-sm btn-colored full-rounded animated right-icn"
                        type="submit"
                      >
                        <span>
                          Register
                          <i
                            class="fa fa-user-plus"
                            style={{ fontSize: "20px" }}
                            aria-hidden="true"
                          ></i>
                        </span>
                      </button>{" "}
                    </div>
                    <div class="clearfix"></div>
                  </form>
                  <div class="section-field mt-2 text-center">
                    <p class="lead mb-0">
                      Have an account?{" "}
                      <p class="loginMenuButton">
                        {" "}
                        <u> Sign In!</u>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Login Modal --> */}
        <div
          class="modal fade"
          id="loginModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <div class="col-sm-12">
                  <h5 class="modal-title text-center">Login To Your Account</h5>
                </div>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body login-form">
                <div class="login-1-form clearfix text-center">
                  <form method="GET" id="modalRegisterForm">
                    <div class="login-1-social mt-3 mb-3 text-center clearfix">
                      {/* <ul class="list-inline text-capitalize">
                        <li>
                          <a class="fb" href="#">
                            <i class="fa fa-facebook"></i> Facebook
                          </a>
                        </li>
                        <li>
                          <a class="gplus" href="#">
                            <i class="fa fa-google-plus"></i> google+
                          </a>
                        </li>
                      </ul> */}
                    </div>
                    <div class="section-field mb-2">
                      <div class="field-widget">
                        {" "}
                        <i class="glyph-icon flaticon-user"></i>
                        <input
                          id="name"
                          class="web"
                          type="text"
                          placeholder="UserName / Email/ ID"
                          name="web"
                        />
                      </div>
                    </div>
                    <div class="section-field mb-1">
                      <div class="field-widget">
                        {" "}
                        <i class="glyph-icon flaticon-padlock"></i>
                        <input
                          id="Password"
                          class="Password"
                          type="password"
                          placeholder="Password"
                          name="Password"
                        />
                      </div>
                    </div>
                    <div class="section-field text-uppercase">
                      {" "}
                      <p class="float-right forgotMenuButton">
                        Forgot Password?
                      </p>{" "}
                    </div>
                    <div class="clearfix"></div>
                    <div class="section-field text-uppercase text-right mt-2">
                      {" "}
                      <button
                        type="submit"
                        class="button  btn-sm btn-colored full-rounded animated right-icn"
                      >
                        <span>
                          sign in
                          <i
                            class="fa fa-sign-in"
                            aria-hidden="true"
                            style={{ fontSize: "20px" }}
                          ></i>
                        </span>
                      </button>{" "}
                    </div>
                    <div class="clearfix"></div>
                    <div class="section-field mt-2 text-center ">
                      <p class="lead mb-0">
                        Don’t have an account?{" "}
                        <p class="registerMenuButton">
                          <u>Register now!</u>{" "}
                        </p>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default privacy;
