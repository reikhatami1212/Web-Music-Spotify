
function carilagu(linkdata,
  kelas_grid,
  kelas_input,
  pencarian
){
  $.ajax({
      
  url:linkdata,
  type: 'get',
  dataType:'json',
          
    success:function(hasil){
      $.each(hasil.results,function(i,isidata){
        let musisi =isidata.artistName
        let gambar= isidata.artworkUrl100
        let judul =isidata.trackName
        let ceklagu =isidata.previewUrl
        let nama_album =isidata.collectionName
        console.log(hasil)
        if(pencarian == "musik"){
        
          $('.' + kelas_grid).append( 
            
            `<div class="` + kelas_input + `">
            <img src="`+gambar+`" alt="" class="cover">
            <h3>`+judul+`</h3>
            <p>`+musisi+`</p>
            
            <audio controls src="`+ceklagu+`"></audio>
            </div>`
            
          )
        } else if(pencarian == "album"){
          $('.' + kelas_grid).append( 
            
            `<div class="` + kelas_input + `">
            <img src="`+gambar+`" alt="" class="cover">
            <h3>`+nama_album+`</h3>
            <p>By `+musisi+`</p>
            
            </div>
            `
         
      )}
          else {console.log("pencarian tidak ditemukan")}
        
// penutup each
})
        // penutup success
    }
  
  
  
  })
}
//pencarian TOP 10
carilagu("https://itunes.apple.com/search?term=pop&media=music&limit=10&lang=id_id&country=ID","card-grid","music-card","musik")

carilagu("https://itunes.apple.com/search?term=Popular Albums&media=music&limit=10&lang=id_id&country=ID","album-grid","album-card","album")



