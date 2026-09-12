import Sequelize, { Model } from 'sequelize';

class Product extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				price: Sequelize.INTEGER,
				path: Sequelize.STRING,
				offer: Sequelize.BOOLEAN,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return `http://localhost:3001/product-file/${this.path}`;
					},
				},
			},
			{
				sequelize,
				tableName: 'products',
			},
		);
		return this;
	}
	static associate(models) {
		this.belongsTo(models.Category, {
			foreignKey: 'category_id',
			as: 'category',
		});
	}
}

export default Product;

// {
//     name: "Milk Shake",
//     price: 1690,
//     category_id: 5,
//     offer: true,
//     file: './src/data/assets/milk-shake.png',
//   },
//   {
//     name: "Batata Frita",
//     price: 1290,
//     category_id: 4,
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
//     category_id: 5,
//     offer: true,
//     file: './src/data/assets/appe_1.png',
//   },