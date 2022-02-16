$(document).ready(function () {
  // 偵測高度測試用
  // $(window).scroll(function () {
  //     console.log($(window).scrollTop())
  // });

  // 立即購買btn動態
  $('.allset,a[href="#buy"]').click(function (e) {
    e.preventDefault();
    $("html , body").animate(
      {
        scrollTop: $("#buy").offset().top,
      },
      900
    );
  });

  //週年慶活動辦法下拉選單
  // $(".anniversary_2,.SP_anniversary_2").hide();
  // $(".anniversary_1, .SP_anniversary_1").click(function (e) {
  //   e.preventDefault();
  //   $(".anniversary_2,.SP_anniversary_2").toggle();
  // });
  // $(".anniversary_2, .SP_anniversary_2").click(function (e) {
  //   e.preventDefault();
  //   $(".anniversary_2, .SP_anniversary_2").hide();
  // });

  //偵測sns line btn 手機版還是電腦版，連結不同
  // var vw=$(window).width();
  // if (vw <= 768) {
  //     $(".line_link").attr("href", "https://bit.ly/2YszXqD");
  // } else {
  //     $(".line_link").attr("href", "https://line.me/R/ti/p/%40fhl1857j");
  // }

  // 20211229暫時隱藏購物車文字
  $("#lp_form").ready(function () {
    $(".form-group.cros-text-center").hide();
  });
});
