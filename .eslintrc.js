module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  plugins: ['react'],
  rules: {
    "no-var": "error", // optional, recommended when using es6+
    "no-unused-vars": 1, // recommended
    "arrow-spacing": ["error", { before: true, after: true }], // recommended
    indent: ["error", 2],
    "comma-dangle": [
      "error",
      {
        objects: "only-multiline",
        arrays: "only-multiline",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ],

    "template-curly-spacing": ["error", "always"],
    "arrow-parens": ["error", "as-needed"],

    // standard.js
    "space-before-function-paren": [
      "error",
      {
        named: "always",
        anonymous: "always",
        asyncArrow: "always"
      }
    ],

    // react plugin - options
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "no-unused-vars": ['error', { argsIgnorePattern: '^_' }],
    "no-console": ['warn', { allow: ['warn', 'error'] }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
