const { MongoClient } = require('mongodb');
// יצירת מופע מסוג לקוח והעברת ”מחרוזת חיבור“ כפרמטר //
const client = new MongoClient('mongodb://127.0.0.1:27017');
async function main() {
// חיבור למסד נעשה באמצעות הפונקציה connect //
 await client.connect();
 const db = client.db("elchi");
 const collection = db.collection("product");
    const deleteResult = await collection.deleteMany(
    { id:6 }
    );
 return 'done.';
}
main()
 .then(console.log)
 .catch(console.error)
 .finally(() => client.close());