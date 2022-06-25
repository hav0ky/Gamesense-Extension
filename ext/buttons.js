// Made by syntax#5128 with ❤️ for gamesense

let copy_box = `<button title="Copy" id="button1" style="background: #303030; border: none;"><img src="https://i.imgur.com/L7x8O1x.png" style="width:1.5em;height:1.5em;"></button><button title="Download" id="button2" style="background: #303030; border: none;"><img src="https://i.imgur.com/Al8J4ru.png" style="width:1.5em;height:1.5em;"></button>`

var div = document.createElement("div");

div.style.marginBottom = "5px";
div.style.borderRadius = "5px";
div.style.padding = "5px";
div.style.fontFamily = "Verdana, Helvetica, Arial, sans-serif";
div.style.fontWeight = 'bold';
div.style.width = "auto";
div.style.height = "auto";
div.style.display = 'inline-block';
div.style.position = 'relative';
div.style.background = "#303030";
div.style.color = "#BBBBBB";
div.style.float = 'right';
div.innerHTML = copy_box;

if (document.body.contains(document.getElementsByTagName("pre")[0])) {
    document.getElementsByTagName('pre')[0].prepend(div);

    document.getElementById('button1').onclick = function () {
        var text_to_copy = document.getElementsByTagName('code')[0].textContent
        navigator.clipboard.writeText(text_to_copy)
        alert('Copied to clipboard')
    }
    
    function downloadFileFromText(filename, content) {
        var a = document.createElement('a');
        var blob = new Blob([content], { type: "text/plain;charset=UTF-8" });
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        delete a;
    }
    
    document.getElementById('button2').onclick = function () {
        var text_to_download = document.getElementsByTagName('code')[0].textContent
        downloadFileFromText('sample.lua', text_to_download)
    }
}