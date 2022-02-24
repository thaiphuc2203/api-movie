import * as React from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles({
  wrapMain: {
    marginTop: '100px',
  },
});
export default function Layout(props: any) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container className={classes.wrapMain} maxWidth="sm">
        {props.children}
      </Container>
      <Footer />
    </React.Fragment>
  );
}
