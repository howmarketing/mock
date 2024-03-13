let db = require("./db.json");
db = db.filter((item, i) => i < 1000)
console.log(db);

