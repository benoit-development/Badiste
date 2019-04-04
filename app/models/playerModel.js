
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
    static find(filter, result) {
      var query = "SELECT * FROM players";
      if (filter) {
        query += " WHERE name LIKE CONCAT('%', ?, '%')";
      }
      db.query(query, [filter], function (err, dbResult) {
          if (err) {
              // error
              console.log(err);
              console.log("Error searching players");
              result(err, null);
          } else {
              // no error
              console.log(dbResult.length + " players found");
              result(null, dbResult);
          }
      });
    }

    /**
     * Search a specific player with its license number
     * 
     * @param {string} license player license number
     */
    static findByLicense(license, result) {
        db.query("SELECT * FROM players WHERE license = ?", [license], function (err, dbResult) {
            if (err) {
                // error
                console.log("Error searching players");
                result(err, null);
            } else if (dbResult.length == 0) {
                // license number not found
                console.log("License number not found");
                result("License number not found", null);
            } else {
                // no error
                console.log(dbResult.length + " players found");
                result(null, dbResult[0]);
            }
        });
    }

    /**
     * Insert/Update a player in the database
     * 
     * @param {Player} player player to save
     */
    static save(player, result) {
        db.query("INSERT INTO players VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE name=?, gender=?, active=?", 
            [player.license, player.name, player.gender, player.active, player.name, player.gender, player.active], 
            function (err, dbResult) {
                if (err) {
                    // error
                    console.log("Error searching players");
                    result(err, null);
                } else if (dbResult.length == 0) {
                    // license number not found
                    console.log("License number not found");
                    result("License number not found", null);
                } else {
                    // no error
                    console.log(dbResult.length + " players found");
                    result(null, dbResult[0]);
                }
            }
        );
    }
  }