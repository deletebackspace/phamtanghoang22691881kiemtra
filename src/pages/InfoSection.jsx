const InfoSection = () => {
    return (
        <div className="container mx-auto p-4 flex">
            <div className="w-2/3">
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <a href="#" className="block">
                            <p className="font-bold">Phân hiệu Quảng Ngãi</p>
                            <img src="/QN03.jpg" alt="Quang Ngai Campus" className="w-full h-auto" />
                        </a>
                    </div>
                    <div className="w-1/2">
                        <a href="#" className="block">
                            <p className="font-bold">Cơ sở Thanh Hóa</p>
                            <img src="/TH03.jpg" alt="Thanh Hoa Campus" className="w-full h-auto" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-1/3 pl-4">
                <h3 className="text-lg font-bold">Hình ảnh hoạt động</h3>
                <a href="#" className="block">
                    <img src="/video-background.jpg" alt="Thanh Hoa Campus" className="w-full h-auto" />
                </a>
            </div>
        </div>
    );
};

export default InfoSection;