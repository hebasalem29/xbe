$(function()
{
    $(".colors ul li").on('click',function()
    {
       // $("link[href*='theme']").attr("href", $(this).attr('data-value'));
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
       console.log("hi");

    })
    $(".set1").on('click',function()
    {
        $(".colors").toggleClass("co");
        $(".set1").toggleClass("co1");
    })
    $(".colors .li1").on('click',function()
    {
        $(".colors").toggleClass("co");
        $(".set1").toggleClass("co1");
    })
    $(".men").on('click',function()
    {
        $(".main1").toggleClass("disb");
    })
    $(".main1  li").on('click',function()
    {
        $(".main1").toggleClass("disb");
    })
    

   
    
$(window).on('scroll',function()
{
    if($(window).scrollTop()>350)
    {
        
        $(".but").addClass("disb1");
    }
    else
    {
        
        $(".but").removeClass("disb1");
    }
   
    if($(window).scrollTop()>($(".serv").offset().top)-50)
    {
        $(".nav").children(".menu").children("ul").children("li").removeClass("act");
        $(".nav").children(".menu").children("ul").children("li.se").addClass("act");
        $(".nav").children(".win").children("ul").children("li").removeClass("act1");
        $(".nav").children(".win").children("ul").children("li.se").addClass("act1");
        //console.log("hi");
       // $("li.se").addClass("act");
    }

if($(window).scrollTop()>($(".team").offset().top)-100)
    {
        $(".nav").children(".menu").children("ul").children("li").removeClass("act");
        $(".nav").children(".menu").children("ul").children("li.te").addClass("act");
        $(".nav").children(".win").children("ul").children("li").removeClass("act1");
        $(".nav").children(".win").children("ul").children("li.te").addClass("act1");
        //console.log("hi");
       // $("li.se").addClass("act");
    }
    if($(window).scrollTop()>($(".port").offset().top)-150)
    {
        $(".nav").children(".menu").children("ul").children("li").removeClass("act");
        $(".nav").children(".menu").children("ul").children("li.po").addClass("act");
        $(".nav").children(".win").children("ul").children("li").removeClass("act1");
        $(".nav").children(".win").children("ul").children("li.po").addClass("act1");

        //console.log("hi");
       // $("li.se").addClass("act");
    }
    if($(window).scrollTop()>($(".price").offset().top)-200)
    {
        $(".nav").children(".menu").children("ul").children("li").removeClass("act");
        $(".nav").children(".menu").children("ul").children("li.pr").addClass("act");
        $(".nav").children(".win").children("ul").children("li").removeClass("act1");
        $(".nav").children(".win").children("ul").children("li.pr").addClass("act1");
        //console.log("hi");
       // $("li.se").addClass("act");
    }
    if($(window).scrollTop()>($(".test").offset().top)-250)
    {
        $(".nav").children(".menu").children("ul").children("li").removeClass("act");
        $(".nav").children(".menu").children("ul").children("li.tes").addClass("act");
        $(".nav").children(".win").children("ul").children("li").removeClass("act1");
        $(".nav").children(".win").children("ul").children("li.tes").addClass("act1");
        //console.log("hi");
       // $("li.se").addClass("act");
    }
    if($(window).scrollTop()>($(".contact").offset().top)-300)
    {
        $(".nav").children(".menu").children("ul").children("li").removeClass("act");
        $(".nav").children(".menu").children("ul").children("li.con").addClass("act");
        $(".nav").children(".win").children("ul").children("li").removeClass("act1");
        $(".nav").children(".win").children("ul").children("li.con").addClass("act1");
        //console.log("hi");
       // $("li.se").addClass("act");
    }
    if($(window).scrollTop()<50)
    {
        $(".nav").children(".menu").children("ul").children("li").removeClass("act");
        $(".nav").children(".win").children("ul").children("li").removeClass("act1");
    }



//if($(window).scrollTop()>($('.header').offset().top)-50)
});
});