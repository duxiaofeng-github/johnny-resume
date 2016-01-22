'use strict'

gutil = require 'gulp-util'

proxy = require 'proxy-middleware'
url = require 'url'
pngquant = require 'imagemin-pngquant'

class options
  constructor: ->
    @sourcePath = 'src'
    @publicPath = '.'
    @libPath = 'bower_components'
    @stylePath = "#{@.sourcePath}/styles"
    @resourcePath = "#{@.sourcePath}/resources"

    @lessOption =
      paths = []

    @coffeeOption =
      bare = true

    @cssSpriteOption2x =
      imgName: 'sprite-1x.png'
      cssName: '_sprite-2x.less'
      imgPath: '../image/sprite-1x.png'
      engine: 'pngsmith'
      # cssFormat: 'css'
      # cssTemplate: "#{@.stylePath}/_sprite.template"
      padding: 1

      retinaImgName: 'sprite-2x.png'
      retinaImgPath : '../image/sprite-2x.png'
      retinaSrcFilter: ["#{@.resourcePath}/image/*_sprite_2x/2x/*.png"]
      cssFormat: 'css_retina'

    @cssSpriteOption1x =
      imgName: 'sprite.png'
      cssName: '_sprite.less'
      imgPath: '../image/sprite.png'
      engine: 'pngsmith'
      cssFormat: 'css'
      # cssTemplate: "#{@.stylePath}/_sprite.template"
      padding: 1

    @revisionOption =
      dontRenameFile: ['index.html']

    @minifierOption =
      minify: true
      collapseWhitespace: true
      conservativeCollapse: true
      minifyJS: true
      minifyCSS: true

    @imageminOption =
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      optimizationLevel: 1

    @browserSyncOption =
      open: false
      port: 9010
      server:
        baseDir: "./"

    @errHandler = (err) ->
      gutil.beep()
      gutil.log err
      this.emit 'end'

opt = new options

module.exports = opt
