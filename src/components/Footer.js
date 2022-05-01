import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://www.facebook.com/profile.php?id=100010280178750" target="_blank"><BottomNavigationAction icon={<Facebook />} className={classes.root} /></a>
      <a href="https://twitter.com/UMAsince1998" target="_blank"><BottomNavigationAction icon={<Twitter />} className={classes.root} /></a>
      <a href="https://www.instagram.com/yuma15_58/" target="_blank"><BottomNavigationAction icon={<Instagram />} className={classes.root} /></a>
    </BottomNavigation>
  );
};
export default Footer;
