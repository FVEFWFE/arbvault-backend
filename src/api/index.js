javascript
import { Router } from "express";

export default (rootDirectory, pluginOptions) => {
  const router = Router();

  // Health check endpoint for Railway
  router.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy", timestamp: new Date().toISOString() });
  });

  return router;
};
