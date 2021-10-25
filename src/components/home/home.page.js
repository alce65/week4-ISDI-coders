import { Footer } from "../core/footer";
import { Header } from "../core/header";
import { Counter } from "./counter";

export function HomePage() {
  // Model & Controller
  const title = "Component Samples";

  // View
  const template = (
    <div className="container">
      <Header />
      <main className="main">
        <section>
          <h2>{title}</h2>
          <Counter />
        </section>
      </main>
      <Footer />
    </div>
  );

  return template;
}
