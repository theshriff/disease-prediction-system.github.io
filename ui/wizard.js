import { Predictors } from '../predictors/index.js';
import { renderFields } from './fields.js';
import { updateResults } from './results.js';

// 1. لود کردن فیلدها در صفحه
document.getElementById('formContainer').innerHTML = renderFields();

// 2. گرفتن المان‌های مورد نیاز
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const bmiValue = document.getElementById('bmiValue');
const bmiPill = document.getElementById('bmiPill');
const predictBtn = document.getElementById('predictBtn');
const resetBtn = document.getElementById('resetBtn');

// 3. توابع مربوط به BMI
function calculateBMI(weightKg, heightCm) {
  if (!weightKg || !heightCm || heightCm <= 0) return null;
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

function getBMICategory(bmi) {
  if (!bmi || bmi <= 0) return { label: 'در انتظار ورود', class: '' };
  if (bmi < 18.5) return { label: 'کمبود وزن', class: 'underweight' };
  if (bmi < 25)   return { label: 'وزن نرمال', class: 'normal' };
  if (bmi < 30)   return { label: 'اضافه وزن', class: 'overweight' };
  if (bmi < 35)   return { label: 'چاقی درجه ۱', class: 'obese1' };
  if (bmi < 40)   return { label: 'چاقی درجه ۲', class: 'obese2' };
  return { label: 'چاقی شدید', class: 'obese3' };
}

function updateBMICard() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmi = calculateBMI(weight, height);
  const category = getBMICategory(bmi);

  if (bmi && isFinite(bmi) && bmi > 0) {
    bmiValue.textContent = bmi.toFixed(1);
  } else {
    bmiValue.textContent = '—';
  }

  bmiValue.className = 'bmi-card-value ' + (bmi ? category.class : '');
  bmiPill.className = 'bmi-pill ' + (bmi ? category.class : '');
  bmiPill.textContent = category.label;
  
  return bmi;
}

// گوش دادن به تغییرات وزن و قد برای آپدیت زنده BMI
weightInput.addEventListener('input', updateBMICard);
heightInput.addEventListener('input', updateBMICard);

// 4. دکمه پیش‌بینی
predictBtn.addEventListener('click', () => {
  // خواندن مقادیر دیابت
  const glucose = parseFloat(document.getElementById('glucose').value);
  const age = parseFloat(document.getElementById('age').value);
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const dpf = parseFloat(document.getElementById('dpf').value);

  // خواندن مقادیر قلب
  const cp = parseInt(document.getElementById('cp').value, 10);
  const ca = parseInt(document.getElementById('ca').value, 10);
  const oldpeak = parseFloat(document.getElementById('oldpeak').value);
  const thal = parseInt(document.getElementById('thal').value, 10);
  const sex = parseInt(document.getElementById('sex').value, 10);
  const restecg = parseInt(document.getElementById('restecg').value, 10);

  const bmi = calculateBMI(weight, height);

  // اعتبارسنجی (چک کردن اینکه فیلدهای عددی خالی نباشن)
  if (isNaN(glucose) || isNaN(age) || isNaN(dpf) || isNaN(oldpeak) || isNaN(bmi)) {
    updateResults(null, null, 'لطفاً همه فیلدها را تکمیل کنید');
    return;
  }

  try {
    // اجرای هر دو پیش‌بینی با استفاده از فایل index.js
    const diabetesResult = Predictors.diabetes.predict(glucose, age, bmi, dpf);
    const heartResult = Predictors.heart.predict(cp, ca, oldpeak, thal, age, sex, restecg);

    // نمایش نتایج
    updateResults(diabetesResult, heartResult);
  } catch (error) {
    updateResults(null, null, 'خطا در محاسبه: مقادیر وارد شده معتبر نیستند');
    console.error(error);
  }
});

// 5. دکمه بازنشانی
resetBtn.addEventListener('click', () => {
  document.querySelectorAll('input').forEach(input => input.value = '');
  document.querySelectorAll('select').forEach(select => select.value = '0');
  updateBMICard();
  updateResults(null, null);
  document.getElementById('resultArea').innerHTML = `
    <div class="result-row">
      <span class="result-row-label"><i>📊</i> نتیجه</span>
      <span class="result-row-value">—</span>
    </div>
  `;
});