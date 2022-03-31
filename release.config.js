

module.exports = {
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
  prepare: [
    script('preversion'),
    script('prepublishOnly'),
    script('prepack'),
    '@semantic-release/changelog',
    script('version'),
    '@semantic-release/npm',
    {
      path: '@semantic-release/git',
      assets: ['package.json', 'CHANGELOG.md', 'README.md', 'docs'],
    },
    script('postversion'),
  ],
  publish: [
    '@semantic-release/npm',
    script('postpack'),
    script('postpublish'),
  ],
}
