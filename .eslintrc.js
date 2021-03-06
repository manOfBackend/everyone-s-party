module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.json"],
  },
  plugins: ["prettier", "react", "@typescript-eslint"],
  ignorePatterns: ['*.js'],
  rules: {
    "linebreak-style": 0,
    "consistent-return": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/require-default-props": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
};
