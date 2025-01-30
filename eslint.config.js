import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "import/prefer-default-export": "off",
      "no-tabs": [
        "error",
        {
          "allowIndentationTabs": true
        }
      ],
      "no-console": "off",
      "quotes": [
        "error",
        "single"
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "linebreak-style": 0,
      "import/extensions": 0,
      "import/no-unresolved": 0,
      "no-shadow": 0,
      "consistent-return": 0,
      "react/react-in-jsx-scope": 0,
      "no-useless-return": 0,
      "max-len": [
        "error",
        {
          "code": 500
        }
      ],
      "no-plusplus": 0,
      "no-param-reassign": 0
    },
  },
)
