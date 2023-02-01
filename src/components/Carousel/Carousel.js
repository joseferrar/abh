import React from "react";
import Carousel from "react-multi-carousel";
import RadioCard from "../Cards/RadioCard";
import "react-multi-carousel/lib/styles.css";

function CarouselComponent({img, title, price}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4500, min: 2000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
          <RadioCard
            img={"https://abh.colanonline.net/Images/NoImage.png"}
            title={"Title 1"}
            price={222}
          />
   <RadioCard
            img={"https://abh.colanonline.net/Images/NoImage.png"}
            title={"Title 1"}
            price={222}
          />
             <RadioCard
            img={"https://abh.colanonline.net/Images/NoImage.png"}
            title={"Title 1"}
            price={222}
          />
             <RadioCard
            img={"https://abh.colanonline.net/Images/NoImage.png"}
            title={"Title 1"}
            price={222}
          />
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselComponent;
