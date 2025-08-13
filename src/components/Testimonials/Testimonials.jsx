import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Just like Victor, thousands are discovering why Shopsy is the go-to app for modern shoppers who want variety, value, and convenience.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "His visit highlights Shopsy’s mission: to blend technology with everyday convenience, creating a shopping experience that’s efficient, intelligent, and delightful.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Cricket legend Virat Kohli recently visited Shopsy – and guess what? He loved it! Known for his sharp style and smart choices, Virat explored the latest collections on Shopolio and picked out some of his favorite products.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Sachin’s visit is a proud moment for Shopsy and a reflection of what we stand for: quality, trust, and excellence.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <div
            data-aos="fade-up"
            className="text-xs text-primary-400 space-y-3 mt-4"
          >
            <p>
              Shopsy has completely changed the way I shop! Fast delivery,
              quality products, and unbeatable prices — I love it! —{" "}
              <strong>Priya M.</strong>
            </p>
            <p>
              I found everything I needed in one place. The app is super easy to
              use and the customer support is fantastic! —{" "}
              <strong>Rahul T.</strong>
            </p>
            <p>
              Shopsy’s deals are amazing! I saved a lot on my first order.
              Highly recommended for smart shoppers. —{" "}
              <strong>Anjali K.</strong>
            </p>
            <p>
              Stylish, fast, and reliable — Shopsy is now my go-to app for all
              things shopping. — <strong>Vikram S.</strong>
            </p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h2 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h2>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
