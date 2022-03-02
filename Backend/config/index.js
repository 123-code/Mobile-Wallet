const pkg = require('../../package.json');

module.exports = {
    appName:pkg.Name,
    mongodb:{
        url: 'mongodb://localhost:37017/price'

    }
}