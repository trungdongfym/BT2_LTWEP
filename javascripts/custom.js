// menu 
$(document).ready(
  $(window).scroll(
    () => {
      let pos = $(window).scrollTop();
      if (pos > 0) {
        $(".navbar").addClass("sticky");

      } else {
        $(".navbar").removeClass("sticky");
      }
      if (pos >= 180) {
        $(".navbar").addClass("awake");
      } else {
        $(".navbar").removeClass("awake");
      }
    }
  )
);
function ScrollTop(element, offset, duration) {
  $(window).scroll(
    function () {
      let pos = $(this).scrollTop();
      if (pos > offset) {
        $(element).fadeIn(duration);
      } else $(element).fadeOut(duration);
    }
  );
  $(element).click(function () {
    // $('html, body').animate({scrollTop: 0}, duration);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
// to-top
$(document).ready(
  function () {
    ScrollTop(".to-top", 300, 500);
  },
);
// animation
function animation(position_animate) {
  // lấy mảng element có class position_animate
  let arrAnimate = $(position_animate);
  for (let i = 0; i < arrAnimate.length; i++) {
    // Lấy class trong mỗi phần tử của mảng arrAnimate
    let stringClass = $(arrAnimate[i]).attr('class');
    // Nếu element chưa có animation fadeInUp
    if (stringClass.indexOf("fadeInUp") == -1) {
      let classAnimated = ".";
      let arrClass=stringClass.split(/\s+/);
      for(let i of arrClass){
        if(i.indexOf("animated")!=-1){
          classAnimated+=i;
          break;
        }
      }
      activation_point =$(classAnimated).offset().top - $(window).height()+
       $(classAnimated).height() * 0.5;
      // Nếu vị trí đúng thì kích hoạt animation
      if ($(window).scrollTop() > activation_point) {
        $(classAnimated).addClass('fadeInUp');
      }
    }
  }
}
function call_animate(){
  animation(".ctr-animate");
}
// animation
// window.addEventListener('scroll',)

$(document).ready(
  // $(window).scroll(
  //   () => {
  //     animation(".ctr-animate");
  //   }
  // ),
  window.addEventListener('scroll',call_animate),
  (
    () => {
      let activation_point = $(".ctr-animate-header").offset().top - $(window).height() +
        $(".ctr-animate-header").height()*0.5;
      if($(window).scrollTop()>activation_point){
        $(".ctr-animate-header").addClass("fadeInUp")
      }
    }
  )()
)

// thêm class ctr-animate
$(document).ready(function () {
  // thêm animation cho block-product
  $('.block-product').addClass('ctr-animate');
  $('.group-work').addClass('ctr-animate');
  $('.intro-section').addClass('ctr-animate');
  $('.blog-entry').addClass('ctr-animate');
  let arrAnimate = $(".ctr-animate");
  // thêm class để kích hoạt animation
  for (let i = 0; i < arrAnimate.length; i++) {
    $(arrAnimate[i]).addClass(`animated-${i}`);
  }
});