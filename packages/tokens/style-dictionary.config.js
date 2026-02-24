export default {
  source: ["src/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      prefix: "mds",
      buildPath: "output/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: { outputReferences: false }
        }
      ]
    },
    js: {
      transformGroup: "js",
      buildPath: "output/js/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6"
        }
      ]
    },
    ts: {
      transformGroup: "js",
      buildPath: "output/js/",
      files: [
        {
          destination: "tokens.d.ts",
          format: "typescript/module-declarations"
        }
      ]
    },
    json: {
      transformGroup: "js",
      buildPath: "output/json/",
      files: [
        {
          destination: "tokens.json",
          format: "json/nested"
        }
      ]
    }
  }
}
