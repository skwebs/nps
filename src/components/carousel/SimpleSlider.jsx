import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const TICK = 50;

const slides = [
  { id: 1, title: "Slide One", duration: 3000 },
  { id: 2, title: "Slide Two", duration: 5000 },
  { id: 3, title: "Slide Three", duration: 4000 },
];

export default function SimpleSlider() {
  const sliderRef = useRef(null);
  const timerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const getStep = () => {
    const duration = slides[activeIndex].duration;
    return 100 / (duration / TICK);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // 🔹 Reset + start (ONLY on slide change)
  const startProgress = () => {
    clearTimer();
    setProgress(0);

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearTimer();
          sliderRef.current?.slickNext();
          return 0;
        }
        return prev + getStep();
      });
    }, TICK);
  };

  // 🔹 Resume WITHOUT resetting
  const resumeProgress = () => {
    clearTimer();

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearTimer();
          sliderRef.current?.slickNext();
          return 0;
        }
        return prev + getStep();
      });
    }, TICK);
  };

  // 🔹 Pause only
  const pauseProgress = () => {
    clearTimer();
  };

  useEffect(() => {
    if (!paused) startProgress();
    return clearTimer;
  }, [activeIndex]);

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => {
        setPaused(true);
        pauseProgress();
      }}
      onMouseLeave={() => {
        setPaused(false);
        resumeProgress();
      }}
      onTouchStart={() => {
        setPaused(true);
        pauseProgress();
      }}
      onTouchEnd={() => {
        setPaused(false);
        resumeProgress();
      }}
    >
      <Slider
        ref={sliderRef}
        dots
        arrows={false}
        infinite
        speed={500}
        autoplay={false}
        beforeChange={(_, next) => setActiveIndex(next)}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="h-64 flex items-center justify-center bg-slate-200"
          >
            <h2 className="text-3xl font-bold">{slide.title}</h2>
          </div>
        ))}
      </Slider>

      {/* Progress Bar */}
      <div className="absolute bottom-1 left-0 w-full px-1">
        <div className="h-1 w-full bg-slate-300/50 rounded overflow-hidden">
          <div
            className="h-full rounded-r-2xl bg-linear-to-r  from-transparent  to-blue-500"
            style={{
              width: `${progress}%`,
              transition: "width 50ms linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// const SLIDE_DURATION = 4000; // 4 seconds per slide
// const TICK = 50; // progress update interval (ms)

// export default function HeroSlider() {
//   const sliderRef = useRef(null);
//   const timerRef = useRef(null);

//   const [progress, setProgress] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slides = [
//     { id: 1, title: "Slide One" },
//     { id: 2, title: "Slide Two" },
//     { id: 3, title: "Slide Three" },
//   ];

//   const startProgress = () => {
//     clearInterval(timerRef.current);
//     setProgress(0);

//     timerRef.current = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(timerRef.current);
//           sliderRef.current?.slickNext();
//           return 0;
//         }
//         return prev + 100 / (SLIDE_DURATION / TICK);
//       });
//     }, TICK);
//   };

//   useEffect(() => {
//     startProgress();
//     return () => clearInterval(timerRef.current);
//   }, [activeIndex]);

//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false, // IMPORTANT
//     beforeChange: (_, next) => {
//       setActiveIndex(next);
//     },
//   };

//   return (
//     <div className="relative w-full max-w-3xl mx-auto">
//       <Slider ref={sliderRef} {...settings}>
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="h-64 flex items-center justify-center bg-slate-200"
//           >
//             <h2 className="text-3xl font-bold">{slide.title}</h2>
//           </div>
//         ))}
//       </Slider>

//       {/* Progress Bar */}
//       <div className="absolute bottom-8 left-0 w-full px-6">
//         <div className="h-1 w-full bg-slate-300 rounded overflow-hidden">
//           <div
//             className="h-full bg-blue-600 transition-[width] duration-50 ease-linear"
//             style={{ width: `${progress}%` }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// import React from "react";
// import Slider from "react-slick";

// const SliderItem = ({ children }) => {
//   return (
//     <>
//       <div className="h-64 bg-gray-100 mr-1">{children}</div>
//     </>
//   );
// };

// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     // pauseOnFocus: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     centerPadding: "60px",
//     className: "px-2",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   const listOfSlider = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   return (
//     <div className="px-10 py-5">
//       <Slider {...settings}>
//         {listOfSlider.map((item, i) => (
//           <SliderItem>
//             <div className="bg-red-500 h-full"></div>
//           </SliderItem>
//         ))}
//       </Slider>
//     </div>
//   );
// }
