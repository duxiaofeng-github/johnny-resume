class Slider
  constructor: (sliders, config) ->
    @defaultConfig =
      timing: 2000
      auto: true
    @sliders = sliders
    @config = $.extend(@defaultConfig, config)
    @timer = null
    @current = 0

    for item, index in sliders
      if index != @current then item.hide()

Slider::prevIndex = ->
  if !$.isNumeric(@current) then return @sliders.length - 1
  if @current <= 0 then return @sliders.length - 1
  return @current - 1

Slider::nextIndex = ->
  if !$.isNumeric(@current) then return 0
  if @current >= @sliders.length - 1 then return 0
  return @current + 1

Slider::prev = ->
  @stop()
  current = @current
  currentSlider = @sliders[current]
  prev = @prevIndex()
  prevSlider = @sliders[prev]

  currentSlider.addClass 'animated bounceOut'
  currentSlider.one 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', ->
    currentSlider.hide()
    currentSlider.removeClass 'animated bounceOut'

    prevSlider.show()
    prevSlider.addClass('animated bounceIn')
    prevSlider.one 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', ->
      currentSlider.removeClass 'animated bounceIn'

  @current = prev
  @start()

Slider::next = ->
  @stop()
  current = @current
  currentSlider = @sliders[current]
  next = @nextIndex()
  nextSlider = @sliders[next]

  currentSlider.addClass 'animated bounceOut'
  currentSlider.one 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', ->
    currentSlider.hide()
    currentSlider.removeClass 'animated bounceOut'

    nextSlider.show()
    nextSlider.addClass('animated bounceIn')
    nextSlider.one 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', ->
      currentSlider.removeClass 'animated bounceIn'

  @current = next
  @start()

Slider::start = ->
  self = @
  if @config.auto
    @timer = setInterval ->
      self.next()
    , @config.timing

Slider::stop = ->
  clearInterval(@timer)

@Slider = Slider