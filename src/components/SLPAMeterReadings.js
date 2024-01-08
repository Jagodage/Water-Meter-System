import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function SLPAMeterReadings({ value, onChange }) {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const [search, setSearch] = useState ("");

  return (
    <Box sx={{ minWidth: 300 }}>
      <h2 className="dashboard-text">SLPA Meter Water Readings</h2>
      <FormControl fullWidth size="small">
        <TextField id="outlined-basic" label="Meter ID" variant="outlined" onChange={handleChange}/>

        {/* <InputLabel id="demo-simple-select-label">Meter ID</InputLabel> */}
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Readings"
          onChange={handleChange}
        >
          <MenuItem value='WM1'>WM1</MenuItem>
          <MenuItem value='WM11'>WM11</MenuItem>
          <MenuItem value='WM12'>WM12</MenuItem>
          <MenuItem value='WM13'>WM13</MenuItem>
          <MenuItem value='WM14'>WM14</MenuItem>
          <MenuItem value='WM2'>WM2</MenuItem>
          <MenuItem value='WM22'>WM22</MenuItem>
          <MenuItem value='WM3'>WM3</MenuItem>
          <MenuItem value='WM4'>WM4</MenuItem>
          <MenuItem value='WM5'>WM5</MenuItem>
        </Select> */}
      </FormControl>
    </Box>
  );
}
