document.addEventListener("DOMContentLoaded", function() {
    // 選取所有帶有 fade-section class 的區塊
    const sections = document.querySelectorAll('.fade-section');

    // 設定觀察器選項
    const observerOptions = {
        root: null, // 預設為瀏覽器視窗
        rootMargin: '0px',
        threshold: 0.2 // 當區塊有 20% 進入畫面時觸發
    };

    // 建立觀察器
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 加入 visible class 來觸發 CSS 動畫
                entry.target.classList.add('visible');
                // 觸發後即停止觀察該區塊，讓動畫只播放一次
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 開始觀察每個區塊
    sections.forEach(section => {
        observer.observe(section);
    });
});
