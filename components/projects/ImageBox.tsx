"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ImageBoxProps {
  images: string[];
}

const ImageBox = ({ images }: ImageBoxProps) => {
  const [imageIdx, setImageIdx] = useState(0);
  const imageIdxHandler = (buttonName: string) => {
    let newIndex;

    if (buttonName === "prev") {
      newIndex = imageIdx === 0 ? images.length - 1 : imageIdx - 1;
    } else if (buttonName === "next") {
      newIndex = imageIdx === images.length - 1 ? 0 : imageIdx + 1;
    }

    setImageIdx(newIndex as number);
  };
  return (
    <div className="lg:w-[40%] flex flex-col items-center justify-center">
      <div>
        <Image
          src={images[imageIdx]}
          alt="프로젝트 이미지"
          width={400}
          height={300}
          className="w-[500px] h-[280px]"
        />
      </div>
      <div className="h-10 flex items-center justify-center space-x-2">
        <button>
          <IoIosArrowBack onClick={() => imageIdxHandler("prev")} />
        </button>
        <span>
          {imageIdx + 1}/{images.length}
        </span>
        <button>
          <IoIosArrowForward onClick={() => imageIdxHandler("next")} />{" "}
        </button>
      </div>
    </div>
  );
};

export default ImageBox;
