import express from "express";

import path from "path";

const app = express();

app.listen({ port: 3050 }, () => {
  console.info("Serving predict-growth-stop on port 3050");
});

/* React bundle is served by the node server but allows client-side routing on production */
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
