module.exports = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testMatch: ["<rootDir>/tests/*/*.(test|spec).ts"],
};