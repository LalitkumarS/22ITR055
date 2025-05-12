import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { CssBaseline, AppBar, Toolbar, Typography, Container, Button, Stack, Switch, createTheme, ThemeProvider, Box } from '@mui/material';
import StockPage from './pages/StockPage';
import HeatmapPage from './pages/HeatmapPage';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Create a theme based on darkMode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', // Toggle between light and dark mode
      primary: {
        main: '#1976d2', // Primary blue color
      },
      secondary: {
        main: '#f50057', // Secondary pink color
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      h6: {
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
      },
    },
    
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures baseline styles are applied */}
      <Router>
        <AppBar position="static" sx={{ boxShadow: 3 }}>
          <Toolbar sx={{ paddingX: { xs: 2, sm: 4 } }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
              Stock Analytics Dashboard
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button color="inherit" component={Link} to="/stock" sx={{ fontWeight: 'bold' }}>
                Stock Page
              </Button>
              <Button color="inherit" component={Link} to="/heatmap" sx={{ fontWeight: 'bold' }}>
                Heatmap
              </Button>
              <Typography variant="body2">Dark Mode</Typography>
              <Switch checked={darkMode} onChange={toggleTheme} />
            </Stack>
          </Toolbar>
        </AppBar>
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Welcome to the Stock Analytics Dashboard
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Explore real-time stock data, analytics, and correlations between various stocks.
            </Typography>
          </Box>
          <Routes>
            <Route path="/" element={<Navigate to="/stock" />} />
            <Route path="/stock" element={<StockPage />} />
            <Route path="/heatmap" element={<HeatmapPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
