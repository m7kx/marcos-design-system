/** @type {import('style-dictionary').Config} */
export default {
  source: ['src/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'mds',
      buildPath: 'output/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'output/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/esm',
        },
        {
          destination: 'tokens.d.ts',
          format: 'typescript/module-declarations',
        },
      ],
    },
    json: {
      buildPath: 'output/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
}
