import React from "react";
import { Typography, Stack, Box, Paper } from "@mui/material";
import respiratoryIcon from "/src/assets/respiratory rate.svg";
import temperatureIcon from "/src/assets/temperature.svg";
import heartrateIcon from "/src/assets/HeartBPM.svg";
import arrowDown from "/src/assets/ArrowDown.svg";
import arrowUp from "/src/assets/ArrowUp.svg";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import expandMore from "/src/assets/expand_more_FILL0_wght300_GRAD0_opsz24.png";
import Divider from "@mui/material/Divider";

const diagnosisData = [
  {
    icon: respiratoryIcon,
    title: "Respiratory Rate",
    value: "20 bpm",
    status: "Normal",
    bgColor: "#E0F3FA",
  },
  {
    icon: temperatureIcon,
    title: "Temperature",
    value: "98.6 F",
    status: "Normal",
    bgColor: "#FFE6E9",
  },
  {
    icon: heartrateIcon,
    title: "Heart Rate",
    value: "78 bpm",
    status: "Lower than Average",
    bgColor: "#FFE6F1",
    arrowIcon: arrowDown,
  },
];

const chartData = {
  labels: [
    "Oct, 2023",
    "Nov, 2023",
    "Dec, 2023",
    "Jan, 2023",
    "Feb 2024",
    "Mar 2024",
  ],
  datasets: [
    {
      data: [120, 110, 160, 110, 150, 160],
      fill: false,
      borderColor: "#E66FD2",
      tension: 0.4,
    },
    {
      data: [110, 62, 110, 90, 70, 80],
      fill: false,
      borderColor: "#8C6FE6",
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

function DiagnosisHistory() {
  return (
    <Paper sx={{ padding: 2, margin: 2, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        <b>Diagnosis History</b>
      </Typography>

      <Stack direction="row" spacing={18}>
        <Typography>
          <b>Blood Pressure</b>
        </Typography>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Typography variant="subtitle2">Last 6 months</Typography>
          <Box component="img" src={expandMore} />
        </Stack>
      </Stack>

      <Box sx={{ position: "relative", height: "200px", display: "flex" }}>
        <Line data={chartData} options={chartOptions} />
        <Stack spacing={1}>
          <Stack>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.5}>
              <Box
                sx={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#E66FD2",
                  borderRadius: "50%",
                }}
              />
              <Typography variant="subtitle2">
                <b>Systolic</b>
              </Typography>
            </Stack>
            <Typography variant="h6">
              <b>160</b>
            </Typography>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
              <Box component="img" src={arrowUp} />
              <Typography variant="subtitle2">Higher than Average</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.5}>
              <Box
                sx={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#8C6FE6",
                  borderRadius: "50%",
                }}
              />
              <Typography variant="subtitle2">
                <b>Diastolic</b>
              </Typography>
            </Stack>
            <Typography variant="h6">
              <b>78</b>
            </Typography>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
              <Box component="img" src={arrowDown} />
              <Typography variant="subtitle2">Lower than Average</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "space-between" }}
      >
        {diagnosisData.map((data, index) => (
          <Box
            key={index}
            sx={{
              padding: 2,
              backgroundColor: data.bgColor,
              borderRadius: 2,
              flex: 1,
              textAlign: "center",
            }}
          >
            <Box component="img" src={data.icon} sx={{ marginBottom: 1 }} />
            <Typography variant="subtitle2" fontWeight="bold">
              {data.title}
            </Typography>
            <Typography variant="h5">
              <b>{data.value}</b>
            </Typography>
            <Stack direction="row" alignItems="center" justifyContent="center">
              {data.arrowIcon && (
                <Box
                  component="img"
                  src={data.arrowIcon}
                  sx={{ width: 10, height: 5, marginRight: 0.5 }}
                />
              )}
              <Typography variant="body2">{data.status}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

export default DiagnosisHistory;
