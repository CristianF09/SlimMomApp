import jwt from 'jsonwebtoken';
import User from '../models/userModel';
import Session from '../models/sessionModel';

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );
  const refreshToken = jwt.sign(
    { userId: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  return { accessToken, refreshToken };
};

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });
    
    const user = new User({ email, password });
    await user.save();
    
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const tokens = generateTokens(user);
    await Session.create({
      userId: user._id,
      ...tokens,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      active: true
    });

    res.json(tokens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const session = await Session.findOne({ refreshToken, active: true });
    
    if (!session) return res.status(401).json({ message: 'Invalid token' });
    
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const newTokens = generateTokens({ _id: decoded.userId });
    
    await Session.findByIdAndUpdate(session._id, {
      active: false
    });
    
    await Session.create({
      userId: decoded.userId,
      ...newTokens,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      active: true
    });

    res.json(newTokens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};