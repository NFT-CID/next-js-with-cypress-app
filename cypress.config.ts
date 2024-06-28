import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "1q93cf",
  e2e: {
    setupNodeEvents(on, config) {},
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
