import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../src/pages/images/350x150-logo.png";

class terms extends React.Component {
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
                  <div class="row ">
                    <div class="col-md-12">
                      {/*  <!-- menu logo --> */}
                      <ul class="menu-logo">
                        <li>
                          {" "}
                          <a href="index.html">
                            <img
                              src={logo}
                              alt="Logo"
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
                            // style={mystyle}
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
          class="inner-intro intro-page-top bg bg-fixed bg-overlay-black-50"
          style={{
            backgroundImage: "url(assets/images/inner-banners/10.jpg)",
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
                    Terms &amp; Conditions
                    {/* <span class="sub-title">Terms &amp; Conditions</span> */}
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
                  Terms &amp; Conditions
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 termsParas">
                <p class="text-justify">
                  Welcome to Shaadeeghar.com, the No.1 Matrimonial Services
                  Provider. In order to use the shaadeeghar.com ("Site"), you
                  must register as a member of the Site ("Member"). The Member
                  or any users using the site agree to be bound by these Terms
                  of Use ("Agreement"). If you wish to become a Member and
                  communicate with other Members and make use of the
                  shaadeeghar.com service ("Service"), read these Terms of Use
                  and follow the instructions in the Registration process. This
                  Agreement sets out the legally binding terms for your
                  membership. This Agreement may be modified by shaadeeghar.com
                  from time to time.
                </p>
                <p>
                  <span class="text-bold"> Eligibility. </span> To register as a
                  member of shaadeeghar.com or use this Site, you must be of
                  legal marriageable age as per the laws of Pakistan (currently,
                  18 years). The shaadeeghar.com Site is only to facilitate
                  lawful marriages between persons who are legally competent to
                  enter into matrimony under the laws to which they are subject.
                  Membership in the Service is void where prohibited. By using
                  this Site, you represent and warrant that you have the right,
                  authority, and legal capacity to enter into this Agreement and
                  that you are not prohibited or prevented by any applicable law
                  for the time being in force or any order or decree or
                  injunction from any court, tribunal or any such competent
                  authority restraining you from entering into matrimony. You
                  also agree to abide by all of the terms and conditions of this
                  Agreement. If at any time shaadeeghar.com is of the opinion
                  (in its sole discretion) or has any reason to believe that you
                  are not eligible to become a member or that you have made any
                  misrepresentation about your eligibility, shaadeeghar.com
                  reserves the right to forthwith terminate your membership and
                  / or your right to use the Service without any refund to you
                  of any of your unutilized subscription fee.
                </p>
                <p class="text-justify">
                  <span class="text-bold"> 1. Term. </span> You may terminate
                  your membership at any time, for any reason by writing to
                  Shaadighar.pk. In the event you terminate your membership, you
                  will not be entitled to a refund of any unutilized
                  subscription fees. Shaadighar.pk may terminate your access to
                  the Site and/or your membership for any reason effective upon
                  sending notice to you at the email address you provide in your
                  application for membership or such other email address as you
                  may later provide to Shaadighar.pk. If Shaadighar.pk
                  terminates your membership in the Shaadighar.pk Service
                  because you have breached the Agreement, you will not be
                  entitled to any refund of any unused Subscription fees. Even
                  after this Agreement is terminated, certain provisions will
                  remain in effect including sections 4,5,7,9 -14, inclusive, of
                  this Agreement.
                </p>
                <p class="text-justify">
                  <span class="text-bold">
                    {" "}
                    2. Non-Commercial Use by Members.{" "}
                  </span>{" "}
                  The shaadeeghar.com Site is for the personal use of individual
                  members only, and cannot be used in connection with any
                  commercial endeavors. This includes providing links to other
                  web sites, whether deemed competitive to shaadeeghar.com or
                  otherwise. Organizations, companies, and/or businesses cannot
                  become Members of shaadeeghar.com and should not use the
                  shaadeeghar.com Service or Site for any purpose. Illegal
                  and/or unauthorized uses of the Site, including unauthorized
                  framing of or linking to the Site will be investigated, and
                  appropriate legal action will be taken, including without
                  limitation, civil, criminal, and injunctive redress.
                </p>
                <p class="text-justify">
                  <span class="text-bold">
                    {" "}
                    3. Other Terms of Use by Members.{" "}
                  </span>
                </p>
                <p class="text-justify">
                  shaadeeghar.com reserves the right in its sole discretion to
                  review the activity &amp; status of each account &amp; block
                  the account of a member based on such review.
                </p>
                <p class="text-justify">
                  You hereby confirm that as on date of this registration, you
                  do not have any objection to receiving emails, messages and
                  calls from shaadeeghar.com and members of shaadeeghar.com as
                  long as you are a registered member of shaadeeghar.com. This
                  consent shall supersede any preferences set by you with or
                  registration done with the Do Not Disturb. This consent
                  extends to emails, messages or calls relating but not limited
                  to phone number verification, the provision of matchmaking
                  service, matrimonial enquiries and promotions.
                </p>
                <p class="text-justify">
                  Multiple profiles of the same person are not allowed on
                  shaadeeghar.com. shaadeeghar.com reserves the right to
                  deactivate all multiple profiles without any refund of
                  subscription fees.
                </p>
                <p class="text-justify">
                  You cannot engage in advertising to, or solicitation of, other
                  Members to buy or sell any products or services through the
                  Service. You will not transmit any chain letters or junk email
                  to other shaadeeghar.com Members. Although shaadeeghar.com
                  cannot monitor the conduct of its Members off the
                  shaadeeghar.com Site, it is also a violation of these rules to
                  use any information obtained from the Service in order to
                  harass, abuse, or harm another person, or in order to contact,
                  advertise to, solicit, or sell to any Member without their
                  prior explicit consent. In order to protect shaadeeghar.com
                  and/or our Members from any abuse / misuse, shaadeeghar.com
                  reserves the right to restrict the number of communications /
                  profile contacts &amp; responses / email which a Member may
                  send to other Member in any 24-hour period to a number which
                  shaadeeghar.com deems appropriate in its sole discretion.
                </p>
                <p class="text-justify">
                  You cannot use any automated processes, including IRC Bots,
                  EXE's, CGI or any other programs/scripts to view content on or
                  communicate / contact / respond / interact with
                  shaadeeghar.com and/or its members.
                </p>
                <p class="text-justify">
                  shaadeeghar.com reserves the right to screen
                  communications/messages that you may send to other Member(s)
                  and also regulate the same by deleting unwarranted/obscene
                  communications at any time at its sole discretion without
                  prior notice to any Member.
                </p>
                <p class="text-justify">
                  No Member is allowed to display his/her "Membership status" in
                  the profile content. shaadeeghar.com reserves the right to
                  delete any such reference from the profile content.
                </p>
                <p class="text-justify">
                  The premium members shall be entitled to view only limited
                  verified contact numbers depending on the type of membership
                  they have availed of. For example, the maximum number of
                  verified contact numbers, which can be viewed by (a) Gold
                  Membership 40 (b) Diamond Membership - 60 and (c) Platinum
                  Membership - 80 .
                </p>
                <p class="text-justify">
                  shaadeeghar.com Members who subscribe to the shaadeeghar.com
                  Select Service hereby, unconditionally and irrevocably confirm
                  that you have read Terms &amp; Conditions and agree to abide
                  by them.
                </p>
                <p>
                  <span class="text-bold">
                    Proprietary Rights in Content on shaadeeghar.com.
                  </span>{" "}
                  shaadeeghar.com owns and retains all proprietary rights in the
                  shaadeeghar.com Site and the shaadeeghar.com Service. The Site
                  contains the copyrighted material, trademarks, and other
                  proprietary information of shaadeeghar.com, and its licensors.
                  Except for that information which is in the public domain or
                  for which you have been given permission, you cannot copy,
                  modify, publish, transmit, distribute, perform, display, or
                  sell any such proprietary information. Any such act or an
                  attempted act on your part shall constitute a violation of
                  this Agreement and your membership is liable to be terminated
                  forthwith by shaadeeghar.com without refund of any of your
                  unused Subscription fees. Content Posted on the Site.
                </p>
                <p class="text-justify">
                  You understand and agree that shaadeeghar.com may delete any
                  content, messages, photos or profiles (collectively,
                  "Content") that in the sole judgment of shaadeeghar.com
                  violate this Agreement or which might be offensive, illegal,
                  or that might violate the rights, harm, or threaten the safety
                  of either shaadeeghar.com and/or its Members.
                </p>
                <p class="text-justify">
                  With respect to Content you submit or make available for
                  inclusion on publicly accessible areas of the Site including
                  but not limited to your contact details, you hereby
                  unconditionally and irrevocably grant to shaadeeghar.com the
                  license to use, distribute, reproduce, modify, adapt, publicly
                  perform and publicly display such Content on the Site and to
                  Shaadighar members from time to time. You understand and
                  hereby agree that all information, data, text, photographs,
                  graphics, messages, tags, or other Content whether publicly
                  posted or privately transmitted or otherwise made available to
                  shaadeeghar.com members, are the sole responsibility of the
                  person from whom such Content originated and shall be at the
                  member's/person's sole risks and consequences. This means that
                  you (and not shaadeeghar.com ) is solely responsible for all
                  Content that you upload, post, email, transmit or otherwise
                  make available via the Service. shaadeeghar.com does not
                  control the Content posted via the Service and, as such, does
                  not guarantee the accuracy, integrity or quality of such
                  Content. Under no circumstances will shaadeeghar.com be liable
                  in any way for any Content, including, but not limited to, any
                  errors or omissions in any Content, or any loss or damage of
                  any kind incurred as a result of the use of any Content
                  posted, emailed, transmitted or otherwise made available via
                  the Service.
                </p>
                <p class="text-justify">
                  You are solely responsible for the Content that you publish or
                  display (hereinafter, "post") on the shaadeeghar.com service
                  or on shaadeeghar.com Site or transmit to other
                  shaadeeghar.com Members. shaadeeghar.com reserves the right to
                  verify the authenticity of Content posted on the Site. In
                  exercising this right, shaadeeghar.com may ask you to provide
                  any documentary or other form of evidence supporting the
                  Content you post on the Site. If you fail to produce such
                  evidence, shaadeeghar.com may, in its sole discretion,
                  terminate your Membership without a refund.
                </p>
                <p class="text-justify">
                  By posting Content to any public area of shaadeeghar.com, you
                  automatically grant, and you represent and warrant that you
                  have the right to grant, to shaadeeghar.com, and other
                  shaadeeghar.com Members, an irrevocable, perpetual,
                  non-exclusive, fully-paid, worldwide license to use, copy,
                  perform, display, and distribute such information and content
                  and to prepare derivative works of, or incorporate into other
                  works, such information and content, and to grant and
                  authorize sublicenses of the foregoing.
                </p>
                <p class="text-justify">
                  The following is an indicative list of the kind of Content
                  that is illegal or prohibited on the Site. shaadeeghar.com
                  will investigate and take appropriate legal action in its sole
                  discretion against anyone who violates this Agreement,
                  including without limitation, removing the offending
                  communication / Content from the Service and terminating the
                  Membership of such violators without a refund. Illegal and
                  prohibitive Content includes Content that which:
                </p>
                <p class="text-justify">
                  is patently offensive to the community, such as content that
                  promotes racism, bigotry , hatred or physical harm of any kind
                  against any group or individual;
                </p>
                <p class="text-justify">
                  is patently offensive to the community, such as content that
                  promotes racism, bigotry , hatred or physical harm of any kind
                  against any group or individual;
                </p>
                <p class="text-justify">
                  harasses or advocates harassment of another person;
                </p>
                <p class="text-justify">
                  involves the transmission of "junk mail", "chain letters," or
                  unsolicited mass mailing or "spamming";
                </p>
                <p class="text-justify">
                  promotes information that you know is false, misleading or
                  promotes illegal activities or conduct that is abusive,
                  threatening, obscene, defamatory or libelous;
                </p>
                <p class="text-justify">
                  promotes an illegal or unauthorized copy of another person's
                  copyrighted work, such as providing pirated computer programs
                  or links to them, providing information to circumvent
                  manufacture-installed copy-protect devices, or providing
                  pirated music or links to pirated music files;
                </p>
                <p class="text-justify">
                  contains restricted or password only access pages, or hidden
                  pages or images (those not linked to or from another
                  accessible page) ;
                </p>
                <p class="text-justify">
                  displays pornographic or sexually explicit material of any
                  kind;
                </p>
                <p class="text-justify">
                  provides material that exploits people under the age of 18 in
                  a sexual or violent manner, or solicits personal information
                  from anyone under 18;
                </p>
                <p class="text-justify">
                  provides instructional information about illegal activities
                  such as making or buying illegal weapons, violating someone's
                  privacy, or providing or creating computer viruses;
                </p>
                <p class="text-justify">
                  solicits passwords or personal identifying information for
                  commercial or unlawful purposes from other users; and engages
                  in commercial activities and/or sales without our prior
                  written consent such as contests, sweepstakes, barter,
                  advertising, and pyramid schemes.
                </p>
                <p class="text-justify">
                  You must use the shaadeeghar.com Service in a manner
                  consistent with any and all applicable local, state, and
                  federal laws, rules and regulations.
                </p>
                <p class="text-justify">
                  You cannot include in your Member profile, visible to other
                  members, any telephone numbers, street addresses, last names,
                  URL's, and email addresses. If you do this, shaadeeghar.com
                  has authority to cancel your membership without giving any
                  notice.
                </p>
              </div>
            </div>
          </div>
        </section>

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

                      {/* <div class="social-icons color-hover">
                        <ul>
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
                        </ul>
                      </div> */}
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

export default terms;
