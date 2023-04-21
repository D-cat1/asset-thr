const el = document.getElementById("jam-eui")


window.addEventListener("load", ()=> {
    const update_waktu = () => {
        const date = new Date()
        const hr = date.getHours().toString().padStart(2, '0')
        const min = date.getMinutes().toString().padStart(2, '0')
        const sec = (60 - date.getSeconds()) * 1000
        console.log('sisa waktu : '+sec)
        el.innerText = `${hr}:${min}`
        setTimeout(update_waktu, sec)
    }
    update_waktu()
})