export default function Claude(props) {
  const ingriadeintMapping = props.ingriadeints.map((ingr, index) => {
    return <li key={index}>{ingr}</li>;
  });

  return (
    <>
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingriadeintMapping}
        </ul>
        {props.ingriadeints.length > 2 && (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.addRecipe}>Get a recipe</button>
          </div>
        )}
      </section>
    </>
  );
}
