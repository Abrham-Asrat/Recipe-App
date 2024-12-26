import Markdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section className="suggested-recipe-container">
      {/* {props.recipe} */}
      <h2>Hugging face Food Recommends:</h2>
      <Markdown>{props.recipe}</Markdown>
    </section>
  );
}
