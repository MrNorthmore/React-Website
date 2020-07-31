import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  Avatar,
} from "@material-ui/core";

function About() {
  return (
    <div>
      <Container style={{ display: "flex" }}>
        <Card style={{ display: "flex" }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <img
                  alt="Matthew Northmore"
                  src="src/portrait.jpeg"
                  style={{ 
                    display: "flex", 
                    height: "100%", 
                    width: "100%",
                    borderRadius: 400 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ display: "flex" }}>
                  <Typography variant="h6">
                    Welcome! My name's Matthew Northmore.
                    <Typography>
                      This page is like a little place about me for you, so to
                      begin let me tell you a bit about myself...
                    </Typography>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Container>
    </div>
  );
}

export default About;
