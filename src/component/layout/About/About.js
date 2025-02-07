import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.youtube.com/watch?v=GkZhGCJsIj8&t=29s";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Eminem_Show&psig=AOvVaw2bnrvtkD2AdZZt_425EGV_&ust=1739020241812000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjb_7jRsYsDFQAAAAAdAAAAABAI"
              alt="A"
            />
            <Typography>JUstore</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This is an Ecommerce wesbite for our project</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/watch?v=GkZhGCJsIj8&t=29s"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a
              href="https://www.youtube.com/watch?v=GkZhGCJsIj8&t=29s"
              target="blank"
            >
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
