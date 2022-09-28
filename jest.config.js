const nextJest = require("next/jest")

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    // Add more setup options before each test is run
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        "^@components/(.*)$": "<rootDir>/apps/components/$1",
        "^@data/(.*)$": "<rootDir>/apps/data/$1",
        "^@locales/(.*)$": "<rootDir>/locales/$1",
        "^@layouts/(.*)$": "<rootDir>/apps/layouts/$1",
        "^@interfaces/(.*)$": "<rootDir>/apps/interfaces/$1",
        "^@hooks/(.*)$": "<rootDir>/apps/hooks/$1",
        "^@firebase/(.*)$": "<rootDir>/firebase/$1",
        "^@pages/(.*)$": "<rootDir>/pages/$1"
    },
    modulePathIgnorePatterns: ["<rootDir>/apps/data/$1"],
    testEnvironment: "jest-environment-jsdom",
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)