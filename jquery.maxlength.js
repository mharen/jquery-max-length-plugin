/*
	Updated by 2011 Michael Haren, mharen@gmail.com
	Twitter @mharen
	Web http://blog.wassupy.com
	
	Based on original max length plugin by:
	(c) Iv�n Guardado Castro (dev.ivangc@gmail.com) @ http://yensdesign.com/

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:
	
	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
;(function($){

	jQuery.fn.maxLength = function(options) {
		// if called with an integer, use that as the max
		// otherwise look at the options hash
		if (typeof(item) !== "object"){
			options = { maxLength: options };
		}
		var settings = $.extend({}, $.fn.maxLength.defaultOptions, options);
		
		return this.each(function() {
			var $this = $(this);
			
			var max = settings.maxLength > 0? settings.maxLength : $this.data(settings.dataAttributeName);
			if(max == null || max == undefined){
				if(console && console.log){
					console.log("MaxLength cannot work with given config. Check your options or defaults");
				}
				// skip this element
				return true;
			}
			//Get the type of the matched element
			var type = this.tagName.toLowerCase();
			//If the type property exists, save it in lower case
			var inputType = this.type ? this.type.toLowerCase() : null;
			//Check if is a input type=text OR type=password
			if (type == "input" && inputType == "text" || inputType == "password") {
				//Apply the standard maxLength
				this.maxLength = max;
			}
			//Check if the element is a textarea
			else if (type == "textarea") {
				//Add the key press event
				$this.keypress(function(e) {
					//Get the event object (for IE)
					var ob = e || event;
					//Get the code of key pressed
					var keyCode = ob.keyCode;
					//Check if it has a selected text
					var hasSelection = document.selection ? document.selection.createRange().text.length > 0 : this.selectionStart != this.selectionEnd;
					//return false if can't write more
					return !(this.value.length >= max && (keyCode > 50 || keyCode == 32 || keyCode == 0 || keyCode == 13) && !ob.ctrlKey && !ob.altKey && !hasSelection);
				});
				//Add the key up event
				$this.keyup(function() {
					//If the keypress fail and allow write more text that required, this event will remove it 
					if (this.value.length > max) {
						this.value = this.value.substring(0, max);
					}
				});
			}
		});
	};

	$.fn.maxLength.defaultOptions = { 
		// leave off the `data-` prefix and camel case it as described here
		// http://api.jquery.com/data#data2
		// for example, if the HTML5 element looks like this:
		// <input data-val-length-max='10' />
		// use this dataAttributeName:
		dataAttributeName: 'valLengthMax',
		maxLength: 0
	};
})(jQuery);
