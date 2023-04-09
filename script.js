document.getElementById("buttonAge").addEventListener("click", function(){
    const nama = document.getElementById("nama")



    var tgl1=new Date(document.getElementById("yourbirth").value);
    var tgl2=new Date(); 
    var timeDiff = Math.abs(tgl2.getTime() - tgl1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    document.getElementById("yourAge").innerHTML = Math.round(diffDays/365) + " Tahun";
    document.getElementById("hasil-nama").innerHTML = nama.value
});

