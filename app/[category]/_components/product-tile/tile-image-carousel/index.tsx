import React from 'react';
import {Product} from "@/models";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";

interface props {
    images: Product["images"]
}

const TileImageCarousel = ({images}: props) => {
    if (!images.length) return null;

    return (
        <Swiper>
            {images.map(src => (
                <SwiperSlide key={src} style={{width: "100%", height: "20em"}}>
                    <Image unoptimized fill src={src} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TileImageCarousel;
