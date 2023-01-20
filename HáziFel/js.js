function megSzerkeztheto(){
    var aBefog = document.getElementById("aBefogo").value;
    var bBefog = document.getElementById("bBefogo").value;
    var atfog = document.getElementById("atfogo").value;

    if(Math.pow(parseFloat(aBefog), 2)+Math.pow(parseFloat(bBefog), 2) == Math.pow(parseFloat(atfog),2)){
        alert("A háromszög megszerkezthető");
    }
    else{
        alert("A háromszög nem szerkezthető meg");
    }
}

function atfogoKiszamol(){
    var aBefog = document.getElementById("aBefogo").value;
    var bBefog = document.getElementById("bBefogo").value;

    document.getElementById("atfogo").value = Math.sqrt(Math.pow(parseFloat(aBefog), 2)+Math.pow(parseFloat(bBefog), 2));
}

function veletlenSzam(){
    document.getElementById("aBefogo").value = (Math.random()*90+10).toFixed(3);
    document.getElementById("bBefogo").value = (Math.random()*90+10).toFixed(3);
    document.getElementById("atfogo").value = (Math.random()*90+10).toFixed(3);
}