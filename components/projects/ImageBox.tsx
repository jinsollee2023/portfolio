"use client";

import "./styles.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ImageBoxProps {
  images: string[];
}

const ImageBox = ({ images }: ImageBoxProps) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(images.length).fill(false)
  );

  const imageIdxHandler = (buttonName: string) => {
    let newIndex;

    if (buttonName === "prev") {
      newIndex = imageIdx === 0 ? images.length - 1 : imageIdx - 1;
    } else if (buttonName === "next") {
      newIndex = imageIdx === images.length - 1 ? 0 : imageIdx + 1;
    }

    setImageIdx(newIndex as number);
  };

  const handleImageLoad = (index: number) => {
    const updatedLoadedImages = [...loadedImages];
    updatedLoadedImages[index] = true; // 해당 이미지의 로드 상태를 true로 설정
    setLoadedImages(updatedLoadedImages);
  };

  return (
    <div className="lg:w-1/2 flex flex-col items-center">
      <div
        className={`w-full h-[250px] ${
          loadedImages[imageIdx] ? "" : "skeleton"
        }`}
      >
        <Image
          src={images[imageIdx]}
          alt="프로젝트 이미지"
          width={500}
          height={300}
          className={`w-full h-[250px] object-cover ${
            loadedImages[imageIdx] ? "block" : "hidden"
          }`}
          onLoad={() => {
            handleImageLoad(imageIdx);
          }}
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
