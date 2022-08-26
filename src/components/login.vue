<template>
<div>
    <section class="banner-area relative">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row login-box">
          <div class="col-md-5">
            <div class="logo">
              <a href="https://www.eurekabookhouse.co.id/"><img src="https://www.eurekabookhouse.co.id/assets/front/images/icons/eureka-logo.png" alt=""></a>
            </div>
             <div id="owl-demo" class="owl-carousel owl-theme">
              <img src="https://www.eurekabookhouse.co.id/assets/front/images/banner-promo/390034-PCMO8U-570.svg">
            </div>
            <div>
              <h1>Selamat Datang,,</h1>
              <p style="font-size: 18px;">Isi form berikut untuk melanjutkan berbelanja</p>
              <div class="login-box-body">
                <p class="login-box-msg"><center><br/><br/>
                  </center></p>

                    <form action="https://www.eurekabookhouse.co.id/login/" method="post">
                      <div class="form-group has-feedback">
                        <input type="text" name="email" class="form-control" placeholder="Email">
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                      </div>
                      <div class="form-group has-feedback">
                        <input type="password" name="password"  class="form-control" placeholder="Password">
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                      </div>
                      <input type="checkbox" name="rememberme" value="1" />&nbsp;Remember Me
                    

                      <div class="row">
                        <div class="col-xs-12">
                          <button type="submit" name="submit" class="btn btn-primary btn-block btn-flat btn-lg"><i class="fa fa-sign-in"></i> Sign In</button><br/>
                        </div>
                      </div>

                      


                    </form>
                  </div>
                  <div style="margin-bottom: 10px">
                    <span>Belum memiliki akun? </span><a href="https://www.eurekabookhouse.co.id/register"><b>Register</b></a> | <a href="https://www.eurekabookhouse.co.id/forgot_password"><b>Lupa Password</b></a> 
                    <!--  <a href="https://www.eurekabookhouse.co.id/password/forgot" class="forgot-password">Forgot the password?</a> -->
                  </div>
                  <div class="text-center">
                    <a class="btn btn-primary" href="https://www.facebook.com/v2.10/dialog/oauth?client_id=163058760394087&amp;state=a6447b88d29f7b2537dfdf09b6f26b2c&amp;response_type=code&amp;sdk=php-sdk-5.6.2&amp;redirect_uri=https%3A%2F%2Feurekabookhouse.co.id%2Flogin_facebook%2F&amp;scope=email" style="margin-bottom: 5px;"><i class="fa fa-facebook p-r-10"></i> Sign in with Facebook</a>
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
  name: "loginPage",
}
</script>
