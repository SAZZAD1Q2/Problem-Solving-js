const state = "DhaHIN  IU879*&*&#@cba)((7^%&^*ka";
const splitState = state.split('').reverse().join().toLowerCase().replace(/[^a-z0-9]/g,'');

console.log(splitState);