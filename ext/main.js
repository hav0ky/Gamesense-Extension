// Made by syntax#5128 with ❤️ for gamesense

let refresh_btn = `<button title="Refresh" id="button3" style="background: transparent; border: none; float: right; padding-bottom: 0.5em;"><img src="https://i.imgur.com/1mZgMFq.png" style="width:1em;height:1em;"></button>`

var div = document.createElement("div");
div.style.marginTop = "5px";
div.style.marginBottom = "5px";
div.style.borderRadius = "5px";
div.style.padding = "10px";
div.style.fontFamily = "Verdana, Helvetica, Arial, sans-serif";
div.style.fontWeight = 'bold';
div.style.width = "98%";
div.style.height = "auto";
div.style.background = "#353534";
div.style.color = "#BBBBBB";

var hr = document.createElement('hr');
hr.style.width = "100%";
hr.style.height = "1px";
hr.style.border = "none";
hr.style.background = "#95B806";


var tab = document.createElement('div');
tab.style.borderRadius = "5px";
tab.style.padding = "0px";
tab.style.borderColor = "transparent";
tab.style.fontFamily = "Verdana, Helvetica, Arial, sans-serif";
tab.style.width = "98%";
tab.style.height = "0px";
tab.style.background = "#353534";
tab.style.color = "#BBBBBB";
chrome.storage.sync.get(async function (e) {
    if (e.workshop) {
        div.innerHTML = "Subscribed luas" + refresh_btn;
        div.appendChild(hr);
        div.appendChild(tab);
        document.getElementById("brdwelcome").appendChild(div);
        document.getElementById('button3').onclick = async () => {

            const luas = await fetch('https://raw.githubusercontent.com/syntax2002/Gamesense-Extension/main/luas').then(res => res.json())
            tab.innerHTML = `<h4 style="float: right;">Refreshing . . .</h4>`;

            chrome.storage.sync.set({ 'scripts': {} });

            // chrome.storage.sync.clear()
            chrome.storage.sync.get(async function (scripts) {
                scripts.data = {};
                async function fetchData(url, key) {

                    const res = await fetch(url);
                    const record = await res.text();
                    let searched = record.includes('class="button" type="submit" name="action" value="Unsubscribe"')

                    if (searched) {
                        scripts.data[key] = url
                    }
                }

                try {
                    for (let [key, value] of Object.entries(luas)) {
                        await fetchData(value, key);
                    }
                } catch (error) {
                    tab.insertAdjacentHTML("afterend", `<h4 style="color: #95B806">No Scripts Found</h4>`);
                } finally {
                    tab.innerHTML = `<h4 style="float: right; color: #95B806;">Reload the page!</h4>`;
                }

                chrome.storage.sync.set({ 'scripts': scripts });
            });
        }
    }
})


chrome.storage.sync.get(function (e) {
    if (e.workshop) {
        try {
            for (let [key, value] of Object.entries(e.data)) {
                // console.log(value, key);
                let lua_name = `<h4 style="color: white;"><a href="${value}">${key}</a></h4>`
                tab.insertAdjacentHTML("afterend", lua_name);
            }
        } catch (error) {
            tab.insertAdjacentHTML("afterend", `<h4 style="color: #95B806">No Scripts Found</h4>`);
        }
    }

});
