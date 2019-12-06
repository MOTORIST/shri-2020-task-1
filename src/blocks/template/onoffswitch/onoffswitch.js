function switchTheme(themeNode) {
  const themeClassList = themeNode.classList;
  if (themeClassList.contains('theme_color_project-default')) {
    themeClassList.remove('theme_color_project-default');
    themeClassList.add('theme_color_project-inverse');
  } else if (themeClassList.contains('theme_color_project-inverse')) {
    themeClassList.remove('theme_color_project-inverse');
    themeClassList.add('theme_color_project-default');
  }
}

export default function onOffSwitch() {
  document.body.addEventListener('click', event => {
    let { target: node } = event;

    while (node !== document.body) {
      if (node.classList.contains('onoffswitch')) {
        const themeNodes = [...document.querySelectorAll('.theme')];

        themeNodes.forEach(themeNode => {
          switchTheme(themeNode);
        });

        node.classList.toggle('onoffswitch_checked');
        break;
      }

      node = node.parentNode;
    }
  });
}
