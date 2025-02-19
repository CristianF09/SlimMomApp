const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  accessToken: String,
  refreshToken: String,
  expiresAt: Date,
  active: Boolean
});

export default mongoose.model('Session', sessionSchema);
