import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

const PORT = process.env.PORT || 8081;

new Elysia()
  .use(cors())
  .get("symbols_list", () => {
    return {
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
        "###CEDEARS - ETFS",
        "AMEX:SPY",
        "NASDAQ:QQQ",
        "AMEX:XLE",
        "AMEX:XLF",
        "AMEX:IWM",
        "AMEX:EWZ",
        "###CEDEARS - ARGY",
        "NYSE:VIST",
        "NASDAQ:MELI",
        "###CEDEARS - TECH",
        "NASDAQ:NVDA",
        "NASDAQ:COIN",
        "NASDAQ:AAPL",
        "NASDAQ:TSLA",
        "NASDAQ:META",
        "NASDAQ:GOOG",
        "NASDAQ:MSFT",
        "NASDAQ:AMZN",
        "###CEDEARS - VARIOS",
        "NYSE:GOLD",
        "NYSE:BABA",
        "NYSE:DIS",
      ],
      active: true,
      shared: false,
      color: null,
      description: null,
      created: null,
      modified: "2024-03-30T22:29:24.009796Z",
    };
  })
  .post("replace_symbol", ({ body }) => {
    return JSON.stringify(body);
  })
  .listen(PORT);

//
//
// const server = Bun.serve({
//   async fetch(req) {
//     return Response.json(result, {
//       headers: {
//         "Access-Control-Allow-Headers":
//           "X-Language, X-Requested-With, content-type",
//       },
//     });
//   },
// });
//
console.log(` Serving http://localhost:${PORT}`);
