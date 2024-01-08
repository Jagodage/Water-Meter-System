import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function UsageReadings({ value, onChange }) {

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <h2 className="dashboard-text">Usage Chart</h2>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Meter ID</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Readings"
          onChange={handleChange}
        >
          <MenuItem value='WM16'>WM16</MenuItem>
          <MenuItem value='WM17'>WM17</MenuItem>
          <MenuItem value='WM18'>WM18</MenuItem>
          <MenuItem value='WM21'>WM21</MenuItem>
          <MenuItem value='WM23'>WM23</MenuItem>
          <MenuItem value='WM24'>WM24</MenuItem>
          <MenuItem value='WM26'>WM26</MenuItem>
          <MenuItem value='WM28'>WM28</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
