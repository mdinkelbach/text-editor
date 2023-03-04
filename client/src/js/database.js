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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
  const IndexedDb = await openDB('index', 1);
  const tx = IndexedDb.transaction('index', 'readwrite');
  const store = tx.objectStore('index');
  const request = store.put(content);
  const result = await request;
  console.log('result.value', result);
  return result?.value;
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');
  const IndexedDb = await openDB('index', 1);
  const tx = IndexedDb.transaction('index', 'readonly');
  const store = tx.objectStore('index');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
}

initdb();
