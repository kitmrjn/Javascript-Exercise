const changeTheme = document.querySelector(".nav");
const root = document.documentElement;
const icon = document.querySelector('.sun-moon-icon');

changeTheme.addEventListener("click", () => {
    const styles = getComputedStyle(root);
    const bg = styles.getPropertyValue("--background-color").trim();
    const fc = styles.getPropertyValue("--font-color").trim();

    if (bg === "#D6F4ED" || icon.src === "sun.png") {
        root.style.setProperty( "--background-color", "black");
        root.style.setProperty( "--font-color", "#D6F4ED");
        icon.src = "moon.png";
    } else {
        root.style.setProperty( "--background-color", "#D6F4ED");
        root.style.setProperty( "--font-color", "black");
        icon.src = "sun.png";
    }

    
})