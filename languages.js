function languageCheck() {

    if (english.checked) {
        greeting.innerHTML = "Hello, " + user_name.value.toLowerCase() + ".";

    } else if (setswana.checked) {
        greeting.innerHTML = "Dumela, " + user_name.value.toLowerCase() + ".";

    } else if (zulu.checked) {
        greeting.innerHTML = "Sawubona, " + user_name.value.toLowerCase() + ".";

    }
    user_name.value = ""; //clear text box value
}
