<template lang="pug">
h1 {{ name }}
.title
    h4 {{ title }}
</template>
<script>
export default {
  data: function() {
    return {
      name: 'Привет мир!!!',
      title: 'Дос'
    }
  },
};
</script>

<style >
h1 {
  color: blue;
  background-color: #f5f5f5;
}
.title {
  margin-top: 50px;
  color: red;
}
</style>
