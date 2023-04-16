import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { works } from "../../works";
const PortfolioIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [showLoading, setShowLoading] = useState(false);
  // let timer1 = setTimeout(() => setShowLoading(true), 1000);
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
  }, [showLoading]);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  // const handleFilterKeyChange = (key) => () => {
  //   setFilterKey(key);
  // };

  return (
    <Fragment>
      {/* Section Works */}
      <div className="section section-inner m-works">
        <div className="container">
          {/* filter */}
          {/* <div className="filter-links">
            <a onClick={handleFilterKeyChange("*")} data-filter="*">
              All
            </a>
            <a
              onClick={handleFilterKeyChange("sorting-print")}
              data-filter="sorting-print"
            >
              Print
            </a>
            <a
              onClick={handleFilterKeyChange("sorting-photography")}
              data-filter="sorting-photography"
            >
              Photography
            </a>
            <a
              onClick={handleFilterKeyChange("sorting-branding")}
              data-filter="sorting-branding"
            >
              Branding
            </a>
            <a
              onClick={handleFilterKeyChange("sorting-art")}
              data-filter="sorting-art"
            >
              Art
            </a>
          </div> */}
          {/* works items */}
          <div className="works-items row column-2-offset">
            {works.map((work, index) => {
              return (
                <div
                  key={index}
                  className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-photography"
                >
                  <div className="works-item">
                    <Link legacyBehavior href={`/work-single?id=${work.id}`}>
                      <a>
                        <span className="image">
                          <span className="img">
                            <img src={work.workMainImage} alt="Astronaut" />
                          </span>
                        </span>
                        <span className="desc">
                          <span
                            className="category splitting-text-anim-4 scroll-animate"
                            data-splitting="chars"
                            data-animate="active"
                          >
                            {work.category}
                          </span>
                          <span
                            className="name splitting-text-anim-4 scroll-animate"
                            data-splitting="words"
                            data-animate="active"
                          >
                            {work.title}
                          </span>
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
