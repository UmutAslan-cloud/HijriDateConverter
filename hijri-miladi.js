
//Bu fonksiyonumzda verdigimiz hijri yil parametresinin miladi yila cevirip console a yazdiriyoruz
function hijriToGregorian(b) {
  let miladigun = (b * 354) / 365
  let miladiyil = miladigun + 622
  console.log(miladiyil.toFixed(0))
}
module.exports = hijriToGregorian