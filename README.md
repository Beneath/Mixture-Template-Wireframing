Beneaths Mixture-Template-Wireframing
=====================================

This is Beneaths template/boilerplate for Mixture to rapidly create a browser wireframe.

### 3rd party libraries, frameworks etc.
- Bootstrap 3.0.3 (less source)
- jQuery 1.10.2

### Breakdown of how to use
___Styles___ New styles should preferably be written in lessCSS. This should all be done in less/master.less

___Scripts___ Scripts goes to scripts/master.mix.js. Please not the special mix syntax as described in the Mixture documentation. If you need additional scripts added, add them at the top of master.mix.js as a @import. Check the file for the jQuery import.

___Markup___ To add new markup you'll be looking at the templates folder. Each page needs a liquid file in the root of templates, like index.liquid. When creating a new page like "About", the page should be about.liquid. The layouts folder is the main file, and it's where all the magic happens. includes should be used for repeated content such as the header and the footer.


If in doubt, ask!