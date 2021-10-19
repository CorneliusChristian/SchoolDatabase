//firebase
function zoom(){
    open('https://us02web.zoom.us/j/8757286808?pwd=K0tURHo1M2Ntb1czK3Z0MkxPaUJNZz09');
}
function eskul(){
    open('https://docs.google.com/gview?embedded=true&url=https://schooldatabase.cornel629.repl.co/eskul.pdf'); 
}
function pelajaran(){
    open('https://docs.google.com/gview?embedded=true&url=https://schooldatabase.cornel629.repl.co/pelajaran.pdf')
}
function coding(){
    open('https://docs.google.com/gview?embedded=true&url=https://schooldatabase.cornel629.repl.co/coding.pdf')
}
function classpoint(){
    open('https://classpoint.app/');
}
function moodle(){
    open('https://elearning.bpkpenaburjakarta.sch.id/login/index.php');
}
function ibadah(){
    open('https://forms.gle/8tYCGRp4rqzXFpxN7');
}
function moodle(){
    open('https://elearning.bpkpenaburjakarta.sch.id/login/index.php');
}
function ibadah(){
    open('https://forms.gle/8tYCGRp4rqzXFpxN7');
}
function lagu_1(){
    open('https://youtu.be/teUxQpnhezY');
}
function lagu_2(){
    open('https://youtu.be/iJCV_2H9xD0');
}
function lagu_3(){
    open('https://youtu.be/GEAcs2B-kNc');
}
function catat(nama_f){
    var note = document.getElementById('catatan').value;
    localStorage.setItem(nama_f, note);
}
function savenote(){
    var nama_file = prompt("Nama Catatan : ")
    if(nama_file == null || document.getElementById('catatan').value == null){
        alert("Tidak ada Catatan")
    }else{
        catat(nama_file);
        alert("Catatan sudah disimpan!")
    }
}
function opennote(){
    var open_name = prompt("Nama Catatan : ")
    document.getElementById('catatan').value = localStorage.getItem(open_name);
}
function clears(){
    document.getElementById('catatan').value = "";
}
function dsc(){
  open("https://discord.gg/nxeaWGWCmu")
}

