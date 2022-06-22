<template>
  <div data-test="add-calculator">
    <input data-test="input" v-model="num1"/>
    <input data-test="input" v-model="num2"/>
    <input type="button" data-test="button" @click="add"/>
    <div data-test="answer">{{ answer }}</div>

    <p v-show={checkShowErrorMessage} data-test="message"></p>
  </div>
</template>

<script>
export default {
  name: 'AddCalculator',
  data() {
    return {
      answer: '',
      num1: '',
      num2: '',
    };
  },
  computed: {
    checkShowErrorMessage() {
      return this.num1 || this.num2;
    },
  },
  methods: {
    add() {
      this.answer = this.num1 && this.num2 ? Number(this.num1) + Number(this.num2) : '계산할 수 없음';
    },
  },
};
</script>

<style scoped>

</style>
