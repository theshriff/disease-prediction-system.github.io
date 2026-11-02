export function renderFields() {
  return `
    <div class="section-title">🩸 اطلاعات دیابت</div>
    <div class="input-grid">
      <div class="input-group">
        <label><i>🩸</i> گلوکز (mg/dL)</label>
        <input type="number" id="glucose" placeholder="گلوکز را وارد کنید" step="any" min="0">
      </div>
      <div class="input-group">
        <label><i>📅</i> سن (سال)</label>
        <input type="number" id="age" placeholder="سن را وارد کنید" step="any" min="0">
      </div>
      <div class="input-group">
        <label><i>⚖️</i> وزن (کیلوگرم)</label>
        <input type="number" id="weight" placeholder="وزن را وارد کنید" step="any" min="0">
      </div>
      <div class="input-group">
        <label><i>📏</i> قد (سانتی‌متر)</label>
        <input type="number" id="height" placeholder="قد را وارد کنید" step="any" min="0">
      </div>
      <div class="input-group full-width">
        <label><i>🧬</i> سابقه خانوادگی (DPF)</label>
        <input type="number" id="dpf" placeholder="عدد وارد کنید (مثلاً 0.45)" step="any" min="0">
      </div>
    </div>

    <div class="bmi-card" id="bmiCard">
      <div class="bmi-card-info">
        <div class="bmi-card-label">📐 شاخص توده بدنی (BMI)</div>
        <div class="bmi-card-hint">به صورت خودکار از وزن و قد محاسبه می‌شود</div>
      </div>
      <div class="bmi-card-result">
        <span class="bmi-card-value" id="bmiValue">—</span>
        <span class="bmi-pill" id="bmiPill">در انتظار ورود</span>
      </div>
    </div>

    <div class="section-title">❤️ اطلاعات بیماری قلبی</div>
    <div class="input-grid">
      <div class="input-group">
        <label><i>💔</i> نوع درد قفسه سینه (cp)</label>
        <select id="cp">
          <option value="0">۰ — آنژین تیپیک</option>
          <option value="1">۱ — آنژین آتیپیک</option>
          <option value="2">۲ — درد غیرآنژینی</option>
          <option value="3">۳ — بدون علامت</option>
        </select>
      </div>
      <div class="input-group">
        <label><i>🩻</i> تعداد عروق اصلی (ca)</label>
        <select id="ca">
          <option value="0">۰</option>
          <option value="1">۱</option>
          <option value="2">۲</option>
          <option value="3">۳</option>
        </select>
      </div>
      <div class="input-group">
        <label><i>📉</i> افت ST (oldpeak)</label>
        <input type="number" id="oldpeak" placeholder="عدد وارد کنید (مثلاً 1.4)" step="any" min="0">
      </div>
      <div class="input-group">
        <label><i>🧬</i> تالاسمی (thal)</label>
        <select id="thal">
          <option value="0">۰ — نرمال</option>
          <option value="1">۱ — نقص ثابت</option>
          <option value="2">۲ — نقص برگشت‌پذیر</option>
          <option value="3">۳ — سایر</option>
        </select>
      </div>
      <div class="input-group">
        <label><i>👤</i> جنسیت (sex)</label>
        <select id="sex">
          <option value="0">زن</option>
          <option value="1">مرد</option>
        </select>
      </div>
      <div class="input-group">
        <label><i>📈</i> نوار قلب استراحت (restecg)</label>
        <select id="restecg">
          <option value="0">۰ — نرمال</option>
          <option value="1">۱ — ناهنجاری ST-T</option>
          <option value="2">۲ — هیپرتروفی بطن چپ</option>
        </select>
      </div>
    </div>
  `;
}