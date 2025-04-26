const Slideshow = () => {
    return (
        <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory">
                <a href="" className="snap-center">
                    <img src="https://via.placeholder.com/1200x300?text=Banner+30-4" alt="Banner 30-4" className="w-full h-auto" />
                </a>
                <a href="https://vr.iuh.edu.vn/" className="snap-center">
                    <img src="https://via.placeholder.com/1200x300?text=VR+Tour" alt="VR Tour" className="w-full h-auto" />
                </a>
                <a href="https://iuh2.iuh.edu.vn/" className="snap-center">
                    <img src="https://via.placeholder.com/1200x300?text=IUH2" alt="IUH2" className="w-full h-auto" />
                </a>
                <a href="" className="snap-center">
                    <img src="https://via.placeholder.com/1200x300?text=Banner+FB" alt="Banner FB" className="w-full h-auto" />
                </a>
                <a href="" className="snap-center">
                    <img src="https://via.placeholder.com/1200x300?text=Tet+DL+2024" alt="Tet DL 2024" className="w-full h-auto" />
                </a>
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2">◄</button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2">►</button>
        </div>
    );
};

export default Slideshow;