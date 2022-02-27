import * as React from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: 100,
  },
});
export default function Layout(props: any) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container className={`wrap-root ${classes.root}`}>
        <Outlet />
        {props.children}
      </Container>
      <Footer />
    </React.Fragment>
  );
}
