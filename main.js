var render = require('scripts/render');
var api = require('scripts/api');
var gen = require('scripts/general');

async function refresh(){
  var matchesData = await api.getTodayMatch();
  var matchMatrix = [];
  matchesData.forEach(item => {
    let time = new Date(item.datetime);
    matchMatrix.push({
      label:{
        text: item.venue
      }
    });
    matchMatrix.push({
      label:{
        text: `${(time.getMonth() + 1)}/${time.getDate()} ${gen.fill0(time.getHours(),2)}:${gen.fill0(time.getMinutes(),2)}`
      }
    });
    matchMatrix.push({
      label:{
        text: item.home_team.country
      }
    });
    matchMatrix.push({
      label:{
        text: item.away_team.country
      }
    })
  });
  $('today-match-matrix').data = matchMatrix;
}

render.renderMain();
refresh();