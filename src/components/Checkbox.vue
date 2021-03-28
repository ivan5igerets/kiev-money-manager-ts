<template>
  <div>
    <input
      v-bind:id="id"
      v-on:change="$emit('change',  $event)"
      type="checkbox"
      :checked="checked"
      class="css-type-checkbox"
      style="display:none"
    />
    <label :for="id" class="toggle"><span></span></label>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      checked: {
        type: Boolean,
        required: true
      }
    }
  }

</script>