const Header = () => {
    return (
        <header className="bg-blue-900 text-white">
            <div className="container mx-auto flex justify-between items-center p-2">
                <div className="flex items-center space-x-4">
                    <a
                        href="https://gv.iuh.edu.vn/login.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 hover:underline"
                    >
                        <span>📋</span>
                        <span>E-OFFICE</span>
                    </a>
                    <a
                        href="https://outlook.office.com/owa/?realm=iuh.edu.vn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 hover:underline"
                    >
                        <span>📧</span>
                        <span>EMAIL</span>
                    </a>
                    <a
                        href="http://lib.iuh.edu.vn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 hover:underline"
                    >
                        <span>📜</span>
                        <span>THƯ VIỆN - THÔNG TIN</span>
                    </a>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-2">
                        <a href="/vi/connect-s91.html" className="hover:underline">
                            KẾT NỐI
                        </a>
                        <span>|</span>
                        <a href="/vi/contact-us-s90.html" className="hover:underline">
                            LIÊN HỆ
                        </a>
                    </span>
                    <a href="/vi" className="p-0">
                        <img src="/vn.png" alt="Vietnam Flag" className="w-5 h-4 object-contain" />
                    </a>
                    <a href="/en" className="p-0">
                        <img src="https://flagcdn.com/16x12/gb.png" alt="UK Flag" className="w-5 h-4 object-contain" />
                    </a>
                </div>
            </div>
            <div className="bg-gray-200 text-blue-900 p-4">
                <div className="container mx-auto flex items-center space-x-4">
                    <a href="/vi">
                        <img src="/Logo-IUH.jpg" alt="Logo IUH" className="w-16 h-16 object-contain" />
                    </a>
                    <div>
                        <h1 className="text-xl font-bold">BỘ CÔNG THƯƠNG</h1>
                        <h2 className="text-lg font-semibold">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h2>
                        <p className="text-sm italic">Đổi mới tư duy, làm giàu thêm trí thức - đời sống</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;