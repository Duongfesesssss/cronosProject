<template>
  <div class = "containers ">
  <nav class="navbar has-background-link-light" role="navigation" aria-label="main navigation" style="position: fixed; width: 100%;">
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
        <a class="navbar-item mx-1">
          <strong>Trang chủ</strong> 
        </a>
  
        <a class="navbar-item mx-1">
          <strong>Thông tin</strong>
        </a>
  
        <div class="navbar-item has-dropdown is-hoverable mx-1">
          <a class="navbar-link">
            <strong>Thêm</strong>
          </a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item">
              
            </a>
            <a class="navbar-item" href="/guide" @click="handleClick">
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
             <!-- Nếu người dùng đã đăng nhập -->
             <span  v-if="statusLogined==true">
          <div class="dropdown is-right is-hoverable">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>{{ $auth.$state.user.email }}</span>
                <span class="icon is-small">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a href="/profile" class="dropdown-item">Profile</a>
                <a @click="$auth.logout()" class="dropdown-item">Đăng Xuất</a>
              </div>
            </div>
          </div>
        </span>           
            <!-- Nếu chưa đăng nhập -->
            <a v-else>
                <a class="button is-primary" href="/login" @click="handleClick">
                    <span class="icon is-small">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg>
                    </span>
                    <strong> Đăng Nhập</strong>
                </a>
                <a class="button is-primary" href="/signup" @click="handleClick">
                    <span class="icon is-small">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                    </span>
                    <strong> Đăng ký</strong>
                </a>
            </a>            

        </div>
    </div>
</div>


    </div>
  </nav>
  <!-- hero -->

  
  <div class="saleoff">
    <div class="box-left">
      <h1>
        <span>GIẢM GIÁ LÊN ĐẾN</span>
        <span>20%</span>
      </h1>
    </div>
    <div class="box-right"><img src="@/assets/image/house1.jpg" width="487" height="487"></div>
  </div>
  
  <div id="wp-products">
              <h2>DỊCH VỤ CỦA CHÚNG TÔI</h2>
              <ul id="list-products">
                  <div class="item">
                      <img src="@/assets/image/product_1.jpg" alt="">
                      <div class="stars">
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          
                      </div>
  
                      <div class="name">Nhà 1</div>
                      <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
                      <div class="price">500.000 $</div>
                  </div>
  
  
                  <div class="item">
                      <img src="@/assets/image/product_2.jpg" alt="">
                      <div class="stars">
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                      </div>
  
                      <div class="name">Nhà 2</div>
                      <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
                      <div class="price">700.000 $</div>
                  </div>
  
  
                  <div class="item">
                      <img src="@/assets/image/product_3.jpg" alt="">
                      <div class="stars">
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                      </div>
  
                      <div class="name">Nhà 3</div>
                      <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
                      <div class="price">850.000 $</div>
                  </div>
                  <div class="item">
                      <img src="@/assets/image/product_4.jpg" alt="">
                      <div class="stars">
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          
                      </div>
  
                      <div class="name">Nhà 4</div>
                      <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
                      <div class="price">650.000 $</div>
                  </div>
  
                  <div class="item">
                      <img src="@/assets/image/product_5.jpg" alt="">
                      <div class="stars">
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          
                      </div>
  
                      <div class="name">Nhà 5</div>
                      <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
                      <div class="price">350.000 $</div>
                  </div>
  
                  <div class="item">
                      <img src="@/assets/image/product_6.jpg" alt="">
                      <div class="stars">
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                      </div>
  
                      <div class="name">Nhà 6</div>
                      <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
                      <div class="price">1.000.000 $</div>
                  </div>
  
                  <div class="item">
                      <img src="@/assets/image/product_7.jpg" alt="">
                      <div class="stars">
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                          <span>
                              <img src="@/assets/image/star.png" alt="">
                          </span>
                      </div>
  
                      <div class="name">Nhà 7</div>
                      <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
                      <div class="price">1.220.000 $</div>
                  </div>
              </ul>
              <div class="list-page">
                  <div class="item">
                      <a href="">1</a>
                  </div>
                  <div class="item">
                      <a href="">2</a>
                  </div>
                  <div class="item">
                      <a href="">3</a>
                  </div>
                  <div class="item">
                      <a href="">4</a>
                  </div>
              </div>
          </div>
  
          <div id="comment">
              <h2>NHẬN XÉT CỦA KHÁCH HÀNG</h2>
              <div id="comment-body">
                  <div class="prev">
                      <a href="#">
                          <img src="@/assets/image/prev.png" alt="">
                      </a>
                  </div>
                  <ul id="list-comment">
                      <li class="item">
                          <!-- <div class="avatar">
                              <img src="@/assets/image/avatar_1.png" alt="">
  
                          </div> -->
                          <div class="stars">
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                          </div>
                          <div class="name">Đào Nam Dương</div>
  
                          <div class="text">
                              <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the industry's
                                  standard dummy text ever since the 1500s, when an unknown
                                  printer took a galley of type and scrambled it to make a type
                                  specimen book.</p>
                              <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the industry's
                                  standard dummy text ever since the 1500s, when an unknown
                                  printer took a galley of type and scrambled it to make a type
                                  specimen book.</p>
                          </div>
                      </li>
                      <li class="item">
                          <!-- <div class="avatar">
                              <img src="@/assets/image/avatar_1.png" alt="">
  
                          </div> -->
                          <div class="stars">
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                          </div>
                          <div class="name">Trần Ngọc Sơn</div>
  
                          <div class="text">
                              <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the industry's
                                  standard dummy text ever since the 1500s, when an unknown
                                  printer took a galley of type and scrambled it to make a type
                                  specimen book.</p>
                          </div>
                      </li>
                      <li class="item">
                          <!-- <div class="avatar">
                              <img src="@/assets/image/avatar_1.png" alt="">
  
                          </div> -->
                          <div class="stars">
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                              <span>
                                  <img src="@/assets/image/star.png" alt="">
                              </span>
                          </div>
                          <div class="name">Nguyễn Trần Vi</div>
  
                          <div class="text">
                              <p>Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the industry's
                                  standard dummy text ever since the 1500s, when an unknown
                                  printer took a galley of type and scrambled it to make a type
                                  specimen book.</p>
                          </div>
                      </li>
                  </ul>
                  <div class="next">
                      <a href="#">
                          <img src="@/assets/image/next.png" alt="">
                      </a>
                  </div>
              </div>
          </div>
  
  <section class="section">
    <h1 class="title">Bất động sản</h1>
    <h2 class="subtitle">
      Chúng tôi xin cam kết đảm bảo <strong>chất lượng, giá cả và pháp lí liên quan</strong> của các dịch vụ của công ty.
    </h2>
  </section>
  
  <footer class="has-background-black is-flex-desktop is-justify-content-space-around">
    <div class="box has-background-black has-text-light is-justify-content-space-around">
      <div class="logo">
        <img src="@/assets/image/logo.png" width="120" height="150">
      </div>
      <p class="mt-2">Cung cấp dịch vụ với chất lượng an toàn cho quý khách</p>
    </div>
  
    <div class="box has-background-black has-text-light is-justify-content-space-around">
      <h3 class="is-size-3">NỘI DUNG</h3>
      <ul class="quick-menu">
        <div class="item mt-2">
          <a href="">Trang chủ</a>
        </div>
        <div class="item mt-1">
          <a href="">Thông tin</a>
        </div>
        <div class="item mt-1">
          <a href="">Hỗ trợ</a>
        </div>
        <div class="item mt-1">
          <a href="">Liên hệ</a>
        </div>
        <div class="item mt-1">
          <a href="">Báo cáo</a>
        </div>
      </ul>
    </div>
  
    <div class="box has-background-black has-text-white is-justify-content-space-around">
      <h3 class="is-size-3">LIÊN HỆ</h3>
      <form action="" class="mt-2 is-flex is-flex-direction-column">
        <input type="text" placeholder="Địa chỉ email" class="pr-6 py-1 mb-2 input-email">
        <button class="button-receive">Nhận tin</button>
      </form>
    </div>
  </footer>
  
  </div>
  </template>
  
<script>
export default {
 data(){
    return {
        statusLogined : this.$auth.loggedIn
    };
 }
};
</script>

  
  <style>
  .button-receive{
    width: 40%;
  }
  
  .input-email{
    width: 130%;
  }
  
  .saleoff {
      width: 100%;
      display: flex;
      height: 322px;
      margin-top: 50px;
  }
  .saleoff .box-left , .saleoff .box-right {
      width: 50%;
  }
  .saleoff .box-left {
      background:#3e413e;
      text-align: center;
      min-height: 322px;
  }
  
  .saleoff .box-left h1 {
      padding-top:38px;
  }
  .saleoff .box-left span:nth-child(1)
  {
      color:#fff;
      font-size:50px;
  }
  
  .saleoff .box-left span:nth-child(2)
  {
      color:orange;
      font-size:128px;
  }
  
  .saleoff .box-right{
      background-color: black;
      padding-left: 150px;
  }
  
  
  #wp-products {
      padding-top:116px;
      padding-bottom: 78px;
      padding-left:134px;
      padding-right:134px;
  }
  
  #wp-products h2 {
      text-align: center;
      margin-bottom: 76px;
      font-size:32px;
      color:#626a67;
  }
  
  
  #list-products {
      display: flex;
      list-style: none;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
  }
  
  #list-products .item {
      width: 290px;
      height: 374px;
      background:#362f2f;
      border-radius: 10px;
      margin-bottom: 50px;
  }
  
  #list-products .item img {
      display: block;
      margin:0px auto;
      margin-top:17px;
  }
  
  #list-products .item .stars {
  
      display: flex;
      margin:0px auto;
      width: 50%;
  }
  
  #list-products .item .name {
      text-align: center;
      color:#fff;
      font-weight: bold;
      margin-top:21px;
  }
  
  #list-products .item .desc {
      text-align: center;
      color:#626a67;
  }
  
  #list-products .item .price {
      text-align: center;
      color:#f42424;
      font-weight: bold;
      margin-top:20px;
  }
  
  
  .list-page {
      width: 50%;
      margin:0px auto;
  }
  
  .list-page {
      display: flex;
      list-style: none;
      justify-content: center;
      align-items: center;
  }
  
  .list-page .item {
      margin:0px 15px;
      width: 37px;
      height: 37px;
      background:#362f2f;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .list-page .item a {
      color:#fff;
      text-decoration: none;
  }
  
  
  #comment {
      width: 1012px;
      height: 478px;
      margin:0px auto;
      margin-top:184px;
      margin-bottom: 50px;
  }
  
  #comment h2 {
      text-align: center;
      margin-bottom: 50px;
      font-size:32px;
      color:#626a67;
  }
  
  
  #comment-body{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1000px;
      height: 400px;
      list-style: none;
      overflow: hidden;
  }
  
  #list-comment {
      width: 100%;
      height: 100%;
      list-style: none;
      transition:0.5s;
  }
  
  #list-comment .item {
      width: 100%;
      height: 100%;
      background:#362f2f;
      border-radius: 20px;
      padding-top:50px;
  }
  
  #list-comment .item .avatar {
      text-align: center;
      margin-top:13px;
  }
  
  #list-comment .item .stars {
      display: flex;
      margin:0px auto;
      width: 50%;
      margin-top:32px;
      justify-content: center;
      align-items: center;
  }
  
  #list-comment .item .name {
      text-align: center;
      font-weight: bold;
      color:#fff;
  }
  
  #list-comment .item .text {
      padding:20px 50px;
      color:#fff;
     
  }
  </style>