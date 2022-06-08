$(document).ready(function(){
    var $li = $("ul.memberPage li");
    $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.memberInner').hide();

    $li.click(function(){
        $($(this).find('a').attr('href')).show().siblings('.memberInner').hide();
        $(this).addClass('active').siblings('.active').removeClass('active');
        e.preventDefault();
    });
});