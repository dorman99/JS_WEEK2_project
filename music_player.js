// To-Do List music Player

var singer = ['rich chigga','logic'];
var song_list_chigga = ['dat $tick','who that be?','glow like that'];
var song_list_logic = ['sucker for pain','1-800-273-8255','5am']
var play;

function tampil(){
   var penyanyi=prompt('pilih penyanyi !');
   for (var i=0;i<singer.length;i++){
   if (singer[i] === penyanyi ){
     
     play = singer[i];
     
     if (play === 'rich chigga'){
        var laguchigga = prompt('pilih lagu rich chigga !')
        for (var j = 0;j<song_list_chigga.length;j++)
     
        if (song_list_chigga[j] === laguchigga){
       
       console.log ('memutar lagu '+ singer[i]+' dengan judul '+ song_list_chigga[j] );
                                              } 
     }
    if (play === 'logic'){
        var lagulogic = prompt('pilih lagu logic !')
        for (var k = 0;k<song_list_logic.length;k++)
     
        if (song_list_logic[k] === lagulogic){
       var playing = true;
            if (playing === true) {
       console.log ('memutar lagu '+ singer[i]+' dengan judul '+ song_list_logic[k] );
                                              }
            else if (playing === false){
              console.log('lagu tidak ada');
              
            }
                  
        }
   }
   
} 
} 
}
tampil()