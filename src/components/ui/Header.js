import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    "&:hover": {
      opacity: 1,
    },
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "20px",
    height: "50px",
    ...theme.typography.estimate,
    "&:hover":{
      backgroundColor:theme.palette.secondary.light
  },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconBtn: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginLeft: "auto",
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawrItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
   '& .MuiListItemText-root':{
     opacity: 1
   }
  },
  appbar:{
    zIndex:theme.zIndex.modal + 1
  }
}));

const Header = ({value,setValue,selectedIndex,setSelectedIndex}) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
 

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  }, []);

  const handleMenuItemsClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = useMemo(() => {
    return [
      { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
      {
        name: "Custom Software Development",
        link: "/customsoftware",
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        name: "iOS/Android Development",
        link: "/mobileapps",
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        name: "Custom Website Development",
        link: "/websites",
        activeIndex: 1,
        selectedIndex: 3,
      },
    ];
  }, []);
  const routes = useMemo(() => {
    return [
      { name: "Home", link: "/", activeIndex: 0 },
      {
        name: "Services",
        link: "/services",
        ariaPopup: anchorEl ? true : undefined,
        activeIndex: 1,
        mouseOver: (event) => handleClick(event),
        ariaOwns: anchorEl ? "simple-menu" : undefined,
      },
      { name: "The Revolution", link: "/revolution", activeIndex: 2 },
      { name: "About Us", link: "/about", activeIndex: 3 },
      { name: "Contact Us", link: "/contact", activeIndex: 4 },
    ];
  }, [handleClick, anchorEl]);

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          if (value !== 5) {
            setValue(5);
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes,setValue,setSelectedIndex]);

  const tabs = (
    <Fragment>
      <Tabs
        TabIndicatorProps={{ style: { display: "none" } }}
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
          />
        ))}
      </Tabs>
      <Button
        disableRipple
        className={classes.button}
        variant="contained"
        color="secondary"
      >
        Free Estimate
      </Button>
      <Menu
        style={{zIndex:1302}}
        id="simple-menu"
        anchorEl={anchorEl}
        MenuListProps={{ onMouseLeave: handleClose }}
        onClose={handleClose}
        open={openMenu}
        classes={{ paper: classes.menu }}
        elevation={0}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option} ${i}`}
            onClick={(event) => {
              handleMenuItemsClick(event, i);
              setValue(1);
              handleClose();
            }}
            classes={{ root: classes.menuItem }}
            component={Link}
            to={option.link}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{selected:classes.drawerItemSelected}}
            >
              <ListItemText
                className={classes.drawrItem}

                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            classes={{root:classes.drawerItemEstimate,selected:classes.drawerItemSelected}}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            component={Link}
            to="/estimate"
            selected={value === 5}
          >
            <ListItemText
              className={classes.drawrItem}
               
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconBtn}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              onClick={() => setValue(0)}
              component={Link}
              to="/"
              className={classes.logoContainer}
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
