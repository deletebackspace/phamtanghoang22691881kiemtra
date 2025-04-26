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
                            Điện thoại: <a href="tel:02838940390">028 38940 390</a> - 100<br />
                            Tuyển sinh: <a href="tel:02839851932">028 3985 1932</a> - <a href="tel:02838955858">028 3895 5858</a><br />
                            Email: <a href="mailto:dhcn@iuh.edu.vn">dhcn@iuh.edu.vn</a>
                        </p>
                    </div>
                    <div className="w-1/3">
                        <h4 className="font-bold">Hoạt động khác</h4>
                        <ul className="space-y-1">
                            <li><a href="/vi/hoat-dong-phuc-vu-cong-dong-fi51" className="text-blue-600 hover:underline">Hoạt động phục vụ cộng đồng</a></li>
                            <li><a href="/vi/sinh-vien-tinh-nguyen-fi42" className="text-blue-600 hover:underline">Sinh viên tình nguyện</a></li>
                            <li><a href="https://youth.iuh.edu.vn/clbdn/" className="text-blue-600 hover:underline">CLB/Đội/Nhóm sinh viên</a></li>
                            <li><a href="https://kndn.iuh.edu.vn/" className="text-blue-600 hover:underline">Kết nối doanh nghiệp</a></li>
                        </ul>
                    </div>
                    <div className="w-1/3">
                        <h4 className="font-bold">Thông tin mở rộng</h4>
                        <ul className="space-y-1">
                            <li><a href="/vi/bao-chi-ve-iuh-fi8" className="text-blue-600 hover:underline">Báo chí viết về IUH</a></li>
                            <li><a href="/vi/kham-pha-fi33" className="text-blue-600 hover:underline">Khám phá IUH</a></li>
                            <li><a href="/vi/ky-nang-mem-fi31" className="text-blue-600 hover:underline">Kỹ năng mềm</a></li>
                            <li><a href="/vi/bo-suu-tap-fi32" className="text-blue-600 hover:underline">Bộ sưu tập</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <a href="/vi">
                            <img src="https://via.placeholder.com/50" alt="Logo IUH" />
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
                            <a href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fiuh.edu.vn%3A443%2F" target="_blank">
                                <img src="https://via.placeholder.com/20?text=FB" alt="Facebook" />
                            </a>
                            <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fiuh.edu.vn%3A443%2F" target="_blank">
                                <img src="https://via.placeholder.com/20?text=TW" alt="Twitter" />
                            </a>
                            <a href="https://linkedin.com/cws/share?url=https%3A%2F%2Fiuh.edu.vn%3A443%2F" target="_blank">
                                <img src="https://via.placeholder.com/20?text=IN" alt="LinkedIn" />
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