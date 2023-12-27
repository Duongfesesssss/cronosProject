<template>
<div class = "containers ">
  <nav class="navbar" role="navigation" aria-label="main navigation">
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
      <a class="navbar-item">
        Trang chủ 
      </a>

      <a class="navbar-item">
        Thông tin
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Thêm
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            
          </a>
          <a class="navbar-item">
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
          <a class="button is-primary" href="/signup" @click="handleClick">
            <strong> Đăng ký</strong>
          </a>
          <a class="button is-light">
            Đăng Nhập
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<!-- hero -->
<section class="hero is-large is-info">
  <div class="hero-body">
    <p class="title">
      Large hero
    </p>
    <p class="subtitle">
      Large subtitle
    </p>
  </div>
</section>



<section class="section">
  <h1 class="title">Section</h1>
  <h2 class="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section>



<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>





</div>






</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
