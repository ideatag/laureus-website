"use client";
import "./Page.css"
import React from "react";
import { Button, Box, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
  const storedUsername = process.env.USERNAME;
  const storedPassword = process.env.PASSWORD;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const enteredUsername = form.elements.username.value;
    const enteredPassword = form.elements.password.value;

    if (
      enteredUsername === storedUsername &&
      enteredPassword === storedPassword
    ) {
      alert("Success");
    } else {
      alert("Error");
    }
  };

  return (
    <Box
      xs={4}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={8}
        style={{ padding: 20, height: "300px", width: "300px" }}
      >
        <Box align="center">
          <Typography style={{ fontWeight: "bold", color: "var(--darkBlue)" }}>
            Anmelden
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box margin={4}>
            <TextField className="adminLogNameAndPassword"
              label="Nutzername"
              name="username"
              variant="outlined"
              placeholder="Nutzername"
              fullWidth
              required
            />
          </Box>
          <Box margin={4}>
            <TextField className="adminLogNameAndPassword"
              label="Passwort"
              name="password"
              variant="outlined"
              placeholder="Passwort"
              fullWidth
              type="password"
              required
            />
          </Box>
          <Box margin={4}>
            <Button
              style={{ backgroundColor: "var(--darkBlue)" }}
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Einreichen
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
