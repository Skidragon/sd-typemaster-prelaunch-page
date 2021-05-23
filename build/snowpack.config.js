export default {
  plugins: ["@snowpack/plugin-sass"],
  routes: [{match: "routes", src: ".*", dest: "/starter-code/index.html"}],
  optimize: {},
  packageOptions: {},
  devOptions: {
    port: 3e3
  },
  buildOptions: {}
};
