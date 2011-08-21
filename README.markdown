#jQuery Max Length Plugin
##What?
This plugin limits the allowable input length in inputs and textareas.

Checkout `demo.html` for an example.

##How?
Suppose you have this markup:

    <textarea>
    </textarea>

And this call to the plugin:

    $('textarea').maxLength(100);

The plugin will prevent the user from entering more than 100 characters into the textarea. Check out `demo.html` a more complex example.

##Note!
This plugin allows you to keep on chaining, so, for example:

    $('#myelement').maxLength().css({border:'1px solid blue'});

Would run `maxLength` on `#myelement` then add a blue border to it after.

##Options:

The following options can be provided like so (default values specified):

    $('.yourSelector').endlessInputs({
	
		// none yet

	});      

##Whats next?

The world!

##Found a bug? 

Submit a bug report above or [here](https://github.com/mharen/jquery-max-length-plugin/issues)

Or ping me on [Twitter](http://www.twitter.com/mharen) or on my [blog](http://blog.wassupy.com)
