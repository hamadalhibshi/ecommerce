import { products } from "../../constants";
import { ProductCard } from "../../components";

const Products = () => {
  return (
    <div className="p-10 bg-base-200">
      <div className="grid grid-col-1 md:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
