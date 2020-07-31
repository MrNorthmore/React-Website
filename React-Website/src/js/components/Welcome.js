import React from "react";
import { Container, Typography } from "@material-ui/core";

function Welcome() {
  return (
    <div>
      <Container>
        <Typography paragraph>
          Welcome to my personal website (... a.k.a. Playground ) and portfolio
        </Typography>
        <Typography paragraph>
          Here you'll get a glimpse of my skills, experience and a direct
          contact to get in touch!
        </Typography>
      </Container>
    </div>
  );
}

export default Welcome;
