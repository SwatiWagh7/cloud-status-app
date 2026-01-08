const express = require('express');
const app = express();

const APP_NAME = "Cloud Status Dashboard";
const VERSION = "v1.0.0";
const ENV = process.env.ENVIRONMENT || "Development";

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>${APP_NAME}</title>
        <style>
          body {
            font-family: Arial;
            background: #0f172a;
            color: white;
            text-align: center;
            padding-top: 80px;
          }
          .card {
            background: #1e293b;
            padding: 30px;
            width: 400px;
            margin: auto;
            border-radius: 10px;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>🚀 ${APP_NAME}</h2>
          <p><b>Environment:</b> ${ENV}</p>
          <p><b>Version:</b> ${VERSION}</p>
          <p><b>Status:</b> Running</p>
          <p><b>Time:</b> ${new Date().toLocaleString()}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Application running on port 3000");
});
