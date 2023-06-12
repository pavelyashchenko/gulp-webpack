// import WOW from "wow";
import { fixedHeader, mobileMenu } from "../modules/header/index.js"

(function () {
  // wow
	// new WOW().init();

  // iziModal
  // $(".modal").iziModal({
  //   transitionIn: 'fadeInDown',
  //   bodyOverflow: true
  // });
  
  fixedHeader();
  mobileMenu();
})();