(function() {
	"use strict";
	$(window).load(function(){
		$("[data-toggle-nav]").click(function() {
			var toggle_el = $(this).data("toggle-nav"); 
			$(toggle_el).toggleClass("open-sidebar");
		});
	});
})();
/*(function() {

	"use strict";

	var toggles = document.querySelectorAll(".c-hamburger");

	for (var i = toggles.length - 1; i >= 0; i--) {
	  var toggle = toggles[i];
	  toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
	  toggle.addEventListener( "click", function(e) {
		e.preventDefault();
		(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
	  });
	}

  })();**/