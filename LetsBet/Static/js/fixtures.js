//API => http://api.football-data.org/index
var apiToken = "b265292c34cd4b41992742e844eec5b1";

//ADD PROMISE API FOR THIS FUCKUP TO WORK
$(document).ready(function () {
    var leagueCollector = StatsEngine.LeagueCollector;
    var tesss = leagueCollector.GetLeagues();
    console.log(tesss);
    $(tesss).each(function () {
        console.log(this);
    });

});


var StatsEngine = StatsEngine || {};
StatsEngine.LeagueCollector = {
    leagues: [],
    GetLeagues: function () {
        var baseUrl = "http://api.football-data.org/v1/soccerseasons/{leagueId}/leagueTable";
        var splittedUrl = baseUrl.split("/");
        //Begins on 394 for some reason :S
        for (var i = 394; i < 404; i++) {
            splittedUrl[5] = i;
            var leagueUrl = splittedUrl.join("/");
            this.CallApi(leagueUrl, i);
        }
        console.log(this.leagues);
        return this.leagues;
    },
    //Todo: Now it calls the API with a request for each leaguename, refactor this!!
    CallApi: function (baseUrl, index) {
        var $self = this;
        $.ajax({
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
            $self.GetResponse(response, index);
        });
    },
    GetResponse: function (response, index) {
        console.log(response);
        var $leagueContainer = $("#leagues");
        this.BuildMarkup($leagueContainer, "h3", index, response.leagueCaption);
        $(response.standing).each(function () {
            var name = this.teamName;
            var position = this.position;
            var teamLogo = "<img style='width:50px; height:50px;' src=" + this.crestURI + "></img>";
            $leagueContainer.append("<div class='row' data-team=" +"'"+ name + "'" +"><div class='col-md-1'>" + position + "</div><div class='col-md-2'>" + teamLogo +  "</div><div class='col-md-8'>" + name + "</div><div class='col-md-1'>"+ this.points + "</div></div>");
        });

        //var $matchDayContainer = $("#matchDay");
        //this.BuildMarkup($matchDayContainer, "h3", 0, response.matchday);
    },
    BuildMarkup: function (container, element, id, title) {
        $(container).append("<" + element + " id=" + id + ">" + title + "</" + element + ">");
    }
}


