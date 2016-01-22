'use strict'

globalOpt = require '../config.coffee'
wacthOpt = require './watch_config.coffee'

appTask = require './app.coffee'

gulp = require 'gulp'
browserSync = require 'browser-sync'
runSequence = require('run-sequence').use gulp

module.exports =
  browserSync: ->
    browserSync globalOpt.browserSyncOption

  watch: ->
    gulp.watch wacthOpt.style, -> runSequence 'app-style', 'revision'
    gulp.watch wacthOpt.script, -> runSequence 'app-script', 'revision'
    gulp.watch wacthOpt.sprite, -> runSequence 'app-sprite', 'app-style', 'revision'
    gulp.watch wacthOpt.template, -> runSequence 'app-template', 'revision'
