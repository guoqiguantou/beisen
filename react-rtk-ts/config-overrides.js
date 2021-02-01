const path = require('path');
const {
    override,
    addWebpackAlias,
} = require('customize-cra');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}


module.exports = {
    webpack: override(
        // 配置路径访问快捷键 @/xxx
        addWebpackAlias({
            '@': resolve('src'),
        }),
    ),
};