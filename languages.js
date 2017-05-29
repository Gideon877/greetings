function languageCheck() {

    if (english.checked) {
        greetingDisplay.innerHTML = "Hello, " + user_name.value.toLowerCase() + ".";

    } else if (setswana.checked) {
        greetingDisplay.innerHTML = "Dumela, " + user_name.value.toLowerCase() + ".";

    } else if (zulu.checked) {
        greetingDisplay.innerHTML = "Sawubona, " + user_name.value.toLowerCase() + ".";

    }
    user_name.value = ""; //clear text box value
}
