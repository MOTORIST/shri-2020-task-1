const cz = require('./commitizen.js');

module.exports = {
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'header-max-length': [2, 'always', cz.subjectLimit],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [1, 'always', cz.scopes.map(type => type.name)],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', cz.types.map(type => type.value)],
  },
};