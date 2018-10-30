export default function(){
  return new Promise((resolve, reject) => {
    const element = document.createElement("div");
    element.classList.add('adBanner');
    element.style.cssText = 'height: 1px; width: 1px; background-color: transparent';
    document.body.appendChild(element);
    window.setTimeout(()=>{
      if(document.querySelector('.adBanner').clientHeight === 0){
        resolve(true)
      }else{
        resolve(false)
      }
      document.body.removeChild(element);
    }, 20)
  })
}
