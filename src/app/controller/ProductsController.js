import * as Yup from 'yup';

class ProductsController {
	async store(request, response) {
		const schema = Yup.object({
			name: Yup.string().required(),
			price: Yup.number().required(),
			category: Yup.string().required(),
		});

		const product = {
			...request.body,
			image: request.file ? request.file.filename : null,
		};

		try {
			schema.validateSync(request.body, { abortEarly: false });
		} catch (err) {
			return response.status(400).json({ erro: err.errors });
		}

		return response.status(201).json({ product });
	}
}

export default new ProductsController();
