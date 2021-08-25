<template>
    <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="login-modal-close-btn"></button>
        </div>
        <div class="modal-body">
            <form v-on:submit="loginUser($event)">
                <div class="mb-3">
                    <label  class="form-label">Title</label>
                    <input type="text" class="form-control" v-model="user.title" >
                </div>
                <div class="mb-3">
                    <label  class="form-label">Name</label>
                    <input type="text" class="form-control" v-model="user.name">
                </div>

                <div class="mb-3">
                    <label  class="form-label">E-mail</label>
                    <input type="e-mail" class="form-control" v-model="user.email">
                </div>

                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="user.password">
                </div>

                <div class="mb-3">
                    <label class="form-label">Language</label>
                    <select class="form-select" v-model="user.language">
                        <option value="en" >English</option>
                        <option value="tr">Turkish</option>
                    </select>
                </div>
                
                <button type="submit" class="btn btn-primary float-end">Login</button>
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
            document.getElementById('login-modal-close-btn').click();
            this.user = {};

        }
    }
}
</script>