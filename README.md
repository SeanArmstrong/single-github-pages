# Github Pages Single Page App Test

### https://seanarmstrong.github.io/single-github-pages/  <-- React Router abit flakey

Uses a 404 hack - http://www.backalleycoder.com/2016/05/13/sghpa-the-single-page-app-hack-for-github-pages/

Which allows single page apps using a meta redirect from a 404 page


```html

<!-- index.html -->

<script>
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

```html
  <!-- 404.html -->
  <script>
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/single-github-pages'"></meta>
```
