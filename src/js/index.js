import loadData from './loadData';
import initBlock from './initBlocks';

(async () => {
  await loadData();
  initBlock();
})();
