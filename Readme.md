# Turntable.js :: A Responsive JQuery Slider
***
A jQuery plugin that will flip through a list of images as your mouse sweeps across a container

###Usage
***
All image sources need to be included in a data attribute on the li, and the image tags will be dynamically added. Make sure it is called data-img-src, followed by the link to your images. 

There is very minimal css for the slider, but is necessary for its function. Feel free to copy and paste this code into your css file, or include a link for this.

#####HTML

```html
<div id="myTurntable" class="turntable">
  <ul>
    <li data-img-src="./images/0.jpg"></li>
    <li data-img-src="./images/1.jpg"></li>
    <li data-img-src="./images/2.jpg"></li>
    <li data-img-src="./images/3.jpg"></li>
    <li data-img-src="./images/4.jpg"></li>
    <li data-img-src="./images/5.jpg"></li>
  </ul>
</div>
```

#####Javascript

```javascript
  $('#myTurntable').turntable();
```
#####CSS

```css
.turntable {
  display: inline-block;
  margin: 0px;
}
.turntable ul {
  padding: 0px;
  margin: 0px;
}
.turntable ul li {
  list-style-type: none;
  display: none;
}
.turntable ul li img {
  width: 100%;
}
.turntable ul li.active {
  display: block;
}
```

###Settings
***
The plugin accepts one setting, the axis object. You can decide if you want to flip through the images as your mouse moves along the x or y axis of the container. You can pass the options in when you call the plugin like this.

```javascript
$('#mySpinnyContainer').turntable({
  axis: 'x, y, or scroll',
  reverse: boolean, // true or false, will reverse the array of images
  scrollStart: 'top, middle, or bottom', // only necessary if axis = 'scroll'
});```
 The plugin will default to x if no option is provided. 

###Dependencies
***
jQuery
