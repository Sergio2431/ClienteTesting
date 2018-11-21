const League = require('../app/data/league').League;
const Team = require('../app/data/team').Team;
const Player = require('../app/data/player').Player;
const readJSONData = require('../app/data/json_reader').readJSONData;
const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;
/*const Team = require('../app/data/team').Team;
const readJSONData = require('../app/data/json_reader').readJSONData;
const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;*/

//Testing construct
test('test Constructor', () => {
    let league = new League(5);
    expect(league.listTeams).toEqual([]);
    expect(league.numberOfTeams).toBe(5);
    expect(league.calendar).toBe(null);
    expect(league.leagueTable).toBe(null); 
});

test('Test to add team in League', () => {
   
    let team = new Team("Valencia");
    let league = new League(1);
    league.addTeam(team);
});
test('Test Error to add team in League', () => {
   
    let team = new Team("Valencia");
    let team_2 = new Team("Barcelona");

    let league = new League(1);

    league.addTeam(team);
    expect(f => league.addTeam(team_2)).toThrowError(Error);
});

//Test createCalendar

test('Test to create a Calendar', () => {
    let calendar = new League(1);
    //expect(f=>calendar.createCalendar).toEqual([]);
})


// Test Creates a League object based on a pool of players, a number of teams to compete, and a minimum and maximum team value
test('Test create  league', () => {

    let jsonObjects = readJSONData('./data/fifa_data.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);

    //BUGGGGGGG arreglado para forzar que los equipos que devuelva tengán 
    //como mínimo 11 jugadores porque sino metera equipos con menos jugadores
   let league =League.createRandomLeague(arrayPlayers, 10,1000000,100000000);

   console.log(league);
  console.log(league.listTeams.length);
   console.log(league.listTeams);
   console.log(league.numberOfTeams);
   console.log(league.calendar);
   console.log(league.leagueTable);
  
    expect(f => league.createRandomLeague(arrayPlayers, 5,10,24)).toThrowError(Error);
})
// Test Creates a League object based on a pool of players, a number of teams to compete, and a minimum and maximum team value
// Comprobate error
test('Test create  league', () => {

    let jsonObjects = readJSONData('./data/sample.json');
    let arrayPlayers = extractDataFromRawJSON(jsonObjects);
   
    expect(f => league.createRandomLeague(arrayPlayers, 5,10,24)).toThrowError(Error);
})