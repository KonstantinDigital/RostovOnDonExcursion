// проверка ввода логина и пароля
function onClick() {
    let login = "qwerty@mail.ru";
    let password = "12345678";
    if (document.loginPass.login.value == login && document.loginPass.pass.value == password) {
        alert("Добро пожаловать на сайт! Вы авторизовались");
    }
    else {
        alert("Неправильно введён логин и(или) пароль");
    }
}
//далле идут 24 кнопки с функцией замены атрибутов src и alt у изображжения по клику (jQuery), а также замена текста-заголовка к фотографии
$("#firstImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/akvapark_h2o.jpg");
    img.setAttribute("alt", "Аквапарк H2O");
    document.querySelector('#imageShowplaceText').innerHTML = 'Аквапарк H <sup>2</sup>O';
})

$("#secondImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/bolshaya_sadovaya_ulitsa.jpg");
    img.setAttribute("alt", "ул.Большая Садовая");
    document.querySelector('#imageShowplaceText').innerHTML = 'ул.Большая Садовая';
})

$("#thirdImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/centralnyj_park_gorkogo.jpg");
    img.setAttribute("alt", "Центральный Парк Горького");
    document.querySelector('#imageShowplaceText').innerHTML = 'Центральный Парк Горького';
})

$("#fourthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/cerkov_surb_hach.jpg");
    img.setAttribute("alt", "Церковь Сурб-Хач");
    document.querySelector('#imageShowplaceText').innerHTML = 'Церковь Сурб-Хач';
})

$("#fifthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/dom_margarity_chernovoj.jpg");
    img.setAttribute("alt", "Дом Маргариты Черновой");
    document.querySelector('#imageShowplaceText').innerHTML = 'Дом Маргариты Черновой';
})

$("#sixthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/fontan_na_teatralnoy_ploshchadi.jpg");
    img.setAttribute("alt", "Фонтан на Театральной Площади");
    document.querySelector('#imageShowplaceText').innerHTML = 'Фонтан на Театральной Площади';
})

$("#seventhImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/iverskiy_zhenskiy_monastyr.jpg");
    img.setAttribute("alt", "Иверский Женский Монастырь");
    document.querySelector('#imageShowplaceText').innerHTML = 'Иверский Женский Монастырь';
})

$("#eighthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/kumzhenskaya_roscha.jpg");
    img.setAttribute("alt", "Кумженская Роща");
    document.querySelector('#imageShowplaceText').innerHTML = 'Кумженская Роща';
})

$("#ninthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/lev_ber_don.jpg");
    img.setAttribute("alt", "Левый Берег Дона");
    document.querySelector('#imageShowplaceText').innerHTML = 'Левый Берег Дона';
})

$("#tenthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/muzei_izobrazitelnyh_iskusstv.jpg");
    img.setAttribute("alt", "Музей Изобразительных Искусств");
    document.querySelector('#imageShowplaceText').innerHTML = 'Музей Изобразительных Искусств';
})

$("#eleventhImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/muzey_kraevedeniya.jpg");
    img.setAttribute("alt", "Музей Краеведения");
    document.querySelector('#imageShowplaceText').innerHTML = 'Музей Краеведения';
})

$("#twelfthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/muzey_skzhd.jpg");
    img.setAttribute("alt", "Музей СКЖД");
    document.querySelector('#imageShowplaceText').innerHTML = 'Музей СКЖД';
})

$("#thirteenthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/muzykalnyj_teatr.jpg");
    img.setAttribute("alt", "Музыкальный Театр");
    document.querySelector('#imageShowplaceText').innerHTML = 'Музыкальный Театр';
})

$("#fourteenthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/naberezhnaya_reki_don.jpg");
    img.setAttribute("alt", "Набережная Реки Дон");
    document.querySelector('#imageShowplaceText').innerHTML = 'Набережная Реки Дон';
})

$("#fifteenthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/paramonovskie_sklady.jpg");
    img.setAttribute("alt", "Парамоновские Склады");
    document.querySelector('#imageShowplaceText').innerHTML = 'Парамоновские Склады';
})

$("#sixteenthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/park_revolyutsii.jpg");
    img.setAttribute("alt", "Парк Революции");
    document.querySelector('#imageShowplaceText').innerHTML = 'Парк Революции';
})

$("#seventeenthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/pokrovskaja_cerkov.jpg");
    img.setAttribute("alt", "Покровская Церковь");
    document.querySelector('#imageShowplaceText').innerHTML = 'Покровская Церковь';
})

$("#eighteenthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/pushkinskaya_ulica.jpg");
    img.setAttribute("alt", "ул.Пушкинская");
    document.querySelector('#imageShowplaceText').innerHTML = 'ул.Пушкинская';
})

$("#nineteenthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/rostovskii_muzei_kosmonavtiki.jpg");
    img.setAttribute("alt", "Ростовский Музей Космонавтики");
    document.querySelector('#imageShowplaceText').innerHTML = 'Ростовский Музей Космонавтики';
})

$("#twentiethImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/rostovskii_zoopark.jpg");
    img.setAttribute("alt", "Ростовский Зоопарк");
    document.querySelector('#imageShowplaceText').innerHTML = 'Ростовский Зоопарк';
})

$("#twentyfirstImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/sobor_presvyatoy_bogoroditsy.jpg");
    img.setAttribute("alt", "Собор Пресвятой Богородицы");
    document.querySelector('#imageShowplaceText').innerHTML = 'Собор Пресвятой Богородицы';
})

$("#twentysecondImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/tachanka_pamjatnik.jpg");
    img.setAttribute("alt", "Тачанка");
    document.querySelector('#imageShowplaceText').innerHTML = 'Тачанка';
})

$("#twentythirdImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/teatr_dramy_imeni_gorkogo.jpg");
    img.setAttribute("alt", "Театр Драмы им.Горького");
    document.querySelector('#imageShowplaceText').innerHTML = 'Театр Драмы им.Горького';
})

$("#twentyfourthImageButton").click(function () {
    let img = document.getElementById("imageShowplace");
    img.setAttribute("src", "img/zmievskaya_balka.jpg");
    img.setAttribute("alt", "Змиевская Балка");
    document.querySelector('#imageShowplaceText').innerHTML = 'Змиевская Балка';
})
