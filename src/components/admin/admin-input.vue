<template>
  <div class="text-field text-field_floating">
    <input class="text-field__input"
           ref="input"
           :class="{ 'has-error': hasError }"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           :id="id"
           :type="inputType"
           name=""
           placeholder="a"
           :required="required"
           :readonly="readonly">
    <label class="text-field__label" for="email">{{ title }}</label>
    <div class="text-field__eye"
         v-if="type == 'password'"
         @click="showPass" >
      <i class='bx bxs-show'></i>
    </div>
    <div class="text-field__eye"
         v-if="showCopyIcon"
    >
      <i class='bx bx-copy'></i>
    </div>
    <div class="text-field__caption">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: "admin-input",
  data() {
    return {
      hasError: false,
      inputType: this.type
    }
  },
  props: {
    type: {
      default: 'text',
    },
    validator: Function,
    id: {
      default: null,
    },
    name: {
      default: '',
    },
    placeholder: {
      default: "a",
    },
    required: {
      default: null,
    },
    readonly: {
      default: null,
    },
    title: {
      default: '',
    },
    subtitle: {
      default: '',
    },
    modelValue: {
      default: '',
    },
    showCopyIcon: {
      default: false,
    }
  },
  methods: {
    showPass(){
      if (this.inputType === 'password'){
        return this.inputType = 'text'
      }
      if (this.inputType === 'text'){
        return this.inputType = 'password'
      }
    },
  }
}
</script>

<style scoped>
.text-field {
  margin-bottom: 1rem;
}

.text-field__label {
  display: block;
  margin-bottom: 0.25rem;
}

.text-field__input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.text-field__caption{
  font-size: 12px;
  margin-top: 5px;
  padding-left: 12px;
}

.text-field__input[type="search"]::-webkit-search-decoration,
.text-field__input[type="search"]::-webkit-search-cancel-button,
.text-field__input[type="search"]::-webkit-search-results-button,
.text-field__input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.text-field__input::placeholder {
  color: #212529;
  opacity: 0.4;
}

.text-field__input:focus {
  color: #212529;
  background-color: #fff;
  border-color: #bdbdbd;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}

/* with floating label */
.text-field_floating {
  position: relative;
}

.text-field_floating .text-field__input {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
  padding: 1rem 0.75rem;
}

.text-field_floating .text-field__label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem .75rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity .15s ease-in-out, transform .15s ease-in-out;
}

.text-field_floating .text-field__input::-moz-placeholder {
  color: transparent;
}

.text-field_floating .text-field__input::placeholder {
  color: transparent;
}

.text-field_floating .text-field__input:focus,
.text-field_floating .text-field__input:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: .625rem;
}

.text-field_floating .text-field__input:focus~.text-field__label,
.text-field_floating .text-field__input:not(:placeholder-shown)~.text-field__label {
  opacity: .65;
  transform: scale(.85) translateY(-.75rem) translateX(.15rem);
}
.text-field__eye{
  font-size: 24px;
  position: absolute;
  bottom: 32px;
  right: 16px;
  color: rgba(0, 0, 0, 0.6);
}
</style>