import React from "react";
import { Container, Typography, Card, CardContent, CardActions, Button } from "@material-ui/core";

function Welcome() {
  return (
    <Card>
      <CardContent>
      <Typography paragraph>
          Welcome to my personal website (... a.k.a. Playground ) and portfolio
        </Typography>
        <Typography paragraph>
          Here you'll get a glimpse of my skills, experience and a direct
          contact to get in touch!
        </Typography>
      </CardContent>
      <CardActions>
        <Button>View Resume</Button>
        <Button>Send Message</Button>
      </CardActions>
    </Card>
  );
}

export default Welcome;
