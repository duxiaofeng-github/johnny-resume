(function() {


}).call(this);

(function() {
  $(function() {
    return $('.js-spot').on('click', function() {
      var $this, spot;
      $this = $(this);
      spot = $this.attr('data-spot');
      $this.toggleClass("spot-" + spot + "-transition");
      return $('.js-bg').toggleClass("bg-" + spot + "-active");
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwid2VsY29tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLm1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcblxuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAkKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkKCcuanMtc3BvdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICR0aGlzLCBzcG90O1xuICAgICAgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgc3BvdCA9ICR0aGlzLmF0dHIoJ2RhdGEtc3BvdCcpO1xuICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoXCJzcG90LVwiICsgc3BvdCArIFwiLXRyYW5zaXRpb25cIik7XG4gICAgICByZXR1cm4gJCgnLmpzLWJnJykudG9nZ2xlQ2xhc3MoXCJiZy1cIiArIHNwb3QgKyBcIi1hY3RpdmVcIik7XG4gICAgfSk7XG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
