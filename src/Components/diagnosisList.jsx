import React from "react";
import { Box, Button, Stack, Typography, Paper } from "@mui/material";

function DiagnosisList() {
  return (
    <Paper>
      <Stack sx={{ padding: "10px" }}>
        <Typography variant="h5">
          <b>Diagnostic List </b>
        </Typography>

        <Stack direction="row" spacing={11} sx={{ justifyContent: "center" }}>
          <Typography>Problem/Diagnosis</Typography>
          <Typography>Description</Typography>
          <Typography>Under Observation</Typography>
        </Stack>

        <Stack direction="row" spacing={11} sx={{ justifyContent: "center" }}>
          <Typography>Hypertension</Typography>
          <Typography>Chronic high blood pressure</Typography>
          <Typography>Under Observation</Typography>
        </Stack>

        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography>Type 2 Diabetes</Typography>
          <Typography>Insulin resistance and elevated blood sugar</Typography>
          <Typography>Under Observation</Typography>
        </Stack>

        {/* <Stack direction="row" spacing={4}>
          <Stack sx={{ justifyContent: "center" }}>
            <Typography>Hypertension</Typography>
            <Typography>Type 2 Diabetes</Typography>
            <Typography>Asthma</Typography>
            <Typography>Osteoarthritis</Typography>
            <Typography>Allergic Rhintis</Typography>
          </Stack>
          <Stack sx={{ justifyContent: "center" }}>
            <Typography>Chronic high blood pressure</Typography>
            <Typography>Insulin resistance and elevated blood sugar</Typography>
            <Typography>
              Recurrent episodes of bronchial constriction
            </Typography>
            <Typography>Degenerative joint disease</Typography>
            <Typography>
              Seasonal allergies causing nasal congestional
            </Typography>
          </Stack>
          <Stack sx={{ justifyContent: "center" }}>
            <Typography>Under Observation</Typography>
            <Typography>Inactive</Typography>
            <Typography>Cured</Typography>
            <Typography>Untreated</Typography>
            <Typography>Active</Typography>
          </Stack>
        </Stack> */}
      </Stack>
    </Paper>
  );
}

export default DiagnosisList;
