$ ->
  sliders = []

  opt =
    auto: false

  $('.code .slider').each -> sliders.push $(this)

  slider = new Slider(sliders, opt)

  $('.js-spot[data-spot="2"]').on 'click', ->
    if !$(this).hasClass("spot-#{$(this).attr('data-spot')}-transition")
      slider.start()
    else
      slider.stop()