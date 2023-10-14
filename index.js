const splash = document.querySelector(".splash");
document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 1000);
})

const faqItem = document.querySelectorAll(".faqitem")

faqItem.forEach(item => {
    const question = item.querySelector(".faqquestion")
    const answer = item.nextElementSibling
    const icon = item.querySelector("i")

    item.addEventListener("click", () => {
        faqItem.forEach(otherItem => {
            if (otherItem !== item) {
                const otherAnswer = otherItem.nextElementSibling
                const otherIcon = otherItem.querySelector("i")

                otherAnswer.classList.remove("active")
                otherIcon.classList.remove("active")
                otherAnswer.style.maxHeight = "0";                
            }
        })

        answer.classList.toggle("active")
        icon.classList.toggle("active")

        if (answer.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px"
        } else {
            answer.style.maxHeight = "0"
        }
    })
})