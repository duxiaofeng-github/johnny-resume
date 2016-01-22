'use strict'

globalOpt = require '../config.coffee'

cssName = 'app.min.css'
jsName = 'app.min.js'

module.exports =
  style:
    name: cssName
    src: ["#{globalOpt.sourcePath}/styles/index.less"]
    dest: "#{globalOpt.resourcePath}/public/css/"

  script:
    name: jsName
    src: [
      "#{globalOpt.sourcePath}/scripts/*.coffee"
    ]
    dest: "#{globalOpt.resourcePath}/public/js/"

  sprite2x:
    src: ["#{globalOpt.resourcePath}/image/*sprite_2x/*/*.png"]
    imageDest: "#{globalOpt.resourcePath}/public/image/"
    styleDest: "#{globalOpt.stylePath}/"

  sprite1x:
    src: ["#{globalOpt.resourcePath}/image/*sprite_1x/*.png"]
    imageDest: "#{globalOpt.resourcePath}/public/image/"
    styleDest: "#{globalOpt.stylePath}/"

  font:
    src: ["#{globalOpt.libPath}/font-awesome/fonts/**"]
    dest: "#{globalOpt.resourcePath}/public/fonts/"

  templates:
    src: ["#{globalOpt.sourcePath}/templates/index.html"]
    dest: "#{globalOpt.resourcePath}/"

  image:
    src: ["#{globalOpt.sourcePath}/images/**"]
    dest: "#{globalOpt.resourcePath}/public/images/"