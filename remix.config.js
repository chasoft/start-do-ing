/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  server: "./server.ts",
  serverBuildPath: "functions/[[path]].js",
  serverConditions: ["workerd", "worker", "browser"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // routes(defineRoutes) {
  //   return defineRoutes((route) => {
  //     route("/", "home.tsx", { index: true });
  //     route("about", "about/route.tsx");
  //     route("random", "random/layout.tsx", () => {
  //       route("", "random/index.tsx", { index: true });
  //       route("/password-generator", "random/password-generator.tsx");
  //     });
  //   });
  // },
};
