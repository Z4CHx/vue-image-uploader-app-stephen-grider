<template>
  <div>
    <div class="ui secondary pointing menu">
      <a class="active item" href="/"> Imgurly {{ isLoggedIn }} </a>
      <div class="right menu">
        <div v-if="isLoggedIn">
          <a @click="showAlbums" class="ui item">
            Albums
          </a>
          <a @click="logout" class="ui item">
            Log Out
          </a>
        </div>
        <div v-else>
          <a @click="login" class="ui item">
            Log In
          </a>
        </div>
      </div>
    </div>
    <div class="ui segment">
      <p></p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    // syntax below alows for additions methods to be added
    ...mapActions(["login"])
  }
};
</script>

<style scoped></style>
