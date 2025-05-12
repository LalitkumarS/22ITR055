import React, { useState } from 'react';
import {
  Typography, Box, Select, MenuItem, Autocomplete, TextField, Paper, Divider
} from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const dummyDataMap = {
  AAPL: [
    { time: '10:00', price: 120 },
    { time: '10:05', price: 125 },
    { time: '10:10', price: 122 },
    { time: '10:15', price: 130 },
    { time: '10:20', price: 128 },
  ],
  GOOG: [
    { time: '10:00', price: 1500 },
    { time: '10:05', price: 1510 },
    { time: '10:10', price: 1495 },
    { time: '10:15', price: 1520 },
    { time: '10:20', price: 1535 },
  ],
  AMZN: [
    { time: '10:00', price: 3100 },
    { time: '10:05', price: 3120 },
    { time: '10:10', price: 3080 },
    { time: '10:15', price: 3150 },
    { time: '10:20', price: 3170 },
  ]
};

const StockPage = () => {
  const [interval, setInterval] = useState(15);
  const [selectedStock, setSelectedStock] = useState('AAPL');

  return (
    <Box sx={{ p: 4, bgcolor: 'background.default' }}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
        Stock Price Chart
      </Typography>

      {/* Stock Selection & Interval Controls */}
      <Paper sx={{ p: 3, mb: 3, display: 'flex', gap: 4, alignItems: 'center', borderRadius: 2, boxShadow: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Select Stock
          </Typography>
          <Autocomplete
            options={Object.keys(dummyDataMap)}
            value={selectedStock}
            onChange={(e, newValue) => setSelectedStock(newValue)}
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label="Ticker" fullWidth />}
          />
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

        <Box>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Time Interval (mins)
          </Typography>
          <Select
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
            sx={{
              minWidth: 150,
              backgroundColor: 'background.paper',
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <MenuItem value={15}>Last 15 Minutes</MenuItem>
            <MenuItem value={30}>Last 30 Minutes</MenuItem>
            <MenuItem value={60}>Last 60 Minutes</MenuItem>
          </Select>
        </Box>
      </Paper>

      {/* Stock Price Chart */}
      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={dummyDataMap[selectedStock]}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#1976d2" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default StockPage;
