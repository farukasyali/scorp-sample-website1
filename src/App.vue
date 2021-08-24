<template>
<div>
    <app-header></app-header>
    <div class="container">
      <main role="main" class="pb-3">
        
        <router-view></router-view>
      </main>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>

  
  import Header from "./components/Header";
  import Footer from "./components/Footer";

  export default {
    
    components: {
      appHeader: Header,
      appFooter: Footer
    }
  }
</script>


