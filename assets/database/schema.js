var db = {
    users: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', maxlength: 150, nullable: false},
        salt: {type: 'string', maxlength: 60, nullable: false, unique: true},
        password: {type: 'string', maxlength: 60, nullable: false},
        email: {type: 'string', maxlength: 254, nullable: false, unique: true, validations: {'isEmail': true}},
    },

    inventory: {
    	id:{type: 'increments', nullable: false, primary: true},
        uid: {type: 'string', maxlength: 36, nullable: false, validations: {'isUUID': true}},
        item_name: {type: 'string', maxlength: 150, nullable: false},
        entered: {type: 'dateTime', nullable: false},
        expires_in: {type: 'integer', nullable: false}, // time to expiry in seconds... starts at time it is entered
        expires_on: {type: 'dateTime', nullable: true},
        category: {type: 'string', maxlength: 150, nullable: true}
    }

    preferences:{
    	id:{type: 'increments', nullable: false, primary: true},
        uid: {type: 'string', maxlength: 36, nullable: false, validations: {'isUUID': true}},
        notification_time: {type: 'dateTime', nullable: false, defaultto: '20:00'}, // when do you want to be reminded? i.e. what time of day?
        how_early: {type:'integer', nullable: false, defaultto: '86400'} // how far in advance do you want warning... default = 1 day
    }

}

module.exports.tables = db;