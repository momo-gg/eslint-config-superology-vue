module.exports = {
    extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'no-trailing-spaces': [
            'warn',
            {
                skipBlankLines: true,
            },
        ],
        'prettier/prettier': [
            'warn',
            {
                printWidth: 120,
                singleQuote: true,
                tabWidth: 4,
                semi: false,
                trailingComma: 'es5',
                bracketSpacing: true,
                arrowParens: 'avoid',
            },
        ],
    },
}
