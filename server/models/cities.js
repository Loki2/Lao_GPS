const db = require ('../database'); 

class Cities{
    static retriveAll (callback) {
        db.query('SELECT city_name from cities', function(err, res){
            if(err)
            return callback(err);
            callback(res);
        })
    }

    static insert (city, callback){ 
        db.query('INSERT INTO cities (city_name) VALUE ($1)', [city], function (err, res){
            if(err)
            return callback(err);
            callback(res);
        });
    }
}
module.exports = Cities;