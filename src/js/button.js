$('.optionconfirmed').hide();
$('.confirmed').on('click',function(){
$('.optionconfirmed').toggle();
$('.optionvitaldone').hide();
})


$('.optionvitaldone').hide();
$('.vitaldone').on('click',function(){
$('.optionvitaldone').toggle();
$('.optionconfirmed').hide();
})