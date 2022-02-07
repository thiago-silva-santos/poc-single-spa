import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/app1"]
});

registerApplication({
  name: "@mfe/poc-react",
  app: () => System.import("@mfe/poc-react"),
  activeWhen: ["/app2"] //'() => true' caso queira iniciar aqui
});
registerApplication({
  name: "@mfe/poc-vue",
  app: () => System.import("@mfe/poc-vue"),
  activeWhen: ["/app3"]
});

start({
  urlRerouteOnly: true,
});
