module.exports = {
  "ecmaFeatures": {
    "modules": true,
    "spread" : true,
    "restParams" : true
  },
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      "error",
      2
    ],
    "no-console": 0,
    "semi": ["error", "never"],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ]
  }
}
