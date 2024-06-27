// // import image from "./assets/images/hero-image.png";
// // Import Swiper React components
// import { Swiper, SwiperSlide, EffectCube } from "swiper/react";
// import {
//   // Navigation,
//   Pagination,
//   // Scrollbar,
//   // A11y,
// } from "swiper/modules";

// import "./App.css";
// // import "swiper/css/navigation";
// import "swiper/css/pagination";
// // import "swiper/css/scrollbar";

// // Import Swiper styles
// import "swiper/css/bundle";

// export default function Slider({ slides }) {
//   return (
//     // <Swiper
//     //   spaceBetween={50}
//     //   slidesPerView={2}
//     //   onSlideChange={() => console.log("slide change")}
//     //   onSwiper={(swiper) => console.log(swiper)}
//     // >
//     //   <SwiperSlide className="w-[300px] h-[280px]">
//     //     <img src={image} alt="" />
//     //   </SwiperSlide>
//     //   <SwiperSlide>
//     //     <img src={image} alt="" />
//     //   </SwiperSlide>
//     //   <SwiperSlide>
//     //     <img src={image} alt="" />
//     //   </SwiperSlide>
//     //   <SwiperSlide>
//     //     <img src={image} alt="" />
//     //   </SwiperSlide>
//     //   <SwiperSlide>
//     //     <img src={image} alt="" />
//     //   </SwiperSlide>
//     // </Swiper>
//     <Swiper
//       effect={"cube"}
//       cubeEffect={{
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//       }}
//       // modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
//       modules={[Pagination, EffectCube]}
//       spaceBetween={40}
//       slidesPerView={1}
//       // navigation
//       // pagination={{ clickable: true }}
//       pagination
//       // scrollbar={{ draggable: true }}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       {slides.map((slide) => (
//         <SwiperSlide key={slide.image}>
//           <img src={slide.image} alt={slide.title} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
