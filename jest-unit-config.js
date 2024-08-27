// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require('./jest.config')
config.testMatch = ['**/*.spec.ts']
module.exports = config
