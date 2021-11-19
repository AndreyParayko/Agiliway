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
};
