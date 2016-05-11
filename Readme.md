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
The plugin accepts the following settings:

```javascript
$('#mySpinnyContainer').turntable(
  {
    'axis': 'y',
    'touch': true,
    'mouse': true,
    'slider': false,
    'sliderSelector': '#turntable-slider'
  }
);
```

 * axis: Decide if you want to flip through the images as your mouse/finger moves along the x or y axis of the container. The plugin will default to x if no option is provided.
 
 * mouse: Enable/disable flipping through images via mouse movements. The plugin will default to true if no option is provided.
 
 * touch: Enable/disable flipping through images via touch movements. The plugin will default to true if no option is provided.
 
 * slider: Enable/disable flipping through images via slider movements. The plugin will default to false if no option is provided.
 
 * sliderSelector: Define the selector for the slider(s) that will control flipping through images. If the "slider" option is set to false, the slider(s) found using this selector will never be enabled. The plugin will default to "#turntable-slider" if no option is provided.

###Dependencies
***
jQuery
