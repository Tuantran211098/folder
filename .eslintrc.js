module.exports  = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    extends:[ 
        "eslint:recommended",
        "plugin:react/recommended"
      , 'airbnb'],
    rules:{
        'react/prop-types':1,
        'react/jsx-max-props-per-line':1 ,
        'linebreak-style':0,
        'import/no-extraneous-dependencies':0,
        'react/require-default-props':0,
        'react/jsx-indent-props':0,
        'react/jsx-indent':0,
        'key-spacing':0,
        'react/forbid-prop-types':0,
        'react/forbid-prop-types':0,
        'react/jsx-filename-extension':0,
        'no-tabs':0,
        'comma-dangle':0,
        'indent':0,
        'react/prop-types':0,
        ' react/prefer-stateless-function':0,
        'import/order':0,
        'import/extensions':0,
        'no-shadow':0,
        'arrow-parens':0,
        'class-methods-use-this':0,
        'react/no-array-index-key':0,
        'react/prefer-stateless-function':0,
        'react/jsx-uses-vars':2,
        'prettier/prettier':['error']
    },env:{
        "es6":true,
        "browser":true,
        "node":true
    },
    plugins:['prettier']
};