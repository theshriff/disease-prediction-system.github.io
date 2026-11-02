export function predictHeart(cp, ca, oldpeak, thal, age, sex, restecg) {
  if (
    typeof cp      !== 'number' || !isFinite(cp)      ||
    typeof ca      !== 'number' || !isFinite(ca)      ||
    typeof oldpeak !== 'number' || !isFinite(oldpeak) ||
    typeof thal    !== 'number' || !isFinite(thal)    ||
    typeof age     !== 'number' || !isFinite(age)     ||
    typeof sex     !== 'number' || !isFinite(sex)     ||
    typeof restecg !== 'number' || !isFinite(restecg)
  ) {
    throw new TypeError('predictHeart: all inputs must be finite numbers.');
  }

  if (cp <= 0) {
    if (ca <= 0) {
      if (oldpeak <= 1.500) {
        if (thal <= 2) return age <= 62 ? 1.0 : 0.0;
        if (sex <= 0) return 0.0;
        return age <= 47 ? 0.0 : 1.0;
      }
      return 0.0;
    }
    return 0.0;
  } else {
    if (ca <= 0) return 1.0;
    if (thal <= 1) return 0.0;
    if (oldpeak <= 2.100) {
      if (restecg <= 0) return oldpeak <= 0 ? 0.0 : 1.0;
      return 1.0;
    }
    return 0.0;
  }
}

export function getRiskLevel(value) {
  return value === 1.0 ? 'high' : 'low';
}