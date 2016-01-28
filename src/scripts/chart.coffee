$ ->
  data =
    label: '我的技能'
    amount: 100
    children: [
      label: '前端'
      amount: 60
      children: [
        label: '构建'
        amount: 10
      ,
        label: '测试'
        amount: 10
      ,
        label: '优化'
        amount: 10
      ,
        label: '安全'
        amount: 10
      ,
        label: '部署'
        amount: 10
      ]
    ,
      label: '后端'
      amount: 30
    ,
      label: '设计'
      amount: 10
    ]

  new BubbleTree
    data: data
    container: '#skills'
    strokeOpt:
      stroke: '#fff'
      'stroke-dasharray': '0'
      opacity: 0.3

  