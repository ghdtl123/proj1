$(function(){
   $(window).scroll(function(){
     if ($(document).scrollTop() >= 230){
      $('#headtop').slideDown();
     }else{
      $('#headtop').slideUp();
     }
    })//headtop
    $('#header').hover(function(){
        $('#nav_back,.depth2').stop().fadeIn();
    },function(){
        $('#nav_back,.depth2').stop().fadeOut();
    })//nav end
    
    var sta = 1;//상태 1
       $('#header #nav_back1 button').click(function(){
         if(sta == 1){
          $(this).addClass('on');
          $('#header #nav_back2').slideDown();
          sta = 2;//상태 2
         }
         else{
          $(this).removeClass('on');
          $('#header #nav_back2').slideUp();
          sta = 1;//상태 1로 돌아가라  
         }
       })//loca end
       $(window).scroll(function(){
        if($(document).scrollTop() >= 300){
            $('#sec2 .fontimg1').animate({'margin-left': '420px', opacity: '1'},1500);
            $('#sec2 .fontimg2').animate({'margin-left': '455px', opacity: '1'},1500);
        }
       })//#sec2 fontimg
       $(window).scroll(function(){
        if($(document).scrollTop() >= 400){
            $('#sec2 .logoimg1').fadeIn(3000);
        }
       })
       var href = $('#sec2 .vertical a.on').attr('href');
       $(href).show();//on클래스 항상 보이게
       
       $('#sec2 .vertical a').click(function(){
        var href = $(this).attr('href');

        $('#sec2 .popup').fadeOut();
        $(href).fadeIn();
       })//popup end
       $('#sec3 .inner > div').each(function(){
        var find_img = $(this).find('img');
        var scr_off = find_img.attr('src');
        var scr_on = scr_off.replace('off','on');

        $(this).hover(function(){
            find_img.attr('src',scr_on);
        },function(){
            find_img.attr('src',scr_off);
        })//hover end
       })//sec3 hover end
       $('#sec6 .upload').hover(function(){
           $('#sec6 h3').fadeIn();},
         function(){$('#sec6 h3').fadeOut();})
})//jq end