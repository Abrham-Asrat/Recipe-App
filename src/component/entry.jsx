import { useState } from "react";
import Claude from "./cluadeChef";
import List from "./ingrediantList";
import { getRecipeFromMistral } from "../api";

export default function Entry() {
  const [ingriadeints, setIngraidents] = useState("");

  function addIng(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updateIngr = formData.get("ingriadent");
    // console.log(updateIngr);
    setIngraidents((prev) => [...prev, updateIngr]);
    e.currentTarget.reset();
  }

  // getRecipeFromMistral(ingriadeints).then((data));

  const [recipeShown, setRecipeShown] = useState(false);
  const [recipeUpdated, setRecipeUpdated] = useState("");

  async function getRecipe() {
    setRecipeShown((recipe) => !recipe);
    const generatedRecipe = await getRecipeFromMistral(ingriadeints);
    setRecipeUpdated(generatedRecipe);
  }

  return (
    <>
      <main>
        <form onSubmit={addIng} className="add-from">
          <input
            type="text"
            aria-label="add ingriadeint"
            placeholder="eg. onion"
            name="ingriadent"
          />
          <button>add ingriadeint</button>
        </form>
        {ingriadeints.length > 0 && (
          <Claude addRecipe={getRecipe} ingriadeints={ingriadeints} />
        )}
        {recipeShown ? <List recipe={recipeUpdated} /> : null}
      </main>
    </>
  );
}
