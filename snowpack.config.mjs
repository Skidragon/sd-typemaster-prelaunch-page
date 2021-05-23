/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  plugins: ["@snowpack/plugin-sass"],
  // https://www.snowpack.dev/guides/routing#scenario-1%3A-spa-fallback-paths
  routes: [{ match: "routes", src: ".*", dest: "index.html" }],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
    bundle: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3000,
  },
  buildOptions: {
    /* ... */
  },
};
