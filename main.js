var kepa1=document.querySelector('.Кепа1')
var dimas=document.querySelector('.Димас1')
var dimas2=document.querySelector('.Димас')
var dydec=document.querySelector('.ДимасДудец2_копия')
var dydec2=document.querySelector('.ДимасДудец2')
var kepa2=document.querySelector('.Кепа1_копия')
var aud = document.querySelector('audio')

dimas.addEventListener('click', function()
{
    var text1 = document.querySelector('.Найди_димаса')
    text1.innerHTML = 'А теперь кепку'
    dimas.setAttribute('hidden','true')
    kepa1.removeAttribute('hidden')
})

kepa1.addEventListener('click', function()
{
    var text1 = document.querySelector('.Найди_димаса') 
    text1.setAttribute('hidden', 'true')
    kepa1.setAttribute('hidden', 'true')
    dimas2.removeAttribute('hidden')
    dydec.removeAttribute('hidden')
    dydec2.removeAttribute('hidden')
    kepa2.removeAttribute('hidden')
    aud.play()
})
