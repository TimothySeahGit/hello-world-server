const app = require("./app");

const port = 8081;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
