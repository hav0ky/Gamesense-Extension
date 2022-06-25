// Made by syntax#5128 with ❤️ for gamesense

if (document.body.contains(document.getElementById("brdwelcome"))) {
    sub_date = document.getElementById("brdwelcome").getElementsByTagName('span')[1].textContent
}

const months = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sept': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
}

async function fetchDate(url) {
    const res = await fetch(url);
    const record = await res.text();

    if (record.includes('<option value="2" selected="selected">')) {
        sub_date_year = sub_date.slice(49, 53);
        sub_date_month = sub_date.slice(57, 59);
        sub_date_day = sub_date.slice(54, 56);
        return [sub_date_day, sub_date_month, sub_date_year];
    } else if (record.includes('<option value="3" selected="selected">')) {
        sub_date_day = sub_date.slice(49, 51);
        sub_date_year = sub_date.slice(55, 59);
        sub_date_month = sub_date.slice(52, 54);
        return [sub_date_day, sub_date_month, sub_date_year];
    } else if (record.includes('<option value="4" selected="selected">')) {
        sub_date_month = sub_date.slice(49, 51);
        sub_date_year = sub_date.slice(55, 59);
        sub_date_day = sub_date.slice(52, 54);
        return [sub_date_day, sub_date_month, sub_date_year];
    } else if (record.includes('<option value="5" selected="selected">')) {
        if (sub_date.slice(49, 52) == 'Sep') {
            sub_date_month = months[sub_date.slice(49, 53)];
            sub_date_year = sub_date.slice(57, 61);
            sub_date_day = sub_date.slice(54, 56);
        } else {
            sub_date_month = months[sub_date.slice(49, 52)];
            sub_date_year = sub_date.slice(56, 60);
            sub_date_day = sub_date.slice(53, 55);
        }
        return [sub_date_day, sub_date_month, sub_date_year];
    } else if (record.includes('<option value="6" selected="selected">')) {
        if (sub_date.slice(54, 57) == 'Sep') {
            sub_date_day = sub_date.slice(49, 51);
            sub_date_year = sub_date.slice(59, 62);
            sub_date_month = months[sub_date.slice(54, 58)];
        } else {
            sub_date_day = sub_date.slice(49, 51);
            sub_date_year = sub_date.slice(58, 62);
            sub_date_month = months[sub_date.slice(54, 57)];
        }

        // console.log(sub_date_day, sub_date_month, sub_date_year)
        return [sub_date_day, sub_date_month, sub_date_year];
    } else {
        sub_date_year = sub_date.slice(49, 53);
        sub_date_month = sub_date.slice(54, 56);
        sub_date_day = sub_date.slice(57, 59);
        return [sub_date_day, sub_date_month, sub_date_year];
    }
    //const lref = record.document.getElementsByTagName('a')[5].getAttribute("href").slice(31);

}

(async function () {

    if (document.body.contains(document.getElementById("brdwelcome"))) {
        let uidUrl = document.getElementsByTagName('a')[5].getAttribute("href").slice(31);
        // let uidUrl = document.getElementById("navprofile").innerHTML
        let dateUrl = `https://gamesense.pub/forums/profile.php?section=essentials&id=${uidUrl}`
        const xD = await fetchDate(dateUrl);
        // console.log(xD[0],xD[1],xD[2])

        var daysLeft = function (input) {
            var num = '';
            var date = [];
            var x = 0;
            for (i = 0; i < input.length; i++) {
                if (!isNaN(input.charAt(i))) {
                    num += input.charAt(i);
                }
                else {
                    date[x] = parseInt(num, 10);
                    x++;
                    num = '';
                }
            }
            date[x] = parseInt(num, 10);
            var inputDate = new Date(date[2], date[1], date[0]);
            var today = new Date();
            var timeDiff = Math.abs(inputDate.getTime() - today.getTime());
            return Math.ceil(timeDiff / (1000 * 3600 * 24));
        };

        days_l = daysLeft(`${xD[0]}.${xD[1]}.${xD[2]}`) - 30;
        let main_name = `<a href="index.php">game<span>sense</span></a><p style="float:right; font-size: 0.6em; font-weight: 500; padding: 3px 0 8px 0; font-family: Raleway,Verdana;"><span style="color: #95b806; font-size: 1.5em; font-weight: 500; font-family: Raleway,Verdana;">${days_l}</span> days left</p>`

        if (sub_date.includes("Premium (Counter-Strike: Global Offensive)")) {
            document.getElementById("brdtitle").getElementsByTagName('h1')[0].innerHTML = main_name;
        }
    }

})();

// Getting the HTML
// async function FetchHtml() {
//     let uidUrl = document.getElementsByTagName('a')[5].getAttribute("href").slice(31);
//     let dateUrl = `https://gamesense.pub/forums/profile.php?section=essentials&id=${uidUrl}`
//     let response = await fetch(dateUrl);
//     return await response.text(); // Returns it as Promise
// }

// // Usaing the HTML
// async function Do() {
//     let html = await FetchHtml().then(text => { return text }); // Get html from the promise
//     console.log(html);
// }


// // Exe
// Do();
