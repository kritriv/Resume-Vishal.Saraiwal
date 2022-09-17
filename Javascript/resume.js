// Repples Effect 
$(document).ready(function () {

    $('#profile__ripple').ripples({
        resolution: 512,
        dropRadius: 10,
        perturbance: 0.04
    });

    // Image Filter

    var $wrapper = $('.portfolio__wrapper');

    //Initialize isotope

    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;
        link.addEventListener('click', function (e) {
            e.preventDefault();

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
            });
            e.target.classList.add('active');

        })
    })

    //Magnify Popup

    $('.magnify').magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        },
        zoom : {
            enable : true
        }
    });

});

