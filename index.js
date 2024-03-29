// Use these to configure automatic import sorting & grouping
const exportSortRules = [
    // Node.js builtins. You could also generate this regex if you use a `.js` config.
    // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
    [
        '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
    ],
    // Packages. `vue` related packages come first.
    // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
    ['^vue', '@vue', '^vuex', '^@?\\w'],
    // Internal packages.
    ['@/?\\w'],
    ['@src/config'],
    ['@/config'],
    ['@config'],
    ['config'],
    ['@src/components'],
    ['@/components'],
    ['@components'],
    ['components'],
    ['@src/composables'],
    ['@/composables'],
    ['@composables'],
    ['composables'],
    ['@src/features'],
    ['@/features'],
    ['@features'],
    ['features'],
    ['@src/libs'],
    ['@/libs'],
    ['@libs'],
    ['libs'],
    ['@src/analytics'],
    ['@/analytics'],
    ['@analytics'],
    ['analytics'],
    ['@src/feature-flags'],
    ['@/feature-flags'],
    ['@feature-flags'],
    ['feature-flags'],
    ['@src/featureFlags'],
    ['@/featureFlags'],
    ['@featureFlags'],
    ['featureFlags'],
    ['@src/mixins'],
    ['@/mixins'],
    ['@mixins'],
    ['mixins'],
    ['@src/store'],
    ['@/store'],
    ['@store'],
    ['store'],
    ['@src/models'],
    ['@/models'],
    ['@models'],
    ['models'],
    ['@src/services'],
    ['@/services'],
    ['@services'],
    ['services'],
    ['@src/styles'],
    ['@/styles'],
    ['@styles'],
    ['styles'],
    ['@src/router'],
    ['@/router'],
    ['@router'],
    ['router'],
    ['@src/utils'],
    ['@/utils'],
    ['@utils'],
    ['utils'],
    ['@src/assets'],
    ['@/assets'],
    ['@assets'],
    ['assets'],
    ['@src/types'],
    ['@/types'],
    ['@types'],
    ['types'],
    // Side effect imports.
    ['^\\u0000'],
    // Absolute imports and other imports such as Vue-style `@/foo`.
    // Anything not matched in another group.
    ['^'],
    // Relative imports.
    // Anything that starts with a dot.
    ['^\\.'],
    // Parent imports. Put `..` last.
    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
    // Other relative imports. Put same-folder imports and `.` last.
    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
    // Style imports.
    ['^.+\\.s?css$'],
    // For additional custom namespaced packages, add more groups here if needed
    [
        /* e.g.

            '^@my-project/components\\w',
            '^@my-project/utils\\w',

            etc.
        */
    ],
]

module.exports = {
    env: {
        browser: true,
        es2021: true,
        // Fixes no-undef warnings generated by compiler macros such as defineProps and defineEmits
        'vue/setup-compiler-macros': true,
    },
    plugins: [
        'jest',
        'jest-formatting',
        'compat',
        'sonarjs',
        'vue',
        'simple-import-sort',
        'promise',
        'prettier',
        'file-progress',
    ],
    extends: [
        'plugin:sonarjs/recommended',
        'plugin:compat/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-formatting/recommended',
        'airbnb-base',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:promise/recommended',
        // 'plugin:vue/recommended', <-- Use this if you are using Vue.js 2.x
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/public/**'],
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.js', '.vue'],
            },
            node: {
                extensions: ['.js', '.vue'],
            },
        },
        'import/extensions': ['.js', '.jsx', '.vue'],
        targets: [
            // https://github.com/browserslist/browserslist#queries
            'last 2 versions',
            'not dead',
            'not ie >= 0',
            'not op_mini all',
            'not op_mob >= 0',
            'maintained node versions',
        ],
    },
    globals: {
        'jest/globals': true,
    },
    rules: {
        'file-progress/activate': 1,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: 'off',
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'never'],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always',
            },
        ],
        'vue/max-attributes-per-line': 'off',
        'vue/first-attribute-linebreak': [
            'error',
            {
                singleline: 'ignore',
                multiline: 'below',
            },
        ],
        'vue/attribute-hyphenation': 'off',
        'vue/valid-v-slot': 'off',
        curly: ['error', 'all'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                peerDependencies: true,
            },
        ],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/extensions': [
            'error',
            'never',
            {
                ignorePackages: true,
                pattern: {
                    svg: 'always',
                    json: 'always',
                    css: 'always',
                    scss: 'always',
                    mdx: 'always',
                    vue: 'always',
                },
            },
        ],
        'import/order': 'off',
        'sort-imports': 'off',
        'no-empty-function': [
            'error',
            {
                allow: ['constructors', 'arrowFunctions', 'methods'],
            },
        ],
        'no-const-assign': 'warn',
        'no-this-before-super': 'warn',
        'no-undef': 'error',
        'no-unreachable': 'warn',
        'no-underscore-dangle': [
            'error',
            {
                allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', '_allPostsMeta'],
            },
        ],
        'no-unused-vars': [
            'error',
            {
                vars: 'local',
                args: 'none',
                ignoreRestSiblings: true,
                varsIgnorePattern: '^_',
            },
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
            },
        ],
        'constructor-super': 'warn',
        'valid-typeof': 'warn',
        'comma-spacing': 'warn',
        'computed-property-spacing': 'warn',
        'class-methods-use-this': 'off',
        'max-len': [
            'error',
            {
                code: 120,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignoreComments: true,
            },
        ],
        'quote-props': [1, 'as-needed'],
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        'no-return-assign': ['error', 'except-parens'],
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@/features/*/*', '@features/*/*', '@src/features/*/*', 'features/*/*'],
            },
        ],
        'no-trailing-spaces': [
            'warn',
            {
                skipBlankLines: true,
            },
        ],
        'no-use-before-define': ['off'],
        'no-shadow': [
            'error',
            {
                allow: ['props'],
            },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: [
                    'multiline-const',
                    'multiline-let',
                    'multiline-var',
                    'multiline-expression',
                    'multiline-block-like',
                ],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var', 'expression', 'multiline-block-like'],
                next: ['export'],
            },
            {
                blankLine: 'always',
                prev: 'directive',
                next: '*',
            },
            {
                blankLine: 'any',
                prev: 'directive',
                next: 'directive',
            },
            {
                blankLine: 'always',
                prev: 'block-like',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: 'expression',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: ['case', 'default'],
                next: '*',
            },
        ],
        'prefer-destructuring': [
            'error',
            {
                object: true,
                array: false,
            },
        ],
        'prefer-const': ['error'],
        'prefer-rest-params': ['error'],
        'prefer-spread': ['off'],
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
                endOfLine: 'lf',
            },
        ],
        'func-names': [
            'error',
            'as-needed',
            {
                generators: 'as-needed',
            },
        ],
        'import/prefer-default-export': 'off',
        'import/no-commonjs': [
            2,
            {
                allowRequire: true,
                allowPrimitiveModules: true,
            },
        ],
        'spaced-comment': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: exportSortRules,
            },
        ],
        // Vue specific
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/component-tags-order': [
            'error',
            {
                order: ['docs', 'template', 'script', 'style'],
            },
        ],
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'CONDITIONALS', // v-if, v-else-if, v-else, v-show, v-cloak
                    'GLOBAL', // id
                    'LIST_RENDERING', // v-for
                    'UNIQUE', // ref, key, slot
                    'TWO_WAY_BINDING', // v-model
                    'DEFINITION', // is
                    'EVENTS', // v-on
                    'RENDER_MODIFIERS', // v-pre, v-once
                    'OTHER_ATTR', // all unspecified bound & unbound attributes
                    'CONTENT', // v-html, v-text
                ],
                alphabetical: false,
            },
        ],
        'vue/no-deprecated-destroyed-lifecycle': 'off',
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'key',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    'extends',
                    ['provide', 'inject'],
                    'ROUTER_GUARDS',
                    'layout',
                    'middleware',
                    'validate',
                    'scrollToTop',
                    'transition',
                    'loading',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'emits',
                    'setup',
                    'asyncData',
                    'data',
                    'mixins',
                    'LIFECYCLE_HOOKS',
                    ['components', 'directives', 'filters'],
                    'fetch',
                    'head',
                    'computed',
                    'methods',
                    'watch',
                    'watchQuery',
                    ['template', 'render'],
                    'renderError',
                ],
            },
        ],
        'promise/catch-or-return': [
            'error',
            {
                allowThen: true,
                terminationMethod: ['catch', 'finally'],
            },
        ],
        'promise/always-return': 'off',
        'promise/no-nesting': 'off',
        'promise/no-callback-in-promise': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'vue/new-line-between-multi-line-property': [
            'error',
            {
                minLineOfMultilineProperty: 2,
            },
        ],
    },
}
