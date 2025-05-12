$(function () {
    const lks = document.querySelectorAll('.lk');
    const sign = document.querySelector('.sing_up');
    const close = document.querySelector('.sing_close');
    const menu_btn = document.querySelector('.menu_open');
    const menu = document.querySelector('.menu');
    const menu_close = document.querySelector('.menu_close');
    const zatem = document.querySelector('.zatem');
    const podmenus = document.querySelector('.podmenu_list');
    const onmenu = document.querySelectorAll('.menu_item ');
    // const podmenus = document.querySelector('.podmenu_list');
    const body = document.querySelector('.body');

    // //многоуровневое меню

    const op = document.querySelector('.menu_list')
    op.addEventListener('click', e => {
        const curb = e.target.closest('button')
        if (!curb) return;
        const onli = op.querySelector('.onmenu');
        onli?.classList.remove('onmenu')
        const curli = curb.closest('li');
        curli.classList.toggle('onmenu', curli !== onli)
    })


    window.addEventListener("click", function (event) {
        if (!event.target.closest('.podmenu')) {
            document.querySelectorAll('.menu_item').forEach(e => e.classList.remove('onmenu'));
        }
    });




    // личный кабинет
    for (lk of lks) {
        lk.addEventListener('click', () => {
            sign.classList.add('sing_up_open');
            zatem.classList.add('zatem_open');
        })
    }

    close.addEventListener('click', () => {
        sign.classList.remove('sing_up_open');

        if (!menu.classList.contains("menu_open")) {
            zatem.classList.remove('zatem_open');
        }
    })

    zatem.addEventListener('click', () => {
        sign.classList.remove('sing_up_open');

        if (!menu.classList.contains("menu_open")) {
            zatem.classList.remove('zatem_open');
        }
    })


    // меню
    menu_btn.addEventListener('click', () => {
        menu.classList.add('menu_open');
        zatem.classList.add('zatem_open');

    })

    menu_close.addEventListener('click', () => {
        menu.classList.remove('menu_open');
        if (!sign.classList.contains("sing_up_open")) {
            zatem.classList.remove('zatem_open');
        }
    })

    zatem.addEventListener('click', () => {
        menu.classList.remove('menu_open');
        if (!sign.classList.contains("sing_up_open")) {
            zatem.classList.remove('zatem_open');
        }
    })



    //скролинги, анимация блоков
    window.addEventListener('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            document.querySelector('.header').style.position = "fixed";
            document.querySelector('.header').style.z_index = "1";
        } else {
            document.querySelector('.header').style.position = "relative";
        }
    });


    (function () {
        var square = document.querySelector('.what_inner');

        var observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                var entrySquare = entry.target.querySelector('.upimage');
                if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                    return;
                }

                if (entry.isIntersecting) {
                    entrySquare.classList.add('upimage_on');
                    return;
                }

                entrySquare.classList.remove('upimage_on');
            });
        });

        observer.observe(square);
    })();

    (function () {
        var square = document.querySelector('.friend_images');

        var observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                var entrySquare = entry.target.querySelector('.persons');
                if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                    return;
                }

                if (entry.isIntersecting) {
                    entrySquare.classList.add('persons_on');
                    return;
                }

                entrySquare.classList.remove('persons_on');
            });
        });

        observer.observe(square);
    })();


    //слики, карусель
    $('.prezentation_slick').slick({
        slidesToShow: 1,
        infinite: false,
        dots: true,
        prevArrow: '<button type="button" class="slick_arrow slick_prev"><img src="img/arrow_left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick_arrow slick_next"><img src="img/arrow_right.svg" alt=""></button>',
    });


        $slickGreen = false;
    function greenSlider() {
        if ($(window).width() < 601) {
            if (!$slickGreen) {
                $(".packs_list").slick({
                    slidesToShow: 3,
                    infinite: false,
                    dots: false,
                    arrows: false,
                });



                $slickGreen = true;
            }
        } else if ($(window).width() > 601) {
            if ($slickGreen) {
                $('.packs_list').slick('unslick');

                $slickGreen = false;
            }
        }
    };

    $(document).ready(function () {
        greenSlider();
    });
    $(window).on('resize', function () {
        greenSlider();
    });

    //вопрос ответ
    let btns = document.querySelectorAll('.question_btn');
    for (btn of btns) {
        btn.addEventListener('click', function () {
            let card = this.closest('.question_list li');
            let arr = card.querySelector('.question_btn svg');
            let clas = card.querySelector('.question_otvet');

            if (arr.style.transform === "rotate(45deg)") {
                arr.style.transform = "rotate(0deg)";

                card.classList.remove("on");
                card.classList.add("close");


                setTimeout(function () {

                    card.classList.remove("on");
                    card.classList.remove("close");

                }, 1000);

            } else {
                arr.style.transform = "rotate(45deg)";
                card.classList.add("on");
            }

        });
    }







});