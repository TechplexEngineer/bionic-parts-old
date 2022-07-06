import { Sequelize } from 'sequelize-typescript';
import type { SequelizeOptions, DataType } from 'sequelize-typescript';

import { InventoryCategory, Permission, Models } from '$lib/models';

const opts: SequelizeOptions = {
	database: 'some_db',
	dialect: 'sqlite',
	username: 'root',
	password: '',
	storage: 'test.db',
	models: [Permission]
};

const sequelize = new Sequelize(opts);
(async () => {
	await sequelize.sync();
})();

export default sequelize;
