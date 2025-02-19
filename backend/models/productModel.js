const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    text: true
  },
  calories: Number,
  forbidden: Boolean
});