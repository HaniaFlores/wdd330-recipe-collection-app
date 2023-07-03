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
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export async function findRecipeById(id) {
  const possibleRecipes = await getRecipeList(id);

  const index = possibleRecipes.findIndex((recipe) => recipe.title === id);

  if (index !== -1) {
    return possibleRecipes[index];
  } else {
    throw new Error("Receta no encontrada");
  }
  //find the recipe based on the param obtained and made a new API request.
}
