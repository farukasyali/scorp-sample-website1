<template>
<div>
  
    <h1>Welcome Sample Website</h1>
    <div class="row">
        <div class="col">
          Quisque sed elit eget velit fringilla dictum. Vestibulum tristique mi a viverra tempor. Proin dui magna, vestibulum at ultricies vitae, pharetra aliquam dolor. Nam venenatis iaculis rhoncus. Vestibulum tincidunt elementum dui, id consectetur est accumsan ut. Sed et consectetur sapien. Cras id neque ac diam porttitor venenatis. Nullam non nulla sed justo porttitor imperdiet quis a nisi. Fusce molestie pharetra risus, in consectetur ipsum cursus sed. Pellentesque varius aliquet elit eget scelerisque. In lectus nisi, sollicitudin sed velit non, interdum pulvinar metus. In vitae lacinia ex. Fusce quis porttitor velit. Pellentesque auctor arcu elit, nec aliquam lectus gravida id. Morbi at dui at ipsum consequat feugiat vel eget sapien.
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
      eventBus.$emit("pageChanged", "Sample");
    }
  } 
</script>
