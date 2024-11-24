document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".grid-container");

    // 페이지 전환 URL 설정
    const pages = ["index.html", "page2.html", "page3.html", "page4.html"]; // 페이지 리스트
    const currentUrl = window.location.href;
    const currentPageIndex = pages.findIndex((page) => currentUrl.includes(page));

    // 페이지별 블록 설정
    let totalBlocks = 0;
    if (currentPageIndex === 0) {
        totalBlocks = 16; // 페이지 1: 총 16개
    } else if (currentPageIndex === 1) {
        totalBlocks = 52; // 페이지 2: 총 52개
    } else if (currentPageIndex === 2) {
        totalBlocks = 208; // 페이지 3: 총 208개
    }
        else if (currentPageIndex === 3) {
            totalBlocks = 104 * 8; // 페이지 4: 총 개
            
    }

    // 블록 생성
    for (let i = 0; i < totalBlocks; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        container.appendChild(block);
    }

    // 클릭 시 페이지 전환
    container.addEventListener("click", () => {
        const nextPageIndex = (currentPageIndex + 1) % pages.length; // 다음 페이지 인덱스 계산
        window.location.href = pages[nextPageIndex]; // 다음 페이지로 이동
    });
});
