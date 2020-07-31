import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  textBox: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function Contact() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <Container>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Contact
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Please do not hesitate to reach out, send me a message!
            </Typography>
          </CardContent>
          <CardActions>
            <form className={classes.textbox} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
            <Button color="primary">Send Message</Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

function sendEmail() {

}

export default Contact;
