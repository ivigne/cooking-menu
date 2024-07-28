import { useMessage } from '/@/hooks/web/useMessage';
const { createMessage } = useMessage();

interface Result {
  name: string;
  age: string;
}

interface Get {
  result: Result;
  onsuccess: () => void;
  onerror: (reason?: any) => void;
}

interface Put {
  onsuccess: (target: { result: Result }) => void;
  onerror: (reason?: any) => void;
}

let SQL_NAME = 'foodsSql';
let DB_NAME = 'chinaFoods';
let request: any;
let db: any;

// 初始化数据库
function init(sqlName?: string, dbName?: string) {
  SQL_NAME = sqlName as string;
  DB_NAME = dbName as string;
  console.log(SQL_NAME, DB_NAME);
  return new Promise((resolve, reject) => {
    request = window.indexedDB.open(SQL_NAME);
    request.onerror = (event: any) => {
      reject(event);
      createMessage.warning('缓存获取失败');
    };
    request.onsuccess = (event: any) => {
      resolve(event.target.result);
      db = event.target.result;
    };
    request.onupgradeneeded = (event: any) => {
      db = event.target.result;
      let objectStore;
      if (!db.objectStoreNames.contains(DB_NAME)) {
        // 创建数据库
        objectStore = db.createObjectStore(DB_NAME, { autoIncrement: true });
        objectStore.createIndex('名称', 'name', { unique: false }); // 建立索引
        objectStore.createIndex('年龄', 'age', { unique: false }); // 建立索引
      }
    };
  });
}

// get操作，读取数据
export async function get(index: any): Promise<Result> {
  return new Promise<Result>((resolve, reject) => {
    const select: Get = db.transaction([DB_NAME], 'readonly').objectStore(DB_NAME).get(index);

    select.onsuccess = function () {
      resolve(select.result);
    };
    select.onerror = reject;
  });
}
// get操作，读取数据
export async function getAll(): Promise<Result> {
  return new Promise<Result>((resolve, reject) => {
    const select: Get = db.transaction([DB_NAME], 'readonly').objectStore(DB_NAME).getAll();
    // .openCursor();

    select.onsuccess = function () {
      resolve(select.result);
    };
    select.onerror = reject;
  });
}

// add操作，添加数据
export async function add(item): Promise<Result> {
  return new Promise<Result>((resolve, reject) => {
    const select: Put = db.transaction([DB_NAME], 'readwrite').objectStore(DB_NAME).add(item);

    select.onsuccess = (event: any) => {
      resolve(event.target.result);
    };
    select.onerror = reject;
  });
}

// update操作，更新数据
export async function update(item: any): Promise<Result> {
  return new Promise((resolve, reject) => {
    const select: Put = db.transaction([DB_NAME], 'readwrite').objectStore(DB_NAME).put(item);

    select.onsuccess = (event: any) => {
      resolve(event.target.result);
    };
    select.onerror = reject;
  });
}

// remove操作，删除数据
export async function remove(id: any): Promise<Result> {
  return new Promise((resolve, reject) => {
    const select: Put = db.transaction([DB_NAME], 'readwrite').objectStore(DB_NAME).delete(id);

    select.onsuccess = (event: any) => {
      resolve(event.target.result);
    };
    select.onerror = reject;
  });
}

export default {
  init,
  add,
  get,
  getAll,
  update,
  remove,
};
