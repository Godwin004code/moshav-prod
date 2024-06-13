import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('useraccess',{
    first_name:{
        type: DataTypes.STRING
    },
	last_name:{
        type: DataTypes.STRING
    },
	company_name:{
        type: DataTypes.STRING
    },
	company_type:{
		type: DataTypes.STRING
	},
	company_website:{
		type: DataTypes.STRING
	},
    email:{
        type: DataTypes.STRING
    },
	email_verified:{
		type: DataTypes.STRING
	},
	pno:{
		type: DataTypes.STRING
	},
	country:{
		type: DataTypes.STRING
	},
	state:{
		type: DataTypes.STRING
	},
	access_level:{
		type: DataTypes.STRING
	},
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    },
    createdAt:{
        type: DataTypes.DATE
    },
    updatedAt:{
        type: DataTypes.DATE
    }
},{
    freezeTableName:true
});

(async () => {
    await db.sync();
})();

export default Users;