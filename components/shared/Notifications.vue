<template>
  <div>
    <notifications :width="400" />
  </div>
</template>

<script>

export default {
  name: 'Notifications',
  props: {
    notification: {
      type: Object,
      default: null
    }
  },
  methods: {}
}
</script>
