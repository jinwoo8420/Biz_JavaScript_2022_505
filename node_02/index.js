import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const intNum1 = parseInt(query.num1);
  const intNum2 = parseInt(query.num2);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`${intNum1 + intNum2}`); //"Hello Korea");
});
server.listen(8000, () => {
  console.log("Server Start http://localhost:8000");
});
