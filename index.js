/**
 * Bu odevde iki ayri modulde bizden tarih degiskenleri yazilmasi isteniyor
 * birinci aplikasyonumuzda verilen hijri yili miladiye ceviren bir fonksiyon yazip bunu import edecegiz
 * ikinci aplikasyonda ise girilen miladi yili hicri yila ceviren bir fonksiyon yazip bunu import edecegiz
 * 
 */

const hijriToMiladi = require("./hijri-miladi")
const MiladitoHijri = require("./miladi-hijri")


hijriToMiladi(1442)
MiladitoHijri(1995)
