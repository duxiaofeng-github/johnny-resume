'use strict'

globalOpt = require '../config.coffee'

module.exports =
  revision:
    src: ["#{globalOpt.resourcePath}/**/*", "!#{globalOpt.resourcePath}/image/*sprite/*.png"]
    dest: "#{globalOpt.publicPath}/"
