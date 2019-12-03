module.exports = {
  types: [
    { value: 'feat', name: 'feat: Adding new functionality' },
    { value: 'fix', name: 'fix: Fix bugs' },
    { value: 'build', name: 'build: Build project or change dependencies' },
    { value: 'ci', name: 'ci: Settings CI' },
    { value: 'perf', name: 'perf: Performance improvement' },
    {
      value: 'refactor',
      name: 'refactor: Editing code without fixing bugs or adding new features',
    },
    { value: 'revert', name: 'revert: Rollback to previous commits' },
    {
      value: 'style',
      name: 'style: Edits by code style (tabs, indents, periods, commas ...)',
    },
    { value: 'test', name: 'test: Build test' },
  ],
  scopes: [],
  messages: {
    type: 'What changes are you making?',
    scope: 'Select the scope that you changed (optional):',
    customScope: 'Insert your scope:',
    subject: 'Write a short description:',
    body: 'Write a detailed description (optional). Use "|" for a new line:',
    breaking: 'List BREAKING CHANGES (optional):',
    footer: 'Place for meta data (tasks, links):',
    confirmCommit: 'You are satisfied with the resulting commit?',
  },
  allowCustomScopes: true,
  allowBreakingChanges: false,
  footerPrefix: '#42343:',
  subjectLimit: 72,
};