import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";


const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-ah6",
  project: "travel_agency",
  // An auth token is required for uploading source maps;
  // store it in an environment variable to keep it secure.
  authToken:"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"
  // ...
};



export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(),sentryReactRouter(sentryConfig, config)],
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});