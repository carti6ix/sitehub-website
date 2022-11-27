<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Rscripts | 404 Not Found</title>

<meta name="description" content="404">
<meta name="keywords" content="404">
<meta name="author" content="Xyba">

<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
<link rel="manifest" href="assets/favicon/site.webmanifest">
<link rel="mask-icon" href="assets/favicon/safari-pinned-tab.svg" color="#6366f1">
<link rel="shortcut icon" href="assets/favicon/favicon.ico">
<meta name="msapplication-TileColor" content="#080032">
<meta name="msapplication-config" content="assets/favicon/browserconfig.xml">
<meta name="theme-color" content="#ffffff">

<link rel="stylesheet" media="screen" href="/assets/vendor/boxicons/css/boxicons.min.css" />

<link rel="stylesheet" media="screen" href="/assets/css/theme.min.css">

<style>
        .page-loading {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            -webkit-transition: all .4s .2s ease-in-out;
            transition: all .4s .2s ease-in-out;
            background-color: #fff;
            opacity: 0;
            visibility: hidden;
            z-index: 9999;
        }

        .dark-mode .page-loading {
            background-color: #131022;
        }

        .page-loading.active {
            opacity: 1;
            visibility: visible;
        }

        .page-loading-inner {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            text-align: center;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            -webkit-transition: opacity .2s ease-in-out;
            transition: opacity .2s ease-in-out;
            opacity: 0;
        }

        .page-loading.active>.page-loading-inner {
            opacity: 1;
        }

        .page-loading-inner>span {
            display: block;
            font-size: 1rem;
            font-weight: normal;
            color: #9397ad;
        }

        .dark-mode .page-loading-inner>span {
            color: #fff;
            opacity: .6;
        }

        .page-spinner {
            display: inline-block;
            width: 2.75rem;
            height: 2.75rem;
            margin-bottom: .75rem;
            vertical-align: text-bottom;
            border: .15em solid #b4b7c9;
            border-right-color: transparent;
            border-radius: 50%;
            -webkit-animation: spinner .75s linear infinite;
            animation: spinner .75s linear infinite;
        }

        .dark-mode .page-spinner {
            border-color: rgba(255, 255, 255, .4);
            border-right-color: transparent;
        }

        @-webkit-keyframes spinner {
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        @keyframes spinner {
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    </style>
<script type="e5d152eccc46f8fc70c90740-text/javascript">
        let mode = window.localStorage.getItem('mode'),
            root = document.getElementsByTagName('html')[0];
        if (mode !== undefined && mode === 'dark') {
            root.classList.add('dark-mode');
        } else {
            root.classList.remove('dark-mode');
        }
    </script>

<script type="e5d152eccc46f8fc70c90740-text/javascript">
        (function () {
            window.onload = function () {
                const preloader = document.querySelector('.page-loading');
                preloader.classList.remove('active');
                setTimeout(function () {
                    preloader.remove();
                }, 1000);
            };
        })();
    </script>

<script type="e5d152eccc46f8fc70c90740-text/javascript">
        (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    '../www.googletagmanager.com/gtm5445.html?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-WKV3GT5');
    </script>
</head>

<body>

<div class="page-loading active">
<div class="page-loading-inner">
<div class="page-spinner"></div><span>Loading...</span>
</div>
</div>

<noscript>
        <iframe src="http://www.googletagmanager.com/ns.html?id=GTM-WKV3GT5" height="0" width="0"
            style="display: none; visibility: hidden;"></iframe>
    </noscript>


<main class="page-wrapper">

<div class="d-dark-mode-none position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center bg-size-cover" style="background-image: url(assets/img/404/light/bg.jpg);"></div>

<div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center bg-size-cover" style="background-image: url(assets/img/404/dark/bg.jpg);"></div>

<section class="container d-flex flex-column h-100 align-items-center position-relative zindex-5 pt-5">
<div class="text-center pt-5 pb-3 mt-auto">

<div class="parallax mx-auto d-dark-mode-none" style="max-width: 574px;">
<div class="parallax-layer" data-depth="-0.15">
<img src="assets/img/404/light/layer01.png" alt="Layer">
</div>
<div class="parallax-layer" data-depth="0.12">
<img src="assets/img/404/light/layer02.png" alt="Layer">
</div>
<div class="parallax-layer zindex-5" data-depth="-0.12">
<img src="assets/img/404/light/layer03.png" alt="Layer">
</div>
</div>

<div class="parallax mx-auto d-none d-dark-mode-block" style="max-width: 574px;">
<div class="parallax-layer" data-depth="-0.15">
<img src="assets/img/404/dark/layer01.png" alt="Layer">
</div>
<div class="parallax-layer" data-depth="0.12">
<img src="assets/img/404/dark/layer02.png" alt="Layer">
</div>
<div class="parallax-layer zindex-5" data-depth="-0.12">
<img src="assets/img/404/dark/layer03.png" alt="Layer">
</div>
</div>
<h1 class="visually-hidden">404</h1>
<h2 class="display-5">Ooops!</h2>
<p class="fs-xl pb-3 pb-md-0 mb-md-5">The page you are looking for is not available.</p>
<a href="./" class="btn btn-lg btn-primary shadow-primary w-sm-auto w-100">
<i class="bx bx-home-alt me-2 ms-n1 lead"></i>
Go to homepage
</a>
</div>
<div class="text-center py-lg-5 py-4 mt-auto">
<p class="fs-sm pt-3 pt-lg-0 mb-0">
<span class="opacity-75">&copy; Rscripts 2022 | All rights reserved.</span>
</p>
</div>
</section>
</main>

<script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" type="e5d152eccc46f8fc70c90740-text/javascript"></script>
<script src="assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js" type="e5d152eccc46f8fc70c90740-text/javascript"></script>
<script src="assets/vendor/parallax-js/dist/parallax.min.js" type="e5d152eccc46f8fc70c90740-text/javascript"></script>

<script src="assets/js/theme.min.js" type="e5d152eccc46f8fc70c90740-text/javascript"></script>
<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="e5d152eccc46f8fc70c90740-|49" defer=""></script></body>
</html>