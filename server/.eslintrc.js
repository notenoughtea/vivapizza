module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "some-other-config-you-use",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
