let count = 1
document.getElementById("radio1").checked = true;

setInterval( () => {
    proximaImagem()
},2000)

function proximaImagem() {
    count++;
    if(count >4) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}