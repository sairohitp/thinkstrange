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
        imageSrc: "assets/images/operations/1.gif",
    },
    palette: {
        title: "Design",
        paragraph:
            "An iterative and collaborative phase where cross-functional teams work together to create and refine the product's design. <br><br>Unlike traditional Waterfall approaches, design in Agile is not a one-time, upfront activity but a continuous and evolving process throughout the project. <br><br>Design work typically involves user experience (UX) and user interface (UI) design, architecture design, and any other necessary design elements. Agile teams focus on delivering incremental value and frequently seek feedback from stakeholders and end-users to adapt and refine the design as the project progresses.",
        imageSrc: "assets/images/operations/2.jpeg",
    },
    code: {
        title: "Development",
        paragraph:
            "This phase emphasizes iterative, incremental progress, with the development team working on small, manageable portions of the project called 'user stories' or 'features.'<br><br>Development occurs in short time frames known as sprints, which typically last two to four weeks. <br><br>Agile promotes collaboration within cross-functional teams, including developers, testers, and sometimes designers, to ensure a holistic approach to building the product.",
        imageSrc: "assets/images/operations/3.jpeg",
    },
    bug_report: {
        title: "Testing",
        paragraph:
            "Testing occurs throughout the project, not as a separate phase at the end. Agile promotes a 'test early and often' approach, where testing is performed continuously during each sprint or iteration. <br><br>Testing encompasses various activities, including unit testing, integration testing, user acceptance testing, and quality assurance. Testers work closely with developers to ensure that new features or changes meet the specified requirements and function correctly. <br><br>Agile testing also focuses on validating that the product aligns with user expectations and feedback, enabling quick adjustments and improvements.",
        imageSrc: "assets/images/operations/4.jpeg",
    },
    deployed_code: {
        title: "Deployment",
        paragraph:
            "Unlike traditional software development, where deployment often occurs as a single, major event at the end of a project, Agile emphasizes frequent and incremental releases. <br><br>This approach enables the team to provide value to the customer early and often, as each iteration typically results in a potentially shippable product increment. Deployment in Agile is typically automated to ensure a smooth and efficient release process. <br><br>Continuous integration and continuous delivery (CI/CD) pipelines are often used to automate the building, testing, and deployment of software.",
        imageSrc: "assets/images/operations/5.gif",
    },
    fact_check: {
        title: "Review & Maintenance",
        paragraph:
            "The maintenance stage represents the ongoing activities and efforts to support, enhance, and sustain the product after it has been deployed to users. <br><br>Maintenance is a crucial part of the product lifecycle and typically includes tasks such as bug fixes, performance optimization, security updates, and the development of new features or improvements based on user feedback and changing requirements. <br><br>Agile approaches prioritize the concept of 'continuous improvement,' which means that maintenance work is carried out iteratively and in response to evolving needs.",
        imageSrc: "assets/images/operations/6.gif",
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

$(document).ready(function () {
    // Add an initial check to determine if the dark theme is set
    const isDarkTheme = localStorage.getItem("theme") === "dark";
    if (isDarkTheme) {
        $('body').addClass('active');
        loadDarkTheme();
    }

    $('.navchild-icon').click(function () {
        $('body').toggleClass('active');

        if ($('body').hasClass('active')) {
            localStorage.setItem("theme", "dark");
            loadDarkTheme();
        } else {
            localStorage.setItem("theme", "light");
            removeDarkTheme();
        }
    });

    function loadDarkTheme() {
        // Add the dark theme CSS file
        $('head').append('<link rel="stylesheet" href="dark.css" id="dark-theme-link">');
    }

    function removeDarkTheme() {
        // Remove the dark theme CSS file
        $('#dark-theme-link').remove();
    }
});


