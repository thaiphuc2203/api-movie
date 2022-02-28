import React, { useState, Component } from 'react';
import { TextField } from '@mui/material';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

export default function SearchBar(props: any): JSX.Element {

  return (
    <TextField
      value={ props.value.title }
      onChange = {(e) => props.onSearch(e)}
      label="With normal TextField"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon onClick = {props.clickSearch} />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}