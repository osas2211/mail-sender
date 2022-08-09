import React from "react"
import {
  FormGroup,
  Box,
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material"

export const Login = () => {
  return (
    <div>
      <Container align="center" sx={{ marginY: 5 }}>
        <Typography variant="h5">Login</Typography>
        <Box width={"80%"}>
          <form action="/send-email">
            <FormGroup sx={{ marginY: 2 }}>
              <TextField
                focused
                placeholder="Enter UserName"
                label="username"
                type={"text"}
              />
            </FormGroup>
            <FormGroup sx={{ marginY: 2 }}>
              <TextField
                focused
                placeholder="Enter Password"
                label="password"
                type={"password"}
              />
            </FormGroup>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  )
}
