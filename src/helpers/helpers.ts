export async function uploadNewRecipe(newRecipeObj: {}) {
  const response = await fetch(
    "https://forkify-api.herokuapp.com/api/v2/recipes?key=4871af3e-9c8a-4b50-b116-b7298ada9115",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipeObj),
    }
  );

  const data = await response.json();

  if (!response.ok) {
  }

  
  return data;
}
