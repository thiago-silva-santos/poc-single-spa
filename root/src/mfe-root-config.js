
import { registerApplication, start } from "single-spa";

registerApplication({
  name: "navbar",
  app: () => System.import("@mfe/navbar"),
  activeWhen: () => true //'() => true' caso queira iniciar aqui
});
registerApplication({
  name: "poc-react",
  app: () => System.import("@mfe/poc-react"),
  activeWhen: ['/app1-react']
});
registerApplication({
  name: "@mfe/poc-vue",
  app: () => System.import("@mfe/poc-vue"),
  activeWhen: ["/app2-vue"]
});

registerApplication({
  name: "poc-angular",
  app: () => System.import("@mfe/poc-angular"),
  activeWhen: ["/poc-angular"]
});


start({
  urlRerouteOnly: true,
});
