async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data };
  }
}

export async function getRecipeList(string) {    
    const url = "https://api.api-ninjas.com/v1/recipe?query=" + string;
    const apiKey = "d89baii574+c3Cmel9YXPg==lOPH7N4ylzgy1WoJ";

    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await convertToJson(response);
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}