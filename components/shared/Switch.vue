<template>
  <label class="switch">
    <input
      v-model="value"
      :class="classes"
      type="checkbox"
      :checked="checked"
      :name="name"
      :disabled="disabled"
      @change="input"
    />
    <span><slot></slot></span>
  </label>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: null
    }
  },
  watch: {
    value(val) {
      this.$emit('input', val)
    },
    checked(val) {
      this.value = val
    }
  },
  beforeMount() {
    this.value = this.checked
  },
  mounted() {
    this.$emit('input', this.value)
  },
  methods: {
    input() {
      this.$emit('change', this.value)
    }
  }
}
</script>

<style scope>
label.switch input[type='checkbox'] {
  display: none;
}
label.switch input[type='checkbox']:checked + span:before {
  background-color: rgba(0, 127, 235, 0.5);
}
label.switch input[type='checkbox']:checked + span:after {
  background-color: #007feb;
  transform: translate(80%, -50%);
}
label.switch input[type='checkbox'] + span {
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  text-align: left;
  margin: 0px;
  padding: 0px 44px;
}
label.switch input[type='checkbox'] + span:before,
label.switch input[type='checkbox'] + span:after {
  content: '';
  cursor: pointer;
  position: absolute;
  margin: 0;
  outline: 0;
  top: 50%;
  transform: translate(0, -50%);
  transition: all 200ms ease-out;
}
label.switch input[type='checkbox'] + span:before {
  left: 1px;
  width: 34px;
  height: 14px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}
label.switch input[type='checkbox'] + span:after {
  left: 0;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14),
    0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);
}
label.switch
  input[type='checkbox']:checked
  + span
  label.switch
  input[type='checkbox']:after {
  transform: translate(80%, -50%);
}
</style>
