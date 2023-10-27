const splash = document.querySelector(".splash");
document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 1000);
});

const faqItem = document.querySelectorAll(".faqitem");

faqItem.forEach((item) => {
    const question = item.querySelector(".faqquestion");
    const answer = item.nextElementSibling;
    const icon = item.querySelector("i");

    item.addEventListener("click", () => {
        faqItem.forEach((otherItem) => {
            if (otherItem !== item) {
                const otherAnswer = otherItem.nextElementSibling;
                const otherIcon = otherItem.querySelector("i");

                otherAnswer.classList.remove("active");
                otherIcon.classList.remove("active");
                otherAnswer.style.maxHeight = "0";
            }
        });

        answer.classList.toggle("active");
        icon.classList.toggle("active");

        if (answer.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = "0";
        }
    });
});

const themeButton = document.querySelector('.navchild-icon');
  const linkElement = document.querySelector('link[rel="stylesheet"]');
  const darkThemeURL = 'dark.css'; // Replace with your dark theme stylesheet URL
  const lightThemeURL = 'style.css'; // Replace with your light theme stylesheet URL

  // Function to toggle between dark and light themes
  function toggleTheme() {
    if (linkElement.getAttribute('href') === darkThemeURL) {
      linkElement.setAttribute('href', lightThemeURL);
    } else {
      linkElement.setAttribute('href', darkThemeURL);
    }
  }

  // Add a click event listener to the theme button
  themeButton.addEventListener('click', toggleTheme);


