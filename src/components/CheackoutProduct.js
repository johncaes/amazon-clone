import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import { removeFromBasket, selectItems } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheackoutProduct({
  id,
  title,
  price,
  hasPrime,
  rating,
  description,
  category,
  image,
}) {
  const dispatch = useDispatch(selectItems);
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />

      {/*  Middle */}

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-300" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt="prime"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div>
        <button onClick={removeItemFromBasket} className="buttonRemove">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheackoutProduct;
