<template>
  <div>
    Logging in...
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AuthHandler",
  created() {
    this.finalizeLogin(window.location.hash);
  },
  methods: {
    // syntax below alows for additions methods to be added
    ...mapActions(["finalizeLogin"])
  }
};
</script>
