import React, { useState, useEffect } from "react";
import { AppBar, Card, Grid } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function DrinksHeader() {
  const navigate = useNavigate();

  return (
    <>
      <AppBar paddingTop={2}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            display: "flex-inline",
            justifyContent: "space-around",
            bgcolor: "white",
            position: "fixed",
            top: 0,
          }}
        >
          <Grid item paddingRight={2}>
            <Card>
              <ArrowBackIcon fontSize="large" onClick={() => navigate("/")} />
            </Card>
          </Grid>
          <Grid item></Grid>

          <Grid item>
            <Card>
              <TuneIcon
                fontSize="large"
                onClick={() => navigate("/profilesettings")}
              />
            </Card>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}

export default DrinksHeader;
