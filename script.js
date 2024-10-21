function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let OutPut = document.getElementById("output");

    OutPut.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    OutPut.contentWindow.eval(jsCode);
}