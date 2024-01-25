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
              <a class="navbar-item" href="/guide" @click="handleClick">
                Hướng dẫn
              </a>
              <a class="navbar-item">
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
    
    <section class="hero is-medium is-success" style="padding: 0;">
        <div class="hero-body is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
          <p class="title" style="font-size: 3.5rem;">
            Liên hệ qua các kênh tư vấn của chúng tôi            
          </p>
          <p class="subtitle">
            <h3 style="color: rgb(236, 231, 241); font-size: 20px;">Chúng tôi luôn sẵn sàng hỗ trợ 24/7</h3>
            <div class="columns">
              <div class="column has-text-warning">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span style="font-size: 25px;">Văn phòng</span><br>
                <span style="font-size: 20px;">Số 1 Đại Cồ Việt, P.Bách Khoa, Q.Hai Bà Trưng, Hà Nội</span>
              </div>
              <a class="column has-text-link" href="https://www.facebook.com/profile.php?id=100013548966513" @click="handleClick">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                </svg>
                <span style="font-size: 25px;">Facebook</span>
              </a>
              <a class="column has-text-danger" href="https://mail.google.com/mail/u/0/#inbox?compose=new" @click="handleClick">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                <span style="font-size: 25px;">Email</span>
              </a>

            </div>
          </p>
        </div>
    </section>
    
    </div>
</template>
    
<script>
    export default {
      name: 'IndexPage'
    }
    


</script>

<style>
  .column{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin: 20px;
  }