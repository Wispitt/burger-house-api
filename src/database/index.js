import { Sequelize } from 'sequelize';
import Category from '../app/models/Category.js';
import Product from '../app/models/Product.js';
import User from '../app/models/User.js';
import databaseConfig from '../config/database.cjs';
import mongoose from 'mongoose';

const models = [User, Product, Category];

class Database {
	constructor() {
		this.init();
		this.mongo();
	}

	init() {
		this.connection = new Sequelize(databaseConfig);
		models
			.map((model) => model.init(this.connection))
			.map(
				(model) => model.associate && model.associate(this.connection.models),
			);
	}

	mongo() {
		this.mongooseConnection = mongoose.connect(
			'mongodb://localhost:27017/burger-house',
		);
	}
}

export default new Database();

//   {
//     name: "Milk Shake",
//     price: 1690,
//     category_id: 5,
//     offer: true,
//     file: './src/data/assets/milk-shake.png',
//   },
//   {
//     name: "Batata Frita",
//     price: 1290,
//     category_id: 3,
//     offer: true,
//     file: './src/data/assets/french-fries.png',
//   },
//   {
//     name: "Bacon House",
//     price: 3290,
//     category_id: 4,
//     offer: true,
//     file: './src/data/assets/second-burger.png',
//   },
//   {
//     name: "Classic Burger",
//     price: 2490,
//     category_id: 4,
//     offer: true,
//     file: './src/data/assets/appe_1.png',
//   },
