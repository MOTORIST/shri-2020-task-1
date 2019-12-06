export default function eAccordion() {
  document.body.addEventListener('click', event => {
    let { target: node } = event;

    while (node !== document.body) {
      if (node.classList.contains('e-accordion__short')) {
        node.parentNode.classList.toggle('e-accordion_open');
        break;
      }

      node = node.parentNode;
    }
  });
}
