import dbPromise from './db'
import { OS_CHECK_LIST, OS_TASK_LIST } from './const'
export const TaskService = {
  async get(key) {
    return (await dbPromise).get(OS_TASK_LIST, key)
  },
  async add(value) {
    return (await dbPromise).add(OS_TASK_LIST, value)
  },
  async getAll() {
    return (await dbPromise).getAll(OS_TASK_LIST)
  },
  async getAllByCid(id) {
    return (await dbPromise).getAllFromIndex(OS_TASK_LIST, 'idx_cid', id)
  },
}
export const CheckListService = {
  async get(key) {
    return (await dbPromise).get(OS_CHECK_LIST, key)
  },
  async add(value) {
    return (await dbPromise).add(OS_CHECK_LIST, value)
  },
  async getAll() {
    return (await dbPromise).getAllFromIndex(OS_CHECK_LIST, 'i_name')
  },
}
