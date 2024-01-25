<template>
    <div class = "containers ">
    <nav class="navbar has-background-link-dark" role="navigation" aria-label="main navigation" style="position: fixed; width: 100%;">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://localhost:3000/">
          <img src="@/assets/image/logo.png" width="40" height="50">
        </a>
    
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item mx-1 has-text-light" href="http://localhost:3000/">
            <strong>Trang chủ</strong> 
          </a>
    
          <a class="navbar-item mx-1 has-text-light">
            <strong>Thông tin</strong>
          </a>
    
          <div class="navbar-item has-dropdown is-hoverable mx-1 ">
            <a class="navbar-link has-text-light ">
              <strong>Thêm</strong>
            </a>
    
            <div class="navbar-dropdown ">
              <a class="navbar-item">
                
              </a>
              <a class="navbar-item">
                Hướng dẫn
              </a>
              <a class="navbar-item" href="/contact" @click="handleClick">
                Liên hệ
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Báo cáo
              </a>
            </div>
          </div>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button  is-primary" href="/signup" @click="handleClick">
                <span class="icon is-small">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                  </svg>
                </span>
                <strong> Đăng ký</strong>
              </a>
              <a class="button is-primary" href="/login" @click="handleClick"> 
                <span class="icon is-small">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                  </svg>
                </span>
                <strong> Đăng Nhập</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    <section class="hero is-large is-info" style="padding: 0;">
        <div class="hero-body is-flex is-justify-content-center is-align-items-center">
            <p class="title" style="font-size: 3.5rem;">
            Nhận trợ giúp thêm
            </p>
        </div>
    </section>

    <div class="columns">
        <div class="column is-flex is-justify-content-center is-align-items-center">
          <strong style="font-size: 30px; color: #004ba9;">Chúng tôi có thể giúp gì được cho bạn?</strong>
        </div>
        <div class="column mt-3">
          <strong style="font-size: 27px; color: #004ba9;">Truy cập và đóng tài khoản</strong>
          <div class="choice">
            <input type="radio" name="reason">
            <span style="font-size: 17px; color: #004ba9;">Sự cố đăng nhập</span>
          </div>
          <div class="choice">
            <input type="radio" name="reason">
            <span style="font-size: 17px; color: #004ba9;">Đặt lại mặt khẩu</span>
          </div>
          <div class="choice">
            <input type="radio" name="reason">
            <span style="font-size: 17px; color: #004ba9;">Kích hoạt tài khoản</span>
          </div>
          <div class="choice">
            <input type="radio" name="reason">
            <span style="font-size: 17px; color: #004ba9;">Hủy kích hoạt tài khoản</span>
          </div>
          <div class="choice">
            <input type="radio" name="reason">
            <span style="font-size: 17px; color: #004ba9;">Chuyển đổi thành tài khoản cá nhân</span>
          </div>
          
        </div>
    </div>

    
    </div>
</template>
    
<script>
    export default {
      name: 'IndexPage'
    }
</script>

<style>
.choice{
  margin-top: 10px;
}

</style>