const League = require('../app/data/league').League;
const Calendar = require('../app/data/league').Calendar;
/*const Team = require('../app/data/team').Team;
const readJSONData = require('../app/data/json_reader').readJSONData;
const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;*/

//Testing construct
test('Constructor error', () => {
    let league = new League(5);
    expect(league.listTeams).toEqual([]);
    expect(league.numberOfTeams).toBe(5);
    expect(league.calendar).toBe(null);
    expect(league.leagueTable).toBe(null); 
});

/*//Test addTeam in a League
test('Test to add team in League', () => {

    let league = new League("Liga1");
    //let jsonObjects = readJSONData('./data/sample.json');
    let team = new Team("Real Madrid");
    //add team
    expect(league.addTeam(team)).toBe(true);
    
})*/


//Test createCalendar
test('Test to create a Calendar', () => {

    let calendar = new Calendar([]);
    expect(calendar.createCalendar).toEqual([]);
})


/*testing league fromDatasetJSONObject method
test('Testing league fromDatasetJSONObject method', () =>{
    // let pl = new League(0);
    let jsonObjects = readJSONData('./data/sample.json');
      let league = League.fromDatasetJSONObject(0,jsonObjects[0]);
      expect(league.getName()).toBe("");
})*/