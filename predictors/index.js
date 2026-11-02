import { predictDiabetes, getRiskLevel as getDiabetesRisk } from './diabetesPredictor.js';
import { predictHeart, getRiskLevel as getHeartRisk } from './heartPredictor.js';

export const Predictors = {
  diabetes: {
    name: 'دیابت',
    predict: predictDiabetes,
    getRiskLevel: getDiabetesRisk
  },
  heart: {
    name: 'بیماری قلبی',
    predict: predictHeart,
    getRiskLevel: getHeartRisk
  }
};