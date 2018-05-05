var http = require('http');
const fs = require('fs');
var express = require('express');
var app = express();
var config = require('./config.js')

http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  //head write
  res.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script> <link rel="stylesheet" href="https://sethusenthil.com/Product-Sans/font/font.css"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" /><script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>')
  //nav write
  res.write('<nav> <div class="nav-wrapper"> <a href="#" class="brand-logo center gfont">Welcome '+config.username+'!</a> <ul id="nav-mobile" class="left hide-on-med-and-down"> <li><a href="/chat">Chat</a></li> <li><a href="/cheatsheets">Cheat Sheets</a></li> <li><a href="()">Check for Updates</a></li> </ul> </div> </nav>')
  //contain write
  res.write('       <div class="container">')
  //quick links write 
  res.write('<h2 class="header">Quick Links</h2> <div class="card horizontal"> <div class="card-image">  </div> <div class="card-stacked"> <div class="card-content"> <p><center><i class="fab fa-twitter fa-5x quicklink"></i><i class="fab fa-github fa-5x quicklink"></i><i class="fab fa-codepen fa-5x quicklink"></i><i class="fab fa-product-hunt fa-5x quicklink"></i></center></p> </div> </div> </div>')
  // Row write 
  res.write(' <div class="row"> ')
//CSS write
res.write('<style>:root { --primaryColor: '+config.primaryColor+'; --accentColor: '+config.accentColor+';}nav{background-color:var(--primaryColor);}.card-action{color:var(--accentColor)!important; }.quicklink{ margin-left: 5px !important; margin-right: 5px !important; cursor: pointer; color: #616161;} .fa{ transition: 0.5s ease; } .fa-github:hover , .fa-codepen:hover{ color: black; } .fa-fire:hover{ color: #FECA40; } .fa-product-hunt:hover{ color: #D85637; } .fa-twitter:hover{ color: #00aced; }</style>')
  fs.readdirSync(config.projectFolder).forEach(file => {
    if (config.logFiles) {
      console.log(file);
    }
    //The following if statement avoides system files and non folders
    //this method works because all system files start with a dot (ex: .DS_store)
if (file.charAt(0) == ".") {
  return false;
}else {
  res.write(' <div class="col s12 m6 wow slideInLeft "> <div class="card"> <div class="card-content black-text"> <span class="card-title gfont"><p>' + file +'</p></span> <p>Fetch info from index.html ... </p> </div> <div class="card-action"> <a href="file://'+config.projectFolder+'/' + file+'/index.html">Open index.html</a> <a href="file://'+config.projectFolder+'/' + file+'">Open in finder</a> </div> </div> </div>');
}
  })
  //footer write 
  res.write('')
  res.end();
}).listen(config.port, '127.0.0.1');
console.log('Homepage Server Has Started');
console.log('Go to localhost:' + config.port +' or go to 127.0.0.1' + config.port);





