$ ->
  $('.js-spot').on 'click', ->
    $this = $(this)

    spot = $this.attr('data-spot')
    if !$this.hasClass "spot-#{spot}-transition"
      $this.addClass "spot-#{spot}-transition"
    else
      $this.addClass "spot-#{spot}-transition-back"

    $('.js-bg').toggleClass("bg-#{spot}-active")
  .on 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', (e) ->
    $this = $(e.target)
    spot = $this.attr('data-spot')

    if $this.hasClass "spot-#{spot}-transition-back"
      $this.removeClass "spot-#{spot}-transition spot-#{spot}-transition-back"
