$(function () {
    $(".btn").mouseover(function (e) {
        $(".content").hide();
        console.log(e);
        $(e.target.hash).show();
        $(".page-header > h2").contents().replaceWith(e.target.text);
		$("html,body").animate({
			scrollTop: 0
		}, 1000);
    })
    $(".btn").click(function () { return false; });
});
