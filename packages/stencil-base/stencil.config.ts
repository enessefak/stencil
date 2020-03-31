import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "stencil-base",
  plugins: [
    sass({
      injectGlobalPaths: [
        "./src/global/variables.scss",
        "./src/global/mixins.scss"
      ]
    })
  ],
  globalScript: "./src/global/library.ts",
  enableCache: false,
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "stencil-base",
      proxiesFile: "../stencil-react/src/components.ts"
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      copy: [
        {
          src: "./components/test/*.svg",
          dest: "./assets/"
        }
      ],
      empty: false,
      serviceWorker: null // disable service workers
    }
  ]
};
