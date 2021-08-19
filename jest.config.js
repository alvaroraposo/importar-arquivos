module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    branch: 100,
    functions: 100,
    statements: 100
  },

  maxWorkers: "50%",
};
