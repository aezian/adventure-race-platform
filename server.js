

const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.get ("/health" , (req, res) => {
	res.json({
		status: "ok",
		service: "adventure-race-platform"
});
});

app.get("/events", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Mountain Quest 2026",
      location: "Blue Mountains",
      status: "registration-open"
    },
    {
      id: 2,
      name: "Coastal Adventure Race",
      location: "Sydney Coast",
      status: "planning"
    }
  ]);
});

app.get("/participants", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Sarah Collins",
      team: "Trail Blazers",
      eventId: 1
    },
    {
      id: 2,
      name: "Mark Evans",
      team: "Coastal Runners",
      eventId: 2
    }
  ]);
});


app.get("/", (req, res) => {
  res.json({
    message: "Adventure Race Platform API",
    endpoints: ["/health", "/events", "/participants"]
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.url
  });
});

app.listen(port, () => {
	console.log(`Adventure Race API running on port ${port}`);
});
