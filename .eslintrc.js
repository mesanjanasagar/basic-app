module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "react-app/jest", "airbnb"],
  overrides: [
    {
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      files: [
        "src/**/**/*.{js,jsx}",
        "src/**/*.{js,jsx}",
        ".eslintrc.js",
        "cypress/e2e/articles.cy.js",
        "cypress/**/*.{js,jsx}",
        "cypress.config.js",
        "src/*.js",
      ],
    },
  ],
  ecmaFeatures: {
    modules: true,
    spread: true,
    restParams: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-curly-brace-presence": [1, { extensions: [".js", ".jsx"] }],
    "no-unused-vars": 2,
    "no-undef": 2,
    "import/extensions": "off",
  },
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  rules: {
    quotes: "off",
    "no-use-before-define": "error",
  },
};
