import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import BuildIcon from "@material-ui/icons/Build";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PanToolIcon from "@material-ui/icons/PanTool";
import PublicIcon from "@material-ui/icons/Public";
import DescriptionIcon from "@material-ui/icons/Description";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

// Importing custom view components (pages)
import Welcome from "./Welcome";
import About from "./About";
import Experience from "./Experience";
import Blog from "./Blog";
import Resume from "./Resume";
import Contact from "./Contact";

// Icon Imports
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Fab, Container } from "@material-ui/core";
import { common, blue } from "@material-ui/core/colors";

const drawerWidth = 240;

const customHistory = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  linkContainer: {
    width: '100%'
  },
  githubIconLink: {
    margin: theme.spacing(2),
    color: common.black
  },
  linkedinIconLink: {
    margin: theme.spacing(2),
    color: blue[700]
  },
}));

function CustomDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <PanToolIcon />
          </ListItemIcon>
          <ListItemText primary="Welcome" />
        </ListItem>
        {/* <ListItem button component={Link} to="/about">
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem> */}
        {/* <ListItem button component={Link} to="/experience">
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItem>
        <ListItem button component={Link} to="/blog">
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem> */}
      </List>
      <Divider />
      <List>
        {/* <ListItem button component={Link} to="/contact">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem> */}
        <ListItem button component={Link} to="/resume">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
      </List>
      <Divider />
      <Container className={classes.linkedinIconLink}>
        <IconButton href="https://www.github.com/MrNorthmore" target="_blank" aria-label="github-link" className={classes.githubIconLink}>
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/matthewnorthmore/"
          target="_blank"
          aria-label="linkedin-link"
          className={classes.linkedinIconLink}
        >
          <LinkedInIcon />
        </IconButton>
      </Container>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap>
            Matthew Northmore |
          </Typography>
          <Typography variant="subtitle3" noWrap>
            Software Engineering Graduate, Life-long Technology Enthusiast
          </Typography>
        </Toolbar>
      </AppBar>
      <Router history={customHistory}>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default CustomDrawer;
