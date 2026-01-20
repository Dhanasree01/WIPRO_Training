import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />

      <section className="px-10 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-3 gap-8">
          <Card
            title="Women's Cloth"
            subtitle="New Collection"
          />
          <Card
            title="Winter Cloth"
            subtitle="Discount Sale"
          />
          <Card
            title="Men's Cloth"
            subtitle="Best Deals"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
