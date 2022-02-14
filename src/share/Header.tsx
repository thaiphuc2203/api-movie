import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
const MenuList = require("../fakeData/MenuList.json");

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="lg">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {MenuList.map((el: { label: string; url: string }, index: number) => (
            <Tab label={el.label} component={Link} to={el.url} />
          ))}
        </Tabs>
      </Box>
    </Container>
  );
}
