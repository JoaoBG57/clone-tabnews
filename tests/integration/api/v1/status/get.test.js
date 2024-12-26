import fetch from "node-fetch";

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
}, 10000); // Aumenta o tempo limite para 10 segundos
