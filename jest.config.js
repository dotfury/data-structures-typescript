const configs = {
  "verbose": true,
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "globals": {
    "NODE_ENV": "test"
  },
  "moduleFileExtensions": [
    "js",
    "ts"
  ],
  "moduleDirectories": [
    "node_modules",
    "src/classes"
  ]
};

module.exports = configs;
