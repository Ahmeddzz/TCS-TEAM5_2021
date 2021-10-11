import React from "react";

import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    marginLeft: theme.spacing(20),
    fontWeight: "750",
  },
  bar: {
    background: "#0E86D4",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.bar} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          GROW@TCS2021
        </Typography>
        <img
          className="header__img"
          src="https://resources.mynewsdesk.com/image/upload/t_next_gen_logo_limit_x2/gqpugvbe4omrvbu7no3n.jpg"
        />
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
