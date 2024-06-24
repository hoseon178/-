document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const menuContent = document.getElementById("menuContent");

    menuButton.addEventListener("mousedown", function() {
        // toggle 메뉴 열기/닫기
        if (menuContent.style.display === "block") {
            menuContent.style.display = "none";
            menuButton.textContent = "MENU";
        } else {
            menuContent.style.display = "block";
            menuButton.textContent = "MENU";
        }
    });
});
