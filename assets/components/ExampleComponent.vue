<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ header }}</div>

          <div class="card-body">
            {{ body }} ye ye
          </div>

          <div class="card-body">
            <input v-model="body" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  data() {
    return {
      header: 'My Header',
      body: 'My body',
    };
  },
  mounted() {
    this.printConsole('Example Component was mounted');
  },
  methods: {
    printConsole(text) {
      console.log(text);
    },
  },
};
</script>
