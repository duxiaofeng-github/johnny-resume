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
    return $('.content-scrollable').perfectScrollbar();
  });

}).call(this);

(function() {
  $(function() {});

}).call(this);

(function() {
  $(function() {
    var charCount, charMax, charMin, i, index, opt, ratio, repaint, resizeTimer, scaleRatio, size, word, wordArray, wordUsed, _i, _j, _ref, _ref1;
    word = ['宅男', '极客', '程序猿', '攻城狮', '前端狗', 'Less', 'Gulp', 'Angularjs', 'Docker', 'Sublime', 'Git', 'Css3', 'Html5', 'Jenkins', 'Coffeescript', 'Typescript', 'Bootstrap', 'Purecss', 'Golang', 'Python', 'Node.js', 'Swift', 'Mongo', 'HighChart', 'Es6', 'Mocha', 'Chaijs', 'Jasmine', 'Karma', 'Bower', 'Capistrano', 'Grunt', 'Webpack', 'Nginx', 'Sass', 'Zepto', 'Supervisor', 'Lodash'];
    scaleRatio = 3;
    charMin = 10 * scaleRatio;
    charMax = 160 * scaleRatio;
    charCount = 90;
    wordUsed = [].concat(word);
    wordArray = [];
    resizeTimer = null;
    for (i = _i = 0, _ref = charCount - word.length; _i < _ref; i = _i += 1) {
      index = _.random(0, word.length - 1);
      wordUsed.push(word[index]);
    }
    wordUsed = _.shuffle(wordUsed);
    for (i = _j = 1, _ref1 = wordUsed.length; _j <= _ref1; i = _j += 1) {
      ratio = 1 / (i + 3) * 4;
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
    return repaint();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmpzIiwiaW5kZXguanMiLCJpbnRyby5qcyIsInRhZy5qcyIsIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAkKGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXRhO1xuICAgIGRhdGEgPSB7XG4gICAgICBsYWJlbDogJ+aIkeeahOaKgOiDvScsXG4gICAgICBhbW91bnQ6IDEwMCxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ+WJjeerrycsXG4gICAgICAgICAgYW1vdW50OiA2MCxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogJ+aehOW7uicsXG4gICAgICAgICAgICAgIGFtb3VudDogMTBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICfmtYvor5UnLFxuICAgICAgICAgICAgICBhbW91bnQ6IDEwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGxhYmVsOiAn5LyY5YyWJyxcbiAgICAgICAgICAgICAgYW1vdW50OiAxMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBsYWJlbDogJ+WuieWFqCcsXG4gICAgICAgICAgICAgIGFtb3VudDogMTBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICfpg6jnvbInLFxuICAgICAgICAgICAgICBhbW91bnQ6IDEwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbGFiZWw6ICflkI7nq68nLFxuICAgICAgICAgIGFtb3VudDogMzBcbiAgICAgICAgfSwge1xuICAgICAgICAgIGxhYmVsOiAn6K6+6K6hJyxcbiAgICAgICAgICBhbW91bnQ6IDEwXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIHJldHVybiBuZXcgQnViYmxlVHJlZSh7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgY29udGFpbmVyOiAnI3NraWxscycsXG4gICAgICBzdHJva2VPcHQ6IHtcbiAgICAgICAgc3Ryb2tlOiAnI2ZmZicsXG4gICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogJzAnLFxuICAgICAgICBvcGFjaXR5OiAwLjNcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICQoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICQoJy5jb250ZW50LXNjcm9sbGFibGUnKS5wZXJmZWN0U2Nyb2xsYmFyKCk7XG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAkKGZ1bmN0aW9uKCkge30pO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAkKGZ1bmN0aW9uKCkge1xuICAgIHZhciBjaGFyQ291bnQsIGNoYXJNYXgsIGNoYXJNaW4sIGksIGluZGV4LCBvcHQsIHJhdGlvLCByZXBhaW50LCByZXNpemVUaW1lciwgc2NhbGVSYXRpbywgc2l6ZSwgd29yZCwgd29yZEFycmF5LCB3b3JkVXNlZCwgX2ksIF9qLCBfcmVmLCBfcmVmMTtcbiAgICB3b3JkID0gWyflroXnlLcnLCAn5p6B5a6iJywgJ+eoi+W6j+eMvycsICfmlLvln47ni64nLCAn5YmN56uv54uXJywgJ0xlc3MnLCAnR3VscCcsICdBbmd1bGFyanMnLCAnRG9ja2VyJywgJ1N1YmxpbWUnLCAnR2l0JywgJ0NzczMnLCAnSHRtbDUnLCAnSmVua2lucycsICdDb2ZmZWVzY3JpcHQnLCAnVHlwZXNjcmlwdCcsICdCb290c3RyYXAnLCAnUHVyZWNzcycsICdHb2xhbmcnLCAnUHl0aG9uJywgJ05vZGUuanMnLCAnU3dpZnQnLCAnTW9uZ28nLCAnSGlnaENoYXJ0JywgJ0VzNicsICdNb2NoYScsICdDaGFpanMnLCAnSmFzbWluZScsICdLYXJtYScsICdCb3dlcicsICdDYXBpc3RyYW5vJywgJ0dydW50JywgJ1dlYnBhY2snLCAnTmdpbngnLCAnU2FzcycsICdaZXB0bycsICdTdXBlcnZpc29yJywgJ0xvZGFzaCddO1xuICAgIHNjYWxlUmF0aW8gPSAzO1xuICAgIGNoYXJNaW4gPSAxMCAqIHNjYWxlUmF0aW87XG4gICAgY2hhck1heCA9IDE2MCAqIHNjYWxlUmF0aW87XG4gICAgY2hhckNvdW50ID0gOTA7XG4gICAgd29yZFVzZWQgPSBbXS5jb25jYXQod29yZCk7XG4gICAgd29yZEFycmF5ID0gW107XG4gICAgcmVzaXplVGltZXIgPSBudWxsO1xuICAgIGZvciAoaSA9IF9pID0gMCwgX3JlZiA9IGNoYXJDb3VudCAtIHdvcmQubGVuZ3RoOyBfaSA8IF9yZWY7IGkgPSBfaSArPSAxKSB7XG4gICAgICBpbmRleCA9IF8ucmFuZG9tKDAsIHdvcmQubGVuZ3RoIC0gMSk7XG4gICAgICB3b3JkVXNlZC5wdXNoKHdvcmRbaW5kZXhdKTtcbiAgICB9XG4gICAgd29yZFVzZWQgPSBfLnNodWZmbGUod29yZFVzZWQpO1xuICAgIGZvciAoaSA9IF9qID0gMSwgX3JlZjEgPSB3b3JkVXNlZC5sZW5ndGg7IF9qIDw9IF9yZWYxOyBpID0gX2ogKz0gMSkge1xuICAgICAgcmF0aW8gPSAxIC8gKGkgKyAzKSAqIDQ7XG4gICAgICBzaXplID0gY2hhck1heCAqIHJhdGlvO1xuICAgICAgc2l6ZSA9IHNpemUgPCBjaGFyTWluID8gY2hhck1pbiA6IHNpemU7XG4gICAgICB3b3JkQXJyYXkucHVzaChbd29yZFVzZWRbaSAtIDFdLCBzaXplXSk7XG4gICAgfVxuICAgIG9wdCA9IHtcbiAgICAgIGxpc3Q6IHdvcmRBcnJheSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiAncmFuZG9tLWxpZ2h0JyxcbiAgICAgIGZvbnRGYW1pbHk6ICdcIkFscmlnaHQgU2FucyBMUFwiLCBcIkF2ZW5pciBOZXh0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJQaW5nRmFuZyBTQ1wiLCBcIlNvdXJjZSBIYW4gU2FucyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5RdWFuWWkgTWljcm9IZWlcIiwgc2Fucy1zZXJpZicsXG4gICAgICByb3RhdGVSYXRpbzogMSxcbiAgICAgIGdyaWRTaXplOiAzMCxcbiAgICAgIHNodWZmbGU6IHRydWVcbiAgICB9O1xuICAgIHJlcGFpbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjYW52YXMsIHZtYXg7XG4gICAgICBjYW52YXMgPSAkKCcjdGFnLWNsb3VkJyk7XG4gICAgICB2bWF4ID0gJCh3aW5kb3cpLndpZHRoKCkgPiAkKHdpbmRvdykuaGVpZ2h0KCkgPyAkKHdpbmRvdykud2lkdGgoKSA6ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgIGNhbnZhcy5hdHRyKCd3aWR0aCcsICgoJCh3aW5kb3cpLndpZHRoKCkgLSAwLjEgKiB2bWF4KSAqIHNjYWxlUmF0aW8pLnRvRml4ZWQoMCkpO1xuICAgICAgY2FudmFzLmF0dHIoJ2hlaWdodCcsICgkKHdpbmRvdykuaGVpZ2h0KCkgKiBzY2FsZVJhdGlvKS50b0ZpeGVkKDApKTtcbiAgICAgIHJldHVybiBXb3JkQ2xvdWQoY2FudmFzWzBdLCBvcHQpO1xuICAgIH07XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lcik7XG4gICAgICByZXR1cm4gcmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmVwYWludCgpO1xuICAgICAgfSwgMjUwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVwYWludCgpO1xuICB9KTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJCgnLmpzLXNwb3QnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdGhpcywgc3BvdDtcbiAgICAgICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIHNwb3QgPSAkdGhpcy5hdHRyKCdkYXRhLXNwb3QnKTtcbiAgICAgIGlmICghJHRoaXMuaGFzQ2xhc3MoXCJzcG90LVwiICsgc3BvdCArIFwiLXRyYW5zaXRpb25cIikpIHtcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoXCJzcG90LVwiICsgc3BvdCArIFwiLXRyYW5zaXRpb25cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkdGhpcy5hZGRDbGFzcyhcInNwb3QtXCIgKyBzcG90ICsgXCItdHJhbnNpdGlvbi1iYWNrXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICQoJy5qcy1iZycpLnRvZ2dsZUNsYXNzKFwiYmctXCIgKyBzcG90ICsgXCItYWN0aXZlXCIpO1xuICAgIH0pLm9uKCdhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgJHRoaXMsIHNwb3Q7XG4gICAgICAkdGhpcyA9ICQoZS50YXJnZXQpO1xuICAgICAgc3BvdCA9ICR0aGlzLmF0dHIoJ2RhdGEtc3BvdCcpO1xuICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKFwic3BvdC1cIiArIHNwb3QgKyBcIi10cmFuc2l0aW9uLWJhY2tcIikpIHtcbiAgICAgICAgcmV0dXJuICR0aGlzLnJlbW92ZUNsYXNzKFwic3BvdC1cIiArIHNwb3QgKyBcIi10cmFuc2l0aW9uIHNwb3QtXCIgKyBzcG90ICsgXCItdHJhbnNpdGlvbi1iYWNrXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxufSkuY2FsbCh0aGlzKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
