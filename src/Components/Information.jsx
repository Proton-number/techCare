import { Box, Button, Stack, Typography, Paper } from "@mui/material";
import React from "react";
import birthIcon from "/src/assets/BirthIcon.svg";
import Jessica from "/src/assets/Layer 2.png";
import femaleIcon from "/src/assets/FemaleIcon.svg";
import phoneIcon from "/src/assets/PhoneIcon.svg";
import insuranceIcon from "/src/assets/InsuranceIcon.svg";

function Information() {
  return (
    <Paper sx={{ padding: "30px" }}>
      <Stack spacing={1}>
        <Stack sx={{ alignItems: "center" }} spacing={2}>
          <Box component="img" src={Jessica} />
          <Typography variant="h6">
            <b>Jessica Taylor</b>
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Box component="img" src={birthIcon} />
          <Stack>
            <Typography variant="subtitle2">Date of Birth</Typography>
            <Typography variant="subtitle2">
              <b>August 23, 1996</b>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Box component="img" src={femaleIcon} />
          <Stack>
            <Typography variant="subtitle2">Gender</Typography>
            <Typography variant="subtitle2">
              <b>Female</b>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Box component="img" src={phoneIcon} />
          <Stack>
            <Typography variant="subtitle2">Contact Info.</Typography>
            <Typography variant="subtitle2">
              <b>(415) 555-1234</b>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Box component="img" src={phoneIcon} />
          <Stack>
            <Typography variant="subtitle2">Emergency Contacts</Typography>
            <Typography variant="subtitle2">
              <b>(415) 555-5678</b>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Box component="img" src={insuranceIcon} />
          <Stack>
            <Typography variant="subtitle2">Insurance Provider</Typography>
            <Typography variant="subtitle2">
              <b>Sunrise Health Assurance</b>
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              borderRadius: "41px",
              backgroundColor: "#01F0D0",
              color: "black",
            }}
          >
            <b> Show All Information</b>
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Information;
