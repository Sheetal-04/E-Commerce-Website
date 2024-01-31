export async function getProductsData(id) {
	const API_URL = id
		? `https://fakestoreapi.com/products/${id}`
		: "https://fakestoreapi.com/products/";
	const res = await fetch(API_URL);
	if (!res.ok) {
		throw new Error(`ERROR:${res.status}`);
	}
	const data = res.json();
	return data;
}
