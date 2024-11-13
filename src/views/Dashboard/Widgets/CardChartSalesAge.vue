<template>
  <v-card class="card-shadow border-radius-xl px-4 py-4">
    <h6 class="mb-4 text-h6 text-typo font-weight-bold">Cant. de Productores por Distrito</h6>
    <div class="chart-area">
      <canvas :height="820" :id="salesAgeChartID"></canvas>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "card-sales-age",
  data: function () {
    return {
      salesAgeChartID: "salesAgeChart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.salesAgeChartID).getContext("2d"), {
      type: "bar",
      data: {
        labels: ["CHAUPIMARCA", "HUACHÓN", "HUARIACA", "HUAYLLAY", "NINACACA", "PALLANCHACRA", "PAUCARTAMBO", "S.F.A. YARUSYACÁN", "SIMÓN BOLIVAR", "TICLACAYÁN", "TINYAHUARCO", "VICCO", "YANACANCHA", "YANAHUANCA", "CHACAYÁN", "GOYLLARISQUIZGA", "PAUCAR", "S.P. PILLAO", "S.A. TUSI", "TAPUC", "VILCABAMBA"],
        datasets: [
          {
            label: "Población por distrito",
            weight: 5,
            borderWidth: 0,
            borderRadius: 4,
            backgroundColor: "#17c1e8",
            data: [120, 200, 180, 210, 140, 150, 110, 120, 160, 210, 140, 150, 110, 120, 160, 90, 140, 100, 170, 140, 110],
            fill: false,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: "#c1c4ce5c",
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#344767",
              font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: true,
              drawTicks: true,
              color: "#9ca2b7",
            },
            ticks: {
              display: true,
              color: "#9ca2b7",
              padding: 10,
              font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
        },
      },
    });
  },
};
</script>
