'use strict'

globalOpt = require '../config.coffee'
appOpt = require './app_config.coffee'
libOpt = require './lib_config.coffee'
revisionOpt = require './revision_config.coffee'

gulp = require 'gulp'
del = require 'del'

module.exports =
  clean: (callback) ->
    libMinJs = "#{libOpt.script.dest}#{libOpt.script.name}"
    libMinCss = "#{libOpt.style.dest}#{libOpt.style.name}"
    appMinJs = "#{appOpt.script.dest}#{appOpt.script.name}"    
    appMinCss = "#{appOpt.style.dest}#{appOpt.style.name}"
    appFont = ["#{appOpt.font.dest}fontawesome-webfont.*", "#{appOpt.font.dest}FontAwesome.otf"]

    spriteImage = ["#{appOpt.sprite2x.imageDest}#{globalOpt.cssSpriteOption2x.imgName}","#{appOpt.sprite1x.imageDest}#{globalOpt.cssSpriteOption1x.imgName}"]
    spriteLess = ["#{appOpt.sprite2x.styleDest}#{globalOpt.cssSpriteOption2x.cssName}","#{appOpt.sprite1x.styleDest}#{globalOpt.cssSpriteOption1x.cssName}"]

    built = ["#{revisionOpt.revision.dest}/index.html", "#{revisionOpt.revision.dest}/public/"]

    files = []
    files = files.concat libMinJs, libMinCss, appMinJs, appMinCss, appFont, spriteImage, spriteLess, built

    del files, callback
