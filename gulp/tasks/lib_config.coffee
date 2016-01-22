'use strict'

globalOpt = require '../config.coffee'

cssName = 'libs.min.css'
jsName = 'libs.min.js'

module.exports =
  style:
    name: cssName
    src: [
      "#{globalOpt.libPath}/font-awesome/css/font-awesome.min.css"
      "#{globalOpt.libPath}/normalize-css/normalize.css"
    ]
    dest: "#{globalOpt.resourcePath}/public/css/"

  script:
    name: jsName
    src: [
      "#{globalOpt.libPath}/jquery/dist/jquery.min.js"
    ]
    dest: "#{globalOpt.resourcePath}/public/js/"
