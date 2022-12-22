<template>
  <div class="text-field text-field_floating">
    <select class="text-field__input" :value="modelValue" @input="onInput($event.target.value)">
      <option v-for="section in getSections" :value="section.id">{{ section.name }}</option>
    </select>
    <label class="text-field__label" for="email">{{ title }}</label>
    <div class="text-field__caption">{{ subtitle }}</div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "drop-down-list",
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
  computed: {
    ...mapGetters(['getSections'])
  },
  methods: {
    onInput (value) {
      this.$emit('update:modelValue', value)
    }
  },
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
  height: calc(3.5rem + 2px);
  padding: 1rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
  box-shadow: 0 0 0 0.2rem rgba(28, 15, 8, 0.21);
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}
.text-field__caption{
  font-size: 12px;
  margin-top: 5px;
  padding-left: 12px;
}
</style>