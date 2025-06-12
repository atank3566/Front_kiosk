// Chart.js에 datalabel 플러그인 등록 (반드시 제일 위에 있어야 함)
Chart.register(ChartDataLabels);

// 차량 스펙 데이터
const carSpecs = {
  i7: { price: 181100000, power: 544, accel: 4.7, speed: 200, range: 455, efficiency: 3.8, acCharge: 10.5, dcCharge: 34 },
  iX: { price: 137500000, power: 544, accel: 4.6, speed: 200, range: 464, efficiency: 3.7, acCharge: 10.8, dcCharge: 35 },
  i5: { price: 92800000, power: 340, accel: 6.0, speed: 193, range: 441, efficiency: 4.6, acCharge: 8.25, dcCharge: 31 },
  i4: { price: 78300000, power: 340, accel: 5.6, speed: 190, range: 420, efficiency: 4.5, acCharge: 8.0, dcCharge: 30 }
};

// 드롭다운, 선택, 초기화 로직 동일
function toggleDropdown(id) { document.getElementById(id + '-dropdown').classList.toggle('show'); }
function selectModel(id, model) {
  document.getElementById(id + '-text').innerText = "THE " + model;
  document.getElementById(id + '-dropdown').classList.remove('show');
}
function formatPrice(price) { return "₩" + price.toLocaleString() + "부터"; }

let rangeChartInstance = null;
let efficiencyChartInstance = null;
let acChargeChartInstance = null;
let dcChargeChartInstance = null;

function compare() {
  const model1 = document.getElementById("model1-text").innerText.replace("THE ", "");
  const model2 = document.getElementById("model2-text").innerText.replace("THE ", "");

  if (model1 === "-" || model2 === "-") { alert("모델을 모두 선택하세요."); return; }

  const spec1 = carSpecs[model1];
  const spec2 = carSpecs[model2];

  document.getElementById("price1").innerText = formatPrice(spec1.price);
  document.getElementById("price2").innerText = formatPrice(spec2.price);
  document.getElementById("power1").innerText = `${spec1.power}마력 (${Math.round(spec1.power*0.7355)}kW)`;
  document.getElementById("power2").innerText = `${spec2.power}마력 (${Math.round(spec2.power*0.7355)}kW)`;
  document.getElementById("accel1").innerText = `${spec1.accel}초`;
  document.getElementById("accel2").innerText = `${spec2.accel}초`;
  document.getElementById("speed1").innerText = `${spec1.speed}km/h`;
  document.getElementById("speed2").innerText = `${spec2.speed}km/h`;

  drawAllCharts(model1, model2);
}

function drawAllCharts(model1, model2) {
  drawChart("rangeChart", "주행거리 (km)", [carSpecs[model1].range, carSpecs[model2].range], model1, model2, "rangeChartInstance", "km");
  drawChart("efficiencyChart", "전비 (km/kWh)", [carSpecs[model1].efficiency, carSpecs[model2].efficiency], model1, model2, "efficiencyChartInstance", "km/kWh");
  drawChart("acChargeChart", "AC 완속충전 (h)", [carSpecs[model1].acCharge, carSpecs[model2].acCharge], model1, model2, "acChargeChartInstance", "시간");
  drawChart("dcChargeChart", "DC 급속충전 (min)", [carSpecs[model1].dcCharge, carSpecs[model2].dcCharge], model1, model2, "dcChargeChartInstance", "분");
}

function drawChart(canvasId, label, dataArr, model1, model2, instanceName, unit) {
  if (window[instanceName]) window[instanceName].destroy();
  const ctx = document.getElementById(canvasId).getContext("2d");
  window[instanceName] = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [`THE ${model1}`, `THE ${model2}`],
      datasets: [{
        label: label,
        data: dataArr,
        backgroundColor: ["rgba(54, 162, 235, 0.7)", "rgba(255, 99, 132, 0.7)"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        datalabels: {
          color: '#000',
          font: { weight: 'bold', size: 35 },
          anchor: 'end',
          align: 'start',
          offset: 10,
          clamp: true,  // 바깥으로 고정
          formatter: value => `${value}${unit}`
        }
      },
      scales: {
        x: { display: false, grid: { display: false } },
        y: { display: false, grid: { display: false }, beginAtZero: true }
      }
    },
    plugins: [ChartDataLabels]
  });
}

function resetCompare() {
  ["model1-text", "model2-text", "price1", "price2", "power1", "power2", "accel1", "accel2", "speed1", "speed2"]
    .forEach(id => document.getElementById(id).innerText = (id.includes("model") ? "-" : "-"));

  ["rangeChartInstance", "efficiencyChartInstance", "acChargeChartInstance", "dcChargeChartInstance"]
    .forEach(name => { if (window[name]) window[name].destroy(); });
}