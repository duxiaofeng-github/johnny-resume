(function() {
  $(function() {
    return $('.content-scrollable').perfectScrollbar();
  });

}).call(this);

(function() {
  $(function() {});

}).call(this);

(function() {
  $(function() {
    return $('.js-spot').on('click', function() {
      var $this, spot;
      $this = $(this);
      spot = $this.attr('data-spot');
      if (!$this.hasClass("spot-" + spot + "-transition")) {
        $this.addClass("spot-" + spot + "-transition");
      } else {
        $this.addClass("spot-" + spot + "-transition-back");
      }
      return $('.js-bg').toggleClass("bg-" + spot + "-active");
    }).on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) {
      var $this, spot;
      $this = $(e.target);
      spot = $this.attr('data-spot');
      if ($this.hasClass("spot-" + spot + "-transition-back")) {
        return $this.removeClass("spot-" + spot + "-transition spot-" + spot + "-transition-back");
      }
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiaW50cm8uanMiLCJ3ZWxjb21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAkKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkKCcuY29udGVudC1zY3JvbGxhYmxlJykucGVyZmVjdFNjcm9sbGJhcigpO1xuICB9KTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJChmdW5jdGlvbigpIHt9KTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJCgnLmpzLXNwb3QnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdGhpcywgc3BvdDtcbiAgICAgICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIHNwb3QgPSAkdGhpcy5hdHRyKCdkYXRhLXNwb3QnKTtcbiAgICAgIGlmICghJHRoaXMuaGFzQ2xhc3MoXCJzcG90LVwiICsgc3BvdCArIFwiLXRyYW5zaXRpb25cIikpIHtcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoXCJzcG90LVwiICsgc3BvdCArIFwiLXRyYW5zaXRpb25cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkdGhpcy5hZGRDbGFzcyhcInNwb3QtXCIgKyBzcG90ICsgXCItdHJhbnNpdGlvbi1iYWNrXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICQoJy5qcy1iZycpLnRvZ2dsZUNsYXNzKFwiYmctXCIgKyBzcG90ICsgXCItYWN0aXZlXCIpO1xuICAgIH0pLm9uKCdhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgJHRoaXMsIHNwb3Q7XG4gICAgICAkdGhpcyA9ICQoZS50YXJnZXQpO1xuICAgICAgc3BvdCA9ICR0aGlzLmF0dHIoJ2RhdGEtc3BvdCcpO1xuICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKFwic3BvdC1cIiArIHNwb3QgKyBcIi10cmFuc2l0aW9uLWJhY2tcIikpIHtcbiAgICAgICAgcmV0dXJuICR0aGlzLnJlbW92ZUNsYXNzKFwic3BvdC1cIiArIHNwb3QgKyBcIi10cmFuc2l0aW9uIHNwb3QtXCIgKyBzcG90ICsgXCItdHJhbnNpdGlvbi1iYWNrXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxufSkuY2FsbCh0aGlzKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
