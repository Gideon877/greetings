var dropdownTable = document.getElementById('dropdownTable');
var template = Handlebars.compile(dropdownTable.innerHTML);
var dropdownMenu = template({
    languages
});

document.getElementById('showDropdowns').innerHTML = dropdownMenu;

