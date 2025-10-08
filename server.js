console.log("Starting Next.js application...");
console.log("Current directory:", process.cwd());
console.log("Node version:", process.version);
console.log("PORT:", process.env.PORT || 3000);

import("./.next/standalone/server.js")
  .then(() => {
    console.log("Server started successfully!");
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });
