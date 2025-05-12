import React from 'react';
import {
  Typography, Box, Table, TableHead, TableBody, TableRow, TableCell, Paper
} from '@mui/material';

const stocks = ['AAPL', 'GOOG', 'AMZN'];
const dummyHeatmap = [
  [1.0, 0.85, -0.2],
  [0.85, 1.0, -0.4],
  [-0.2, -0.4, 1.0],
];

// Generate a color from red to green based on the correlation value
const getColor = (value) => {
  const hue = value * 120; // from red to green
  return `hsl(${hue}, 70%, 70%)`;
};

const HeatmapPage = () => {
  return (
    <Box sx={{ p: 4, bgcolor: 'background.default' }}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
        Correlation Heatmap
      </Typography>
      <Paper sx={{ borderRadius: 2, boxShadow: 3, overflow: 'hidden' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, backgroundColor: 'primary.main', color: 'white' }}></TableCell>
              {stocks.map((stock) => (
                <TableCell
                  key={stock}
                  sx={{
                    fontWeight: 600,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    textAlign: 'center',
                    borderRight: '1px solid rgba(224, 224, 224, 1)',
                  }}
                >
                  {stock}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((row, i) => (
              <TableRow key={row} sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    backgroundColor: 'primary.light',
                    color: 'primary.contrastText',
                    textAlign: 'center',
                    borderRight: '1px solid rgba(224, 224, 224, 1)',
                  }}
                >
                  {row}
                </TableCell>
                {stocks.map((col, j) => (
                  <TableCell
                    key={col}
                    sx={{
                      backgroundColor: getColor(dummyHeatmap[i][j]),
                      textAlign: 'center',
                      padding: 2,
                      color: dummyHeatmap[i][j] > 0 ? 'black' : 'white',
                      fontWeight: 600,
                    }}
                  >
                    {dummyHeatmap[i][j].toFixed(2)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default HeatmapPage;
