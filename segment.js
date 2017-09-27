(function( $ ){
    $.fn.extend({
        Segment: function ( ) {
		var is_disabled = $(this).prop("disabled");
			$(this).each(function (){
				var self = $(this);
				var onchange = self.attr('onchange');
				var wrapper = $("<div>",{class: "ui-segment"});
				$(this).find("option").each(function (){
					var option = $("<span>",{class: 'option',onclick:onchange,text: $(this).text(),value: $(this).val()});
					if ($(this).is(":selected")){
						option.addClass("active");
					}
					wrapper.append(option);
				});
				wrapper.find("span.option").click(function (){
				 	if (!is_disabled) {
						wrapper.find("span.option").removeClass("active");
						$(this).addClass("active");
						self.val($(this).attr('value'));
					}
				});
				$(this).after(wrapper);
				$(this).hide();
			});
        }
    });
})(jQuery);
