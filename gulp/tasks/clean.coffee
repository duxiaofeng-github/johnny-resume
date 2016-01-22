'use strict'

globalOpt = require '../config.coffee'
appOpt = require './app_config.coffee'
libOpt = require './lib_config.coffee'
revisionOpt = require './revision_config.coffee'

gulp = require 'gulp'
del = require 'del'

module.exports =
  clean: (callback) ->
    temp = "#{globalOpt.resourcePath}/"
    built = ["#{revisionOpt.revision.dest}/index.html", "#{revisionOpt.revision.dest}/public/"]

    files = []
    files = files.concat temp, built

    del files, callback
