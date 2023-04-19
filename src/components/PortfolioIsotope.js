import Link from "next/link";
import { Fragment } from "react";
import { works } from "../../works";
const PortfolioIsotope = () => {
  return (
    <Fragment>
      {/* Section Works */}
      <div className="section section-inner m-works">
        <div className="container">
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
