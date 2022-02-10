import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/services'>services</Link>
          <Link to='/blog'>Blog</Link>
          {/* <Tab label="Home" component={Link} to="/" />
          <Tab label="About" component={Link} to="/about" />
          <Tab label="Services" component={Link} to="/services" />
          <Tab component={Link} to="/blog" /> */}
        </Tabs>
      </Box>
    </Box>
  );
}
