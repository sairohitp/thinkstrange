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

const icons = document.querySelectorAll(".opicon");
const title = document.querySelector(".title");
const paragraph = document.querySelector(".procedure-desc h4");
const image = document.getElementById("procedure-image");

const contentData = {
    description: {
        title: "Planning",
        paragraph:
            "Understanding and defining the project flow to establish the goals and vision of the project to ensure we capture all the requirements.<br><br> Planning is the compass that guides our journey towards success. It's the meticulous art of charting a course, setting objectives, and organizing resources to reach our goals. From the inception of an idea to the execution of a project, planning is the foundation upon which we build our path to prosperity. <br><br> It enables us to anticipate challenges, allocate resources efficiently, and stay agile in an ever-changing world.",
        imageSrc: "assets/images/operations/1.jpeg",
    },
    palette: {
        title: "Design",
        paragraph:
            "Understanding and defining the project flow to establish the goals and vision of the project to ensure we capture all the requirements.<br><br> Planning is the compass that guides our journey towards success. It's the meticulous art of charting a course, setting objectives, and organizing resources to reach our goals. From the inception of an idea to the execution of a project, planning is the foundation upon which we build our path to prosperity. <br><br> It enables us to anticipate challenges, allocate resources efficiently, and stay agile in an ever-changing world.",
        imageSrc: "assets/images/operations/2.jpeg",
    },
    code: {
        title: "Development",
        paragraph:
            "Understanding and defining the project flow to establish the goals and vision of the project to ensure we capture all the requirements.<br><br> Planning is the compass that guides our journey towards success. It's the meticulous art of charting a course, setting objectives, and organizing resources to reach our goals. From the inception of an idea to the execution of a project, planning is the foundation upon which we build our path to prosperity. <br><br> It enables us to anticipate challenges, allocate resources efficiently, and stay agile in an ever-changing world.",
        imageSrc: "assets/images/operations/3.jpeg",
    },
    bug_report: {
        title: "Testing",
        paragraph:
            "Understanding and defining the project flow to establish the goals and vision of the project to ensure we capture all the requirements.<br><br> Planning is the compass that guides our journey towards success. It's the meticulous art of charting a course, setting objectives, and organizing resources to reach our goals. From the inception of an idea to the execution of a project, planning is the foundation upon which we build our path to prosperity. <br><br> It enables us to anticipate challenges, allocate resources efficiently, and stay agile in an ever-changing world.",
        imageSrc: "assets/images/operations/4.jpeg",
    },
    deployed_code: {
        title: "Deployment",
        paragraph:
            "Understanding and defining the project flow to establish the goals and vision of the project to ensure we capture all the requirements.<br><br> Planning is the compass that guides our journey towards success. It's the meticulous art of charting a course, setting objectives, and organizing resources to reach our goals. From the inception of an idea to the execution of a project, planning is the foundation upon which we build our path to prosperity. <br><br> It enables us to anticipate challenges, allocate resources efficiently, and stay agile in an ever-changing world.",
        imageSrc: "assets/images/operations/5.jpeg",
    },
    fact_check: {
        title: "Review & Maintenance",
        paragraph:
            "Understanding and defining the project flow to establish the goals and vision of the project to ensure we capture all the requirements.<br><br> Planning is the compass that guides our journey towards success. It's the meticulous art of charting a course, setting objectives, and organizing resources to reach our goals. From the inception of an idea to the execution of a project, planning is the foundation upon which we build our path to prosperity. <br><br> It enables us to anticipate challenges, allocate resources efficiently, and stay agile in an ever-changing world.",
        imageSrc: "assets/images/operations/6.jpeg",
    },
};

function updateContentAndStyle(icon) {
    const iconName = icon.textContent.trim();
    const content = contentData[iconName];

    if (content) {
        // Update content
        title.textContent = content.title;
        paragraph.innerHTML = content.paragraph;
        image.src = content.imageSrc;

        // Remove 'active' class from all icons
        icons.forEach((icon) => {
            icon.classList.remove("active");
        });

        // Add 'active' class to the clicked icon
        icon.classList.add("active");
    }

}

icons[0].classList.add('active');
updateContentAndStyle(icons[0]);

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        updateContentAndStyle(icon);
    });
});
