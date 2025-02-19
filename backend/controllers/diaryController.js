import Product from '../models/productModel';

export const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    const products = await Product.find(
      { $text: { $search: query } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addDailyProduct = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate('dailyEntries');
    user.dailyEntries.push({
      product: req.body.productId,
      date: new Date(req.body.date),
      quantity: req.body.quantity
    });
    await user.save();
    res.json(user.dailyEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};