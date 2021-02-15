$(document).ready(function(){
    $('#top_pop .close').click(function(){
        $('#top_pop').hide();
    });//상단 팝업 닫기
    var notice;
        notice = setInterval(function(){
            $('.not_slide .not_txt > li:first-child').animate({'margin-top':'-25px'},600,function(){
                $('.not_slide .not_txt').append($('.not_slide .not_txt > li:first-child'));
                $('.not_slide .not_txt > li:last-child').css({'margin-top':'0'});
            });
        },2000);//공지사항 슬라이드
    var pupr;
        pupr = setInterval(function(){
            $('.pr_slide .pr_txt > li:first-child').animate({'margin-left':'-400px'},1000,function(){
                $('.pr_slide .pr_txt').append($('.pr_slide .pr_txt > li:first-child'));
                $('.pr_slide .pr_txt > li:last-child').css({'margin-left':'0'});
            });
        },2000);//인기검색어 슬라이드
    $('#s_bnt').click(function(){
        $('#nav_pop').slideDown();
    });//사이트맵 다운
    $('.nav_close').click(function(){
        $('#nav_pop').slideUp();
    });//사이트맵 업
    $('.vod_box').each(function(){
        var find_img = $(this).find('img');
        var scr_off = find_img.attr('src');
        var scr_on = scr_off.replace('off','on');

        $(this).hover(function(){
            find_img.attr('src',scr_on);
        },function(){
            find_img.attr('src',scr_off);
        })//hover end
    })//last_box a .each end
    $(window).scroll(function(){
        if($(document).scrollTop() >= 900 && $(document).scrollTop() 
           <= $('#footer').offset().top - 900){
            $('#q_menu').fadeIn(200);
        }
        else{
            $('#q_menu').fadeOut(200);
        }
    })
})