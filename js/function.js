let activprocc = ["                    <iframe class=\"muxifr\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\"\r\n                    src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/159618167&color=%23273ac8&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false\"></iframe>"]
function closess(id, conn=''){
    const menu = document.getElementById(id)
    const isHidden = menu.classList.contains('nuuun')
    const isMinimize = menu.hasAttribute('minimize')
    if (isHidden) {
        menu.classList.remove('nuuun')
        if (conn == 'menu'){
            document.getElementById(conn).classList.add('nuuun')
        }
    } else {
        if (!isMinimize) {
            if (conn == ""){
                menu.classList.add('nuuun')
            } 
        } else {
            document.getElementById(id).classList.remove('borderaktiv')
            document.getElementById(id).classList.add('borderinac')    
            document.getElementById(id).removeAttribute('minimize', '')
        }
    }
}

function minimin(id, hide){
    if (document.getElementById(id).classList.contains('borderinac')) {
        document.getElementById(id).classList.remove('borderinac')    
        document.getElementById(id).classList.add('borderaktiv')
        document.getElementById(id).setAttribute('minimize', '')
        document.getElementById(id).setAttribute('staystep', '')
        closess(hide)
    } else {
        if (document.getElementById(id).hasAttribute('minimize')){
            closess(hide)
        }
        document.getElementById(id).classList.remove('borderaktiv')
        document.getElementById(id).classList.add('borderinac')    
        document.getElementById(id).removeAttribute('minimize', '')
    }
}

function autoredir(tipe){
    console.log('aas')
    if (tipe == 'ig'){
        window.open('https://instagram.com/me_daffahakim', '_blank')
    } else if (tipe == 'tele'){
        window.open('https://t.me/D_caat', '_blank')
    } else if (tipe == 'dcat'){
        window.open('https://me.dcat.my.id', '_blank')
    }
}

function musiik(id, hide){
    console.log('aa')
    if (document.getElementById(hide).classList.contains('nuuun')){
        closess(hide, 'menu')
        document.getElementById(id).innerHTML = activprocc[0]
    } else {
        document.getElementById(id).innerHTML = ''
        closess(hide)
    }
}


document.getElementById('startb').onclick = closess.bind(this, 'menu', "")
document.getElementById('cancelber').onclick = closess.bind(this, 'haaaah', "")
document.getElementById('okbelr').onclick = closess.bind(this, 'haaaah', "")
document.getElementById('ehehe').onclick = closess.bind(this, 'haaaah', "")
document.getElementById('closein').onclick = closess.bind(this, 'winthr', "")
document.getElementById('minimin').onclick = minimin.bind(this, 'installektiv', 'winthr')
document.getElementById('installektiv').onclick = minimin.bind(this, 'installektiv', 'winthr')
document.getElementById('igg').onclick = autoredir.bind(this, 'ig')
document.getElementById('telee').onclick = autoredir.bind(this, 'tele')
document.getElementById('ebout').onclick = closess.bind(this, 'eboudt', 'menu')
document.getElementById('ehehe-ebod').onclick = closess.bind(this, 'eboudt', '')
document.getElementById('scloud').onclick = musiik.bind(this, 'injectmux', 'sclm')
document.getElementById('ehehe-sclm').onclick = musiik.bind(this, 'injectmux', 'sclm')

// function selected () {
//     const apps = document.getElementById('ahihi')
//     const val = apps.classList.contains('select')
//     if (!val){
//         apps.classList.add('select')
//     }
// }

// document.getElementById('ahihi').onclick = selected

