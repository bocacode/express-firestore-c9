import dbConnect from "./dbConnect.js"
const collectionName = 'restaurants'

// Get All
export async function getAllRestaurants(req, res) {
  const db = dbConnect()
  const collection = db.collection(collectionName).get()
  const restaurants = collection.docs.map( (doc) => {
    return rest = doc.data();
  })
  res.send(restaurants)
}

// Get Doc
export async function getRestaurantById(req, res) {
  const db = dbConnect()
  const { restId } = req.params
  const doc = db.collection(collectionName).doc(restId).get()
  const rest = doc.data()

  res.send('Got Restaurant: ' + rest)
}

// Create
export async function createRestaurant(req, res) {
  const db = dbConnect()
  const newRestaurant = req.body
  await db.collection(collectionName).add(newRestaurant)
  res.status(201).send('Added Restaurant')
}


// Update
export async function updateRestaurantById(req, res) {
  const { restId } = req.params
  const updateInfo = req.body

  const db = dbConnect()
  await db.collection(collectionName).doc(restId).update(updateInfo)
  res.status(202).send("Restaurant Updated")
}


// Delete
export async function deleteRestaurant(req, res) {
  const { restId } = req.params

  const db = dbConnect()
  await db.collection(collectionName).doc(restId).delete()
  res.send("Restaurant Deleted")
}