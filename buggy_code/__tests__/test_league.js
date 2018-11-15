const League = require('../app/data/league').League;
const Team = require('../app/data/team').Team;
/*const readJSONData = require('../app/data/json_reader').readJSONData;
const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;*/
/*
//Testing construct
test('test Constructor', () => {
    let league = new League(5);
    expect(league.listTeams).toEqual([]);
    expect(league.numberOfTeams).toBe(5);
    expect(league.calendar).toBe(null);
    expect(league.leagueTable).toBe(null); 
});

test('Test to add team in League', () => {
    let league = new League(1);
    league.addTeam('Barcelona');
    expect(league.listTeams.lenght).toBe(1);
    expect(league.listTeams[0]).toBe('Barcelona');

    expect(f => league.addTeam('Barcelona')).toThrowError(Error);
});

    /**
     * Method employed to add a team to the current league.
     * @param {Team} team The team to be added to the league
     * @throws {Error} In case that the league is already full
     *
    addTeam(team){
        if(this.listTeams.length==this.numberOfTeams){
            throw Error('The league is full with teams!');
        }
        this.listTeams.push(team);
    }*/

/*
//Test createCalendar
test('Test to create a Calendar', () => {

<<<<<<< HEAD
    let calendar = new Calendar([]);
    expect(calendar.createCalendar).toEqual([]);
=======
    let league = new League(1);
    league.createCalendar();
    expect(league.calendar).toEqual([]);
>>>>>>> origin/RamaSergio
});

//Test CREATE RANDOM LEAGUE
test('Test create random league', () => {
    let arrayPlayers = [];
    //let league = League.createRandomLeague(arrayPlayers,5,10,24);

<<<<<<< HEAD
    expect(f => league.createRandomLeague(arrayPlayers, 5,10,24)).toThrowError(Error);
});

//@param {Array<Player>} playerData An array of player profiles that will be selected to generate the teams
test('Test add player for generates teams', () => {
    let league = League.playerData(arrayPlayers);

    expect(f => league.playerData(arrayPlayers)).toThrowError(Error);
})*/

//@param {Number} numberOfTeams An integer that delimits the number of teams that will compete in the league
test('Test to delimit the number of teams', () => {
    let team = new Team ("Barcelona");
    //let league = new League(1);
    //let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);
    expect(team.addPlayers(arrayPlayers));
    //expect(league.addTeam("Barcelona"));

})
=======
    expect(f => league.createRandomLeague(arrayPlayers,5,10,24)).toThrowError(Error);
});
>>>>>>> origin/RamaSergio
