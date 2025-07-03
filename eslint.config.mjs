import next from '@next/eslint-plugin-next';
import typescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  {
    plugins: {
      '@next/next': next,
      '@typescript-eslint': typescript
    },
    rules: {
      ...next.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'warn'
    },
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  }
];