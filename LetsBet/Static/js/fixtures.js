//API => http://api.football-data.org/index
var apiToken = "b265292c34cd4b41992742e844eec5b1";

$(document).ready(function () {
    var leagueCollector = StatsEngine.LeagueCollector;
    var tesss = leagueCollector.GetLeagues();
    console.log(tesss);
});


var StatsEngine = StatsEngine || {};
StatsEngine.LeagueCollector = {
    leagues: [],
    GetLeagues: function () {
        var $self = this;
        var baseUrl = "http://api.football-data.org/v1/soccerseasons/{leagueId}/leagueTable";
        var splittedUrl = baseUrl.split("/");
        //Begins on 394 for some reason :S
        for (var i = 394; i < 404; i++) {
            splittedUrl[5] = i;
            var leagueUrl = splittedUrl.join("/");
            var fuck = this.CallApi(leagueUrl);
            this.leagues.push(fuck);
        }
        return this.leagues;
    },
    //Todo: Now it calls the API with a request for each leaguename, refactor this!!
    CallApi: function (baseUrl) {
        var $self = this;
        var resp = $.ajax({
            headers: { 'X-Auth-Token': apiToken },
            url: baseUrl,
            dataType: 'json',
            type: 'GET'
        }).done(function (response) {
            // do something with the response, e.g. isolate the id of a linked resource        
            var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
            //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
            //var teamId = res[1];
            //console.log(teamId);
            //console.log(response);
            $self.resp = response;
            return response;
        });
        return resp;
    }

}


