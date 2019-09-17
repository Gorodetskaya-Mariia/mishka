# «Mishka» - handcrafted gifts
## Technology stack and techniques used in project:
	* HTML5 CSS3 Javascript
	* Swiper.js for slider functionality
	* Lingumania.js for localization 
	* Gulp taskrunner
	* Sass (mixins, nesting, variables)
	* Various PostCSS plugins
	* BEM methodology
	* CSS and SVG Animations
	* Responsive Web Design approach
	* CSS Flexbox Layout

## What is done:
### Pages implemented:
> [Main page](https://gorodetskaya-mariia.github.io/Mishka/index.html)<br> 
> [Catalog](https://gorodetskaya-mariia.github.io/Mishka/catalog.html)<br>
> [Custom knitting](https://gorodetskaya-mariia.github.io/Mishka/form.html)<br> 

### Project overview:
- You can find a modal window to choose a size of products by clicking on button "Order"
	on main page.
- CSS Animations were used for beautiful animations not only of buttons, but also backgrounds of titles on every page and a mobile menu.
- Swiper.js library was chosen to implement a slider of reviews (section «Reviews» on main page).
- Lingumania.js library was chosen to localize website. A simple JSON was added with translations.The website is available in two languages (Russian and English).
- Responsive Web Design is achieved through flexboxes and media expressions. Every image is a responsive image — image that works well on devices with widely differing screen sizes and resolutions. This way the browser can choose the image that best fits the current view and device. I used tag «picture» to add more flexibility when specifying image resources. 
- About Gulp taskrunner: A local Browsersync server with auto-refresh is used for developing process. Gulp is subscribed to changes in *.js / *.sass / *.html files and if any of them changes, it launches pipe tasks that perform optimizations, transpile from .sass to .css, minify and concatenate scripts and style sheets. In the prod .css styles, the necessary vendor prefixes are automatically applied. 
- A map in contacts section on main page is an interactive Google Map.


> [Specification.md](Specification.md) — project specification.
