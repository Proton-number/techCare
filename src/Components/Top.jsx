import { AppBar, Toolbar, Typography, Stack, Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import drJose from "/src/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import settingsLogo from "/src/assets/settings_FILL0_wght300_GRAD0_opsz24.svg";
import moreOption from "/src/assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg";
import Logo from "/src/assets/TestLogo.svg";
import overViewLogo from "/src/assets/home_FILL0_wght300_GRAD0_opsz24.svg";
import patientLogo from "/src/assets/group_FILL0_wght300_GRAD0_opsz24.svg";
import scheduleLogo from "/src/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import messageLogo from "/src/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import transactionLogo from "/src/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg";

function Top() {
  return (
    <AppBar
      component={motion.div}
      id="desktopNav"
      sx={{
        padding: 1,
        borderRadius: "75px",
        color: "black",
          backgroundColor: "white",
        
      }}
      elevation={2}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 0.4 }}>
          <Box component="img" src={Logo} />
        </Box>

        <Stack
          spacing={4}
          direction="row"
          sx={{ flexGrow: 0.4, alignItems: "center" }}
        >
          <Stack
            direction="row"
            sx={{ alignItems: "center", cursor: "pointer", padding: 0.8 }}
            spacing={2}
          >
            <Box component="img" src={overViewLogo} />
            <Typography variant="h6">Overview</Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: "#01F0D0",
                padding: 0.8,
              borderRadius:'41px'
            }}
            spacing={2}
          >
            <Box component="img" src={patientLogo} />
            <Typography variant="h6">Patients</Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{ alignItems: "center", cursor: "pointer", padding: 0.8 }}
            spacing={2}
          >
            <Box component="img" src={scheduleLogo} />
            <Typography variant="h6">Schedule</Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{ alignItems: "center", cursor: "pointer", padding: 0.8 }}
            spacing={2}
          >
            <Box component="img" src={messageLogo} />
            <Typography variant="h6">Message</Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{ alignItems: "center", cursor: "pointer", padding: 0.8 }}
            spacing={2}
          >
            <Box component="img" src={transactionLogo} />
            <Typography variant="h6">Transactions</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Box component="img" src={drJose} />
            <Stack>
              <Typography>Dr. Jose Simmons</Typography>
              <Typography>General Practitioner</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Box component="img" src={settingsLogo} />
            <Box component="img" src={moreOption} />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Top;
