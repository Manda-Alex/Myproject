const kusuta = document.getElementById("kusuta");
const kunyenga = document.getElementById("kunyenga");
const kamozi = document.getElementById("kamozi");
const kamozi1 = document.getElementById("kamozi1");
const kangapo = document.getElementById("kangapo");
const kangapo1 = document.getElementById("kangapo1");
const kochuluka = document.getElementById("kochuluka");
const kochuluka1 = document.getElementById("kochuluka1");
const yoyamba = document.getElementById("yoyamba");
const yachiwiri = document.getElementById("yachiwiri");
const yachitatu = document.getElementById("yachitatu");
const yachinayi = document.getElementById("yachinayi");
const yomaliza = document.getElementById("yomaliza");
const mysubmit = document.getElementById("mysubmit");

mysubmit.onclick = function(){
    if(kusuta.checked){
        console.log('nde uku suzutheka bwanj');
        yoyamba.textContent= 'Mmasuta inuo amwene';

        if(kusuta.checked && kamozi.checked){
            yachitatu.textContent = '       koma tikumvesesani poti ndi kamozi';

        }
        if(kusuta.checked && kangapo.checked){
            yachitatu.textContent = '       maulendo osakwana ten si ambiri man basi ndi za bhobo';

        }
        if(kusuta.checked && kochuluka.checked){
            yachitatu.textContent = '       Nde muzicheza ndi achina Chenz tu basii eee danger';

        }    
    }
    else{
        yoyamba.textContent = 'Zoona ndinu a sober man amwene ?';
    }
    //this is for kunyenga part

    if(kunyenga.checked){
        yachiwiri.textContent = 'Mmanyenga inuo amwene';

        if(kunyenga.checked && kamozi1.checked){
            yachinayi.textContent = '   kukula koseku basi kungonyenga kamozi basi nanu';
        }
        if(kunyenga.checked && kangapo1.checked){
            yachinayi.textContent = '   Basi nde zipangani zoti kapitilire ka ten man';
        }
        if(kunyenga.checked && kochuluka1.checked){
            yachinayi.textContent = '   Basi ntchito munaona inu basi ndikutomba amwene';
        }

    }
    else{
        yachiwiri.textContent = 'Eee Eee simunanyengeko Ndinu a Viligo kod amwene?';
    }

    if(kusuta.checked && kunyenga.checked){
        yomaliza.textContent = 'kusuta kumaononga moyo, akazi nde amapha... inu mupanga zonse. Suicide chanii';
    }
    else{
        yomaliza.textContent = 'Koma nanutu, simmanyenga, simmasuta koma mwati siinu afiti inuu';
    }

}






