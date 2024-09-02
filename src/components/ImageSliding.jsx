import React, { useEffect, useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const ImageSliding = () => {
  const [image, setImage] = useState(image1);

  const handleSlideImage = () => {
    if (image == image1) {
      setImage(image2);
    } else if (image == image2) {
      setImage(image3);
    } else if (image == image3) {
      setImage(image4);
    } else if (image == image4) {
      setImage(image1);
    }
  };

  useEffect(() => {
    const slideAnimation = () => {
      const currentImage = document.getElementById("imageid");
    //   currentImage.style.translate = "200px";
    };

    slideAnimation();
  }, [image]);

  return (
    <>
      <div className="p-4 w-screen h-full flex flex-col justify-center items-center">
        <img src={image} alt="image1" className="w-1/3 mt-8" id="imageid" />
        <br />
        <div>
          <button onClick={handleSlideImage} className="p-2 bg-blue-600 text-white rounded-md" >Slide Image</button>
        </div>
      </div>
    </>
  );
};

export default ImageSliding;
