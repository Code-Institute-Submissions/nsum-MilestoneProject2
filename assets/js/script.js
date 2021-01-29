
$(`.hintButton`).click(function(){
    
    $(`#actualImage`).slideToggle("fast", "linear");
});

$(`#infoButton`).click(function(){
    $("#infoSection").slideToggle("fast", "linear");
});

$(`#btnRule`).click(function(){
    $(`#rulesBox`).slideToggle("fast", "linear");
});