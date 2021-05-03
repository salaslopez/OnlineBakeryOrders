//Hide all the rows that do not match with the word typed in the textbox
var $rows = $('#bakeryDB tr');
$('#search').keyup(function() {//With every letter the search react
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});
//Function to highlight all the products with MOST WANTED attribute as true.
function mostWantedHighlight() {
    var checkBox = document.getElementById("mostWantedCheckbox");
    var text = document.getElementById("bakeryDB").querySelectorAll('#mostWantedtrue');
    var i;
    if (checkBox.checked == true) {
        for (i = 0; i < text.length; i++) {
            text[i].classList.add("highlight");
        }
    } else {
        for (i = 0; i < text.length; i++) {
            text[i].classList.remove("highlight");
        }
    }
}

function summatory() {
    var orderedcheckbox = document.getElementById("bakeryDB").querySelectorAll('input:checked');
    var i;
    var total = 0;
        for (i = 0; i < orderedcheckbox.length; i++) {
            total += total + document.getElementById(quantity).value;
           document.getElementById("quantity").classList.add("highlight");
        }
        document.getElementById('totalOrdered').value = total;
return total;
        
}