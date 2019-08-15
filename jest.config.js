module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    coverageReporters: ["json", "lcov", "text", "text-summary", "clover"],
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
};
