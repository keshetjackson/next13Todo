migrate((db) => {
  const collection = new Collection({
    "id": "zg3i8samlr5crbc",
    "created": "2023-04-24 11:38:47.705Z",
    "updated": "2023-04-24 11:38:47.705Z",
    "name": "nextpocket",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qj2uf6gs",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ypfc73ux",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zg3i8samlr5crbc");

  return dao.deleteCollection(collection);
})
