const apiURL = 'https://api.lyrics.ovh';


async function laguFav(){
  // alert(searchValue)
  
  const searchResult = await fetch(`${apiURL}/suggest/wali`);
  const data = await searchResult.json();

  // console.log(data)
  tampilLaguFav(data)
}

function tampilLaguFav(data){
  result.innerHTML =`
  <ul class="song-list">
  ${data.data.map(song=> `<li>
    <div>
      <strong>
        ${song.artist.name}
      </strong> -${song.title}
      </div>
        <span data-artist="${song.artist.name}" data-songtitle="${song.title}">
          Lirik
        </span>
        </li>
  `).join('')
  }
  </ul>`
}

// window.uclicked = laguFav();