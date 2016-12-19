<img src="http://www.image-share.com/upload/3398/131.jpg">

<div dir='rtl' align='right'>
<h1>ویرایشگر غنی متون فارسی برای انگولار ۱</h1>
<br>
برای دیدن عملکرد و ویژگیهای ویرایشگر به این صفحه برید :

[frt-editor](https://hemedani.github.io/frt-editor/) ویرایشگر متن فارسی
<a href="https://hemedani.github.io/frt-editor/">ویرایشگر متن فارسی - frt-editor</a>

<br>

<h3>برخی از ویژگی ها</h3>

<ul>
    <li>بدون نیاز نیاز به هیچ وابستگی ای خارج از انگولار</li>
    <li> داشتن فونت های استاندارد فارسی</li>
    <li>  پردازش و وارد کردن ویدیو های آپارات</li>
 </ul>




<h3>طریقه نصب</h3>
اول دو فایل : 
<ul>
    <li>frt-editor.css</li>
    <li>frt-editor.js</li>
</ul>
<br>

از پوشه ی تولید به صفحه اینکدس خودتون اضافه کنید :
</div>
```html
    <link rel="stylesheet" href="xyz/frt-editor.css">
    <script src="xyz/frt-editor.js"></script>
```

<div dir="rtl" align="right">
 و بعد به عنوان یک وابستگی دایرکتیو رو به ماژول انگولار اضافه اش کنید :
</div>

```javascript
    angular.module( 'barname', [

            // directive
            'frtEditor',

        ] )
        .config( tanzimBarname );
```

<div dir="rtl" align="right">
در انتها هم توی صفحات خودتون این شکلی ازش استفاده کنید :
</div>

```html
    <frt-editor ng-model="matnkamel"></frt-editor>
```

<div dir="rtl" align="right">
میتونید از دستور باور هم برای اضافه کردن به پروژه استفاده کنید :
</div>

`bower install frt-editor --save`

<div dir="rtl" align="right">
به زودی راهنمای کامل و باقی مطالب اضافه میشود
</div>

