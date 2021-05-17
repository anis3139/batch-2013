var para = $('#para')
var hide = $('#hide')
var show = $('#show')
var hideShow = $('#hideShow')

para.css('color', 'red')
para.html("<b>Hello From Jquery</b>");

hide.click(function () {
    // para.css('color', 'blue')
    // para.hide(2000)
    para.removeClass('bg')
})

show.click(function () {
    // para.show(1000)
    para.addClass('bg')
})


// hideShow.click(function(){
//     para.fadeToggle(4000);
// })


hideShow.click(function () {
    para.animate({

        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
    }, 1500);
});


var btn = $('#imageBtn')
var img1 = $('#img1')
var auncor = $('#auncor')

btn.click(function () {
    img1.attr("src", "./assets/images/4.webp");
    auncor.attr("href", "https://facebook.com")
})






var form = $('#testForm')

form.submit(function (event) {
    event.preventDefault();

    var userName = $('#userName').val()
    var password = $('#password').val()
    var formPara = $('#formPara')


    var userNameValue  = 'anis';
    var passwordValue  = '12345';

    if (userName.length == 0) {
        formPara.html("User Name is Empty")
    } else if (password.length == 0) {
        formPara.html("Password is Empty")
    } else {
        if (userNameValue !== userName) {
            formPara.html("User Name is Wrong")
        } else if (passwordValue != password) {
            formPara.html("Password is Wrong")
        } else if (userNameValue === userName && passwordValue == password  ) {
            formPara.html("You are loged in")
            formPara.css('color', 'green')
            $('#userName').val('')
            $('#password').val('')
            window.location.href = 'about.html';
        } else {
            formPara.html("Something Wrong")
        }

    }

})