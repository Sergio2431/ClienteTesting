const League = require('../app/data/league').League;
const Team = require('../app/data/team').Team;
const readJSONData = require('../app/data/json_reader').readJSONData;
const extractDataFromRawJSON = require('../app/data/json_reader').extractDataFromRawJSON;

//Testing construct
test('Constructor error', () => {
    expect(() => new League(0));
});

//testing league fromDatasetJSONObject method
test('Testing league fromDatasetJSONObject method', () =>{
    // let pl = new League(0);
    let jsonObjects = readJSONData('./data/sample.json');
      let league = League.fromDatasetJSONObject(0,jsonObjects[0]);
      expect(league.getName()).toBe("");
})