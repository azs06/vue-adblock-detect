export default function detectAdBlock() {
  return new Promise((resolve) => {
    const element = document.createElement('div');
    element.className = 'adBanner';
    element.style.cssText = 'height: 1px; width: 1px; background-color: transparent;';
    document.body.appendChild(element);
    setTimeout(() => {
      const isBlocked = element.clientHeight === 0;
      document.body.removeChild(element);
      resolve(isBlocked);
    }, 500);
  });
}
