const PORT = parseInt(process.env.PORT || "8080");

Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return Response.json({
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
      });
    }
  },
});
console.log(`Listening on port ${PORT}`);
