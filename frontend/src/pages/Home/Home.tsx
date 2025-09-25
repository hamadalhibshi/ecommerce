import { useNavigate } from "react-router-dom";
import { Category } from "./components";
import { Screen } from "../../components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Screen>
      <div className="relative overflow-hidden h-screen flex flex-wrap items-center justify-around">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Summer styles are finally here
          </h1>
          <p className="my-5 text-xl ">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn't care if you live or die.
          </p>
          <a
            onClick={() => navigate("/products")}
            className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
          >
            Shop Collection
          </a>
        </div>

        <div className="lg:flex hidden items-center space-x-6 lg:space-x-8">
          <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                alt=""
                className="size-full object-cover"
              />
            </div>
          </div>

          <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                alt=""
                className="size-full object-cover"
              />
            </div>
          </div>

          <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                alt=""
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Category />
    </Screen>
  );
};

export default Home;
