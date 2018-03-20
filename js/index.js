    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("js");
    let output = document.getElementById("output");
    let doc = output.contentDocument;  
    function run(){
        let style = document.createElement("style");
        let script = document.createElement("script");  
        doc.body.innerHTML = html.textContent;
        style.innerHTML = css.textContent.replace(/\s/g,"");
        script.innerHTML = js.textContent;
        doc.body.appendChild(style);
        doc.body.appendChild(script); 
    }