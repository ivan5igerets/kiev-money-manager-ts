<template>
  <div>
    <input :id="id"  type="checkbox" class="css-type-checkbox" style="display:none"/>
    <label :for="id" class="toggle"><span></span></label>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    }
  }

</script>