const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');

const apiURL = 'https://api.lyrics.ovh';

form.addEventListener('submit', e=>{
  e.preventDefault();
  searchValue =search.value.trim();

  if(!searchValue){
    alert('tidak ada lirik yang dicari')
  }else{
    cariLagu(searchValue)
    
  }
})


// pencarian lagu
async function cariLagu(searchValue){
  // alert(searchValue)
  
  const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`);
  const data = await searchResult.json();

  tampilData(data)
}

// update DOM
function tampilData(data){
  result.innerHTML =`
  <ul class="song-list">
  ${data.data.map(song=> `<li>
    <div class="hasil">
    <img src="${song.artist.picture}">
      <strong>
        ${song.artist.name}
      </strong> -${song.title}
      </div>
        <span data-id="${song.artist.id}" data-artist="${song.artist.name}" data-songtitle="${song.title}">
          Lirik
        </span>
        </li>
  `).join('')
  }
  </ul>`
}

// get lyric button

result.addEventListener('click', e=>{
  const clickedElement = e.target;

  // cek clicked element is button or not
  if(clickedElement.tagName === 'SPAN'){
    const artist = clickedElement.getAttribute('data-artist');
    const songTitle = clickedElement.getAttribute('data-songTitle');

    getLyrics(artist, songTitle)
  }
})

// get lyrics
async function getLyrics(artist, songTitle){
  // alert(songTitle, artist)

  const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
  const data = await res.json();
  // console.log(data);

  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

result.innerHTML= `
<div>
</div>
<h2><strong>
${artist}
</strong>-${songTitle}
</h2>
<p>${lyrics}</p>
`
}