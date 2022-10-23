import Image from "next/image";
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import {
  addToBasket,
  removeFromBasket,
  selectItems,
} from "../slices/basketSlice";
import { useDispatch, useSelector } from "react-redux";

function Product({ id, title, price, description, category, image }) {
  const [onBasket, setOnBasket] = useState(false);
  const products = useSelector(selectItems);

  useEffect(() => {
    const ind = products.find((product) => product.id === id);
    if (ind) {
      setOnBasket(true);
    }
  }, [products]);

  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      hasPrime,
      rating,
      price,
      description,
      category,
      image,
    };

    // Sending the product as an action to the REDUX store... the basket slice

    dispatch(addToBasket(product));
    setOnBasket(true);
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));
    setOnBasket(false);
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-500">
        {category}
      </p>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <div key={i}>
              <StarIcon className="h-5 text-yellow-300" />
            </div>
          ))}
      </div>

      <p className="text-xs my-2  line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="prime"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button
        onClick={!onBasket ? addItemToBasket : removeItemFromBasket}
        className={`mt-auto ${!onBasket ? "buttonAdd" : "buttonRemove"} `}
      >
        {!onBasket ? "Add to basket" : "Remove from basket"}
      </button>
    </div>
  );
}

export default Product;
