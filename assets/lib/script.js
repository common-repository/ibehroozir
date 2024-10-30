function openInNewTab(url) {
 return window.open(url, '_blank').focus();
}

 

jQuery(document).ready(function($) {

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, { customClass:'ibehroozir addonClass ibehroozir-popover', html : true,container: 'body'});
});

		iziToast.settings({
        class: 'ibehroozir addonClass ibehroozir-iziToast',
		rtl: false,
		displayMode: 0,
		close: false,
		maxWidth: 600,
		transitionIn: 'bounceInDown',
		transitionOut: 'flipInX',
		transitionInMobile: 'bounceInDown',
		transitionOutMobile: 'flipInX',
		layout: 0,
		animateInside: true,
		overlay: true,
		progressBar: true,
		drag: false,
		position: 'bottomCenter',
		color: '#ced4da',
		messageColor: '#000',
		titleColor: '#000',
		progressBarColor: '#6f42c1',
		iconColor: '#000',
		});
		
});


jQuery(document).on("click", ".nav-item", function(e) {
   $('.popover').remove();
});
 

jQuery(document).on("click", "[data-bs-toggle='popover']", function(e) {
    $("[aria-describedby*='popover']").not(this).trigger('click');
});