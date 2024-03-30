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
          symbols: [
            "###USD CCL, BRECHA Y AJUSTADO",
            "(BCBA:YPFD/NYSE:YPF+BCBA:PAMP/NYSE:PAM*25+BCBA:GGAL/NASDAQ:GGAL*10)/3",
            "((BCBA:AAPL/NASDAQ:AAPL*20+BCBA:YPFD/NYSE:YPF)/2-FX_IDC:USDARS)/FX_IDC:USDARS*100",
            "BCBA:YPFD/NYSE:YPF/(ECONOMICS:ARCPI/4262)",
            "###INDICES",
            "BCBA:IMV/(BCBA:AAPL/NASDAQ:AAPL*20)",
            "BCBA:IMV",
            "###BANCOS",
            "NYSE:BBAR",
            "NYSE:BMA",
            "NASDAQ:GGAL",
            "NYSE:SUPV",
            "BCBA:BHIP",
            "###ENERGETICAS",
            "NYSE:CEPU",
            "NYSE:EDN",
            "NYSE:PAM",
            "NASDAQ:CECO",
            "BCBA:TRAN",
            "###GAS & OIL",
            "BCBA:COME",
            "NYSE:TGS",
            "BCBA:TGNO4",
            "NYSE:YPF",
            "BCBA:DGCU2",
            "BCBA:METR",
            "###MATERIALES",
            "BCBA:ALUA",
            "NYSE:LOMA",
            "BCBA:TXAR",
            "BCBA:CELU",
            "BCBA:HARG",
            "###AGRO",
            "NASDAQ:CRESY",
            "BCBA:AGRO",
            "BCBA:SAMI",
            "BCBA:INVJ",
            "BCBA:SEMI",
            "###CONSUMO",
            "BCBA:CVH",
            "BCBA:MIRG",
            "BCBA:TECO2",
            "BCBA:MORI",
            "BCBA:HAVA",
            "BCBA:MOLI",
            "BCBA:AUSO",
            "BCBA:MOLA",
            "###CONSTRUCCION",
            "BCBA:CTIO",
            "BCBA:IRSA",
            "###MERCADO",
            "BCBA:BYMA",
            "BCBA:VALO",
          ],
          active: true,
          shared: false,
          color: null,
          description: null,
          created: null,
          modified: "2024-03-30T22:29:24.009796Z",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "https://www.tradingview.com",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "X-Language, X-Requested-With",
          },
        },
      );
    }
  },
});

console.log(` Serving http://localhost:${server.port}`);
