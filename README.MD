<img src="http://www.image-share.com/upload/3398/131.jpg">

<div dir='rtl' align='right'>
<h1>ویرایشگر غنی متون فارسی برای انگولار ۱</h1>
<br>
برای دیدن عملکرد و ویژگیهای ویرایشگر به این صفحه برید :

<a href="https://hemedani.github.io/frt-editor/">ویرایشگر متن فارسی - frt-editor</a>

<br>

<h3>برخی از ویژگی ها</h3>

<ul>
    <li>بدون نیاز به هیچ وابستگی ای خارج از انگولار</li>
    <li> داشتن فونت های استاندارد فارسی</li>
    <li>پردازش و وارد کردن ویدیو های آپارات</li>
    <li>قالب بندی مناسب جهت اظهار نظرات</li>
    <li>اضافه کردن تنها ۲ فایل به حجم کمتر از ۲۰ کیلوبایت به پروژه شما</li>
    
 </ul>




<h3>طریقه نصب</h3>
اول دو فایل : 
<ul>
    <li>frt-editor.css</li>
    <li>frt-editor.js</li>
</ul>

رو که درون پوشه ی تولید (tolid) هستند رو به صفحه اینکدس خودتون اضافه کنید :

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
<hr>

<div dir="rtl" align="right">
<h2>برای نصب ویرایشگر از طریق باور (Bower) هم میتونید از این دستور استفاده کیند : </h2>
</div>

`bower install frt-editor --save`
<hr>
<br>
<br>
<div dir="rtl" align="right">
<h2>
اطلاعات لازم برای توسعه دهندگان
</h2>
توسعه دهندگان اول این رو کلون کنید :
</div>

`git clone https://github.com/hemedani/frt-editor.git`

<div dir="rtl" align="right">
و بعد با این دو دستور تمام وابستگی ها رو نصب کنید:
</div>

```
    npm install
    bower install
```

<div dir="rtl" align="right">
حالا با دستور :
</div>

‍‍‍`gulp`

<div dir="rtl" align="right">
وب سایت ویرایشگر بالا میاد و میتونید کدهاش رو برای خودتون شخصی سازی کنید همه ی عملیات های تبدیل فایل های استایلوس به سی اس اس و غیره همزمان انجام میشه
<br>
در توسعه از stylus برای پردازش cssها استفاده شده و از browserSync برای نمایش اون توی مرورگر و با هر تغییر به صورت خودکار مرورگر رفرش میشه و فایل های css هم inject میشند.
</div>

<div dir="rtl" align="right">
<br>
<br>
دستور :
</div>

‍‍‍`gulp tolid-site`


<div dir="rtl" align="right">
وب سایت رو برای نمایش در گیت هاب آماده میکنه در واقع پوشه داکز(docs) رو ایجاد میکنه :
<br>
<br>
و دستور :
</div>

‍‍‍`gulp tolid-dr`


<div dir="rtl" align="right">
پوشه ی تولید و دو فایل
<ul>
    <li>frt-editor.css</li>
    <li>frt-editor.js</li>
</ul>
رو برای اضافه کردن به پروزه ها ایجاد میکنه همه ی عملیات فشرده و بهینه سازی فایل ها با این دستور انجام میشه. 
<br>
<br>
به زودی راهنمای کامل و باقی مطالب اضافه میشود
</div>

