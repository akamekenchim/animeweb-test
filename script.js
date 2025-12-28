// Đợi cho nội dung trang web tải xong mới chạy code
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.sticky-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.transform = "translateY(0)"; // Hiện ra
            header.style.opacity = "1";
            header.style.pointerEvents = "auto"; // Cho phép bấm vào menu khi hiện
        } else {
            header.style.transform = "translateY(-100%)"; // Ẩn lên trên
            header.style.opacity = "0";
            header.style.pointerEvents = "none"; // Tránh bấm nhầm khi đang ẩn
        }
    });
});