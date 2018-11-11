const League = require('../app/data/league').League;
const Calendar = require('../app/data/league').Calendar;
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


//Test createCalendar
test('Test to create a Calendar', () => {

    let calendar = new Calendar([]);
    expect(calendar.createCalendar).toEqual([]);
})

//Test CREATE RANDOM LEAGUE
test('Test create random league', () => {
    let league = League.createRandomLeague(arrayPlayers, 5,10,24);

    expect(f => league.createRandomLeague(arrayPlayers, 5,10,24)).toThrowError(Error);
})