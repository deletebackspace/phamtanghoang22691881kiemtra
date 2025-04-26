const Header = () => {
    return (
        <header className="bg-blue-900 text-white">
            <div className="flex justify-between items-center p-2">
                <div className="flex items-center space-x-2">
                    <a href="https://gv.iuh.edu.vn/login.html" target="_blank" className="flex items-center space-x-1">
                        <span>📋</span>
                        <span>E-OFFICE</span>
                    </a>
                    <a href="https://outlook.office.com/owa/?realm=iuh.edu.vn" target="_blank" className="flex items-center space-x-1">
                        <span>📧</span>
                        <span>EMAIL</span>
                    </a>
                    <a href="http://lib.iuh.edu.vn" target="_blank" className="flex items-center space-x-1">
                        <span>📜</span>
                        <span>THƯ VIỆN - THÔNG TIN</span>
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <span>
                        <a href="/vi/connect-s91.html">KẾT NỐI</a> | <a href="/vi/contact-us-s90.html">LIÊN HỆ</a>
                    </span>
                    <a href="/vi" className="p-0 mr-2">
                        <img src="https://flagcdn.com/16x12/vn.png" alt="Vietnam Flag" />
                    </a>
                    <a href="/en" className="p-0">
                        <img src="https://flagcdn.com/16x12/gb.png" alt="UK Flag" />
                    </a>
                </div>
            </div>
            <div className="bg-gray-200 text-blue-900 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <a href="/vi">
                        <img src="https://via.placeholder.com/50" alt="Logo IUH" />
                    </a>
                    <div>
                        <h1 className="text-xl font-bold">BỘ CÔNG THƯƠNG</h1>
                        <h2 className="text-lg">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h2>
                        <p className="text-sm">Đổi mới tư duy, làm giàu thêm trí thức - đời sống</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;