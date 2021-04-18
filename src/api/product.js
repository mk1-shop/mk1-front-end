import Api from "../services/axios";

export const getProducts = async (number) => {
    try {
		const response = await Api.get(`/products/all`);
		return response;
    } catch (error) {
		console.error(error);
    }
};

export const addProduct = async (product) => {
    try {
		const response = await Api.post(`/products/add`,product);
		return response;
    } catch (error) {
		console.error(error);
    }
};

export const getProductbyID = async (number) => {
    try {
		const response = await Api.get(`/products/find/${number}`);
		return response;
    } catch (error) {
		console.error(error);
    }
};

export const updateProduct = async (product) => {
    try {
		const response = await Api.put(`/products/update`,product);
		return response;
    } catch (error) {
		console.error(error);
    }
};

export const deleteProduct = async (id) => {
    try {
		const response = await Api.delete(`/products/delete/${id}`);
		return response;
    } catch (error) {
		console.error(error);
    }
};