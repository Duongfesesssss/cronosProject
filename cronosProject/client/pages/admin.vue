<template>
    <div>
      <h1>Trang Admin</h1>
      <p>Xin chào, {{ $auth.$state.user.email }}!</p>
    </div>
  </template>
  
  <script>
  export default {
    layout:"none",
    middleware :"auth-admin"
      };
    

  </script>
  
  <style scoped>
  /* Thêm các quy tắc CSS tùy chỉnh ở đây */
  </style>
  


