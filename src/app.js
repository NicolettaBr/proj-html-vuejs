
var app = new Vue({
    el: '#root',
        data: {

            logo_nav: {
                logo: 'img/takeout-logo-2x-400x85.png',
                alt: 'logo'
            },

            menu_nav: ['Home', 'Order Online', 'About', 'News', 'Contact Us'],
            
            menu_footer_1:{
                title: 'Order Online',
                menu_options: ['Appetizers', 'Burgers', 'Pizza', 'Fries', 'Sides', 'Desserts', 'Beverages', 'Specials']
            },

            menu_footer_2:{
                title: 'Navigate',
                menu_options: ['Home', 'Alternate Home', 'Menu', 'About', 'News', 'Contact us', 'Cart']
            },

            menu_footer_3:{
                title: 'Information', 
                menu_options: ['My Account', 'Term Of Service', 'Privacy Policy']
            },

            menu_footer_4:{
                title: 'Opening Hours', 
                menu_options: [ 'Mon - 10AM to 11PM', 'Tue - 10AM to 11PM', 'Wed - 10AM to 11PM', 'Thur - 10AM to 11PM', 'Fri - 10AM to 11PM', 'Sat - 10AM to 1AM', 'Sun - 11AM to 10PM']
            },

            menu_footer_5:{
                title: 'Voucher'
            },
             

            apple_store:{
                apple: 'img/app-store-badge-200x67.png',
                alt: 'apple'
            },

            play_store:{
                play: 'img/play-store-badge-200x67.png',
                alt: 'play'
            },

            img_sale:{
                sale: 'img/footer-coupon-400x401.png',
                alt: 'sale-coupon'
            },

            email_input:''
        },

        methods: {
           
        },
});