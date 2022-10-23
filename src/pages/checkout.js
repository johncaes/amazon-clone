import Header from "../components/Header";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheackoutProduct from "../components/CheackoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

function checkout() {
  const products = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <div className="flex justify-center">
          <Image
            className="border border-red-600 mx-auto"
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
        </div>

        <div className="lg:flex gap-5 bg-gray-50 p-5">
          {/* Left */}

          <div className="flex-grow flex-col p-5 space-y-10 bg-white shadow-sm">
            <h1 className="text-3xl border-b pb-4">
              {products.length === 0
                ? "Your basket is empty"
                : "Shopping Basket"}
            </h1>

            {products.map((product, i) => (
              <CheackoutProduct
                key={product.id}
                id={product.id}
                title={product.title}
                rating={product.rating}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                hasPrime={product.hasPrime}
              />
            ))}
          </div>

          {/* Right */}
          <div className=" flex flex-col  p-10 bg-white shadow-md">
            {products.length > 0 && (
              <div>
                <h2 className="whitespace-nowrap">
                  Subtotal ({products.length} products):
                  <span className="font-bold">
                    {" "}
                    {<Currency quantity={total} />}
                  </span>
                </h2>

                <button
                  disabled={!session}
                  className={`buttonAdd mt-2 ${!session && "buttonRemove"}`}
                >
                  {!session ? "Sign in to checkout" : "Proceed to checkout"}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default checkout;
