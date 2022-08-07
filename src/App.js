import React from "react"
import { Login } from "./components/login"
import { Register } from "./components/register"
import { SendEmail } from "./components/sendEmail"
import { Button, Box } from "@mui/material"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  React.useEffect(() => {
    console.log("hey")
  }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Box textAlign={"center"} marginTop="5">
                  <Box marginTop="5">
                    <Button variant="contained">
                      <Link
                        to={"/send-email"}
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        Send Email
                      </Link>
                    </Button>
                  </Box>
                </Box>
              </>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/send-email" element={<SendEmail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
