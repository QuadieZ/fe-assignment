export async function getProducts(limit?: number) {
    return fetch(`${process.env.STORE_ENDPOINT}/products${limit ? `?limit=${limit}` : ""}`)
        .then(async (res) => await res.json())
        .catch((err) => {
            console.error(err);
            return [];
        });
}
