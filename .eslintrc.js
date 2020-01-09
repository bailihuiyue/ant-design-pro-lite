module.exports = {
    parser:  '@typescript-eslint/parser', //定义ESLint的解析器
    extends: ['airbnb', 'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'],//定义文件继承的子规范
    plugins: ["prettier",'@typescript-eslint'],//定义了该eslint文件所依赖的插件
    env:{                          //指定代码的运行环境
        browser: true,
        node: true,
    },
    settings: {             //自动发现React的版本，从而进行规范react代码
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    }, 
    parserOptions: {        //指定ESLint可以解析JSX语法
        "ecmaVersion": 2019,
        "sourceType": 'module',
        "ecmaFeatures":{
            jsx:true
        }
    },
    rules: {
        "prettier/prettier": "error",
        "no-restricted-syntax": 0,
        "react/jsx-indent": [2, "space"],
        "react/jsx-indent-props": [2, "space"],
        'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
        'react/jsx-wrap-multilines': 0,
        'react/prop-types': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-one-expression-per-line': 0,
        'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
        'import/no-extraneous-dependencies': [
          2,
          {
            optionalDependencies: true,
            devDependencies: ['**/tests/**.js', '/mock/**.js', '**/**.test.js'],
          },
        ],
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'linebreak-style': 0,
        'react/prefer-stateless-function': 0
      }                               
}