import { products } from "../../constants";
import { ProductCard } from "../../components";

const Products = () => {
  return (
    <div className="bg-base-200 p-10">
      <div
        className="grid grid-col-1 gap-5 place-items-center
      md:grid-cols-4
      lg:grid-cols-5"
      >
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
