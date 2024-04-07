const hp=document.querySelector(".containerHP");
const atk=document.querySelector(".containerAtk");
const def=document.querySelector(".containerDef");
const spatk=document.querySelector(".containerSPatt");
const spdef=document.querySelector(".containerSpDef");
const spd=document.querySelector(".containerSpeed");

function GetStats(data){
    let hplen=data.stats[0].base_stat;
    document.querySelector(".hp").innerHTML=hplen;
hp.style.width=`${hplen}%`;
  

    let atklen=data.stats[1].base_stat;
    document.querySelector(".Atk").innerHTML=atklen;
    atk.style.width=`${atklen}%`;
    

    let deflen=data.stats[2].base_stat;
    document.querySelector(".def").innerHTML=deflen;
    def.style.width=`${deflen}%`;
  

    let spatklen=data.stats[3].base_stat;
    document.querySelector(".Sattk").innerHTML=spatklen;
    spatk.style.width=`${spatklen}%`;
    

    let spdeflen=data.stats[4].base_stat;
    document.querySelector(".Sdef").innerHTML=spdeflen;
    spdef.style.width=`${spdeflen}%`;
    

    let spdlen=data.stats[5].base_stat;
    document.querySelector(".spd").innerHTML=spdlen;
    spd.style.width=`${spdlen}%`;
  

}