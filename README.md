# Jetpack Form Ajax Wordpress Plugin

A Wordpress plugin to fix the lack of AJAX submit in Jetpack's Contact Forms.

The plugin supports multiple forms on a single page.

## How to use it

Just zip it up and install it, done! 

You might want to customise some styles and the success message, as explained below.

## How it works

The php file only exists to load the js/css and replace the default success message. You can override this message in the same way this plugin does, give yours a higher priority (this is default/10). Wrap your replacement message in an HTML tag with the class `jetpack-form-ajax-success-message`.

The Javascript file does all the work, it:
- adds a `<div>` above the submit button for errors & success message
- replaces the default submit button `<input>` with a `<button>` that has a loading indicator (this is the reason for the CSS file)
- handles the form submit event, submits the form using AJAX, then searches the HTML response for any errors or a success message, which it then injects back in to the page.