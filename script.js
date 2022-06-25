let generateFood = () => {
    return `https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=${config.SECRET_API_KEY}`;
}