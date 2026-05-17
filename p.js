$.ajax({
    
url:'https://itunes.apple.com/search?term=pop&media=music&limit=10&lang=id_id&country=ID',
type: 'get',
dataType:'json',
        
  success:function(hasil){
    $.each(hasil.results,function(i,isidata){
      let musisi =isidata.artistName
      let gambar= isidata.artworkUrl100
      let judul =isidata.trackName
      let ceklagu =isidata.previewUrl


      $('.card-grid').append( 
        
      `<div class="music-card">
      <img src="`+gambar+`" alt="" class="cover">
      <h3>`+judul+`</h3>
      <p>`+musisi+`</p>

      <audio controls src="`+ceklagu+`"></audio>
</div>`

)
  // penutup each
  })
console.log(hasil)
// penutup success
  }

})