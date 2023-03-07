import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  console.error('putDb not implemented');
  const IndexedDb = await openDB('jate', 1);
  const tx = IndexedDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({content: content});
  const result = await request;
  console.log('result.value', result);
}

export const getDb = async () => {
  console.error('getDb not implemented');
  const IndexedDb = await openDB('jate', 1);
  const tx = IndexedDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
}

initdb();
