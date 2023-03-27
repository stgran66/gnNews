module.exports = {
  // ...
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
    '^.+\\.css$': '<rootDir>/cssTransform.js',
    '^.+\\.less$': '<rootDir>/cssTransform.js',
    '^.+\\.scss$': '<rootDir>/cssTransform.js',
    '^.+\\.sass$': '<rootDir>/cssTransform.js',
    '^.+\\.graphql$': 'graphql-transform-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
    axios: '<rootDir>/node_modules/axios/index.js',
  },
  // ...
};
