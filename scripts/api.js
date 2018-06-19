function getTodayMatch() {
  return Promise((resolve, rejetc) => {
    $http.get({
      url: "http://worldcup.sfg.io/matches/today",
      handler: function(resp) {
        resolve(JSON.parse(resp.data))
      }
    })
  })
}

function getCurrentMatch() {
  return Promise((resolve, rejetc) => {
    $http.get({
      url: "http://worldcup.sfg.io/matches/current",
      handler: function(resp) {
        resolve(JSON.parse(resp.data))
      }
    })
  })
}

module.exports = {
  getTodayMatch: getTodayMatch,
  getCurrentMatch: getCurrentMatch
}