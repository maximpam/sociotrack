

$(document).ready(function(){

    $(".sidebar__menu__item").click(function () {
        $(this).addClass('active__tab');
        $(this).siblings().removeClass('active__tab');
        

        var arr = $(".sidebar__menu__item");
        var a = $.inArray(this, arr);
        console.log(a);

        $(".cont").eq(a).addClass('active__cont');
        $(".cont").eq(a).removeClass('nonactive__cont');
        $(".cont").eq(a).siblings().removeClass('active__cont');
        $(".cont").eq(a).siblings().addClass('nonactive__cont');
    });


    $(".main__header__tabs__item").click(function () {
        $(this).addClass('active__tab1');
        $(this).siblings().removeClass('active__tab1');


        var arr = $(".main__header__tabs__item");
        var a = $.inArray(this, arr);
        console.log(a);

        $(".cont1").eq(a).addClass('active__cont1');
        $(".cont1").eq(a).removeClass('nonactive__cont1');
        $(".cont1").eq(a).siblings().removeClass('active__cont1');
        $(".cont1").eq(a).siblings().addClass('nonactive__cont1');
    });


var socialm = [{
        "name": "Facebook",
        "followers": "1,701",
        "logo": "img\\Facebook-color.svg",
        "login": "@abhisek.daas",
        "change": "+6",
        "background": "background: linear-gradient(180deg, #39579A 0%, #2C4479 97.23%), #39579A;",
        "type": "followers",
        "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'>",
        "icon": "img\\Facebook.png"
    },
    {
        "name": "Twitter",
        "followers": "1,567",
        "logo": "img\\Twitter-color.svg",
        "login": "@abhisek.daas",
        "change": "+40",
        "background": "background: linear-gradient(180deg, #059FF5 0%, #059FC3 100% ), #059FF5;",
        "type": "followers",
        "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'>",
        "icon": "img\\Twitter.png"

    },
    {
        "name": "Instagram",
        "followers": "1,139",
        "logo": "img\\Instagram-color.svg",
        "login": "@abhisek.daas",
        "change": "-40",
        "background": "background-image:url(https://i.ibb.co/V3mwRcr/Insta.png); background-repeat: no-repeat; background-size: 220px 220px; background-position: -10px -10px;",
        "type": "followers",
        "arrow": "<img src = 'img\\arrowdown.svg' alt = 'arrow'>",
        "icon": "img\\Instagram.png"

    },


    {
        "name": "LinkedIn",
        "followers": "2,016",
        "logo": "img\\LinkedIn-color.svg",
        "login": "@abhisek.daas",
        "change": "+39",
        "background": "background: linear-gradient(180deg, #007EBB 0%, #007E9D 98.51%), #007EBB;",
        "type": "followers",
        "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'>",
        "icon": "img\\Facebook.png"

    },
    {
        "name": "YouTube",
        "followers": "3,190",
        "logo": "img\\YouTube-color.svg",
        "login": "@TheAbhisekD",
        "change": "",
        "background": "background: linear-gradient(180deg, #CE1312 0%, #B01312 100%), #CE1312;",
        "type": "subscribers",
        "arrow": " ",
        "icon": "img\\Youtube.png"

    },
    {
        "name": "Snapchat",
        "followers": "8,754",
        "logo": "img\\Snapchat.svg",
        "login": "@abhisekd",
        "change": "+90",
        "background": "background: linear-gradient(180deg, #FFFE00 0%, #F3F200 96.43%), #FFFE00;",
        "type": "snap score",
        "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'>",
        "icon": "img\\Instagram.png",
        "color": "color:black;"

    },
    {
        "name": "Google+",
        "followers": "1,033",
        "logo": "img\\GooglePlus-color.svg",
        "login": "@+AbhisekDas",
        "change": "",
        "background": "background: linear-gradient(180deg, #F93F2D 0%, #C73F2D 100%), #F93F2D;",
        "type": "followers",
        "arrow": "",
        "icon": "img\\Instagram.png"

    },
    {
        "name": "Vine",
        "followers": "1,045",
        "logo": "img\\Vine-color.svg",
        "login": "@131616535334343434",
        "change": "-10",
        "background": "background: linear-gradient(180deg, #00B687 0%, #008E87 100%), #00B687;",
        "type": "loops",
        "arrow": "<img src = 'img\\arrowdown.svg' alt = 'arrow'>",
        "icon": "img\\Vine.png"

    }

];

var socialw = [{
        "name": "Facebook",
        "followers": "1,701",
        "logo": "img\\Facebook-color.svg",
        "login": "@abhisek.daas",
        "change": "+5",
        "background": "background: linear-gradient(180deg, #39579A 0%, #2C4479 97.23%), #39579A;",
        "type": "followers",
        "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'>",
        "icon": "img\\Facebook.png"
    },
    {
        "name": "Twitter",
        "followers": "1,567",
        "logo": "img\\Twitter-color.svg",
        "login": "@abhisek.daas",
        "change": "+15",
        "background": "background: linear-gradient(180deg, #059FF5 0%, #059FC3 100% ), #059FF5;",
        "type": "followers",
        "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'>",
        "icon": "img\\Twitter.png"

    },
    {
        "name": "Instagram",
        "followers": "1,139",
        "logo": "img\\Instagram-color.svg",
        "login": "@abhisek.daas",
        "change": " ",
        "background": "background-image:url(https://i.ibb.co/V3mwRcr/Insta.png); background-repeat: no-repeat; background-size: 220px 220px; background-position: -10px -10px;",
        "type": "followers",
        "arrow": " ",
        "icon": "img\\Instagram.png"

    },


    {
        "name": "LinkedIn",
        "followers": "2,016",
        "logo": "img\\LinkedIn-color.svg",
        "login": "@abhisek.daas",
        "change": "+12",
        "background": "background: linear-gradient(180deg, #007EBB 0%, #007E9D 98.51%), #007EBB;",
        "type": "followers",
        "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'>",
        "icon": "img\\Facebook.png"

    },
    {
        "name": "YouTube",
        "followers": "3,190",
        "logo": "img\\YouTube-color.svg",
        "login": "@TheAbhisekD",
        "change": "-15",
        "background": "background: linear-gradient(180deg, #CE1312 0%, #B01312 100%), #CE1312;",
        "type": "subscribers",
        "arrow": "<img src = 'img\\arrowdown.svg' alt = 'arrow'>",
        "icon": "img\\Youtube.png"

    },
    {
        "name": "Snapchat",
        "followers": "8,754",
        "logo": "img\\Snapchat.svg",
        "login": "@abhisekd",
        "change": " ",
        "background": "background: linear-gradient(180deg, #FFFE00 0%, #F3F200 96.43%), #FFFE00;",
        "type": "snap score",
        "arrow": " ",
        "icon": "img\\Instagram.png",
        "color": "color:black;"

    },
    {
        "name": "Google+",
        "followers": "1,033",
        "logo": "img\\GooglePlus-color.svg",
        "login": "@+AbhisekDas",
        "change": "+55",
        "background": "background: linear-gradient(180deg, #F93F2D 0%, #C73F2D 100%), #F93F2D;",
        "type": "followers",
        "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'> ",
        "icon": "img\\Instagram.png"

    },
    {
        "name": "Vine",
        "followers": "1,045",
        "logo": "img\\Vine-color.svg",
        "login": "@131616535334343434",
        "change": " ",
        "background": "background: linear-gradient(180deg, #00B687 0%, #008E87 100%), #00B687;",
        "type": "loops",
        "arrow": " ",
        "icon": "img\\Vine.png"

    }

];






    var social = [{
            "name": "Facebook",
            "followers": "1,701",
            "logo": "img\\Facebook-color.svg",
            "login": "@abhisek.daas",
            "change": "+4",
            "background": "background: linear-gradient(180deg, #39579A 0%, #2C4479 97.23%), #39579A;",
            "type":"followers",
            "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'>",
            "icon": "img\\Facebook.png"
        },
        {
            "name": "Twitter",
            "followers": "1,567",
            "logo": "img\\Twitter-color.svg",
            "login": "@abhisek.daas",
            "change": "-3",
            "background": "background: linear-gradient(180deg, #059FF5 0%, #059FC3 100% ), #059FF5;",
            "type": "followers",
            "arrow": "<img src = 'img\\arrowdown.svg' alt = 'arrow'>",
            "icon": "img\\Twitter.png"

        }, 
        {
            "name": "Instagram",
            "followers": "1,139",
            "logo": "img\\Instagram-color.svg",
            "login": "@abhisek.daas",
            "change": "+11",
            "background": "background-image:url(https://i.ibb.co/V3mwRcr/Insta.png); background-repeat: no-repeat; background-size: 220px 220px; background-position: -10px -10px;",
            "type": "followers",
            "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'>",
            "icon": "img\\Instagram.png"

        }, 

      
        {
            "name": "LinkedIn",
            "followers": "2,016",
            "logo": "img\\LinkedIn-color.svg",
            "login": "@abhisek.daas",
            "change": "+39",
            "background": "background: linear-gradient(180deg, #007EBB 0%, #007E9D 98.51%), #007EBB;",
            "type": "followers",
            "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'>",
            "icon": "img\\Facebook.png"

        }, 
        {
            "name": "YouTube",
            "followers": "3,190",
            "logo": "img\\YouTube-color.svg",
            "login": "@TheAbhisekD",
            "change": "+22",
            "background": "background: linear-gradient(180deg, #CE1312 0%, #B01312 100%), #CE1312;",
            "type": "subscribers",
            "arrow": "<img src = 'img\\arrowup.svg' alt = 'arrow'>", 
            "icon": "img\\Youtube.png"

        }, 
        {
            "name": "Snapchat",
            "followers": "8,754",
            "logo": "img\\Snapchat.svg",
            "login": "@abhisekd",
            "change": " ",
            "background": "background: linear-gradient(180deg, #FFFE00 0%, #F3F200 96.43%), #FFFE00;",
            "type": "snap score",
            "arrow": " ",
            "icon": "img\\Instagram.png",
            "color": "color:black;"

        }, 
        {
            "name": "Google+",
            "followers": "1,033",
            "logo": "img\\GooglePlus-color.svg",
            "login": "@+AbhisekDas",
            "change": " ",
            "background": "background: linear-gradient(180deg, #F93F2D 0%, #C73F2D 100%), #F93F2D;",
            "type": "followers",
            "arrow": " ",
            "icon": "img\\Instagram.png"

        },  
        {
            "name": "Vine",
            "followers": "1,045",
            "logo": "img\\Vine-color.svg",
            "login": "@131616535334343434",
            "change": " ",
            "background": "background: linear-gradient(180deg, #00B687 0%, #008E87 100%), #00B687;",
            "type": "loops",
            "arrow": " ",
            "icon": "img\\Vine.png"

        }
       
    ];

    var item;
    var a;

    
    createElement = a => `
    
        <div class = "main__dashboard__item" >
        <div class = "main__dashboard__item__tile" style = "${a.background}">
        <div class = "main__dashboard__item__tile__logo">
        <img src = "${a.logo}" alt = "social_icon" >
        </div> <div class = "main__dashboard__item__tile__number" >
        <span class = "main__dashboard__item__tile__number__num" style ="${a.color}"> ${a.followers} </span><br> 
        <span class = "main__dashboard__item__tile__number__text" style ="${a.color}"> ${a.type} </span> 
        </div> 
        <div class = "main__dashboard__item__tile__change" >
        <span class = "main__dashboard__item__tile__change__text"> ${a.change}
        </span> 
        ${a.arrow}  
        </div> 
        </div> <div class = "main__dashboard__item__info" >
        <img src = "${a.icon}" alt = "avatar" >
        <div class = "main__dashboard__item__info__text" >
        <span class = "main__dashboard__item__info__text__social" > ${a.name} </span> 
        <span class = "main__dashboard__item__info__text__login" > ${a.login} </span> 
        </div> 
        </div> 
        </div>
    
    `;

const data = social.map(item => createElement(item));
$(".main__dashboard").html(data);



$(".main__header__tabs__item").click(function () {
    $(this).addClass('active__tab1');
    $(this).siblings().removeClass('active__tab1');


    var arr = $(".main__header__tabs__item");
    var a = $.inArray(this, arr);
    console.log(a);

    if (a==0) {
        const data = social.map(item => createElement(item));
        $(".main__dashboard").html(data);
    } else if (a==1) {
        const data = socialw.map(item => createElement(item));
        $(".main__dashboard").html(data);
    } else if (a==2) {
        const data = socialm.map(item => createElement(item));
        $(".main__dashboard").html(data);
    }


    $(".cont1").eq(a).addClass('active__cont1');
    $(".cont1").eq(a).removeClass('nonactive__cont1');
    $(".cont1").eq(a).siblings().removeClass('active__cont1');
    $(".cont1").eq(a).siblings().addClass('nonactive__cont1');


    
});



$(".main__header__top__add-button").click(function (event) { 
    event.preventDefault(); 
    $('.overlay').fadeIn(400, 
        function () { 
            $('.modal_form')
                .css('display', 'block') 
                .animate({
                    opacity: 1,
                    top: '50%'
                }, 200); 
        });
});

$('.modal_close, .overlay').click(function () { 
    $('.modal_form')
        .animate({
                opacity: 0,
                top: '45%'
            }, 200, 
            function () { 
                $(this).css('display', 'none');
                $('.overlay').fadeOut(400); 
            }
        );
});

});



