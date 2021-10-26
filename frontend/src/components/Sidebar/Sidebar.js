import React, { useState, useEffect } from "react";
import {
  Drawer,
  IconButton,
  List,
  Button,
  Typography,
} from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import docNavImg from "../../images/doctor-img.png";
// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Dr. Profiles",
    link: "/chat",
    icon: <TypographyIcon />,
  },
  { id: 2, label: "Organization", link: "/app/tables", icon: <TableIcon /> },
  {
    id: 3,
    label: "Department",
    link: "/app/notifications",
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: "Settings",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Charts", link: "/app/ui/charts" },
      { label: "Maps", link: "/app/ui/maps" },
    ],
  },
];

function Sidebar ({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isDarkActivated } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup () {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isDarkActivated,
        [classes.drawerClose]: !isDarkActivated,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isDarkActivated,
          [classes.drawerClose]: !isDarkActivated,
        }),
      }}
      open={isDarkActivated}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isDarkActivated={isDarkActivated}
            {...link}
          />
        ))}
      </List>
      <div className='doctor-nav-card'>
        <Button className='new-btn' variant='contained'>
          New
        </Button>
        <Typography size='md' weight='bold' component='h4'>
          Northwestern <br /> Mem-Hospital
        </Typography>
        <figure>
          <img src={docNavImg} alt='sorry' />
        </figure>
      </div>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange () {
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

export default withRouter(Sidebar);
