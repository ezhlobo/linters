/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['main', { name: 'canary', channel: 'canary', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
    // eslint-disable-next-line no-template-curly-in-string -- expected usage
    ['@semantic-release/git', { message: 'release: ${nextRelease.version}' }],
  ],
};
