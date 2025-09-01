import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    ignores: ['dist']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, react: pluginReact },
    extends: ['js/recommended'],
    settings: { react: { version: 'detect' } },
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
])
