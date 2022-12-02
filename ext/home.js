// Made by syntax#5128 with ❤️ for gamesense
let raw_date = document.getElementById("brdwelcome").getElementsByTagName('span')[1].textContent
let old_c = document.getElementById("brdwelcome").getElementsByTagName('span')[1].innerHTML
document.getElementById("brdwelcome").getElementsByTagName('span')[0].style.color = "rgb(39,39,38)"
document.getElementById("brdwelcome").getElementsByTagName('span')[1].innerHTML =  "<strong>Premium (Counter-Strike: Global Offensive)</strong> [<a href='payment.php?game=csgo'>extend subscription</a>]"

chrome.storage.sync.get(async function (e) {
    
    if (document.body.contains(document.getElementById("brdwelcome"))) {
        if (e.hide == false) {
            document.getElementById("brdwelcome").getElementsByTagName('span')[1].innerHTML = old_c
            document.getElementById("brdwelcome").getElementsByTagName('span')[0].style.color = "#d4d4d3"
        }

        if (e.dis) {
            let [a, b] = raw_date.split('until')
            const [sub_date, c] = b.split("[extend")
            const cur_date = new Date()

            let days_l = parseInt((new Date(sub_date) - cur_date) / 86400000)
            let main_name = `<a href="index.php">game<span>sense</span></a><p style="float:right; font-size: 0.6em; font-weight: 500; padding: 3px 0 8px 0; font-family: Raleway,Verdana;"><span style="color: #95b806; font-size: 1.5em; font-weight: 500; font-family: Raleway,Verdana;">${days_l}</span> days left</p>`

            if (raw_date.includes("Premium (Counter-Strike: Global Offensive)")) {
                document.getElementById("brdtitle").getElementsByTagName('h1')[0].innerHTML = main_name;
            }
        }
    }
});