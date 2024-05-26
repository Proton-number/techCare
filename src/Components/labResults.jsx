import React from "react";
import { Box, Button, Stack, Typography, Paper } from "@mui/material";
import downloadIcon from "/src/assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

const labTests = [
  { name: "Blood Tests" },
  { name: "CT Scans" },
  { name: "Radiology Reports" },
  { name: "X-Rays" },
  { name: "Urine Test" },
];

function LabResults() {
  return (
    <Paper>
      <Stack sx={{ padding: "14px" }}>
        <Typography variant="h5" gutterBottom>
          <b>Lab Results</b>
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2}>
            {labTests.map((test, index) => (
              <Stack
                key={index}
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Typography variant="subtitle2">{test.name}</Typography>
                <Box
                  component="img"
                  src={downloadIcon}
                  alt="Download"
                  sx={{ cursor: "pointer" }}
                />
              </Stack>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default LabResults;
