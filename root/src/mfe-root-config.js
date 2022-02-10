
import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfe/navbar",
  app: () => System.import("@mfe/navbar"),
  activeWhen: () => true //'() => true' caso queira iniciar aqui
});
registerApplication({
  name: "@mfe/poc-react",
  app: () => System.import("@mfe/poc-react"),
  activeWhen: ['/app1-react'] //'() => true' caso queira iniciar aqui
});
registerApplication({
  name: "@mfe/poc-vue",
  app: () => System.import("@mfe/poc-vue"),
  activeWhen: ["/app2-vue"]
});

start({
  urlRerouteOnly: true,
});
