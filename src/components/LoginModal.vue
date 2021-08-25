<template>
    <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ $t('login-btn-label') }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="login-modal-close-btn"></button>
        </div>
        <div class="modal-body">
            <form v-on:submit="loginUser($event)">
                <div class="mb-3">
                    <label  class="form-label">{{ $t('title-label') }}</label>
                    <input type="text" class="form-control" v-model="user.title" >
                </div>
                <div class="mb-3">
                    <label  class="form-label">{{ $t('name-label') }}</label>
                    <input type="text" class="form-control" v-model="user.name">
                </div>

                <div class="mb-3">
                    <label  class="form-label">{{ $t('email-label') }}</label>
                    <input type="e-mail" class="form-control" v-model="user.email">
                </div>

                <div class="mb-3">
                    <label class="form-label">{{ $t('password-label') }}</label>
                    <input type="password" class="form-control" v-model="user.password">
                </div>

                <div class="mb-3">
                    <label class="form-label">{{ $t('language-label') }}</label>
                    <select class="form-select" v-model="user.language">
                        <option value="en" >{{ $t('english') }}</option>
                        <option value="tr">{{ $t('turkish') }}</option>
                    </select>
                </div>
                
                <button type="submit" class="btn btn-primary float-end">{{ $t('login-btn-label') }}</button>
                </form>
        </div>
        
        </div>
    </div>
    </div>
</template>

<script>
  import { eventBus } from "../main";

  export default {
      data(){
          return{
            user:{
                title: "",
                name: "",
                email: "",
                password: "",
                language: "en"

             },
          }
      },
      
      methods:{
        loginUser(e){
            e.preventDefault();
            eventBus.$emit("userLoggedin", this.user);
            eventBus.$emit("userInfoChanged", this.user);
            document.getElementById('login-modal-close-btn').click();
            this.$parent.$data.loggedUser = Object.assign({}, this.user);
            this.user = {};

        }
    }
}
</script>