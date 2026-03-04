// Task 1: Set up folders and move your files
const express = require('express')
const app = express()

const inventory = [
  {
    category: "Men's Clothing",
    items: [
      {
        name: "Classic T-Shirt",
        cost: 19.99,
        imageUrl: "https://m.media-amazon.com/images/I/51Rm1WGh98L._AC_UY1000_.jpg",
        path: "/item/0",
        quantity: 120,
        colors: ["black", "white", "gray"],
        id:0
      },
      {
        name: "Denim Jacket",
        cost: 49.99,
        imageUrl: "https://thursdayboots.com/cdn/shop/files/1024x1024-Mens-Jackets-SelvedgeDenimTrucker-Vintage-091423-1_1024x1024.jpg?v=1695056578",
        path: "/item/1",
        quantity: 75,
        colors: ["blue", "black"],
        id:1
      },
      {
        name: "Running Shoes",
        cost: 89.99,
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        path: "/item/2",
        quantity: 50,
        colors: ["red", "black", "white"],
        id:2
      }
    ]
  },
  {
    category: "Women's Clothing",
    items: [
      {
        name: "Summer Dress",
        cost: 29.99,
        imageUrl: "https://ullajohnson.com/cdn/shop/files/ULLA_JOHNSON_BlaireDress__BLANC_01_MAIN.jpg?v=1714067305&width=960",
        path: "/item/3",
        quantity: 100,
        colors: ["pink", "yellow", "white"],
        id:3
      },
      {
        name: "Leather Handbag",
        cost: 99.99,
        imageUrl: "https://www.letanneur.us/cdn/shop/files/TEMI1014G05-d_c4c045a7-8a31-4b47-943a-85913ad5c3df.jpg?v=1736851853",
        path: "/item/4",
        quantity: 40,
        colors: ["brown", "black"],
        id:4
      },
      {
        name: "Running Shoes",
        cost: 89.99,
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        path: "/item/5",
        quantity: 60,
        colors: ["blue", "pink", "white"],
        id:5

      }
    ]
  }
]

// Task 1: Set the view engine to EJS. 
app.set("view engine", "ejs")


app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

// Task 1: Set up the static middleware
app.use(express.static("public"))


// Task 2: Set up the route handler for / to send back the index.html file

app.get("/", (req,res)=>{
  res.sendFile(__dirname, "index.html")
})

// Task 3: Set up the route handler for /mens which sends back category.ejs with the men's category object
app.get("/mens", (req,res)=>{
  const mensData=inventory[0]
  res.render('category', {category: mensData.category,items:mensData.items})
})


// Task 4: Plug in the values in category.ejs to get the page working
// PINK ONLY: Set up a route handler for /womens to pass in similar data for women's
app.get("/womens", (req,res)=>{
  const womensData=inventory[1]
  res.render('category', {category: womensData.category, items:womensData.items})
})


// Task 5: Set up the route handler for /item/0 which sends back the first item in product.ejs
app.get("/item/:id", (req,res)=>{
  const id=req.params.id
  let item;
  if(id<3){
  item=inventory[0].items[id]
  } else {
   item=inventory[1].items[id-3]
    
  }
  res.render("product", {items:item})
})


// Task 6: Plug in the values in product.ejs to get the page working
// Extra credit: modify the /item/0 route handler to have dynamic path parameter and return any item's data

app.listen(3000, () => {
  console.log("Server running")
})