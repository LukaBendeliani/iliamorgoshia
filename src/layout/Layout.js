import { Fragment, useEffect } from "react";
import { activeAnimation, initCursor } from "../utils";
import Header from "./Header";
const Layout = ({ children }) => {
  useEffect(() => {
    initCursor();
    activeAnimation();
    window.addEventListener("scroll", activeAnimation);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Splitting = require("splitting");
    }
    Splitting();
  });

  useEffect(() => {
    let { jarallax, jarallaxVideo } = require("jarallax");
    jarallaxVideo();
    jarallax(document.querySelectorAll(".js-parallax"), {
      speed: 0.65,
      type: "scroll",
    });
  }, []);

  return (
    <Fragment>
      <div className="container-page">
        <Header />
        {children}
      </div>
      <div className="cursor"></div>
    </Fragment>
  );
};
export default Layout;
