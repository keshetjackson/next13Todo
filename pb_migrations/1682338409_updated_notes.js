migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zg3i8samlr5crbc")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zg3i8samlr5crbc")

  collection.listRule = null

  return dao.saveCollection(collection)
})
