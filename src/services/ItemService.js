import {database} from "../components/firebase";

const db = database.ref('AUTH-DEVLOPMENT')

class ItemService{
  getAll() {
    return db;
  }

  get(key){
      return db.child(key);
  }

  create(item) {
    return db.push(item);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
      console.log(key)
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new ItemService();