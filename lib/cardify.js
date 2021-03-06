'use strict';

const Im = require('./im');

module.exports = function(config) {

    return new Im()
        .size(config.size)
        .background(config.background || 'transparent')
        .font(config.font)
        .pango(config.text)
        .borderColor(config.background)
        .border(100)
        .buffer('png');
};
