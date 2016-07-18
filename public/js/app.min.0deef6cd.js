(function() {
  $(function() {
    var data;
    data = {
      label: '我的技能',
      amount: 100,
      children: [
        {
          label: '前端',
          amount: 60,
          children: [
            {
              label: '构建',
              amount: 10
            }, {
              label: '测试',
              amount: 10
            }, {
              label: '优化',
              amount: 10
            }, {
              label: '安全',
              amount: 10
            }, {
              label: '部署',
              amount: 10
            }
          ]
        }, {
          label: '后端',
          amount: 30
        }, {
          label: '设计',
          amount: 10
        }
      ]
    };
    return new BubbleTree({
      data: data,
      container: '#skills',
      strokeOpt: {
        stroke: '#fff',
        'stroke-dasharray': '0',
        opacity: 0.3
      }
    });
  });

}).call(this);

(function() {
  $(function() {
    var opt, slider, sliders;
    sliders = [];
    opt = {
      auto: false
    };
    $('.code .slider').each(function() {
      return sliders.push($(this));
    });
    slider = new Slider(sliders, opt);
    return $('.js-spot[data-spot="2"]').on('click', function() {
      if (!$(this).hasClass("spot-" + ($(this).attr('data-spot')) + "-transition")) {
        return slider.start();
      } else {
        return slider.stop();
      }
    });
  });

}).call(this);

(function() {
  $(function() {
    return $('.content-scrollable').perfectScrollbar();
  });

}).call(this);

(function() {
  $(function() {});

}).call(this);

(function() {
  var Slider;

  Slider = (function() {
    function Slider(sliders, config) {
      var index, item, _i, _len;
      this.defaultConfig = {
        timing: 2000,
        auto: true
      };
      this.sliders = sliders;
      this.config = $.extend(this.defaultConfig, config);
      this.timer = null;
      this.current = 0;
      for (index = _i = 0, _len = sliders.length; _i < _len; index = ++_i) {
        item = sliders[index];
        if (index !== this.current) {
          item.hide();
        }
      }
    }

    return Slider;

  })();

  Slider.prototype.prevIndex = function() {
    if (!$.isNumeric(this.current)) {
      return this.sliders.length - 1;
    }
    if (this.current <= 0) {
      return this.sliders.length - 1;
    }
    return this.current - 1;
  };

  Slider.prototype.nextIndex = function() {
    if (!$.isNumeric(this.current)) {
      return 0;
    }
    if (this.current >= this.sliders.length - 1) {
      return 0;
    }
    return this.current + 1;
  };

  Slider.prototype.prev = function() {
    var current, currentSlider, prev, prevSlider;
    this.stop();
    current = this.current;
    currentSlider = this.sliders[current];
    prev = this.prevIndex();
    prevSlider = this.sliders[prev];
    currentSlider.addClass('animated bounceOut');
    currentSlider.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      currentSlider.hide();
      currentSlider.removeClass('animated bounceOut');
      prevSlider.show();
      prevSlider.addClass('animated bounceIn');
      return prevSlider.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        return currentSlider.removeClass('animated bounceIn');
      });
    });
    this.current = prev;
    return this.start();
  };

  Slider.prototype.next = function() {
    var current, currentSlider, next, nextSlider;
    this.stop();
    current = this.current;
    currentSlider = this.sliders[current];
    next = this.nextIndex();
    nextSlider = this.sliders[next];
    currentSlider.addClass('animated bounceOut');
    currentSlider.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      currentSlider.hide();
      currentSlider.removeClass('animated bounceOut');
      nextSlider.show();
      nextSlider.addClass('animated bounceIn');
      return nextSlider.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        return currentSlider.removeClass('animated bounceIn');
      });
    });
    this.current = next;
    return this.start();
  };

  Slider.prototype.start = function() {
    var self;
    self = this;
    if (this.config.auto) {
      return this.timer = setInterval(function() {
        return self.next();
      }, this.config.timing);
    }
  };

  Slider.prototype.stop = function() {
    return clearInterval(this.timer);
  };

  this.Slider = Slider;

}).call(this);

(function() {
  $(function() {
    var charCount, charMax, charMin, i, index, opt, ratio, repaint, resizeTimer, scaleRatio, size, word, wordArray, wordUsed, _i, _j, _ref, _ref1;
    word = ['宅男', '极客', '程序猿', '攻城狮', '前端狗', 'Less', 'Gulp', 'Angularjs', 'Docker', 'Sublime', 'Git', 'Css3', 'Html5', 'Jenkins', 'Coffeescript', 'Typescript', 'Bootstrap', 'Purecss', 'Golang', 'Python', 'Node.js', 'Swift', 'Mongo', 'HighChart', 'Es6', 'Mocha', 'Chaijs', 'Jasmine', 'Karma', 'Bower', 'Capistrano', 'Grunt', 'Webpack', 'Nginx', 'Sass', 'Zepto', 'Supervisor', 'Lodash'];
    scaleRatio = 3;
    charMin = 40 * scaleRatio;
    charMax = 160 * scaleRatio;
    charCount = 150;
    wordUsed = [].concat(word);
    wordArray = [];
    resizeTimer = null;
    for (i = _i = 0, _ref = charCount - word.length; _i < _ref; i = _i += 1) {
      index = _.random(0, word.length - 1);
      wordUsed.push(word[index]);
    }
    wordUsed = _.shuffle(wordUsed);
    for (i = _j = 1, _ref1 = wordUsed.length; _j <= _ref1; i = _j += 1) {
      ratio = 1 / (i + 2) * 3;
      size = charMax * ratio;
      size = size < charMin ? charMin : size;
      wordArray.push([wordUsed[i - 1], size]);
    }
    opt = {
      list: wordArray,
      backgroundColor: 'transparent',
      color: 'random-light',
      fontFamily: '"Alright Sans LP", "Avenir Next", "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Source Han Sans SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi MicroHei", sans-serif',
      rotateRatio: 1,
      gridSize: 30,
      clearCanvas: true,
      shuffle: true
    };
    repaint = function() {
      var canvas, vmax;
      canvas = $('#tag-cloud');
      vmax = $(window).width() > $(window).height() ? $(window).width() : $(window).height();
      canvas.attr('width', (($(window).width() - 0.1 * vmax) * scaleRatio).toFixed(0));
      canvas.attr('height', ($(window).height() * scaleRatio).toFixed(0));
      return WordCloud(canvas[0], opt);
    };
    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      return resizeTimer = setTimeout(function() {
        return repaint();
      }, 250);
    });
    return $('.js-spot[data-spot="4"]').on('click', function() {
      if (!$(this).hasClass("spot-" + ($(this).attr('data-spot')) + "-transition")) {
        return setTimeout(function() {
          $('#tag-cloud').show();
          return repaint();
        }, 1000);
      } else {
        return $('#tag-cloud').fadeOut();
      }
    });
  });

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmpzIiwiY29kZS5qcyIsImluZGV4LmpzIiwiaW50cm8uanMiLCJzbGlkZXIuanMiLCJ0YWcuanMiLCJ3ZWxjb21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAkKGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXRhO1xuICAgIGRhdGEgPSB7XG4gICAgICBsYWJlbDogJ+aIkeeahOaKgOiDvScsXG4gICAgICBhbW91bnQ6IDEwMCxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ+WJjeerrycsXG4gICAgICAgICAgYW1vdW50OiA2MCxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogJ+aehOW7uicsXG4gICAgICAgICAgICAgIGFtb3VudDogMTBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICfmtYvor5UnLFxuICAgICAgICAgICAgICBhbW91bnQ6IDEwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGxhYmVsOiAn5LyY5YyWJyxcbiAgICAgICAgICAgICAgYW1vdW50OiAxMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBsYWJlbDogJ+WuieWFqCcsXG4gICAgICAgICAgICAgIGFtb3VudDogMTBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICfpg6jnvbInLFxuICAgICAgICAgICAgICBhbW91bnQ6IDEwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbGFiZWw6ICflkI7nq68nLFxuICAgICAgICAgIGFtb3VudDogMzBcbiAgICAgICAgfSwge1xuICAgICAgICAgIGxhYmVsOiAn6K6+6K6hJyxcbiAgICAgICAgICBhbW91bnQ6IDEwXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIHJldHVybiBuZXcgQnViYmxlVHJlZSh7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgY29udGFpbmVyOiAnI3NraWxscycsXG4gICAgICBzdHJva2VPcHQ6IHtcbiAgICAgICAgc3Ryb2tlOiAnI2ZmZicsXG4gICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogJzAnLFxuICAgICAgICBvcGFjaXR5OiAwLjNcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICQoZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9wdCwgc2xpZGVyLCBzbGlkZXJzO1xuICAgIHNsaWRlcnMgPSBbXTtcbiAgICBvcHQgPSB7XG4gICAgICBhdXRvOiBmYWxzZVxuICAgIH07XG4gICAgJCgnLmNvZGUgLnNsaWRlcicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2xpZGVycy5wdXNoKCQodGhpcykpO1xuICAgIH0pO1xuICAgIHNsaWRlciA9IG5ldyBTbGlkZXIoc2xpZGVycywgb3B0KTtcbiAgICByZXR1cm4gJCgnLmpzLXNwb3RbZGF0YS1zcG90PVwiMlwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKFwic3BvdC1cIiArICgkKHRoaXMpLmF0dHIoJ2RhdGEtc3BvdCcpKSArIFwiLXRyYW5zaXRpb25cIikpIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlci5zdGFydCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlci5zdG9wKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAkKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkKCcuY29udGVudC1zY3JvbGxhYmxlJykucGVyZmVjdFNjcm9sbGJhcigpO1xuICB9KTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJChmdW5jdGlvbigpIHt9KTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIFNsaWRlcjtcblxuICBTbGlkZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gU2xpZGVyKHNsaWRlcnMsIGNvbmZpZykge1xuICAgICAgdmFyIGluZGV4LCBpdGVtLCBfaSwgX2xlbjtcbiAgICAgIHRoaXMuZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgICAgdGltaW5nOiAyMDAwLFxuICAgICAgICBhdXRvOiB0cnVlXG4gICAgICB9O1xuICAgICAgdGhpcy5zbGlkZXJzID0gc2xpZGVycztcbiAgICAgIHRoaXMuY29uZmlnID0gJC5leHRlbmQodGhpcy5kZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgICAgZm9yIChpbmRleCA9IF9pID0gMCwgX2xlbiA9IHNsaWRlcnMubGVuZ3RoOyBfaSA8IF9sZW47IGluZGV4ID0gKytfaSkge1xuICAgICAgICBpdGVtID0gc2xpZGVyc1tpbmRleF07XG4gICAgICAgIGlmIChpbmRleCAhPT0gdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgaXRlbS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gU2xpZGVyO1xuXG4gIH0pKCk7XG5cbiAgU2xpZGVyLnByb3RvdHlwZS5wcmV2SW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoISQuaXNOdW1lcmljKHRoaXMuY3VycmVudCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNsaWRlcnMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGlkZXJzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnQgLSAxO1xuICB9O1xuXG4gIFNsaWRlci5wcm90b3R5cGUubmV4dEluZGV4ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEkLmlzTnVtZXJpYyh0aGlzLmN1cnJlbnQpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudCA+PSB0aGlzLnNsaWRlcnMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnQgKyAxO1xuICB9O1xuXG4gIFNsaWRlci5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJyZW50LCBjdXJyZW50U2xpZGVyLCBwcmV2LCBwcmV2U2xpZGVyO1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgY3VycmVudFNsaWRlciA9IHRoaXMuc2xpZGVyc1tjdXJyZW50XTtcbiAgICBwcmV2ID0gdGhpcy5wcmV2SW5kZXgoKTtcbiAgICBwcmV2U2xpZGVyID0gdGhpcy5zbGlkZXJzW3ByZXZdO1xuICAgIGN1cnJlbnRTbGlkZXIuYWRkQ2xhc3MoJ2FuaW1hdGVkIGJvdW5jZU91dCcpO1xuICAgIGN1cnJlbnRTbGlkZXIub25lKCd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBjdXJyZW50U2xpZGVyLmhpZGUoKTtcbiAgICAgIGN1cnJlbnRTbGlkZXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGJvdW5jZU91dCcpO1xuICAgICAgcHJldlNsaWRlci5zaG93KCk7XG4gICAgICBwcmV2U2xpZGVyLmFkZENsYXNzKCdhbmltYXRlZCBib3VuY2VJbicpO1xuICAgICAgcmV0dXJuIHByZXZTbGlkZXIub25lKCd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50U2xpZGVyLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBib3VuY2VJbicpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5jdXJyZW50ID0gcHJldjtcbiAgICByZXR1cm4gdGhpcy5zdGFydCgpO1xuICB9O1xuXG4gIFNsaWRlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJyZW50LCBjdXJyZW50U2xpZGVyLCBuZXh0LCBuZXh0U2xpZGVyO1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgY3VycmVudFNsaWRlciA9IHRoaXMuc2xpZGVyc1tjdXJyZW50XTtcbiAgICBuZXh0ID0gdGhpcy5uZXh0SW5kZXgoKTtcbiAgICBuZXh0U2xpZGVyID0gdGhpcy5zbGlkZXJzW25leHRdO1xuICAgIGN1cnJlbnRTbGlkZXIuYWRkQ2xhc3MoJ2FuaW1hdGVkIGJvdW5jZU91dCcpO1xuICAgIGN1cnJlbnRTbGlkZXIub25lKCd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBjdXJyZW50U2xpZGVyLmhpZGUoKTtcbiAgICAgIGN1cnJlbnRTbGlkZXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGJvdW5jZU91dCcpO1xuICAgICAgbmV4dFNsaWRlci5zaG93KCk7XG4gICAgICBuZXh0U2xpZGVyLmFkZENsYXNzKCdhbmltYXRlZCBib3VuY2VJbicpO1xuICAgICAgcmV0dXJuIG5leHRTbGlkZXIub25lKCd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50U2xpZGVyLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBib3VuY2VJbicpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5jdXJyZW50ID0gbmV4dDtcbiAgICByZXR1cm4gdGhpcy5zdGFydCgpO1xuICB9O1xuXG4gIFNsaWRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZjtcbiAgICBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5jb25maWcuYXV0bykge1xuICAgICAgcmV0dXJuIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYubmV4dCgpO1xuICAgICAgfSwgdGhpcy5jb25maWcudGltaW5nKTtcbiAgICB9XG4gIH07XG5cbiAgU2xpZGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gIH07XG5cbiAgdGhpcy5TbGlkZXIgPSBTbGlkZXI7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICQoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNoYXJDb3VudCwgY2hhck1heCwgY2hhck1pbiwgaSwgaW5kZXgsIG9wdCwgcmF0aW8sIHJlcGFpbnQsIHJlc2l6ZVRpbWVyLCBzY2FsZVJhdGlvLCBzaXplLCB3b3JkLCB3b3JkQXJyYXksIHdvcmRVc2VkLCBfaSwgX2osIF9yZWYsIF9yZWYxO1xuICAgIHdvcmQgPSBbJ+WuheeUtycsICfmnoHlrqInLCAn56iL5bqP54y/JywgJ+aUu+WfjueLricsICfliY3nq6/ni5cnLCAnTGVzcycsICdHdWxwJywgJ0FuZ3VsYXJqcycsICdEb2NrZXInLCAnU3VibGltZScsICdHaXQnLCAnQ3NzMycsICdIdG1sNScsICdKZW5raW5zJywgJ0NvZmZlZXNjcmlwdCcsICdUeXBlc2NyaXB0JywgJ0Jvb3RzdHJhcCcsICdQdXJlY3NzJywgJ0dvbGFuZycsICdQeXRob24nLCAnTm9kZS5qcycsICdTd2lmdCcsICdNb25nbycsICdIaWdoQ2hhcnQnLCAnRXM2JywgJ01vY2hhJywgJ0NoYWlqcycsICdKYXNtaW5lJywgJ0thcm1hJywgJ0Jvd2VyJywgJ0NhcGlzdHJhbm8nLCAnR3J1bnQnLCAnV2VicGFjaycsICdOZ2lueCcsICdTYXNzJywgJ1plcHRvJywgJ1N1cGVydmlzb3InLCAnTG9kYXNoJ107XG4gICAgc2NhbGVSYXRpbyA9IDM7XG4gICAgY2hhck1pbiA9IDQwICogc2NhbGVSYXRpbztcbiAgICBjaGFyTWF4ID0gMTYwICogc2NhbGVSYXRpbztcbiAgICBjaGFyQ291bnQgPSAxNTA7XG4gICAgd29yZFVzZWQgPSBbXS5jb25jYXQod29yZCk7XG4gICAgd29yZEFycmF5ID0gW107XG4gICAgcmVzaXplVGltZXIgPSBudWxsO1xuICAgIGZvciAoaSA9IF9pID0gMCwgX3JlZiA9IGNoYXJDb3VudCAtIHdvcmQubGVuZ3RoOyBfaSA8IF9yZWY7IGkgPSBfaSArPSAxKSB7XG4gICAgICBpbmRleCA9IF8ucmFuZG9tKDAsIHdvcmQubGVuZ3RoIC0gMSk7XG4gICAgICB3b3JkVXNlZC5wdXNoKHdvcmRbaW5kZXhdKTtcbiAgICB9XG4gICAgd29yZFVzZWQgPSBfLnNodWZmbGUod29yZFVzZWQpO1xuICAgIGZvciAoaSA9IF9qID0gMSwgX3JlZjEgPSB3b3JkVXNlZC5sZW5ndGg7IF9qIDw9IF9yZWYxOyBpID0gX2ogKz0gMSkge1xuICAgICAgcmF0aW8gPSAxIC8gKGkgKyAyKSAqIDM7XG4gICAgICBzaXplID0gY2hhck1heCAqIHJhdGlvO1xuICAgICAgc2l6ZSA9IHNpemUgPCBjaGFyTWluID8gY2hhck1pbiA6IHNpemU7XG4gICAgICB3b3JkQXJyYXkucHVzaChbd29yZFVzZWRbaSAtIDFdLCBzaXplXSk7XG4gICAgfVxuICAgIG9wdCA9IHtcbiAgICAgIGxpc3Q6IHdvcmRBcnJheSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiAncmFuZG9tLWxpZ2h0JyxcbiAgICAgIGZvbnRGYW1pbHk6ICdcIkFscmlnaHQgU2FucyBMUFwiLCBcIkF2ZW5pciBOZXh0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJQaW5nRmFuZyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5RdWFuWWkgTWljcm9IZWlcIiwgc2Fucy1zZXJpZicsXG4gICAgICByb3RhdGVSYXRpbzogMSxcbiAgICAgIGdyaWRTaXplOiAzMCxcbiAgICAgIGNsZWFyQ2FudmFzOiB0cnVlLFxuICAgICAgc2h1ZmZsZTogdHJ1ZVxuICAgIH07XG4gICAgcmVwYWludCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNhbnZhcywgdm1heDtcbiAgICAgIGNhbnZhcyA9ICQoJyN0YWctY2xvdWQnKTtcbiAgICAgIHZtYXggPSAkKHdpbmRvdykud2lkdGgoKSA+ICQod2luZG93KS5oZWlnaHQoKSA/ICQod2luZG93KS53aWR0aCgpIDogJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgY2FudmFzLmF0dHIoJ3dpZHRoJywgKCgkKHdpbmRvdykud2lkdGgoKSAtIDAuMSAqIHZtYXgpICogc2NhbGVSYXRpbykudG9GaXhlZCgwKSk7XG4gICAgICBjYW52YXMuYXR0cignaGVpZ2h0JywgKCQod2luZG93KS5oZWlnaHQoKSAqIHNjYWxlUmF0aW8pLnRvRml4ZWQoMCkpO1xuICAgICAgcmV0dXJuIFdvcmRDbG91ZChjYW52YXNbMF0sIG9wdCk7XG4gICAgfTtcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVyKTtcbiAgICAgIHJldHVybiByZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZXBhaW50KCk7XG4gICAgICB9LCAyNTApO1xuICAgIH0pO1xuICAgIHJldHVybiAkKCcuanMtc3BvdFtkYXRhLXNwb3Q9XCI0XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoXCJzcG90LVwiICsgKCQodGhpcykuYXR0cignZGF0YS1zcG90JykpICsgXCItdHJhbnNpdGlvblwiKSkge1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcjdGFnLWNsb3VkJykuc2hvdygpO1xuICAgICAgICAgIHJldHVybiByZXBhaW50KCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICQoJyN0YWctY2xvdWQnKS5mYWRlT3V0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAkKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkKCcuanMtc3BvdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICR0aGlzLCBzcG90O1xuICAgICAgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgc3BvdCA9ICR0aGlzLmF0dHIoJ2RhdGEtc3BvdCcpO1xuICAgICAgaWYgKCEkdGhpcy5oYXNDbGFzcyhcInNwb3QtXCIgKyBzcG90ICsgXCItdHJhbnNpdGlvblwiKSkge1xuICAgICAgICAkdGhpcy5hZGRDbGFzcyhcInNwb3QtXCIgKyBzcG90ICsgXCItdHJhbnNpdGlvblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR0aGlzLmFkZENsYXNzKFwic3BvdC1cIiArIHNwb3QgKyBcIi10cmFuc2l0aW9uLWJhY2tcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gJCgnLmpzLWJnJykudG9nZ2xlQ2xhc3MoXCJiZy1cIiArIHNwb3QgKyBcIi1hY3RpdmVcIik7XG4gICAgfSkub24oJ2FuaW1hdGlvbmVuZCB3ZWJraXRBbmltYXRpb25FbmQgb0FuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciAkdGhpcywgc3BvdDtcbiAgICAgICR0aGlzID0gJChlLnRhcmdldCk7XG4gICAgICBzcG90ID0gJHRoaXMuYXR0cignZGF0YS1zcG90Jyk7XG4gICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoXCJzcG90LVwiICsgc3BvdCArIFwiLXRyYW5zaXRpb24tYmFja1wiKSkge1xuICAgICAgICByZXR1cm4gJHRoaXMucmVtb3ZlQ2xhc3MoXCJzcG90LVwiICsgc3BvdCArIFwiLXRyYW5zaXRpb24gc3BvdC1cIiArIHNwb3QgKyBcIi10cmFuc2l0aW9uLWJhY2tcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
