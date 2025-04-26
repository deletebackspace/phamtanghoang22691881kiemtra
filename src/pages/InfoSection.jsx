const InfoSection = () => {
    return (
        <div className="container mx-auto p-4 flex">
            <div className="w-2/3">
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <a href="/vi/iuh-quang-ngai-campus-s93.html" className="block">
                            <p className="font-bold">Phân hiệu Quảng Ngãi</p>
                            <img src="https://via.placeholder.com/300x150?text=Quang+Ngai" alt="Quang Ngai Campus" className="w-full h-auto" />
                        </a>
                    </div>
                    <div className="w-1/2">
                        <a href="/vi/iuh-thanh-hoa-campus-s94.html" className="block">
                            <p className="font-bold">Cơ sở Thanh Hóa</p>
                            <img src="https://via.placeholder.com/300x150?text=Thanh+Hoa" alt="Thanh Hoa Campus" className="w-full h-auto" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-1/3 pl-4">
                <h3 className="text-lg font-bold">Video và Hình ảnh</h3>
                <a href="/vi/video-collections-fi38/video-about-the-industrial-university-of-ho-chi-minh-city-a1205.html" className="relative block">
                    <img src="https://via.placeholder.com/300x150?text=Video" alt="Video" className="w-full h-auto" />
                    <span className="absolute inset-0 flex items-center justify-center">▶</span>
                </a>
            </div>
        </div>
    );
};

export default InfoSection;