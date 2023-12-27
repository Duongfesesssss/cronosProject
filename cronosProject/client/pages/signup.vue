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
                @blur="$v.form.email.$touch()"
               class="input" type="email" placeholder="E-mail address" />
            </div>

            <div v-if="$v.form.email.$error" class="form-error">
              <span v-if="!$v.form.email.required" class="help is-danger"> Yêu cầu nhập email</span>
              <span v-if="!$v.form.email.emailValidator" class="help is-danger">Địa chỉ email không hợp lệ </span>
            </div>

            <div class="control mb-6">
              <input v-model="form.password"
              @blur="$v.form.password.$touch()"
               class="input" type="password" 
               placeholder="Password" />
            </div>

            <div v-if="$v.form.password.$error" class="form-error">
                <span v-if="!$v.form.password.required" class="help is-danger" >Yêu cầu nhập mật khẩu</span>
                <span v-if="!$v.form.password.minLength" class="help is-danger" >Mật khẩu phải có tối thiểu 2 kí tự</span>
            </div>



            <div class="control mb-6">
              <input v-model="form.passwordConfirm"
              @blur="$v.form.passwordConfirm.$touch()"
               class="input" type="passwordConfirm" 
               placeholder="Passwor Confirm" />
            </div>

            <div v-if="$v.form.passwordConfirm.$error" class="form-error">
                <span v-if="!$v.form.passwordConfirm.required" class="help is-danger" >Yêu cầu nhập lại mật khẩu</span>
                <span v-if="!$v.form.passwordConfirm.sameAs" class="help is-danger" >Không trùng khớp</span>
            </div>



            <div class="control mb-6">
              <input v-model="form.username"
              @blur="$v.form.username.$touch()"
              class="input" type="text" placeholder="User name" />
            </div>

            <div v-if="$v.form.username.$error" class="form-error">
              <span v-if="!$v.form.username.required" class="help is-danger" > Yêu cầu nhập username </span>
            </div>

            <div class="control mb-6">
              <input v-model="form.name" @blur="$v.form.name.$touch()" class="input" type="text" placeholder="Name" />
            </div>
            <div v-if="$v.form.name.$error" class="form-error">
              <span  v-if="!$v.form.name.required" class="help is-danger" >  Yêu cầu nhập tên người dùng</span>
            </div>

            <div class="file is-primary">
              <label class="file-label">
                <input @change="onFileSelected" class="file-input" type="file" name="resume">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Tải avatar lên
                    </span>
                    <span class="file-name">{{form.filename }} </span>
                  </span>
                </label>
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
            <button @click.prevent="register" :disabled="$v.form.$invalid" class="button is-warning is-fullwidth">
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
import {required , email , minLength ,sameAs} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
        username: null,
        name: null,
        role: null,
        avatar: "../static/avatar/avatar.jpg",
        createBy : null,
        createAt : null,
        passwordConfirm: null,
        filename:"",
        selectedFile: null,
      }
    };
  },
 
  validations:{
    form:{
      email: { required, emailValidator : email },
      password : {required , minLength: minLength(2)},
      passwordConfirm : {required,sameAs : sameAs('password')},
      username:{required},
      name:{required},
      

    }
  },
  computed:{
    isFormValid(){
      return !this.$v.form.$invalid;
    }


  },


  methods: {
    onFileSelected(event){
      this.form.selectedFile = event.target.files[0];
      console.log(this.form.selectedFile);
      this.form.filename = event.target.files[0].name;
    },
    async register() {
      try {
        
        let data = new FormData();
        data.append("email", this.form.email);
        data.append("password", this.form.password);
        data.append("username", this.form.username);
        data.append("name", this.form.name);
        data.append("avatar", this.form.avatar);
        if(this.form.selectedFile){
          data.append("avatar", this.form.selectedFile , this.form.selectedFile.name)
        }
        else {
          data.append("avatar", this.form.avatar)
        }
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
