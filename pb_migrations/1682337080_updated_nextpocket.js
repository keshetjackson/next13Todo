migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zg3i8samlr5crbc")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zg3i8samlr5crbc")

  collection.name = "nextpocket"

  return dao.saveCollection(collection)
})
