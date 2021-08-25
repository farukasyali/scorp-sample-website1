<template>
<div>
    <app-header></app-header>
    <div class="container">
      <main role="main" class="pb-3">
        <router-view></router-view>
        <button type="button" class="d-none" data-bs-toggle="modal" data-bs-target="#login-modal" id="login-modal-btn"></button>
      </main>
    </div>
    <app-footer></app-footer>
    <app-login></app-login>
    
  </div>
</template>

<script>

  
  import Header from "./components/shared/Header";
  import Footer from "./components/shared/Footer";
  import LoginModal from "./components/LoginModal.vue";

  export default {
    
    components: {
      appHeader: Header,
      appFooter: Footer,
      appLogin: LoginModal
    }
  }
</script>


