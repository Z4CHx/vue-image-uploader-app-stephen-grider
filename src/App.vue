<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import Galleries from "./components/Galleries";
import ImageList from "./components/ImageList";
import Uploadform from "./components/UploadForm";

export default {
  name: "App",
  components: {
    Header,
    Galleries,
    ImageList
  }
};
</script>
