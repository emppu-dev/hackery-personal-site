var audio = document.getElementById("music");
var allowContinue = true;
var song = 'assets/media/song.mp3';

const asciiArtList = [
  `███████╗███╗   ███╗██████╗ ██████╗ ██╗   ██╗
██╔════╝████╗ ████║██╔══██╗██╔══██╗██║   ██║
█████╗  ██╔████╔██║██████╔╝██████╔╝██║   ██║
██╔══╝  ██║╚██╔╝██║██╔═══╝ ██╔═══╝ ██║   ██║
███████╗██║ ╚═╝ ██║██║     ██║     ╚██████╔╝
╚══════╝╚═╝     ╚═╝╚═╝     ╚═╝      ╚═════╝ `,
  `  e88~~8e  888-~88e-~88e 888-~88e  888-~88e  888  888 
 d888  88b 888  888  888 888  888b 888  888b 888  888 
 8888__888 888  888  888 888  8888 888  8888 888  888 
 Y888    , 888  888  888 888  888P 888  888P 888  888 
  "88___/  888  888  888 888-_88"  888-_88"  "88_-888 
                         888       888                `,
  `.-----.--------.-----.-----.--.--.
|  -__|        |  _  |  _  |  |  |
|_____|__|__|__|   __|   __|_____|
               |__|  |__|         `,
  ` .d88b.  88888b.d88b.  88888b.  88888b.  888  888 
d8P  Y8b 888 "888 "88b 888 "88b 888 "88b 888  888 
88888888 888  888  888 888  888 888  888 888  888 
Y8b.     888  888  888 888 d88P 888 d88P Y88b 888 
 "Y8888  888  888  888 88888P"  88888P"   "Y88888 
                       888      888               
                       888      888               
                       888      888               `,
  ` _______ _______  _____   _____  _     _
 |______ |  |  | |_____] |_____] |     |
 |______ |  |  | |       |       |_____|
                                        `,
  `  ██████  █████████████   ████████  ████████  █████ ████
 ███░░███░░███░░███░░███ ░░███░░███░░███░░███░░███ ░███ 
░███████  ░███ ░███ ░███  ░███ ░███ ░███ ░███ ░███ ░███ 
░███░░░   ░███ ░███ ░███  ░███ ░███ ░███ ░███ ░███ ░███ 
░░██████  █████░███ █████ ░███████  ░███████  ░░████████
 ░░░░░░  ░░░░░ ░░░ ░░░░░  ░███░░░   ░███░░░    ░░░░░░░░ 
                          ░███      ░███                
                          █████     █████               
                         ░░░░░     ░░░░░                `,
  `▄▄▄ .• ▌ ▄ ·.  ▄▄▄· ▄▄▄·▄• ▄▌
▀▄.▀··██ ▐███▪▐█ ▄█▐█ ▄██▪██▌
▐▀▀▪▄▐█ ▌▐▌▐█· ██▀· ██▀·█▌▐█▌
▐█▄▄▌██ ██▌▐█▌▐█▪·•▐█▪·•▐█▄█▌
 ▀▀▀ ▀▀  █▪▀▀▀.▀   .▀    ▀▀▀ `,
  `  ____     ,__________      ____     ____          
/'    )   /'    )     )   /'    )--/'    )--/'    /
/(___,/'  /'    /'    /'  /'    /' /'    /' /'    /' 
(________/'    /'    /(__/(___,/' /(___,/'  (___,/(__ 
                    /'       /'                    
                  /'       /'                      
                /'       /'                        `,
  `  ....  .. .. ..   ... ...  ... ...  ... ...  
.|...||  || || ||   ||'  ||  ||'  ||  ||  ||  
||       || || ||   ||    |  ||    |  ||  ||  
 '|...' .|| || ||.  ||...'   ||...'   '|..'|. 
                    ||       ||               
                   ''''     ''''              `,
  `    _/_/    _/_/_/  _/_/    _/_/_/    _/_/_/    _/    _/   
 _/_/_/_/  _/    _/    _/  _/    _/  _/    _/  _/    _/    
_/        _/    _/    _/  _/    _/  _/    _/  _/    _/     
 _/_/_/  _/    _/    _/  _/_/_/    _/_/_/      _/_/_/      
                        _/        _/                       
                       _/        _/                        `,
  ` _______  __   __  _______  _______  __   __ 
|       ||  |_|  ||       ||       ||  | |  |
|    ___||       ||    _  ||    _  ||  | |  |
|   |___ |       ||   |_| ||   |_| ||  |_|  |
|    ___||       ||    ___||    ___||       |
|   |___ | ||_|| ||   |    |   |    |       |
|_______||_|   |_||___|    |___|    |_______|`,
  `@@@@@@@@  @@@@@@@@@@   @@@@@@@   @@@@@@@   @@@  @@@  
@@@@@@@@  @@@@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@  @@@  
@@!       @@! @@! @@!  @@!  @@@  @@!  @@@  @@!  @@@  
!@!       !@! !@! !@!  !@!  @!@  !@!  @!@  !@!  @!@  
@!!!:!    @!! !!@ @!@  @!@@!@!   @!@@!@!   @!@  !@!  
!!!!!:    !@!   ! !@!  !!@!!!    !!@!!!    !@!  !!!  
!!:       !!:     !!:  !!:       !!:       !!:  !!!  
:!:       :!:     :!:  :!:       :!:       :!:  !:!  
 :: ::::  :::     ::    ::        ::       ::::: ::  
: :: ::    :      :     :         :         : :  :   `,
];

function proceed() {
  if (allowContinue) {
    document.getElementById("main").style.opacity = 1;
    document.querySelector(".enter").style.opacity = 0;

    setTimeout(function () {
      displayRandomAsciiArt();

      audio.src = song;
      audio.volume = 0.1;
      audio.loop = true;
      audio.autoplay = true;
      audio.play();
    }, 250);

    setTimeout(function () {
      document.querySelector(".enter").remove();
    }, 1000);

    allowContinue = false;
  }
}

function displayRandomAsciiArt() {
  const asciiArtElement = document.querySelector("#main > pre");
  const randomIndex = Math.floor(Math.random() * asciiArtList.length);
  asciiArtElement.innerHTML = '';
  const asciiTextNode = document.createTextNode(asciiArtList[randomIndex]);
  asciiArtElement.appendChild(asciiTextNode);
}
