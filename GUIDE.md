## Commands run

1. `npm init -y` for the default package.json
2. `npm install --save-dev babel-core babel-preset-es2015 babel-preset-react babel-preset-react-hmre babel-preset-stage-0`
3. `touch .babelrc`
4. `npm install --save-dev hjs-webpack webpack`
5. `npm install --save-dev babel-loader css-loader style-loader postcss-loader url-loader file-loader`
6. `touch webpack.config.js`
7. `touch .gitignore`

React
8. `npm install --save react react-dom` app dependency, not dev dependency
9. `npm install --save react-router` used if you have more than one page
10. `touch src/app.js`


## Babel
- JS compiler that allows you to use new javascript in older browsers.
- allows different configurations for different operating environments using the `env` key in the babel configuration object
- `babel-hmre` only used in dev environment

## Webpack
- webpack is a module bundler
-  takes modules with dependencies and generates static assets representing those modules.
- using a tool called `hjs-webpack` that sets up common loaders for both development and production environments
  - hot reloading
  - minification
  - ES6 Templates

## React
