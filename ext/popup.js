
chrome.storage.sync.get(async function (e) {
    try {
        if (e.workshop) {
            document.getElementById("workshop").setAttribute("checked", "checked")
        }
        if (e.cpy) {
            document.getElementById("cpy").setAttribute("checked", "checked")
        }
        if (e.hide) {
            document.getElementById("hide").setAttribute("checked", "checked")
        }
        if (e.dis) {
            document.getElementById("dis").setAttribute("checked", "checked")
        }
    } catch (error) {
        console.log("Error Occurred.")
    }
})

function change_work() {
    if (workshop.checked) {
        chrome.storage.sync.set({ 'workshop': true });
    }
    else {
        chrome.storage.sync.set({ 'workshop': false });
    }
}

function change_cpy() {
    if (cpy.checked) {
        chrome.storage.sync.set({ 'cpy': true });
    }
    else {
        chrome.storage.sync.set({ 'cpy': false });
    }
}

function change_hide() {
    if (hide.checked) {
        chrome.storage.sync.set({ 'hide': true });
    }
    else {
        chrome.storage.sync.set({ 'hide': false });
    }
}

function change_dis() {
    if (dis.checked) {
        chrome.storage.sync.set({ 'dis': true });
    }
    else {
        chrome.storage.sync.set({ 'dis': false });
    }
}

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#workshop').addEventListener('change', change_work);
    document.querySelector('#cpy').addEventListener('change', change_cpy);
    document.querySelector('#hide').addEventListener('change', change_hide);
    document.querySelector('#dis').addEventListener('change', change_dis);

});