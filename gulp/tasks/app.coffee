'use strict'

globalOpt = require '../config.coffee'
opt = require './app_config.coffee'

# common
gulp = require 'gulp'
gutil = require 'gulp-util'
concat = require 'gulp-concat'
minifier = require 'gulp-minifier'
sourcemaps = require 'gulp-sourcemaps'
rename = require 'gulp-rename'
plumber = require 'gulp-plumber'
imagemin = require 'gulp-imagemin'

_ = require 'lodash'

# for less
less = require 'gulp-less'
prefix = require 'gulp-autoprefixer'

# for coffee
coffee = require 'gulp-coffee'

# for sprite
spritesmith = require 'gulp.spritesmith'

# for templates
htmlrender = require 'gulp-htmlrender'

module.exports =
  style: ->
    name = opt.style.name
    src = opt.style.src
    dest = opt.style.dest

    minifierOption = globalOpt.minifierOption
    errHandler = globalOpt.errHandler
    isProd = globalOpt.isProd
    isStaging = globalOpt.isStaging

    gulp.src src
      .pipe plumber errorHandler: errHandler
      .pipe less()
      .pipe prefix("last 20 version", "> 1%", "ie 8", "ie 7")
      .pipe concat 'app.css'
      .pipe if isProd || isStaging then minifier minifierOption else gutil.noop()
      .pipe rename name
      .pipe gulp.dest dest

  image: ->
    src = opt.image.src
    dest = opt.image.dest

    imageminOpt = globalOpt.imageminOption
    errHandler = globalOpt.errHandler

    gulp.src src
      .pipe plumber errorHandler: errHandler
      .pipe imagemin imageminOpt
      .pipe gulp.dest dest

  font: ->
    src = opt.font.src
    dest = opt.font.dest

    gulp.src src
      .pipe gulp.dest dest

  script: ->
    name = opt.script.name
    src = opt.script.src
    dest = opt.script.dest

    minifierOption = globalOpt.minifierOption
    coffeeOption = globalOpt.coffeeOption
    errHandler = globalOpt.errHandler
    isProd = globalOpt.isProd
    isStaging = globalOpt.isStaging

    gulp.src src
      .pipe plumber errorHandler: errHandler
      .pipe coffee coffeeOption
      .pipe sourcemaps.init()
      .pipe concat 'app.js'
      .pipe if isProd || isStaging then minifier minifierOption else gutil.noop()
      .pipe rename name
      .pipe sourcemaps.write()
      .pipe gulp.dest dest

  sprite2x: ->
    src = opt.sprite2x.src
    imageDest = opt.sprite2x.imageDest
    styleDest = opt.sprite2x.styleDest

    cssSpriteOption = globalOpt.cssSpriteOption2x

    spriteStream = gulp.src(src).pipe spritesmith cssSpriteOption
    spriteStream.img.pipe gulp.dest imageDest
    spriteStream.css.pipe gulp.dest styleDest

  # 针对没有2x 大小的图，单独生成1x 的 sprite
  sprite1x: ->
    src = opt.sprite1x.src
    imageDest = opt.sprite1x.imageDest
    styleDest = opt.sprite1x.styleDest

    cssSpriteOption = globalOpt.cssSpriteOption1x
    spriteStream = gulp.src(src).pipe spritesmith cssSpriteOption
    spriteStream.img.pipe gulp.dest imageDest
    spriteStream.css.pipe gulp.dest styleDest

  templates: ->
    src = opt.templates.src
    dest = opt.templates.dest

    gulp.src src
      .pipe htmlrender.render()
      .pipe gulp.dest dest
