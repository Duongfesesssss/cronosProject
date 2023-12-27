<template>
  <section class="section is-relative">
    <div class="container">
      <div class="has-mw-md mx-auto has-text-centered">
        <div class="has-text-centered">
          <form action="#">
            <span class="tag is-warning is-light is-uppercase">Sign Up</span>
            <h3 class="mt-6 mb-8 title is-size-3 is-spaced">
              Create new account
            </h3>
            <div class="control mb-6">
              <input v-model="form.email"  
                      
               class="input" type="email" placeholder="E-mail address" />
            </div>

            <div class="control mb-6">
              <input v-model="form.password" class="input" type="password" placeholder="Password" />
            </div>
            <div class="control mb-6">
              <input v-model="form.username" class="input" type="text" placeholder="User name" />
            </div>
            <div class="control mb-6">
              <input v-model="form.name" class="input" type="text" placeholder="Name" />
            </div>
            <div class="control mb-6">
              <input v-model="form.role" class="input" type="text" placeholder="Role" />
            </div>
            <div class="control mb-6">
              <input v-model="form.avatar" class="input" type="text" placeholder="Avatar" />
            </div>
            <label class="checkbox mb-5">
              <input class="mr-4" type="checkbox" name="terms" value="1" />
              <small class="has-text-grey-dark">
                Bằng cách đăng ký, là bạn đã chấp thuận với chúng tôi về
                <a class="has-text-grey-dark has-text-weight-bold" href="#">Terms, Data Policy</a>
                and
                <a class="has-text-grey-dark has-text-weight-bold" href="#">Cookies Policy</a>.
              </small>
            </label>
            <button @click.prevent="register" class="button is-warning is-fullwidth">
              Đăng ký tài khoản
            </button>
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
import {required} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
        username: null,
        name: null,
        role: null,
        avatar: null,
      },
    };
  },
  validators:{
    form:{
      email: {required}
    }
  },
  methods: {
    async register() {
      try {
        
        let data = new FormData();
        data.append("email", this.form.email);
        data.append("password", this.form.password);
        data.append("username", this.form.username);
        data.append("name", this.form.name);
        data.append("role", this.form.role);
        data.append("avatar", this.form.avatar);

        await this.$axios.$post('http://localhost:8888/api/users/account', data, {
          headers: {
            "accept": "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
        });

        console.log('Add user successfully');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
