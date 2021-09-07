import detectAdBlock from './adblock';
const mixin =  {
  methods: {
    detectAdBlock(){
      return detectAdBlock();
    }
  }
}
export default (typeof window !== 'undefined' ? mixin : {})
