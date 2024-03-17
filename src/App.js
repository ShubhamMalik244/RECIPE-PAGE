import ListItem from "./ListItem";
import Heading from "./Heading";

function App() {
  const dot = "\u2022";

  return (
    <main>
      <div className="Page">
        <section className="image"></section>
        <section className="sec1">
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, prefect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetable, or meats.
          </p>
          <div className="card">
            <Heading text="Preparation time" />

            <ListItem
              bullet={dot}
              boldText="Total: "
              liText="Approximately 10 minutes"
            />
            <ListItem bullet={dot} boldText="Prepration: " liText="5 minutes" />
            <ListItem bullet={dot} boldText="Cooking: " liText="5 minutes" />
          </div>
        </section>

        <section className="sec2">
          <Heading text="Ingredients" />

          <ListItem bullet={dot} liText="2-3 large eggs" />
          <ListItem bullet={dot} liText="salt, to taste" />
          <ListItem bullet={dot} liText="Pepper, to taste" />
          <ListItem bullet={dot} liText="1 tablespoon of butter or oil" />
          <ListItem
            bullet={dot}
            liText="Optional fillings: cheese, diced vegetables, cooked meats, herbs"
          />
        </section>

        <hr></hr>

        <section className="sec3">
          <Heading text="Instructions" />

          <ListItem
            bullet={1}
            boldText="Beat the eggs: "
            liText="Ina bowl, beat the eggs with a pinch of
                salt and pepper until they are well mixed. You can add a
                tablespoon of water or milk for a fluffier texture."
          />
          <ListItem
            bullet={2}
            boldText="Heat the pan: "
            liText="Place a non-stick frying pan over medium
                heat and add butter or oil."
          />
          <ListItem
            bullet={3}
            boldText="Cook the omelette: "
            liText="Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface."
          />
          <ListItem
            bullet={4}
            boldText="Add fillings(optional): "
            liText="When the eggs begin to set at the edges but are still
            slightly runny in the middle, sprinkle your chosen fillings over
            one half of the omelette."
          />
          <ListItem
            bullet={5}
            boldText="Enjoy: "
            liText="As the Omelette countunes to cook, carefully lift
            one edge and fold it over the filling. Let it cook for another
            one minute, then slide it onto a plate."
          />
          <ListItem
            bullet={6}
            boldText="Heat the pan: "
            liText="Serve hot, with additional salt and pepper
            if needed."
          />
        </section>

        <hr></hr>

        <section className="sec4">
          <Heading text="Nutrition" />
          <p>
            The table below shows nutritional values per serving without the
            additional fillings
          </p>

          <table>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>277Kcal</td>
              </tr>
              <tr></tr>
              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr></tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr></tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}

export default App;
