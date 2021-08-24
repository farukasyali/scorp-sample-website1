<template>
<div>
  
    <h1>Home Page</h1>
    <div class="row">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="col">3</div>
    </div>
</div>
</template>


<script>
  
  import { eventBus } from "../main";

  export default {
    components:{
      
    },
    mounted(){
      eventBus.$emit("pageChanged", "Home");
    }
  } 
</script>
