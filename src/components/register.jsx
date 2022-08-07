import React from "react"
import {
  FormGroup,
  Box,
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material"

export const Register = () => {
  return (
    <div>
      <Container align="center" sx={{ marginY: 5 }}>
        <Typography variant="h5">Register</Typography>
        <Box width={"80%"}>
          <form action="/send-email" method="post">
            <FormGroup sx={{ marginY: 2 }}>
              <TextField
                focused
                placeholder="Enter UserName"
                label="username"
                type={"text"}
                required
              />
            </FormGroup>
            <FormGroup sx={{ marginY: 2 }}>
              <TextField
                focused
                placeholder="Enter Email"
                label="email"
                type={"email"}
                required
              />
            </FormGroup>
            <FormGroup sx={{ marginY: 2 }}>
              <TextField
                focused
                placeholder="Enter Password"
                label="password"
                type={"password"}
                required
              />
            </FormGroup>
            <Button type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  )
}
