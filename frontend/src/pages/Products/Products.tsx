import { products } from "../../constants";
import { ProductCard } from "../../components";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/cart/cartSlice";

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-base-200 p-30 mt-10">
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
            onClick={() => dispatch(addToCart(product))}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
