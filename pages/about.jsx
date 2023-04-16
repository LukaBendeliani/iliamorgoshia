import { Swiper, SwiperSlide } from "swiper/react";
import AboutVideo from "../src/components/AboutVideo";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { jsTestimonials } from "../src/sliderProps";
const About = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        <div className="section section-inner started-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* titles */}
                <div className="h-titles">
                  <div
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    About us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Image Large */}
        <div
          className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="image">
            <div
              className="img js-parallax"
              style={{ backgroundImage: "url(assets/images/about2.jpg)" }}
            />
          </div>
        </div>
        <div
          className="section section-inner section-description scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>About me</h1>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                Hi there, I'm Ilia, an aspiring Art Director from Tbilisi,
                Georgia. When I'm not spending time with my four-legged friend
                Toby, I'm either playing video games or indulging in some
                quality Netflix binges.
                <br />
                <br /> I know. I’m basic.
                <br />
                <br />
                I'm also enrolled in the Art Direction program at Miami Ad
                School Europe, learning from industry professionals. My goal is
                to master the art of visual storytelling and bring my creative
                visions to life. I've always been captivated by the magic of
                movies, production, and the power of visual storytelling. This
                passion has been my driving force throughout my career journey.
                I'm always seeking new ways to expand my knowledge and skills in
                this field. I believe in using creativity and imagination to
                tell stories that captivate and inspire audiences. Working with
                creative people and realizing our visions is something I'm
                really excited about.
              </div>
            </div>
          </div>
        </div>
        {/* Section Contacts Form */}
        <div className="section section-inner m-contacts-form">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                {/* titles */}
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Get in touch
                  </div>
                </div>
                {/* contact form */}
                <div className="contacts-form">
                  <form id="cform" method="post">
                    <div className="group">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <input
                          type="text"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="group full">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <textarea
                          name="message"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div
                      className="submit scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <a href="#" className="btn">
                        Send a Message
                      </a>
                    </div>
                  </form>
                  <div className="alert-success" style={{ display: "none" }}>
                    <p>Thanks, your message is sent successfully.</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Contact info
                  </h2>
                </div>
                {/* services */}
                <div className="services-items row">
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-phone-alt" />
                      </div>
                      <div className="name">Phone:</div>
                      <div className="text">+1 (800) 123 56 89</div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-at" />
                      </div>
                      <div className="name">E-mail:</div>
                      <div className="text">aster@domain.com</div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i
                          aria-hidden="true"
                          className="fab fa-font-awesome-flag"
                        />
                      </div>
                      <div className="name">Location:</div>
                      <div className="text">
                        Marollem St. 32, New York, USA.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Services */}
        <div className="section section-inner m-services">
          <div className="container">
            <div className="row">
              {/* <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                titles
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Our services
                  </h2>
                </div>
              </div> */}
              {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> */}
              {/* services
                <div className="services-items row">
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-chart-bar" />
                      </div>
                      <div className="name">Marketing</div>
                      <div className="text">
                        Focused on creating, publishing, and distributing
                        content for a targeted audience online.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-copyright" />
                      </div>
                      <div className="name">Copywriting</div>
                      <div className="text">
                        Act or occupation of writing text for the purpose of
                        advertising or other forms of marketing.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-object-group" />
                      </div>
                      <div className="name">Web Design</div>
                      <div className="text">
                        Design process relating to the front-end (client side)
                        design of a website including writing.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-ad" />
                      </div>
                      <div className="name">Advertising</div>
                      <div className="text">
                        Employs an openly sponsored, non-personal message to
                        promote or sell a product, service.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-rocket" />
                      </div>
                      <div className="name">Optimization</div>
                      <div className="text">
                        Improving the quality and quantity of website traffic to
                        a website or a web page from search.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-life-ring" />
                      </div>
                      <div className="name">Support</div>
                      <div className="text">
                        Services to assist customers in making cost effective
                        and correct use of a product.
                      </div>
                    </div>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* Section Description
        <div className="section section-inner m-description">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Our vision
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="description-list-items">
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">01.</span>
                        Search Engine Optimization
                      </div>
                    </div>
                  </div>
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">02.</span>
                        Search Engine Marketing
                      </div>
                    </div>
                  </div>
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">03.</span>
                        Website Strategy and Social Media Marketing
                      </div>
                    </div>
                  </div>
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">04.</span>
                        Content Generation and Optimization
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Section Video Large */}
        {/* <AboutVideo /> */}
        {/* Section Team */}
        {/* <div className="section section-inner m-team">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                titles
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Meet the team
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                 team 
                <div className="team-items row">
                  <div className="team-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div
                      className="team-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <div className="img">
                          <img src="assets/images/team5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="desc">
                        <div className="category">Founder</div>
                        <div className="name">Natasha Singh</div>
                      </div>
                    </div>
                  </div>
                  <div className="team-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div
                      className="team-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <div className="img">
                          <img src="assets/images/team1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="desc">
                        <div className="category">Co-founder</div>
                        <div className="name">Robert Long</div>
                      </div>
                    </div>
                  </div>
                  <div className="team-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div
                      className="team-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <div className="img">
                          <img src="assets/images/team2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="desc">
                        <div className="category">Designer</div>
                        <div className="name">Viktoria Freeman</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Section Testimonials */}
        {/* <div className="section section-inner m-testimonials">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                 titles 
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Our testimonials
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                Carousel 
                <Swiper
                  {...jsTestimonials}
                  className="swiper-container js-testimonials"
                >
                   Testimonials item 
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev1.png" alt="John Smith" />
                      </div>
                      <div className="desc">
                        <div className="title">John Smith</div>
                        <div className="name">Designer</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   Testimonials item 
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev3.png" alt="Natasha Singh" />
                      </div>
                      <div className="desc">
                        <div className="title">Natasha Singh</div>
                        <div className="name">Photographer</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   Testimonials item 
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev2.png" alt="Gray Woodman" />
                      </div>
                      <div className="desc">
                        <div className="title">Gray Woodman</div>
                        <div className="name">Bloger</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   Testimonials item 
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev4.png" alt="Robert Long" />
                      </div>
                      <div className="desc">
                        <div className="title">Robert Long</div>
                        <div className="name">Photographer</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                   Pagination  
                  <div className="swiper-pagination" />
                </Swiper>
                 /Carousel 
              </div>
            </div>
          </div>
        </div> */}
        {/* Section Partners */}
        {/* <div className="section section-inner m-partners">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                 partners 
                <div className="partners-box">
                  <div className="partners-items row">
                    <div
                      className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="partners-item">
                        <div className="image">
                          <a target="_blank" href="https://www.envato.com/">
                            <img
                              src="assets/images/brand_logo_03_1.png"
                              alt="#1"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="partners-item">
                        <div className="image">
                          <a target="_blank" href="https://www.envato.com/">
                            <img
                              src="assets/images/brand_logo_08_1.png"
                              alt="#2"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="partners-item">
                        <div className="image">
                          <a target="_blank" href="https://www.envato.com/">
                            <img
                              src="assets/images/brand_logo_06_1.png"
                              alt="#3"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="partners-item">
                        <div className="image">
                          <a target="_blank" href="https://www.envato.com/">
                            <img
                              src="assets/images/brand_logo_05_1.png"
                              alt="#4"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* Footer */}
      <Footer />
    </Layout>
  );
};
export default About;
