import React from "react"
import { Login } from "./components/login"
import { Register } from "./components/register"
import { SendEmail } from "./components/sendEmail"
import { PrivateRoutes } from "./components/PrivateRoutes"
import { Button, Box } from "@mui/material"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  React.useEffect(() => {
    console.log("hey")
    window.localStorage.setItem("token", "1234")
    setTimeout(() => {
      window.localStorage.removeItem("token")
      console.log("token removed")
    }, 5000)
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
          <Route element={<PrivateRoutes />}>
            <Route path="/send-email" element={<SendEmail />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
