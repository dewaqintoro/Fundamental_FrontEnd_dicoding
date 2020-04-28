const apiURL = 'https://api.lyrics.ovh';
const result = document.getElementById('favqu');

async function justin(){
  
  const searchResult = await fetch(`${apiURL}/suggest/Justin Bieber -Yummy`);
  const data = await searchResult.json();
  tampilLaguFav(data)
}

function tampilLaguFav(data){
  result.innerHTML =`
  <ul class="">
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

// module.exports = {
//   justin: justin()
// };
export {justin}