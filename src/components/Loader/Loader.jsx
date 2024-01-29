import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loader = (props) => {
  return (
    <>
      <Box sx={{ display: "flex" }} {...props}>
        <CircularProgress color={props.color} />
      </Box>
    </>
  );
};