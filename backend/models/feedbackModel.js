import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const Feedback = sequelize.define('Feedback', {
  feedback_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true, // Enable Sequelize's automatic timestamps
});

export default Feedback;
