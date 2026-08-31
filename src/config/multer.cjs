const multer = require('multer');
const { v4 } = require('uuid');
const { resolve } = require('node:path');

module.exports = {
	storage: multer.diskStorage({
		destination: resolve(__dirname, '..', '..', 'uploads'),
		filename: (_request, file, callback) => {
			const uniqueName = v4().concat(`-${file.originalname}`);
			return callback(null, uniqueName);
		},
	}),
};
