import { useState } from "react";
import { productDetails } from "../../constants";
import { addToCart } from "../../state/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
  );
  const [selectedSize, setSelectedSize] = useState(productDetails.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(productDetails.colors[0]);
  const dispatch = useDispatch();

  return (
    <div className="pt-20">
      <div className="mt-6 sm:px-6 lg:px-8 flex">
        {/* <!-- Image gallery --> */}
        <div className="flex flex-col gap-5 w-3/3 max-h-[700px]">
          <img
            src={selectedImage}
            alt="Two each of gray, white, and black shirts laying flat."
            className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
          />

          <div className="flex gap-5">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
              alt="Two each of gray, white, and black shirts laying flat."
              className="col-start-2 w-28 h-20 rounded-lg object-cover max-lg:hidden"
              onClick={() => {
                setSelectedImage(
                  "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                );
              }}
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
              alt="Model wearing plain black basic tee."
              className="col-start-2 w-28 h-20 rounded-lg object-cover max-lg:hidden"
              onClick={() => {
                setSelectedImage(
                  "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                );
              }}
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
              alt="Model wearing plain gray basic tee."
              className="col-start-2 row-start-2 w-28 h-20 rounded-lg object-cover max-lg:hidden"
              onClick={() => {
                setSelectedImage(
                  "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                );
              }}
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
              alt="Model wearing plain white basic tee."
              className="col-start-2 w-28 h-20 rounded-lg object-cover max-lg:hidden"
              onClick={() => {
                setSelectedImage(
                  "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                );
              }}
            />
          </div>
        </div>

        {/* <!-- Product info --> */}
        <div className="sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Basic Tee 6-Pack
            </h1>
          </div>

          {/* <!-- Options --> */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">{productDetails.name}</h2>
            <p className="text-3xl tracking-tight">${productDetails.price}</p>

            {/* <!-- Reviews --> */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-5 shrink-0"
                  >
                    <path
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-5 shrink-0"
                  >
                    <path
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-5 shrink-0"
                  >
                    <path
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-5 shrink-0"
                  >
                    <path
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-5 shrink-0"
                  >
                    <path
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  117 reviews
                </a>
              </div>
            </div>

            {/* <!-- Colors --> */}
            <div>
              <h3 className="text-sm font-medium">Color</h3>

              <fieldset aria-label="Choose a color" className="mt-4">
                <div className="flex items-center gap-x-3">
                  {productDetails.colors.map((color) => (
                    <div className="flex rounded-full outline -outline-offset-1 outline-black/10">
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={color === selectedColor}
                        onChange={() => setSelectedColor(color)}
                        aria-label={color}
                        className={`size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-400 focus-visible:outline-3 focus-visible:outline-offset-3`}
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* <!-- Sizes --> */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Size</h3>
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Size guide
                </a>
              </div>

              <fieldset aria-label="Choose a size" className="mt-4">
                <div className="grid grid-cols-4 gap-3">
                  {productDetails.sizes.map((size) => (
                    <label
                      aria-label={size}
                      className="group flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                    >
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={size === selectedSize}
                        onChange={() => setSelectedSize(size)}
                        // disabled
                        className="appearance-none"
                      />
                      <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                        {size}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <button
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              onClick={() => dispatch(addToCart(productDetails))}
            >
              Add to bag
            </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* <!-- Description and details --> */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base">{productDetails.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {productDetails.highlights.map((highlight) => (
                    <li className="">
                      <span className="">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm">{productDetails.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
