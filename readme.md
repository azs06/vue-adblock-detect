### Simple ad blocker detection mixin for vue.js
```
<script>
import VueAdBlockDetect from 'vue-adblock-detect';
export default{
  mixins: [VueAdBlockDetect],
  beforeMount(){
    this.detectAdBlock().then((response)=>{
        if(response){
          //ad blocker detected
        }else{
          //no ad blocker detected
        }
      })
  }
}
</script>
```
