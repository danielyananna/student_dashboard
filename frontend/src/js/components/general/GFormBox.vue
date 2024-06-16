<template>
  <div :class="{'form-errors': formErrorsObj[gField]}">
    <slot></slot>
    <div v-show="formErrorsObj[gField]" class="form-error-text fs12">{{formErrorsObj[gField]}}</div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  gField: String,
  formErrors: {
    type: Object,
    default: null
  },
});

const formErrorsObj = computed(()=>{
  return props.formErrors == null ? parent.formErrors : props.formErrors;
})
</script>

<style scoped>
.form-errors .form__input {
  border: 1px solid red;
  border-radius: 8px;
}

.form-error-text {
  color: red;
  line-height: 20px;
  opacity: 0.6;
  padding: 8px 0 0 16px;
}

</style>