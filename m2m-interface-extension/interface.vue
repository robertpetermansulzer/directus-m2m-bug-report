<template>
  <div class="field half">
    <v-button @click="handleChange">TEST</v-button>
    <div>Current value: {{ value }}</div>
  </div>
</template>

<script>
export default {
  emits: ["input"],
  props: {
    value: String,
    collection: String,
    field: String,
    type: String,
    primaryKey: String,
  },

  methods: {
    handleChange(event) {
      console.log("HANDLE CHANGE");
      this.$emit("input", [1]);
    },
  },
};
</script>

<style scoped></style>
