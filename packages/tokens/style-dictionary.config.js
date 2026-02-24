import StyleDictionary from 'style-dictionary'

const sd = StyleDictionary.extend({
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
          format: 'typescript/esm-declarations',
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
})

sd.buildAllPlatforms()
