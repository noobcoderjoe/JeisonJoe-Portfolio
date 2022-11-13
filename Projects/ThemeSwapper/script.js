const sun_moon_container = document.querySelector(".sun-moon-container");


document.querySelector(".theme-toggle-button").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const currentRotation = parseInt(getComputedStyle(sun_moon_container).getPropertyValue('--rotation'));

    sun_moon_container.style.setProperty('--rotation', currentRotation + 180);
});





