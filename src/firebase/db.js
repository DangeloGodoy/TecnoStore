import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    getDoc,
    addDoc,
    doc
} from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app);
const docRef = collection(db, "products")

export const getProducts = async (setProducts) => {
    const querySnapshots = await getDocs(docRef)
    const products = []

    querySnapshots.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() })
    })
    setProducts(products)
}

export const getProductByCategory = async (categoryName, setProducts) => {
    const q = query(docRef, where("category", "==", categoryName))
    const querySnapshots = await getDocs(q)
    const products = []

    querySnapshots.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() })
    })
    setProducts(products)
}

export const getProductsById = async (categoryID, setProduct) => {
    const docRef = doc(db, "products", categoryID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        setProduct({id: docSnap.id, ...docSnap.data()})
    } else {
        console.log("No such document!")
    }

}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        return docRef.id
      } catch (error) {
        console.error("Error adding document: ", error)
        throw error
      }
}