const Content = () => {
    return (
        <div className="container mx-auto p-6 flex gap-6">
            {/* Sidebar: Cơ cấu tổ chức */}
            <div className="w-1/4">
                <h3 className="text-xl font-bold text-blue-900 mb-4">CƠ CẤU TỔ CHỨC</h3>
                <ul className="space-y-2">
                    <li className="relative group">
                        <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                            Lãnh đạo
                            <span className="ml-2">▼</span>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-white opacity-100 z-20 shadow-lg p-3 space-y-2 rounded-lg">
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Đảng ủy</a></li>
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Ban giám hiệu</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                            Các Phòng Ban
                            <span className="ml-2">▼</span>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-white opacity-100 z-20 shadow-lg p-3 space-y-2 rounded-lg">
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Phòng Tổ chức - Hành chính</a></li>
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Phòng Tài chính - Kế toán</a></li>
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Phòng Kế hoạch - Đầu tư</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                            Các Khoa
                            <span className="ml-2">▼</span>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-white opacity-100 z-20 shadow-lg p-3 space-y-2 rounded-lg">
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Khoa Công nghệ Cơ khí</a></li>
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Khoa Công nghệ Thông tin</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                            Các Viện
                            <span className="ml-2">▼</span>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-white opacity-100 z-20 shadow-lg p-3 space-y-2 rounded-lg">
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Viện Tài chính - Kế toán</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                            Các Trung tâm
                            <span className="ml-2">▼</span>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-white opacity-100 z-20 shadow-lg p-3 space-y-2 rounded-lg">
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Trung tâm Quản trị Hệ thống</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                            Các phân hiệu
                            <span className="ml-2">▼</span>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-white opacity-100 z-20 shadow-lg p-3 space-y-2 rounded-lg">
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Phân hiệu Quảng Ngãi</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                            Đoàn thể
                            <span className="ml-2">▼</span>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-white opacity-100 z-20 shadow-lg p-3 space-y-2 rounded-lg">
                            <li><a href="#" className="text-blue-600 hover:text-blue-800">Công đoàn</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="w-3/4">
                <div className="grid grid-cols-2 gap-6">
                    {/* Thông báo */}
                    <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-4">THÔNG BÁO</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                    Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025
                                    <span className="text-red-600 ml-2">[NEW]</span>
                                </a>
                                <p className="text-gray-600 text-sm mt-1">24-04-2025</p>
                            </li>
                            <li>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                    Thông báo tuyển chọn nam sinh tốt nghiệp đại học...
                                    <span className="text-red-600 ml-2">[NEW]</span>
                                </a>
                                <p className="text-gray-600 text-sm mt-1">21-04-2025</p>
                            </li>
                        </ul>
                    </div>

                    {/* Tuyển sinh */}
                    <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-4">TUYỂN SINH</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                    Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng...
                                </a>
                                <p className="text-gray-600 text-sm mt-1">28-03-2025</p>
                            </li>
                            <li>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                    Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025
                                </a>
                                <p className="text-gray-600 text-sm mt-1">20-03-2025</p>
                            </li>
                        </ul>
                    </div>

                    {/* Tin tức - Sự kiện */}
                    <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-4">TIN TỨC - SỰ KIỆN</h3>
                        <div className="space-y-4">
                            <div>
                                <a href="#">
                                    <img
                                        src="/sukien.jpg"
                                        alt="AVEVA News"
                                        className="w-full h-40 object-cover rounded-lg shadow-md"
                                    />
                                </a>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium block mt-2">
                                    AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ...
                                    <span className="text-red-600 ml-2">[NEW]</span>
                                </a>
                                <p className="text-gray-600 text-sm mt-1">25-04-2025</p>
                            </div>
                            <div>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                    Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH...
                                    <span className="text-red-600 ml-2">[NEW]</span>
                                </a>
                                <p className="text-gray-600 text-sm mt-1">22-04-2025</p>
                            </div>
                        </div>
                    </div>

                    {/* Hợp tác quốc tế */}
                    <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-4">HỢP TÁC QUỐC TẾ</h3>
                        <div className="space-y-4">
                            <div>
                                <a href="#">
                                    <img
                                        src="/hoptac.jpg"
                                        alt="International Cooperation"
                                        className="w-full h-40 object-cover rounded-lg shadow-md"
                                    />
                                </a>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium block mt-2">
                                    Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa...
                                </a>
                                <p className="text-gray-600 text-sm mt-1">24-03-2025</p>
                            </div>
                            <div>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                    Đại học Công nghiệp TP. HCM tham gia dự án Green Edu...
                                </a>
                                <p className="text-gray-600 text-sm mt-1">19-03-2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;