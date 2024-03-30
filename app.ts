const PORT: number = +(process.env.PORT || 8081);
const NODE_ENV = process.env.NODE_ENV ?? "development";

const server = Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return Response.json(
        {
          id: 19343430,
          type: "custom",
          name: "Watchlist",
          symbols: ["SP:SPX", "BCBA:PAMP"],
          active: true,
          shared: false,
          color: null,
          description: null,
          created: null,
          modified: "2024-03-29T18:44:38.482224Z",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "https://www.tradingview.com",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "X-Language", "X-Requested-With",
          },
        },
      );
    }
  },
});

console.log(` Serving http://localhost:${server.port}`);
