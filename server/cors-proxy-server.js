import corsAnywhere from "cors-anywhere";

// Set up CORS Anywhere options
const corsOptions = {
  originWhitelist: [
    "http://localhost:3002",
    "https://code-bros.onrender.com",
    "https://palate-passport-backend.onrender.com",
  ],
  requireHeader: ["origin", "x-requested-with"], // Require headers to prevent open proxy
  removeHeaders: ["cookie", "cookie2"], // Remove cookies for security
};

// Define the port to run the proxy server on
const PORT = process.env.PORT || 8080;

// Start the CORS Anywhere server
corsAnywhere.createServer(corsOptions).listen(PORT, () => {
  console.log(`CORS Anywhere proxy is running on port ${PORT}`);
});
