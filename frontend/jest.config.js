module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Use babel-jest to transform JS/JSX files
      "^.+\\.css$": "jest-transform-css", // Handle CSS imports
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios)/", // Ensure axios is not ignored
    ],
    setupFilesAfterEnv: [
      "@testing-library/jest-dom"
    ],
    testEnvironment: "jsdom",
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mock CSS imports
    },
  };
  