export function predictDiabetes(glucose, age, bmi, dpf) {
  if (
    typeof glucose !== 'number' || !isFinite(glucose) ||
    typeof age     !== 'number' || !isFinite(age)     ||
    typeof bmi     !== 'number' || !isFinite(bmi)     ||
    typeof dpf     !== 'number' || !isFinite(dpf)
  ) {
    throw new TypeError('predictDiabetes: all inputs must be finite numbers.');
  }

  if (glucose <= 154) {
    if (age <= 29) return 0.0;
    if (bmi <= 26.700) return 0.0;
    if (glucose <= 101) return dpf <= 0.709 ? 0.0 : 1.0;
    if (bmi <= 43.300) return dpf <= 0.464 ? 0.0 : 1.0;
    return 1.0;
  } else {
    if (dpf <= 0.307) return dpf <= 0.287 ? 1.0 : 0.0;
    return 1.0;
  }
}

export function getRiskLevel(value) {
  return value === 1.0 ? 'high' : 'low';
}