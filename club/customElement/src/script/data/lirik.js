const form = document.getElementById('form');
const cari = document.getElementById('inputCari');
const hasil = document.getElementById('hasilCari');

const apiURL = 'https://api.lyrics.ovh';

form.addEventListener('submit', e=>{
  e.preventDefault();
  nilaiCari =cari.value.trim();

  if(!nilaiCari){
    alert('tidak ada lirik yang dicari')
  }else{
    cariLagu(nilaiCari)
    
  }
})


// pencarian lagu
async function cariLagu(nilaiCari){
  // alert(nilaiCari)
  
  const hasilCari = await fetch(`${apiURL}/suggest/${nilaiCari}`);
  const data = await hasilCari.json();

  tampilData(data)
}

// update DOM
function tampilData(data){
  hasil.innerHTML =`
  <ul class="daftar-lagu">
  ${data.data.map(lagu=> `<li>
    <div class="hasil">
    <img src="${lagu.artist.picture}">
      <strong>
        ${lagu.artist.name}
      </strong> -${lagu.title}
      </div>
        <span data-id="${lagu.artist.id}" data-artist="${lagu.artist.name}" data-judulLagu="${lagu.title}">
          Lirik
        </span>
        </li>
  `).join('')
  }
  </ul>`
}

// get lyric button

hasil.addEventListener('click', e=>{
  const clickedElement = e.target;

  // cek clicked element is button or not
  if(clickedElement.tagName === 'SPAN'){
    const artist = clickedElement.getAttribute('data-artist');
    const judulLagu = clickedElement.getAttribute('data-judulLagu');

    getLyrics(artist, judulLagu)
  }
})

// get lyrics
async function getLyrics(artist, judulLagu){
  // alert(judulLagu, artist)

  const res = await fetch(`${apiURL}/v1/${artist}/${judulLagu}`);
  const data = await res.json();

  const lirik = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

hasil.innerHTML= `
<div>
</div>
<h2><strong>
${artist}
</strong>-${judulLagu}
</h2>
<p>${lirik}</p>
`
}

