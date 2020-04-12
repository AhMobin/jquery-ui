/// Datepicker feature
$("#calender").click(function() {
    $("#calender").datepicker();
})


/// Title ToolTip feature

$("#img").tooltip({
    track: true,
    content: "MY IMAGE",
    show: { effect: "fade", duration: 2000 },
    hide: { effect: "explode", duration: 1500 }
});


/// Accordion widget

$("#accor").accordion({
    collapsible: true,
    event: "click",
    animate: 300,
    active: 0,
    heightStyle: true,
    icons: { header: "ui-icon-arrow-1-n", activeHeader: "ui-icon-arrow-1-s" }
});


/// Autocomplete Suggestion Feature

var lang = ["PHP", "Java", "Python", "Javascript", "C#", "C/C++", "Objective C", "R", "Ruby", "Swift"];

$("#auto").autocomplete({
    source: lang
}, {
    autoFocus: true,
    delay: 0,
    minLength: 1
});


/// MessageBox feature

$("#submit").click(function() {
    $("#msz").dialog({
        title: "Language Submission",
        draggable: true,
        modal: true,
        buttons: [{
            text: "OK",
            click: function() {
                $(this).dialog("close");
            }
        }]
    });
});