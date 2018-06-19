var todayMatchMatrix = {
  type: "matrix",
  props: {
    id: "today-match-matrix",
    columns: 4,
    spacing: 5,
    template: {
      props: {},
      views: [
        {
          type: "label",
          props: {
            id: "mlabel",
            textColor: $color("#abb2bf"),
            align: $align.center,
            font: $font(32)
          }
        }
      ]
    }
  },
  layout: function(make, view){
    make.height.equalTo(200)
    make.centerY.equalTo(view.super).offset(20)
    make.left.right.inset(50)
  },
}

function renderMain() {
  $ui.render({
    props: {
      title: "World Cup Now"
    },
    views: [todayMatchMatrix]
  })
}

module.exports = {
  renderMain: renderMain
}