<template>
  <div>
    <div class="heading">
      <h1>App</h1>
    </div>
    <example-component></example-component>
  </div>
</template>

<script>
import ExampleComponent from './components/ExampleComponent';

export default {
  name: 'App',
  components: {
    ExampleComponent,
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    console.log('App was mounted');
  },
  methods: {
    //
  },
};
</script>
