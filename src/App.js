import React from "react";
import Routespage from "./components/sidemenu/Routespage";
import { Navbar } from "./components/sidemenu/Navbar";
import { Box, Stack } from "@mui/system";
import Footer from "./components/banners/Footer";
function App() {
  return (
    <Box px={3}>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "flex-start",
        }}
      >
        <Navbar />
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Routespage />
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}

export default App;
