import React from "react";
import { Box, Stack, Typography, Paper } from "@mui/material";

const diagnostics = [
  {
    problem: "Hypertension",
    description: "Chronic high blood pressure",
    status: "Under Observation",
  },
  {
    problem: "Type 2 Diabetes",
    description: "Insulin resistance and elevated blood sugar",
    status: "Cured",
  },
  {
    problem: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    problem: "Osteoarthritis",
    description: "Degenerative joint disease",
    status: "Untreated",
  },
  {
    problem: "Allergic Rhinitis",
    description: "Seasonal allergies causing nasal congestion",
    status: "Active",
  },
];

function DiagnosisList() {
  return (
    <Paper sx={{ padding: "14px", margin: "20px", borderRadius: "8px" }}>
      <Stack spacing={2}>
        <Typography variant="h5" gutterBottom>
          <b>Diagnostic List</b>
        </Typography>

        {/* Headers */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            backgroundColor: "#F6F7F8",
            padding: "5px",
            borderRadius: "24px",
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Typography variant="subtitle2">
              <b>Problem/Diagnosis</b>
            </Typography>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography variant="subtitle2">
              <b>Description</b>
            </Typography>
          </Box>
          <Box sx={{ width: "20%" }}>
            <Typography variant="subtitle2">
              <b>Status</b>
            </Typography>
          </Box>
        </Stack>

        {/* Diagnostic Items */}
        {diagnostics.map((diagnosis, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between" }}
          >
            <Box sx={{ width: "30%" }}>
              <Typography variant="body2">{diagnosis.problem}</Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography variant="body2">{diagnosis.description}</Typography>
            </Box>
            <Box sx={{ width: "20%" }}>
              <Typography variant="body2">{diagnosis.status}</Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}

export default DiagnosisList;
