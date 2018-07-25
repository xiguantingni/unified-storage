module.exports = {
    "env": {
        "browser": true,
        "node": true, // 支持 node语法
        "es6": true // 支持 es6 语法
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-console": 'off',
        "no-unused-vars": 'off',
        "no-case-declarations": 'off',
        "no-extra-semi": 'off'
    },
    plugins: [
        "react",
        "import",
        "jsx-a11y"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "ecmaFeatures": {
            "jsx": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        },
        "sourceType": "module" // 支持import 方式进行模块加载
    }
};
