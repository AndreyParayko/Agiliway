module.exports = {
  env: {
    es2021: true,
  },
  extends: "airbnb",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "linebreak-style": ["error", "windows"],
  },
};
