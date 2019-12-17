'use strict';

module.exports = {
    jimp: require('./jimp')(require('jimp'))
};

try {
    const { createCanvas, loadImage, Image } = require('canvas')
    module.exports.canvas = require('./canvas')(createCanvas, loadImage, Image);
    
} catch (e) {
    /*eslint no-empty: 0*/
}
try {
    module.exports.gm = require('./gm')(require('gm'));
} catch (e) {
    /*eslint no-empty: 0*/
}
