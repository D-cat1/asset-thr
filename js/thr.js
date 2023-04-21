

const json_thr = {
    "display1": "<P>\r\n                            Program ini akan memberikan THR bisa berupa pulsa ataupun saldo E-wallet secara random <br>\r\n                        </P>\r\n                        <P>\r\n                            Silahkan Klik next apabila setuju <br>\r\n                        </P>\r\n                        <button class='btn' onclick='nextstep()'>Next</button>",
    "display2": "<div class=\"field-row-stacked mod\">\r\n                            <label for=\"num\">Masukkan Nomor Telp Yang Mau diisi</label>\r\n                            <input id=\"num\" type=\"number\" placeholder=\"085xxxx\" />\r\n                        </div>\r\n\r\n                        <div class=\"field-row-stacked mod\">\r\n                            <label for=\"num\">Type THR</label>\r\n                            <select id='selekr'>\r\n                                <option disabled selected hidden>Pilih</option><option>Pulsa [Telkomsel]</option><option>Pulsa [Indosat]</option><option>Pulsa [Three]</option><option>Pulsa [XL]</option><option>Pulsa [Axis]</option><option>Pulsa [Smartfren]</option><option>Pulsa [By.u]</option>\r\n                                <option>Saldo Dana</option>\r\n                                <option>Saldo OVO</option>\r\n                                <option>Saldo GOPAY</option>\r\n                                <option>Saldo LinkAja!</option>\r\n                                <option>Saldo ShopeePay</option>\r\n                                                     </select>\r\n                        </div>\r\n                        <button class='btn' onclick='nextstep()'>Next</button>",
    "display3": "<div class=\"field-row-stacked mod2\">\r\n                            <P class=\"modlod\">Menginstall THR</P>\r\n                            <P class=\"modlod2\">Silahkan tunngu selagi kami menghubungi server thr sekaligus memvalidasi apakah kamu berhasil untuk menerima thr ini.</P>\r\n                            <P class=\"modlod2\">Menghubungi Lorem ipsum dolor sit amet..</P>\r\n                            <div class=\"meter\" >\r\n                                <div style=\"width: 0%\" id=\"meterp\"></div>\r\n                            </div>\r\n                        </div>",
    "displaysucc": "<h4>Selamat !</h4>\r\n<p class=\"restrl\">THR telah berhasil diklaim, silahkan tunggu sampai paket thr dikirimkan <br>apabila tetap belum terkirim dalam 1 x 24 jam kamu dapat menghubungi saya melalui tombol start</p>\r\n<button onclick='selesai()' class=\"end\">Selesai</button>",
    "displayfail": "<h4>Yaah :[</h4>\r\n<p class=\"restrl\">udah ada yang dapet duluan nih sob <br>Tunggu event selanjutnya aja ya!</p>\r\n<button onclick='selesai()' class=\"end\">Selesai</button>"
}



let hitungstep = 0

let obj = new Object()


const addthr = async (nom, tp) => {
    var fpPromise = FingerprintJS.load()
    const fp = await fpPromise
    const result = await fp.get()
    const gueh = await fetch('/notify', {
        method: 'POST',
        body: JSON.stringify({ id_view: result.visitorId, nomor: nom, tipe: tp}),
        headers: {
            'content-type': 'application/json;charset=UTF-8',

        },
    })
    const getjson = await gueh.json()
    return getjson.success
}

const mhank = document.getElementById('ahihi');
const mhenk = document.getElementById('next');
const isikonten = document.getElementById('konthr')

mhank.addEventListener('click', () => {
    const winthr = document.getElementById('winthr')
    if (winthr.classList.contains('nuuun')) {
        winthr.classList.remove('nuuun')
        if (hitungstep == 0) {
            isikonten.innerHTML = json_thr.display1
        } else if (hitungstep == 1) {
            isikonten.innerHTML = json_thr.display2
        }
    }
})

function minus() {
    hitungstep--
}

function testloading_auto() {
    const doc = document.getElementById('meterp')
    const valus = parseInt(doc.style.width)
    doc.style.width = (valus + 10).toString() + '%'


    setTimeout(() => {
        if (valus < 90) {
            testloading_auto()
        } else {
            nextstep()
        }
    }, 1000)
}

function selesai() {
    hitungstep = 0
    document.getElementById('winthr').classList.add('nuuun')
    removetag('konthr')
    document.getElementById('installektiv').classList.add('nuuun')
    document.getElementById('ahihi').innerHTML = ''
}

const nextstep = async () => {
    hitungstep++
    if (hitungstep == 1) {
        isikonten.innerHTML = json_thr.display2
    } else if (hitungstep == 2) {
        const number = document.getElementById('num').value
        const selek = document.getElementById('selekr').value
        const mhnok = document.getElementById('haaaah')
        if (number.length < 10) {
            mhnok.classList.remove('nuuun')
            document.getElementById('numsss').innerText = 'Nomor tidak sesuai format'
            document.getElementById('okbelr').removeAttribute('hidden')
        } else if (selek == 'Pilih') {
            mhnok.classList.remove('nuuun')
            document.getElementById('numsss').innerText = 'Kamu belum memilih tipe THR'
            document.getElementById('okbelr').removeAttribute('hidden')
        } else {
            document.getElementById('numsss').innerText = 'Nomor yang kamu isi : ' + number
            document.getElementById('tipethr').innerText = 'Tipe: ' + selek
            obj['nomor'] = number
            obj['tipe'] = selek
            mhnok.classList.remove('nuuun')
            document.getElementById('okber').removeAttribute('hidden')
            document.getElementById('cancelber').removeAttribute('hidden')
            document.getElementById('okbelr').setAttribute('hidden', '')
        }
    } else if (hitungstep == 3) {
        document.getElementById('haaaah').classList.add('nuuun')
        isikonten.innerHTML = json_thr.display3
        setTimeout(testloading_auto, 1000)
    } else if (hitungstep == 4) {
        console.log(obj)
        const ehehe = await addthr(obj.nomor, obj.tipe)

        if (ehehe) {
            isikonten.innerHTML = json_thr.displaysucc
        } else {
            isikonten.innerHTML = json_thr.displayfail
        }
        
    }

}

function removetag(id) {
    document.getElementById(id).innerHTML = ''
}

document.getElementById('closein').addEventListener('click', () => {
    removetag('konthr')
    document.getElementById('installektiv').classList.add('nuuun')
    hitungstep = 0
})

document.getElementById('cancelber').addEventListener('click', () => {
    obj = {}
    hitungstep--
})

document.getElementById('okbelr').addEventListener('click', () => {
    hitungstep--
})

document.getElementById('ehehe').addEventListener('click', () => {
    hitungstep--
})