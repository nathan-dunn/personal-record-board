module.exports = {
  extends: 'react-app',
  rules: {
    'no-console': 'off',
    'no-constant-condition': 'warn',
    'no-unreachable': 'warn',
    'no-unused-labels': 'warn',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'react/no-string-refs': 'warn',
    'react/prop-types': 'warn',
    'no-restricted-globals': 'warn',
    'no-useless-concat': 'off',
    'react/no-children-prop': 'off',
    'sort-imports': [
      'off',
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
};
