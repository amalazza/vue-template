<template>
    <div>
    <header>
        <nav class="navbar">
            <div class="container">
                <ul class="nav navbar-nav navbar-logo mx-auto">
                    <li class="nav-item">
                        <a href="https://www.eurekabookhouse.co.id/" class="logo">
                            <img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/ebhcom-header_new.png"
                                alt="IMG-LOGO">
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <footer class="footer">
        <div class="container text-center">
            <span class="text-muted">Dikembangkan oleh Eureka IT Developer</span>
        </div>
    </footer>

    </div>
</template>
<script>
export default {
    name: "syaratmemberPage",
}
</script>
<style>
.wrap-icon-header {
    position: absolute;
}

.logo {
    position: relative;
    margin: 0 auto;
}

.logo img {
    height: 50px;
    margin-bottom: 10px;
}

.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
}

html {
    position: relative;
    min-height: 100%;
}

body {
    margin-bottom: 60px;
}

.sidenav {
    box-shadow: 5px 0 5px -2px #888;
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #eee;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav .menu a:hover {
    color: #000;
    background-color: yellow;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}

.burger {
    position: absolute;
    font-size: 30px;
    cursor: pointer;
    color: white
}

.navbar {
    background-color: #2C6B9B
}
</style>