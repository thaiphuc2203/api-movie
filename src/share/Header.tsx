import * as React from "react";
import { Tabs, Button, Tab, Container, Toolbar, AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, Outlet } from "react-router-dom";
import { Theme } from "./Theme";

const MenuList = require("../fakeData/MenuList.json");

const useStyles = makeStyles({
  appbar: {
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",    background: "#fff",

  },
  logo: {
    height: "2.5rem",
    margin: "auto 0",
    alignSelf: "center",
    display: "flex",
    backgroundColor: "#ffffff!important",
    boxShadow: "0px 0px 0px 0px rgb(0 0 0 / 0%)!important"
  },
  tabContainer: {
    maxWidth: "60%",
    flexGrow: 1,
    marginLeft: "auto",
    justifyContent: "center",
  },
  tabs: {
    minWidth: "auto",
  },
  tab: {
    color: `${Theme.palette.secondary}`,
  },
});
export default function Header() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="lg">
      <AppBar position="fixed">
        <Toolbar disableGutters className={classes.appbar}>
          <Button
            variant="contained"
            className={`btn-logo ${classes.logo}`}
            href="/"
            onClick={() => setValue(0)}
          >
            <img
              src={require("../assets/images/camera.png")}
              alt="logo"
              width="40"
              height="auto"
            />
          </Button>
          <Tabs
            className={classes.tabContainer}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {MenuList.map(
              (el: { label: string; url: string }, index: number) => (
                <Tab
                  className={classes.tab}
                  label={el.label}
                  key={index}
                  component={Link}
                  to={el.url}
                />
              )
            )}
          </Tabs>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
