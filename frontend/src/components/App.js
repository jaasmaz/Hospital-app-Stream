import React from "react";

// components
import Layout from "./Layout/Layout";
import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/styles";
import classNames from "classnames";
import { useLayoutState } from "../context/LayoutContext";
import useStyles from "../components/Sidebar/styles";
export default function App() {
  // global

  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isDarkActivated } = useLayoutState();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });
  return (
    <div className="super-wapper-tem">
      <div
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: isDarkActivated,
          [classes.drawerClose]: !isDarkActivated,
        })}
        open={isDarkActivated}
      >
        <div className="all-temp-wrp">
          <Layout />
        </div>
      </div>
    </div>
  );

  // #######################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}
