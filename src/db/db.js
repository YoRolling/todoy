import { openDB } from 'idb'
import { OS_CHECK_LIST, OS_TASK_LIST } from './const'
export default openDB(
  process.env.REACT_APP_DBNAME,
  process.env.REACT_APP_DB_VERSION,
  {
    blocked() {},
    blocking() {},
    upgrade(db, oldVersion, newVersion) {
      if (oldVersion === 0) {
        const tb_TaskObj = db.createObjectStore(OS_CHECK_LIST, {
          autoIncrement: true,
          keyPath: 'id',
        })
        tb_TaskObj.createIndex('i_name', 'name', { unique: true })
        tb_TaskObj.add({ name: '我的一天' })

        const tb_taskObjStore = db.createObjectStore(OS_TASK_LIST, {
          autoIncrement: true,
          keyPath: 'id',
        })
        tb_taskObjStore.createIndex('idx_title', 'title')
        tb_taskObjStore.createIndex('idx_cid', 'cid', { multiEntry: true })
      } else {
        // todo upgrade
      }
    },
  }
)
