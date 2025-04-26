const Navbar = () => {
    return (
        <nav className="bg-gray-100 p-2 relative z-10">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-blue-900 hover:underline">🏠</a>
                    </li>
                    <li className="relative group">
                        <a href="#" className="text-blue-900 hover:underline flex items-center">
                            Giới thiệu
                            <span className="ml-1">▼</span>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-white shadow-lg p-2 space-y-1">
                            <li><a href="#" className="text-blue-600 hover:underline">Giới thiệu chung</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Tầm nhìn - Sứ mạng</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Triết lý giáo dục</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Phương châm hoạt động</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Giá trị cốt lõi</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Chính sách chất lượng</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Sơ đồ bộ máy tổ chức</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Cơ sở vật chất</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Đội ngũ</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Ba công khai</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Hệ thống nhận diện</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <a href="#" className="text-blue-900 hover:underline flex items-center">
                            Đào tạo
                            <span className="ml-1">▼</span>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-white shadow-lg p-2 space-y-1">
                            <li><a href="#" className="text-blue-600 hover:underline">Chuyên trang đào tạo</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Đào tạo Quốc tế</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <a href="#" className="text-blue-900 hover:underline flex items-center">
                            Tuyển sinh
                            <span className="ml-1">▼</span>
                        </a>
                        <ul className="absolute hidden group-hover:block bg-white shadow-lg p-2 space-y-1">
                            <li><a href="#" className="text-blue-600 hover:underline">Tuyển sinh Đại học</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Tuyển sinh chương trình liên kết</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Tuyển sinh trình độ Tiến sĩ - Thạc sĩ</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="text-blue-900 hover:underline">Nghiên cứu</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-900 hover:underline">Sinh viên</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-900 hover:underline">Giảng viên</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-900 hover:underline">Văn bằng</a>
                    </li>
                </ul>
                <div className="relative">
                    <input type="text" placeholder="Tìm kiếm..." className="p-1 border rounded w-28" />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2">🔍</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;