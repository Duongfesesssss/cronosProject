<template>
    <section class="section is-relative">
  
    
      <div class="container">
        <div class="has-mw-md mx-auto has-text-centered">
          <div class="has-text-centered">
            <form action="#">
              <span class="tag is-warning is-light is-uppercase"
                >Đăng nhập vào hệ thống</span
              >
              <h3 class="mt-6 mb-8 title is-size-6 is-spaced"></h3>
              <div class="control mb-6">
                <input v-model="form.email" class="input" type="email" placeholder="E-mail address" />
              </div>
              <div class="control mb-6">
                <input v-model="form.password" class="input" type="password" placeholder="Password" />
              </div>
              <button @click.prevent="login" class="button is-warning mb-6 is-fullwidth">Sign In</button>
              <a class="is-size-6 has-text-grey-dark" href="#"
                >Forgot password?</a
              >
            </form>
          </div>
        </div>
      </div>
      <div class="mt-10 is-flex is-hidden-widescreen">
        <img
          class="ml-auto image is-fullwidth"
          style="width: 160px;"
          src="@/assets/elements/right-bottom.svg"
          alt=""
        />
      </div>
    </section>
  </template>
  

  <script>
    export default{
        data(){
            return{
                form:{
                    email: null,
                    password: null
                }
            };
        },
        methods:{
          async login() {
            try {
                await this.$axios.$post('/api/users/auth/login', this.form)
                .then(()=>{
                    this.$auth.loginWith('local',{
                        data:{
                            email: this.form.email,
                            password:this.form.password
                        }
                    });
                });
            }
            catch(error){
                console.log(error)
            }
          }
        }
    }

</script>
