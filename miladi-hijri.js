
//BU fonksiyonmuzda ise verilen miladi yil parametresini hijri yila cevirip consola yazdiriyoruz
let miladi = 621

function gregorianToHijri(a) {
    let fark = a - miladi
    let yilfarki = (fark * 11) / 365
    let hijri = (a - 621) + yilfarki
    console.log(hijri.toFixed(0))

}

module.exports = gregorianToHijri