'use strict'

globalOpt = require '../config.coffee'

module.exports =
  style: [
    "#{globalOpt.stylePath}/**/*.less"
    "!#{globalOpt.stylePath}/_sprite.less"
  ]

  script: [
      "#{globalOpt.sourcePath}/scripts/**/*.coffee"
  ]

  sprite: ["#{globalOpt.resourcePath}/image/*sprite/*.png"]

  template: ["#{globalOpt.sourcePath}/templates/*.html"]
