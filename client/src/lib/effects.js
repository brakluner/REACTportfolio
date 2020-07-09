import $ from 'jquery';

export const jQuerycode = () => {
    $(".profile").hover(function(){
      var scal = $(".profile");
      scal.animate({height: "100px"}, "slow");
      scal.animate({width: "300px"}, "slow");
      scal.animate({height: "300px"}, "slow");
      scal.animate({width: "100px"}, "slow");
      scal.animate({height: "", width: ""}, "slow");
    });
  }
