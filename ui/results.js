export function updateResults(diabetesResult, heartResult, errorMsg = null) {
  const resultArea = document.getElementById('resultArea');
  
  if (errorMsg) {
    resultArea.innerHTML = `
      <div class="result-row">
        <span class="result-row-label"><i>📊</i> خطا</span>
        <span class="result-row-value warning">${errorMsg}</span>
      </div>
    `;
    return;
  }

  // تابع کمکی برای تولید متن و رنگ
  const getDiseaseResult = (value, name) => {
    if (value === null || value === undefined) return null;
    const isPositive = value === 1.0;
    const text = isPositive ? `احتمال ${name} بالا` : `احتمال ${name} پایین`;
    const cls = isPositive ? 'positive' : 'negative';
    return `<span class="result-row-value ${cls}">${text}</span>`;
  };

  const dHtml = getDiseaseResult(diabetesResult, 'دیابت');
  const hHtml = getDiseaseResult(heartResult, 'بیماری قلبی');

  let html = '';
  if (dHtml) {
    html += `<div class="result-row"><span class="result-row-label">🩸 دیابت</span>${dHtml}</div>`;
  }
  if (hHtml) {
    html += `<div class="result-row"><span class="result-row-label">❤️ بیماری قلبی</span>${hHtml}</div>`;
  }

  resultArea.innerHTML = html || `<div class="result-row"><span class="result-row-value">—</span></div>`;
}