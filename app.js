document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const cartCountElement = document.getElementById('cart-count');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

    let cartCount = 0;

    // 1. Sticky Navbar Effect on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'py-3');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('shadow-lg', 'py-3');
            navbar.classList.add('py-4');
        }
    });

    // 2. Add to Cart Logic with UX feedback
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Tăng biến đếm
            cartCount++;
            cartCountElement.innerText = cartCount;
            
            // Hiệu ứng phản hồi (Visual Feedback)
            const originalText = this.innerText;
            this.innerText = 'Đã Thêm ✓';
            this.classList.remove('bg-neutral-800', 'text-white');
            this.classList.add('bg-neon', 'text-black');

            // Reset nút sau 1.5 giây
            setTimeout(() => {
                this.innerText = originalText;
                this.classList.add('bg-neutral-800', 'text-white');
                this.classList.remove('bg-neon', 'text-black');
            }, 1500);
            
            // Hiệu ứng giật nhẹ icon giỏ hàng
            const cartIcon = document.querySelector('.fa-cart-shopping');
            cartIcon.classList.add('animate-bounce');
            setTimeout(() => cartIcon.classList.remove('animate-bounce'), 1000);
        });
    });
});
