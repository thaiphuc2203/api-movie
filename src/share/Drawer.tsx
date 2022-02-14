import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const MenuList = require("../fakeData/MenuList.json");
export default function TemporaryDrawer() {
  const [navbar, setNavbar] = React.useState(false);

  const toggleDrawer =
    (event: React.MouseEvent) => {
      setNavbar(!navbar);
    };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer}
    >
      <List>
        {MenuList.map((el: { label: string; url: string }, index: number) => (
          <ListItem button key={el.label}>
            <ListItemText primary={el.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer}>Open</Button>
      {list}
    </React.Fragment>
  );
}
