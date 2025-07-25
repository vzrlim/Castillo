import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-ballet">
      <Header />
      <Hero />
      <Categories />
      <Products />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}