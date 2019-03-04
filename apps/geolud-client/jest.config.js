module.exports = {
  name: 'geolud-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/geolud-client/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
