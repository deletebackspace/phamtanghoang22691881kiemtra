const Footer = () => {
    return (
        <footer className="bg-gray-100 p-4">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-1/3">
                        <h4 className="font-bold">LIÊN HỆ</h4>
                        <p>
                            ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH<br />
                            Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 1, Quận Gò Vấp, Thành phố Hồ Chí Minh<br />
                            Điện thoại: <span>028 38940 390</span> - 100<br />
                            Tuyển sinh: <span>028 3985 1932</span> - <span>028 3895 5858</span><br />
                            Email: <span>dhcn@iuh.edu.vn</span>
                        </p>
                    </div>
                    <div className="w-1/3">
                        <h4 className="font-bold">Hoạt động khác</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-blue-600 hover:underline">Hoạt động phục vụ cộng đồng</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Sinh viên tình nguyện</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">CLB/Đội/Nhóm sinh viên</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Kết nối doanh nghiệp</a></li>
                        </ul>
                    </div>
                    <div className="w-1/3">
                        <h4 className="font-bold">Thông tin mở rộng</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-blue-600 hover:underline">Báo chí viết về IUH</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Khám phá IUH</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Kỹ năng mềm</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Bộ sưu tập</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <a href="#">
                            <img src="/logo.png" alt="Logo IUH" className="w-30 h-30 object-contain" />
                        </a>
                    </div>
                    <div className="flex space-x-4">
                        <div>
                            <p><span>👥</span> Số lượt truy cập: 288,835,368</p>
                            <p><span>👤</span> Hôm nay: 21,722</p>
                            <p><span>👥</span> Đang xem: 82</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>Chia sẻ</span>
                            <a href="#">
                                <img src="/icon-fb.png" alt="Facebook" />
                            </a>
                            <a href="#">
                                <img src="/icon-in.png" alt="Twitter" />
                            </a>
                            <a href="#">
                                <img src="/icon-tw.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-4 border-t pt-2">
                    <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
                    <p className="text-xs italic">Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;