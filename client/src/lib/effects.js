import $ from 'jquery';
import { rotate } from './rotate';

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


  export const scurryScallop = () => {
    $(".scallop").ready(function(){
      var scal = $(".scallop");
      scal.animate({padding: "0 0 0 10px"}, "slow");
      scal.animate({padding: "0 0 0 20px"}, "slow");
      scal.animate({padding: "0 0 0 30px"}, "slow");
      scal.animate({padding: "0 0 0 40px"}, "slow");
      scal.animate({padding: "0 0 0 50px"}, "slow");
      scal.animate({padding: "0 0 0 60px"}, "slow");
      scal.animate({padding: "0 0 0 70px"}, "slow");
      scal.animate({padding: "0 0 0 80px"}, "slow");
      scal.animate({padding: "0 0 0 90px"}, "slow");
      scurryScallop();
    });
  }

  export const scurryShrimp = () => {
    $(".shrimp").ready(function(){
      var scal = $(".shrimp");
      scal.animate({left: "700px"}, "slow");
      scal.animate({left: "0px"}, "slow");
      scal.animate({right: "700px"}, "slow");
      scal.animate({right: ""}, "slow");
      scurryShrimp();
    });
  }


  export const scurrySnail = () => {
    $('.snail').ready(function () {
      rotate()
      if (!$('.snail').is(':animated')) {
          $(".complete").remove();
      }
  
      $('.snail').rotate(-1500, {
          duration: 1500,
          complete: function() {
              $(".ani-status").remove();
          }
      });
  
  });
  
      scurryShrimp();
    };

    
  

  // function autostart() {var i
  //   ;
  
  // for (i = 0; i < 10; i += 1) {
  //   setTimeout(function () {
  //     scurryShrimp();
  //     scurryScallop();
  //     console.log(i);
  //   }, 4);
  // }window.onload = autostart}