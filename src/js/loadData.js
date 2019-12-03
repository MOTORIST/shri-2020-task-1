import templater from './templater';

async function getDataFromJSONFile(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Failed to upload json file '${path}'`);
  }

  return response.json();
}

export default async function loadData() {
  const json =
    window.location.pathname === '/product'
      ? await getDataFromJSONFile('../assets/pages/product.json')
      : await getDataFromJSONFile('../assets/pages/index.json');

  const html = templater(json);
  document.body.innerHTML = html;
}
