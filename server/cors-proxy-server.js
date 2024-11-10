import { createServer } from "cors-anywhere";

// Set up CORS Anywhere's options
const corsOptions = {
  // Whitelist specific origins (e.g., your React app's origin)
  originWhitelist: [
    "http://localhost:3002",
    "https://code-bros.onrender.com/",
    "https://palate-passport-backend.onrender.com",
  ],
};

// Create the CORS Anywhere server
const server = createServer(corsOptions);

// Define the port to run the proxy server on
const PORT = process.env.PORT || 8080;

// Start the server
server.listen(PORT, () => {
  console.log(`CORS Anywhere proxy is running on port ${PORT}`);
});
