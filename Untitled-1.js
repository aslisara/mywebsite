<button id="blog">Birinci Buton</button>
<button id="cv">İkinci Buton</button>
ocument.getElementById("bir").addEventListener("click", function() {
  alert("Birinci butona tıklandı!");
});

// İkinci butona tıklanıldığında yapılacaklar
document.getElementById("iki").addEventListener("click", function() {
  console.log("İkinci butona tıklandı!");
  // Burada bilgileri içeren kodlarınızı yazabilirsiniz
});