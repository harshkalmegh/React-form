import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  function updateText(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const navigate = useNavigate();

  function redirectData() {
    fetch("https://restful-booker.herokuapp.com/auth", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: user,
    }).then((res) => {
      if (res) {
        navigate("/home");
      }
    });
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Login
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="loginVideoSignIn" data-testid="BuyerLogin">
          <div className="loginFieldContainer">
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        name="username"
                        fullWidth
                        id="username"
                        label="Enter Email"
                        autoFocus
                        type="text"
                        onChange={updateText}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="password"
                        fullWidth
                        id="password"
                        label="Enter Password"
                        type="password"
                        onChange={updateText}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={redirectData}
                    style={{
                      backgroundColor: "#79C99E",
                      marginRight: "5px",
                      color: "black",
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Container>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
