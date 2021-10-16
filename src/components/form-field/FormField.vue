<template>
  <div
    ref="formFieldWrapper"
  >
    <div
      v-if="$slots.label || label"
      class="label"
    >
      <slot name="label">{{ label }}</slot>
    </div>

    <div>
      <slot/>
      <transition name="fade">
        <ul class="form__message" v-if="errorMessage || hint" >
          <li v-if="!errorMessage">{{ hint }}</li>
          <li class="form__error" v-else>{{ errorMessage }}</li>
        </ul>
      </transition>
    </div>

  </div>
</template>
<script>
export default {
  name: 'FormField',
  props: {
    label: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    clickedThroughIcon: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    clearBtn: {
      type: Boolean,
      default: false
    },
    msgAlignLeft: {
      type: Boolean,
      default: false
    },
    messages: {
      type: Array,
      default: () => []
    },
    prefixImage: {
      type: String
    }
  },
  data () {
    return {
      input: null
    }
  },
  computed: {
    errorMessage () {
      return this.messages[0] || null
    }
  }
}
</script>
<style scoped>
.form__message {
  margin: 0;
  padding: 0px;
}
.form__error {
  margin-top: 5px;
  color: red;
}
.form__error::marker {
  color: transparent;
}
.label {
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
