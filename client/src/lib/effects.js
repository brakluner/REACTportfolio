import $ from 'jquery';

export const profilePic = () => {
    $(".profile").hover(function(){
      var scal = $(".profile");
      var teas = $('.teaser');
      scal.animate({height: "100px"}, "slow");
      teas.animate({font: "13px"}, "slow");
      scal.animate({width: "300px"}, "slow");
      teas.animate({font: "13px"}, "slow");
      scal.animate({height: "300px"}, "slow");
      teas.animate({font: "13px"}, "slow");
      scal.animate({width: "100px"}, "slow");
      teas.animate({font: "13px"}, "slow");
      scal.animate({height: "", width: ""}, "slow");
      teas.animate({fontSize: "100px"}, "slow");
    });
  }
