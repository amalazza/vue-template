<template>
<div>
 <section class="banner-area relative">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row login-box">
          <div class="col-md-6 visible-lg">
            <div class="logo">
              <a href="https://www.eurekabookhouse.co.id/"><img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/eureka-logo.png" alt=""></a>
            </div>
            <div id="owl-demo" class="owl-carousel owl-theme">
              <img src="https://www.eurekabookhouse.co.id/assets/front/images/banner-promo/390034-PCMO8U-570.svg">
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-lg-5 col-md-7 col-sm-8" style="margin-top: 80px">
            <div>
              <h1>Selamat Datang,</h1>
              <p style="font-size: 18px;">Isi form berikut untuk mendaftar</p>
              <div class="login-box-body">
                <p class="login-box-msg"><center><br/><br/>
                  </center></p>

                    <form class="form-signin" action="https://www.eurekabookhouse.co.id/register/" method="post">
                      <span id="reauth-email" class="reauth-email"></span>

                      <input name="firstname" type="text" id="inputEmail" class="form-control" placeholder="First name" required autofocus>
                      <input name="lastname" type="text" id="inputEmail" class="form-control" placeholder="Last name" required>
                      <input name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" value="" required>
                      <input name="password" type="password" id="inputEmail" class="form-control" placeholder="Password" required>
                      <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Register</button>
                    </form><!-- /form -->
                  </div>
                  <div style="margin-bottom: 10px">
                    <span>Sudah memiliki akun? </span><a href="https://www.eurekabookhouse.co.id/login"><b>Login</b></a> 
                  </div>
                  <div class="text-center">
                    <a class="btn btn-primary" href="https://www.facebook.com/v2.10/dialog/oauth?client_id=163058760394087&amp;state=e1b0e7988ce152e1979d44d20b8d1dd4&amp;response_type=code&amp;sdk=php-sdk-5.6.2&amp;redirect_uri=https%3A%2F%2Feurekabookhouse.co.id%2Flogin_facebook%2F&amp;scope=email" style="margin-bottom: 5px;"><i class="fa fa-facebook p-r-10"></i> Sign in with Facebook</a>
                    <a class="btn btn-danger" href="https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=https%3A%2F%2Fwww.eurekabookhouse.co.id%2Flogin_google&client_id=92147288992-tgqggs7rad31iaam07jc4m8g7pjrkv2d.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&approval_prompt=force" style="margin-bottom: 5px;"><i class="fa fa-google p-r-10"></i> Sign in with Google</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
</div>
</template>
<script scope>
export default {
  name: "daftarPage", 
}
</script>