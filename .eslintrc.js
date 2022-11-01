module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'brace-style': [
            'error',
            'stroustrup',
            { 'allowSingleLine': true }
        ],
        'no-trailing-spaces': [
            'error',
            { 'ignoreComments': true }
        ],
        'max-len': [
            'error',
            { 'code': 100 }
        ]
    }
};
