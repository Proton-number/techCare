import React from "react";
import { Typography, Stack, Box, Paper } from "@mui/material";
import searchIcon from "/src/assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import moreHoriz from "/src/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import Emily from "/src/assets/Layer 8.png";
import Ryan from "/src/assets/Layer 1.png";
import Brandon from "/src/assets/Layer 3.png";
import Jessica from "/src/assets/Layer 2.png";
import Samantha from "/src/assets/Layer 6.png";
import Ashley from "/src/assets/Layer 12.png";
import Olivia from "/src/assets/HealthCare Dashboard/Layer 10.png";
import Tyler from "/src/assets/Layer 9.png";
import Kevin from "/src/assets/Layer 4.png";
import Dylan from "/src/assets/Layer 5.png";
import Nathan from "/src/assets/Layer 7.png";
import Mike from "/src/assets/pexels-photo-1222271.png";

const patientsInfo = [
  {
    img: Emily,
    name: "Emily Williams",
    gender: "Female",
    age: 18,
  },
  {
    img: Ryan,
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
  },
  {
    img: Brandon,
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
  },
  {
    img: Jessica,
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
  },
  {
    img: Samantha,
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
  },
  {
    img: Ashley,
    name: "Ashley Martinez",
    gender: "Female",
    age: 56,
  },
  {
    img: Olivia,
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
  },
  {
    img: Tyler,
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
  },
  {
    img: Kevin,
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
  },
  {
    img: Dylan,
    name: "Dylan Thompson",
    gender: "Male",
    age: 36,
  },
  {
    img: Nathan,
    name: "Nathan Evans",
    gender: "Male",
    age: 58,
  },
  {
    img: Mike,
    name: "Mike Nolan",
    gender: "Male",
    age: 31,
  },
];

function Patients() {
  return (
    <Paper sx={{ padding: 2, margin: 2 }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}
      >
        <Typography variant="h6">Patients</Typography>
        <Box component="img" src={searchIcon} />
      </Stack>
      <Stack spacing={2}>
        {patientsInfo.map((info, index) => (
          <Box key={index} sx={{ padding: 2 }}>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={info.img}
                  sx={{ width: "48px", height: "48px", borderRadius: "50%" }}
                />
                <Stack>
                  <Typography variant="subtitle1">
                    <b>{info.name}</b>
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography variant="body2">{info.gender}</Typography>
                    <Typography variant="body2">{info.age} years</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Box component="img" src={moreHoriz} />
            </Stack>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

export default Patients;
