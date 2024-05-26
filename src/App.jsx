import React from "react";
import "./App.css";
import Top from "./Components/Top";
import { Stack } from "@mui/material";
import Patients from "./Components/Patients";
import DiagnosisHistory from "./Components/diagnosisHistory";
import DiagnosisList from "./Components/diagnosisList";
import Information from "./Components/Information";
import LabResults from "./Components/labResults";

function App() {
  return (
    <>
      <Top />

      <Stack
        direction="row"
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Patients />
        <Stack>
          <DiagnosisHistory />
          <DiagnosisList />
        </Stack>
        <Stack spacing={2}>
          <Information />
          <LabResults />
        </Stack>
      </Stack>
    </>
  );
}

export default App;
