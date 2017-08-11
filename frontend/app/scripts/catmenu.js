var toggled=false;
function toggleMenu(arg){
    // body...

if(!toggled){$('.menu-wrapper').removeClass('goP');$('.menu-wrapper').addClass('goN');
toggled=true;}
else {$('.menu-wrapper').removeClass('goN');$('.menu-wrapper').addClass('goP'); 
toggled=false;}
$(arg).toggleClass('cat');
}




function pedit(argument) {

var post=$(argument).parent().parent();
  console.log();
  // body...
}







var step=0;

function open_Nav(){
    // body...
           $('#category_menu').velocity('fadeIn', { delay: 200, duration: 600 });


}
	$(document).ready(function (argument) {
		// body...

		// $('#menu-li-').velocity("scroll", { duration: 750, offset: 250 });


		 $('#menu-li-').animate({
      scrollLeft: 700
    }, 700);



	});