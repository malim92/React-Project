const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://malim92:canonsx30@cluster0.dz3gj.mongodb.net/all-social?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
    const newProduct = {
      name: req.body.name,
      price: req.body.price
    };
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      const db = client.db();
      const result = db.collection('products').insertOne(newProduct);
    } catch (error) {
      return res.json({message: 'Could not store data.'});
    };
    client.close();
  
    res.json(newProduct);
  };
  
  const getProducts = async (req, res, next) => {};
  
  exports.createProduct = createProduct;
  exports.getProducts = getProducts;
  