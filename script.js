/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        document
            .querySelector(".preloader")
            .classList.add("hide");

    }, 700);

});



/* ================= MUSIC ================= */

const music =
    document.getElementById(
        "backgroundMusic"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );


let musicPlaying = false;


musicButton.addEventListener(
    "click",
    async function () {

        if (!musicPlaying) {

            try {

                await music.play();

                musicPlaying = true;

                musicButton.classList.add(
                    "active"
                );

                musicButton.innerHTML =
                    "♫ <span>Đang phát</span>";

            }

            catch (error) {

                alert(
                    "Hãy thêm file music.mp3 vào thư mục music trước nhé!"
                );

            }

        }

        else {

            music.pause();

            musicPlaying = false;

            musicButton.classList.remove(
                "active"
            );

            musicButton.innerHTML =
                "♫ <span>Nhạc</span>";

        }

    }
);



/* ================= SCROLL REVEAL ================= */

const elements =
    document.querySelectorAll(
        ".story-grid, .world, .timeline-item, .letter-paper, .gallery-item"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: .15
        }

    );


elements.forEach(
    function (element) {

        observer.observe(element);

    }
);



/* ================= SMOOTH NAV ================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const target =
                        document.querySelector(
                            this.getAttribute("href")
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        }
    );



/* ================= IMAGE CLICK ================= */

document
    .querySelectorAll(
        ".gallery-item"
    )
    .forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    const image =
                        this.querySelector("img");

                    if (image) {

                        window.open(
                            image.src,
                            "_blank"
                        );

                    }

                }
            );

        }
    );