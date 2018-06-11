
export default {
    // 支持值为 Object 和 Array
    'GET /login/': { code: 0, data: { userinfo: '秘密信息' }, message: '登录成功' },

    // GET POST 可省略
    '/api/users/1': { id: 1 },

    // 支持自定义函数，API 参考 express@4
    'POST /api/users/create': (req, res) => { res.end('OK'); },
};
