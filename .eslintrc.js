module.exports = {
  extends: [
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/standard",
    "prettier"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  parser: "babel-eslint"
};
