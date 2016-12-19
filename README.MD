<div dir="rtl" align="right">

ویرایشگر غنی متون فارسی برای انگولار ۱
===


----------


![عکس ویرایشگر فارسی](http://www.image-share.com/upload/3398/131.jpg)

برای دیدن عملکرد و ویژگیهای ویرایشگر به این صفحه برید :
-------------------------------------------------------


[frt-editor](https://hemedani.github.io/frt-editor/) ویرایشگر متن فارسی

بر از ویژگی ها

* بدون نیاز نیاز به هیچ وابستگی ای خارج از انگولار
* داشتن فونت های استاندارد فارسی
* پردازش و وارد کردن ویدیو های آپارات
* قالب بندی مناسب جهت اظهار نظرات


طریقه نصب

اول دو فایل : 
</div>

`frt-editor.css `
`frt-editor.js`

<div dir="rtl" align="right">
از پوشه ی تولید به صفحه اینکدس خودتون اضافه کنید :
</div>

```html
    <link rel="stylesheet" href="xyz/frt-editor.css">
    <script src="xyz/frt-editor.js"></script>
```

<div dir="rtl" align="right">
 و بعد به عنوان یک وابستگی دایرکتیو ‍`frtEditor` رو به ماژول انگولار اضافه اش کنید :
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

