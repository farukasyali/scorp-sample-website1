<template>
<div class="pt-3">
  
    <h1>{{ $t('homepage-welcome') }}</h1>
    <div class="row">
        <div class="col">
          {{ $t('homepage-welcome-text') }}
        </div>
      
    </div>
</div>
</template>


<script>
  
  import { eventBus } from "../main";

  export default {
    components:{
      
    },
    mounted(){
      eventBus.$emit("pageChanged", 'home');
    }
  } 
</script>
