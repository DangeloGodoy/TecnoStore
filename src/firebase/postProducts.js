import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./config.js";


const db = getFirestore(app);
const productsCollection = collection(db, "products");

const products = [
  /* {
    id: 1,
    title: "XIAOMI Xiaomi 14T 12 512GB Bundle",
    description: "Xiaomi 14T with 12GB RAM and 512GB storage.",
    category: "Celulares",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/xiami14t.png?alt=media&token=18a26a49-fad2-456b-bb42-c8d728d8793c",
    price: 799.99,
    rating: {
      count: 120,
      rate: 4.5,
    }
  }, */
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra 5G",
    description: "Samsung Galaxy S24 Ultra with 5G connectivity.",
    category: "Celulares",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/samsun_4_9.png?alt=media&token=35c9bdf1-6de6-4510-be64-57d7395b6a9a",
    price: 1099.99,
    rating: {
      count: 200,
      rate: 4.7,
    }
  },
  {
    id: 3,
    title: "iPhone 15 PRO 128GB TITANIO NATURAL",
    description: "iPhone 15 PRO with 128GB storage in Natural Titanium.",
    category: "Celulares",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/iphone_15_pro_natural_titanium_pure-370x700_1.png?alt=media&token=e5429410-b021-45a2-9f7c-d7c59c5da90f",
    price: 999.99,
    rating: {
      count: 150,
      rate: 4.6,
    }
  },
  {
    id: 4,
    title: "Smart TV Hisense 4K",
    description: "Hisense Smart TV with 4K resolution.",
    category: "Televisores",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/HisenseTV.avif?alt=media&token=3de077be-15d5-4857-a5af-1fe8ef0f65eb",
    price: 599.99,
    rating: {
      count: 80,
      rate: 4.3,
    }
  },
  {
    id: 5,
    title: "Smart TV LED Philips 4K",
    description: "Philips Smart TV with LED display and 4K resolution.",
    category: "Televisores",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/PhilipsTV.avif?alt=media&token=66fa15fa-a6bc-4d7a-abe5-e1632384f3ec",
    price: 649.99,
    rating: {
      count: 90,
      rate: 4.4,
    }
  },
  {
    id: 6,
    title: "Samsung TV 4K Crystal",
    description: "Samsung 4K Crystal TV with stunning visuals.",
    category: "Televisores",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/SamsungTV.avif?alt=media&token=3806250d-93b6-474f-900c-100517875919",
    price: 799.99,
    rating: {
      count: 70,
      rate: 4.5,
    }
  },
  {
    id: 7,
    title: "HP 15 fa0032dx",
    description: "HP 15 fa0032dx laptop with high performance.",
    category: "Computadores",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/NotebookGamer.avif?alt=media&token=f68bac61-ddc1-442c-82dc-c142d9f228fc",
    price: 499.99,
    rating: {
      count: 60,
      rate: 4.1,
    }
  },
  {
    id: 8,
    title: "MSI Katana 15 B13V",
    description: "MSI Katana 15 laptop for gaming and work.",
    category: "Computadores",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/NotebookGamer2.avif?alt=media&token=6a6a7a79-a90f-4743-9934-833837478773",
    price: 1199.99,
    rating: {
      count: 50,
      rate: 4.6,
    }
  },
  {
    id: 9,
    title: "Apple MacBook Pro M3 Max",
    description: "Apple MacBook Pro with M3 Max chip.",
    category: "Computadores",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/MacbookPro.avif?alt=media&token=b681cefb-31d7-4013-b48b-ad3b9db9cb6c",
    price: 2499.99,
    rating: {
      count: 40,
      rate: 4.9,
    }
  },
  {
    id: 10,
    title: "PlayStation 5",
    description: "PlayStation 5 console with high performance.",
    category: "Videojuegos",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/Play5.avif?alt=media&token=4dc8dcff-e324-4d28-a58d-fe2cc59459b1",
    price: 499.99,
    rating: {
      count: 300,
      rate: 4.8,
    }
  },
  {
    id: 11,
    title: "Xbox One",
    description: "Xbox One console with a great gaming experience.",
    category: "Videojuegos",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/Xbox.avif?alt=media&token=93575b69-25d3-44a5-9fd2-4d7ba3e4ba26",
    price: 299.99,
    rating: {
      count: 150,
      rate: 4.3,
    }
  },
  {
    id: 12,
    title: "Nintendo Switch OLED",
    description: "Nintendo Switch OLED for portable gaming.",
    category: "Videojuegos",
    image: "https://firebasestorage.googleapis.com/v0/b/tecnostore-7e566.appspot.com/o/Switch.avif?alt=media&token=32aa2b89-b90a-4390-a19a-9e289460bca5",
    price: 349.99,
    rating: {
      count: 250,
      rate: 4.7,
    }
  }
];

const loadProducts = async () => {
  try {
    for (const product of products) {
      await addDoc(productsCollection, product);
      console.log(`Product ${product.title} added successfully`);
    }
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};

loadProducts();

