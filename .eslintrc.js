module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "prettier",
        "react",
        "testing-library"
    ],
    "env": {
        "browser": true,
        "jest": true,
        "mocha": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier",
        "plugin:testing-library/recommended"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/default-props-match-prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-fragments": "off",
        "react/jsx-curly-newline": "off",
        "prettier/prettier": "error",
        "func-style": [
            "error",
            "expression"
        ],
        "react/jsx-wrap-multilines": "off",
        "react/jsx-one-expression-per-line": "off",
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "no-unused-vars": "warn",
        "react/jsx-no-duplicate-props": [
            "error",
            {
                "ignoreCase": false
            }
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-ignore": "off"
    },
    "globals": {
        "cy": "readonly",
        "Cypress": "readonly",
        "context": "readonly",
        "assert": "readonly"
    },
    "settings": {
        "react": {
            "version": "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};