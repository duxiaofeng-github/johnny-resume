$ ->
  word = [
    '宅男'
    '极客'
    '程序猿'
    '攻城狮'
    '前端狗'
    'Less'
    'Gulp'
    'Angularjs'
    'Docker'
    'Sublime'
    'Git'
    'Css3'
    'Html5'
    'Jenkins'
    'Coffeescript'
    'Typescript'
    'Bootstrap'
    'Purecss'
    'Golang'
    'Python'
    'Node.js'
    'Swift'
    'Mongo'
    'HighChart'
    'Es6'
    'Mocha'
    'Chaijs'
    'Jasmine'
    'Karma'
    'Bower'
    'Capistrano'
    'Grunt'
    'Webpack'
    'Nginx'
    'Sass'
    'Zepto'
    'Supervisor'
    'Lodash'
  ]

  scaleRatio = 3
  charMin = 10 * scaleRatio
  charMax = 160 * scaleRatio
  charCount = 90
  wordUsed = [].concat word
  wordArray = []
  resizeTimer = null

  for i in [0...charCount - word.length] by 1
    index = _.random 0, word.length - 1
    wordUsed.push word[index]

  wordUsed = _.shuffle wordUsed

  for i in [1..wordUsed.length] by 1
    ratio = 1 / (i + 3) * 4
    size = charMax * ratio

    size = if size < charMin then charMin else size
    wordArray.push [wordUsed[i-1], size]

  opt =
    list: wordArray
    backgroundColor: 'transparent'
    color: 'random-light'
    fontFamily: '"Alright Sans LP", "Avenir Next", "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Source Han Sans SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi MicroHei", sans-serif'
    rotateRatio: 1
    gridSize: 30
    shuffle: true

  repaint = ->
    canvas = $('#tag-cloud')
    vmax = if $(window).width() > $(window).height() then $(window).width() else $(window).height()
    canvas.attr('width', (($(window).width() - 0.1 * vmax) * scaleRatio).toFixed(0))
    canvas.attr('height', ($(window).height() * scaleRatio).toFixed(0))
    WordCloud(canvas[0], opt)

  $(window).on 'resize', ->
    clearTimeout resizeTimer
    resizeTimer = setTimeout ->
      repaint()
    , 250

  repaint()