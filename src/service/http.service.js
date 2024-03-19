export const getRequest = async (url) => {
    try {
        const response = await fetch(url);
        const parsedResponse = await response.json();
        const productResponse = await parsedResponse.products;
        return productResponse;
    } catch(err){
        return null;
    }
}