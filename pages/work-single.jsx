import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";
import works from "../works.json";

const WorkSingle = () => {
  const router = useRouter();
  const id = router.query.id;
  const [currentWork, setCurrentWork] = useState(
    works.find((work) => work.id == id)
  );

  useEffect(() => {
    setCurrentWork(works.find((work) => work.id == id));
  }, [id]);

  if (!currentWork) return null;

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
                    className="h-subtitle red splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    {currentWork.realm}
                  </div>
                  <div
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    {currentWork.title}
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
              style={{ backgroundImage: `url(${currentWork.workMainImage})` }}
            />
          </div>
        </div>
        {/* Section Details */}
        <div className="section section-inner m-details">
          <div className="container">
            <div className="details-box">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Client</strong> Envato
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Category</strong> Photography
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Year</strong> 2020
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <div className="details-label">
                    <strong>Website</strong> bslthemes.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Description */}
        <div className="section section-inner m-description">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Introduction
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="description-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p>
                    It is not enough that we build products that function, that
                    are understandable and usable, we also need to build
                    products that bring joy and excitement, pleasure and fun,
                    and, yes, beauty to people’s lives. Creativity is to
                    discover a question that has never been asked. If one brings
                    up an idiosyncratic question, the answer he gives will
                    necessarily be unique as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Gallery */}
        <div className="section section-inner m-gallery">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="works-item">
                  <div
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="img">
                      <img
                        src={currentWork.workIntroductionImages[0]}
                        alt="Image #1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="works-item">
                  <div
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="img">
                      <img
                        src={currentWork.workIntroductionImages[1]}
                        alt="Image #2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Description */}
        <div className="section section-inner m-description">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Result
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="description-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p>
                    It is not enough that we build products that function, that
                    are understandable and usable, we also need to build
                    products that bring joy and excitement, pleasure and fun,
                    and, yes, beauty to people’s lives. Creativity is to
                    discover a question that has never been asked. If one brings
                    up an idiosyncratic question, the answer he gives will
                    necessarily be unique as well.
                  </p>
                  <p>
                    Creativity is to discover a question that has never been
                    asked. If one brings up an idiosyncratic question, the
                    answer he gives will necessarily be unique as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Gallery Carousel */}
        <div
          className="section section-inner m-gallery-carousel scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="container">
            <Swiper {...mGalleryCarousel} className="swiper-container">
              <div className="swiper-wrapper">
                {currentWork.workResultImages.map((src, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <img src={src} alt={`Image #${index + 1}`} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
        {/* Section Navigation */}
        <div className="section section-inner m-page-navigation">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="h-titles h-navs">
                  <Link
                    legacyBehavior
                    href={
                      id == 4
                        ? "/work-single?id=1"
                        : `/work-single?id=${+id + 1}`
                    }
                  >
                    <a>
                      <span
                        className="nav-arrow scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        Next Project
                      </span>
                      <span
                        className="h-title splitting-text-anim-2 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                      >
                        Astronaut
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default WorkSingle;
