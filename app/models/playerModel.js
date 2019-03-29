
var db = require('./db');

/**
 * Player class providing several services
 */
export class Player {

    /**
     * Player instance contructor
     * 
     * @param {int} license player license
     * @param {string} name player name
     * @param {string} gender player gender
     * @param {boolean} active if player still activated
     */
    constructor(license, name, gender, active) {
      this.license = license;
      this.name = name;
      this.gender = gender;
      this.active = active;
    }

    /**
     * Search for players
     * 
     * @param {string} filter filter on the player name
     */
    static findPlayers(filter, result) {
        db.query("SELECT * FROM players", function (err, dbResult) {
            if (err) {
                // error
                console.log("Error searching players");
                result(err, null);
            } else {
                // no error
                console.log(dbResult.length + " players found");
                result(null, dbResult);
            }
        });
    }
  }