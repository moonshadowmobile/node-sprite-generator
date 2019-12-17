'use strict';

module.exports = {
    jimp: require('./jimp')(require('jimp'))
};

try {
    const { createCanvas, loadImage } = require('canvas')
    module.exports.canvas = require('./canvas')(createCanvas, loadImage);
    
} catch (e) {
    /*eslint no-empty: 0*/
}
try {
    module.exports.gm = require('./gm')(require('gm'));
} catch (e) {
    /*eslint no-empty: 0*/
}
