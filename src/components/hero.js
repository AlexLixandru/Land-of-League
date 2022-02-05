import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import heroVideo from "./../assets/heroVideo.mp4";
import buttonImageDefault from "./../assets/login-default.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    position: "relative",
    "& video": {
      objectFit: "cover",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    paddingBottom: "2%",
  },
}));

const Hero = ({onClick}) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h3" component="h1" className={classes.title}>
            Welcome to Land of League. Please Sign In to continue!
          </Typography>
          <img
            className="login-button login-ripple"
            onClick={()=>onClick()}  //{createConnectHandler(Object.keys(connectors)[2])}
            src={buttonImageDefault}
          />
        </Box>
      </div>
    </section>
  );
};

export default Hero;
