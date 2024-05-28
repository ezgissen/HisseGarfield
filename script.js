class FinnhubAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://finnhub.io/api/v1/';
    this.symbolLogos = {
      AAPL: 'https://logo.clearbit.com/apple.com',
      XIACF: 'https://logo.clearbit.com/mi.com',
      SSNLF: 'https://logo.clearbit.com/samsung.com',
      MSFT: 'https://logo.clearbit.com/microsoft.com',
      GOOGL: 'https://logo.clearbit.com/google.com',
      AMZN: 'https://logo.clearbit.com/amazon.com',
      META: 'https://logo.clearbit.com/meta.com'
    };
  }

  async fetchData(symbol, fromDate, toDate) {
    const url = `${this.baseUrl}stock/candle?symbol=${symbol}&resolution=D&from=${fromDate}&to=${toDate}&token=${this.apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return { symbol, data };
    } catch (error) {
      console.error('Error:', error);
    }
  }

  displayData({ symbol, data }) {
    const dataContainer = document.getElementById('data-container');
    if (data) {
      const currentDate = new Date().toLocaleDateString();
      const logoUrl = this.symbolLogos[symbol] || 'default-logo.png';

      const canvasId = `chart-${symbol}`;
      dataContainer.innerHTML += `
        <div class="stock-data">
          <h3><img src="${logoUrl}" alt="${symbol} Logo" style="width: 30px; height: 30px; vertical-align: middle;"> ${symbol} Hisse Senedi Verileri (${currentDate})</h3>
          <canvas id="${canvasId}"></canvas>
        </div>
      `;

      const labels = data.t.map(timestamp => new Date(timestamp * 1000).toLocaleDateString());
      const chartData = {
        labels: labels,
        datasets: [{
          label: 'Kapanış Fiyatı',
          data: data.c,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };

      const config = {
        type: 'line',
        data: chartData,
      };

      new Chart(
        document.getElementById(canvasId),
        config
      );
    } else {
      dataContainer.innerHTML += '<p> Hisse Senedi Verileri bulunamadı.</p>';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const finnhub = new FinnhubAPI('cpb2gd1r01qniodce3o0cpb2gd1r01qniodce3og');
  const symbols = ['AAPL', 'XIACF', 'SSNLF', 'MSFT', 'GOOGL', 'AMZN', 'META'];

  const today = new Date();
  const oneWeekAgo = new Date(today);
  oneWeekAgo.setDate(today.getDate() - 7);

  const toDate = Math.floor(today.getTime() / 1000);
  const fromDate = Math.floor(oneWeekAgo.getTime() / 1000);

  symbols.forEach(symbol => {
    finnhub.fetchData(symbol, fromDate, toDate)
      .then((result) => finnhub.displayData(result))
      .catch(error => console.error('Hata:', error));
  });
});

document.getElementById('divUst').addEventListener('click', icerikDegistir) // divUst id'li elemente "click" yapınca "icerikDegistir" fonksiyonunu çalıştırmaak için fonk
document.getElementById('divUst').addEventListener('mouseover', yaziyiKarart)
document.getElementById('divUst').addEventListener('mouseout', yaziyiBeyazlat)
document.getElementById('divUst').getElementsByTagName('h1')[0].addEventListener('mouseover', yaziyiGizle)
document.getElementById('divUst').getElementsByTagName('h1')[0].addEventListener('mouseout', yaziyiGoster)
const image = document.querySelectorAll('img')
image.forEach((image) => {
	image.addEventListener('mouseenter', function () {
		//resim üzerine gelindidiğinde imleç değişir
		this.style.cursor = 'pointer'
	})
})
var icerik = 0 // Şu anki icerik id'si 0
const icerikler = [
	[
		'ana_1.jpeg',
		"Jim Davis, Garfield'ı yaratma anını tam olarak hatırlamadığını söylüyor. Ancak, karakterin ilk taslağının 1976 yılında Indiana Üniversitesi'nde bir öğrenciyken karakalem çizimler olarak ortaya çıktığını belirtiyor."
	],
	[
		'ana_2.jpg',
		'Davis, o sıralar çizgi roman endüstrisinde bir kariyer yapmaya çalışıyordu ve farklı karakter fikirleri üzerinde çalışıyordu.'
	],
	[
		'ana_3.jpg',
		"Davis, Garfield'ın ilk ilham kaynağının kendi evcil kedisi olduğu söyleniyor. Davis'in kedisi \"Jon\" adında tembel ve obur bir kedisiydi ve Davis, karakterin bu özelliklerini Garfield'a aktarmış."
	],
	[
		'ana_4.jpg',
		"Ancak Davis, Garfield'ın sadece bir kedi olmaktan öte bir şey olması gerektiğini biliyordu. Garfield'ın insanların ilişkilendirilebileceği bir mizah anlayışına sahip olması ve kendi hatalarından ders alabilen bir karakter olması gerektiğini düşünüyordu."
	],
	[
		'ana_5.jpeg',
		'Davis, Garfield\'ı yaratırken birçok farklı isim denemiş. Örneğin, "Jon Arbuckle" karakteri başlangıçta "Luke" olarak adlandırılmış ve Garfield ise "Handsome Dan" veya "Grover" olarak düşünülmüş.'
	]
]

function icerikDegistir() {
	document.getElementById('divUst').style.backgroundImage = 'url(' + icerikler[icerik][0] + ')' // divUst elementinin backgroundImage'sini icerikler array'ındaki şu anki icerik değişkeninin 0. değişkenini yaptm
	document.getElementById('divUst').getElementsByTagName('h1')[0].innerText = icerikler[icerik][1] // divUst elementinin h1 elementinin yazısını icerikler arrayındaki şu anki icerik id'ye göre değiştirdm

	icerik++
	if (icerik >= icerikler.length) icerik = 0
}

function yaziyiGizle() {
	document.getElementById('divUst').getElementsByTagName('h1')[0].style.opacity = '0' // fare resim üstüne geldiğinde yazının şeffaflığı
}

function yaziyiGoster() {
	document.getElementById('divUst').getElementsByTagName('h1')[0].style.opacity = '1'
}

function yaziyiKarart() {
	document.getElementById('divUst').getElementsByTagName('h1')[0].style.color = 'black'
}

function yaziyiBeyazlat() {
	document.getElementById('divUst').getElementsByTagName('h1')[0].style.color = '#D96342'
}
