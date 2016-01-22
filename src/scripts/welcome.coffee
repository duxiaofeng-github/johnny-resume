$ ->
  $('.js-spot').on 'click', ->
    $this = $(this)

    spot = $this.attr('data-spot')
    $this.toggleClass("spot-#{spot}-transition")
    $('.js-bg').toggleClass("bg-#{spot}-active")