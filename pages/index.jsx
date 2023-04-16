import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../src/layout/Layout";
import { home1SliderProps } from "../src/sliderProps";
import { works } from "../works";

const Index = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Hero Main Slider */}
        <Swiper {...home1SliderProps} className="section hero-main-slider">
          {works.map((work, index) => {
            return (
              <SwiperSlide
                className="swiper-slide"
                data-color={work.theme}
                key={index}
              >
                {/* image */}
                <div
                  className="slide"
                  style={{
                    backgroundImage: `url(${work.carouselImage})`,
                  }}
                />
                {/* slide titles */}
                <div className="slide-titles">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      {/* title */}
                      <div className={`titles ${work.theme}`}>
                        {/* <div className="label scrolla-element-anim-1">
                          {work.category}
                        </div> */}
                        <div className="title">
                          <span
                            className="title-inner splitting-text-anim-2"
                            data-splitting=""
                          >
                            {work.title}
                          </span>
                        </div>
                        <div className="subtitle scrolla-element-anim-1">
                          {work.subTitle}
                        </div>
                      </div>
                      <div className="more-bts">
                        <Link
                          legacyBehavior
                          href={`/work-single?id=${work.id}`}
                        >
                          <a
                            data-splitting=""
                            className="btn more-btn scrolla-element-anim-1"
                          >
                            see details
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          {/* pagination */}
          <div
            className="swiper-pagination scrolla-element-anim-1 scroll-animate swiper-pagination-bullets swiper-pagination-horizontal animate__active animate__animated"
            data-animate="active"
          />
          {/* navigation */}
          <div className="swiper-buttons">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </Swiper>
      </div>
    </Layout>
  );
};
export default Index;
