# Turntable jQuery Plugin
This plugin will let you spin images (provided you have some to use)

###Usage
***
All image sources need to be included in a data attribute on the li, and the img tags will be dynamically added. Make sure it is called data-img-src, followed by the tag. 

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
  $('#myTurntable').turntable());
```
###Settings
***
The 