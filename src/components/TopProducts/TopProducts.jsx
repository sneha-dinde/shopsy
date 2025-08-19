import React, { useEffect, useState } from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
import axios from "axios";

const TopProducts = ({ handleOrderPopup }) => {
  const [productData, setProductData] = useState([]);
  // const ProductsData = [
  //   {
  //     id: 1,
  //     img: Img1,
  //     title: "Casual Wear",
  //     description:
  //       "Discover the perfect blend of comfort and fashion with Shopsy’s exclusive Casual Wear Collection. Whether you're chilling at home, heading out with friends, or running daily errands, we’ve got you covered with trendy, easy-to-wear outfits for every occasion.",
  //   },
  //   {
  //     id: 2,
  //     img: Img2,
  //     title: "Printed shirt",
  //     description:
  //       "Whether you're dressing up for brunch, a date night, or a weekend getaway, a printed shirt from Shopsy keeps you looking sharp and feeling relaxed.",
  //   },
  //   {
  //     id: 3,
  //     img: Img3,
  //     title: "Women shirt",
  //     description:
  //       "Discover Shopsy’s exclusive Women’s Shirt Collection, crafted for the modern woman who values both style and versatility. From crisp classics to trendy prints, our shirts are perfect for work, weekends, and everything in between.",
  //   },
  // ];

  useEffect(() => {
    axios
      .get("/api/products/getAllProducts")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching products: ", err);
      });
  }, []);

  console.log(productData, "productData");
  return (
    <div>
      <div className="container w-full">
        {/* Header section */}
        <div className="mx-auto w-auto text-center mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Shopsyc’s top picks — best quality, best style, best deals!
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {productData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[200px] w-[200px] relative overflow-hidden rounded-xl shadow-lg group ml-12">
                <img
                  src={data.url}
                  alt={data.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>

                <h1 className="text-xl font-bold">{data.name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>

                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
