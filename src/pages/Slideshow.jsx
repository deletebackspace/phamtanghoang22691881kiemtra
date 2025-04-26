import { useState, useEffect, useCallback } from "react";

// Sample slide data - you can replace with your actual slides
const slides = [
    {
        id: 1,
        image: "/BANNER 30_4_WEB1.jpg",
        alt: "Banner 30-4",
        href: "#banner1",
    },
    {
        id: 2,
        image: "/banner_iuh2.jpg",
        alt: "University Campus",
        href: "#banner2",
    },
    {
        id: 3,
        image: "/tour.png",
        alt: "Student Activities",
        href: "#banner3",
    },
];

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);

    // Function to go to the next slide
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    // Function to go to the previous slide
    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, []);

    // Function to go to a specific slide
    const goToSlide = (index) => {
        setCurrentSlide(index);
        // Reset auto-play timer when manually changing slides
        if (isAutoPlaying) {
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 100);
        }
    };

    // Handle touch events for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!touchStart) return;

        const touchEnd = e.touches[0].clientX;
        const diff = touchStart - touchEnd;

        // Swipe threshold
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            setTouchStart(0);
        }
    };

    // Auto-play functionality
    useEffect(() => {
        let interval;

        if (isAutoPlaying) {
            interval = setInterval(() => {
                nextSlide();
            }, 5000); // Change slide every 5 seconds
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAutoPlaying, nextSlide]);

    // Pause auto-play when user hovers over the slideshow
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <div
            className="relative overflow-hidden group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            aria-label="Slideshow"
        >
            {/* Slides container */}
            <div
                className="flex transition-transform duration-500 ease-in-out h-[300px] md:h-[400px] lg:h-[500px]"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="min-w-full relative">
                        <a href={slide.href} className="block w-full h-full">
                            <img
                                src={slide.image || "/placeholder.svg"}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                        </a>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous slide"
            >
                ◄
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next slide"
            >
                ►
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                            currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={currentSlide === index ? "true" : "false"}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slideshow; 