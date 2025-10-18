
import image1 from "../assets/Chilli.jpg";
import image2 from "../assets/Coriander.jpg";
import image3 from "../assets/garam.jpg";
import image4 from "../assets/turmeric.jpg";

const spices = [
 { name: "Chilli", img: image1 },
 { name: "Coriander powder", img: image2 },
 { name: "Garam masala", img: image3},
 { name: "Turmeric", img: image4}

];
const Products = () => {
  return (
    <section className="products-section">
      <h2>Our Premium Spice Collection</h2>
      <div className="products-row">
        {spices.map((spice) => (
          <div key={spice.name} className="product-card">
            <img src={spice.img} alt={spice.name} />
            <h3>{spice.name}</h3>
            <p>Pure, aromatic, and freshly sourced for your kitchen.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
