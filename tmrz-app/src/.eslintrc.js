module.exports = {
    parser: "babel-eslint",
    env: {
      browser: true,
      node: true,
      es6: true,
      jest: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended"
      ],
    plugins: [
      "react",
      "react-hooks",
      "jsx-a11y",
      "react-redux"
    ],
    rules: {
      strict: 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }