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
      "#{globalOpt.libPath}/perfect-scrollbar/css/perfect-scrollbar.min.css"
      "#{globalOpt.libPath}/bubbletree/dist/bubbletree.css"
    ]
    dest: "#{globalOpt.resourcePath}/public/css/"

  script:
    name: jsName
    src: [
      "#{globalOpt.libPath}/jquery/dist/jquery.min.js"
      "#{globalOpt.libPath}/jquery-migrate/jquery-migrate.min.js"
      "#{globalOpt.libPath}/perfect-scrollbar/js/min/perfect-scrollbar.jquery.min.js"
      "#{globalOpt.libPath}/raphael/raphael-min.js"
      "#{globalOpt.libPath}/tween.js/src/Tween.js"
      "#{globalOpt.libPath}/bubbletree/dist/bubbletree.js"
      "#{globalOpt.libPath}/wordcloud/src/wordcloud2.js"
      "#{globalOpt.libPath}/lodash/dist/lodash.min.js"
    ]
    dest: "#{globalOpt.resourcePath}/public/js/"
