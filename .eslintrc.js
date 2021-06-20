module.exports = {
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  globals: {
    Atomics: "readnoly",
    SharedArrayBuffer: "readnoly",
  },
  rules: {
    "max-len": ["error", { code: 150 }],
  },
};
