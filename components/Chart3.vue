<template>
  <div class="chart" :id="id"></div>
</template>

<script setup>
import { init } from "echarts";
let chart;
import btcdata from "./btcdata.json";

const props = defineProps({
  id: String,
});

let option = {
  xAxis: {
    type: "category",

    data: [
      "3/6",
      "4/6",
      "5/6",
      "6/6",
      "7/6",
      "8/6",
      "9/6",
      "10/6",
      "11/6",
      "12/6",
      "13/6",
      "14/6",
      "15/6",
      "16/6",
      "17/6",
      "18/6",
      "19/6",
      "20/6",
      "21/6",
      "22/6",
      "23/6",
      "24/6",
      "25/6",
      "26/6",
      "27/6",
      "28/6",
      "29/6",
      "30/6",
      "1/7",
      "2/7",
      "3/7",
      "4/7",
      "5/7",
      "6/7",
      "7/7",
      "8/7",
      "9/7",
      "10/7",
      "11/7",
      "12/7",
      "13/7",
      "14/7",
      "15/7",
      "16/7",
      "17/7",
      "18/7",
      "19/7",
      "20/7",
      "21/7",
      "22/7",
      "23/7",
      "24/7",
      "25/7",
      "26/7",
      "27/7",
      "28/7",
      "29/7",
      "30/7",
      "31/7",
      "1/8",
      "2/8",
      "3/8",
      "4/8",
      "5/8",
      "6/8",
      "7/8",
      "8/8",
      "9/8",
      "10/8",
      "11/8",
      "12/8",
      "13/8",
      "14/8",
      "15/8",
      "16/8",
      "17/8",
      "18/8",
      "19/8",
      "20/8",
      "21/8",
      "22/8",
      "23/8",
      "24/8",
      "25/8",
      "26/8",
      "27/8",
      "28/8",
      "29/8",
      "30/8",
      "31/8",
      "1/9",
      "2/9",
      "3/9",
      "4/9",
      "5/9",
      "6/9",
      "7/9",
      "8/9",
      "9/9",
      "10/9",
      "11/9",
    ],
    axisLabel: {
      rotate: 90,
    },
    name: "Date",
    nameLocation: "center",
    nameTextStyle: {
      fontSize: 14,
      fontWeight: 500,
      padding: [40, 0],
    },
  },
  yAxis: {
    type: "value",
    name: "Price",
    nameLocation: "center",
    scale: true,
    nameTextStyle: {
      fontSize: 14,
      fontWeight: 500,
      padding: [20, 0],
    },
  },
  series: [
    {
      data: btcdata,
      type: "candlestick",
      name: "Bitcoin",
      color: "#0088ff",
    },
    // {
    //   data: [
    //     11, 22, 23, 22, 22, 15, 18, 19, 12, 14, 21, 24, 12, 27, 21, 25, 20, 12,
    //     13, 28, 26, 29, 13, 22, 23, 28, 19, 11, 23, 17, 22, 25, 21, 29, 19, 23,
    //     14, 30, 25, 14, 19, 21, 23, 29, 12, 12, 26, 16, 10, 10, 22, 29, 25, 29,
    //     25, 27, 16, 26, 13, 10, 25, 19, 22, 10, 22, 30, 20, 29, 12, 15, 13, 25,
    //     11, 25, 18, 25, 17, 21, 11, 17, 13, 15, 16, 18, 19, 21, 18, 11, 19, 16,
    //     13, 11, 26, 16, 13, 24, 10, 26, 23, 26,
    //   ],
    //   type: "line",
    //   name: "Nausicaa",
    //   color: "#141414",
    // },
  ],

  legend: {
    type: "plain",
  },

  tooltip: {
    trigger: "axis",
  },
};

onMounted(() => {
  chart = init(document.getElementById(props.id));
  chart.setOption(option);
});
</script>

<style lang="scss" scoped>
.chart {
  width: 100vw;
  height: 600px;
  padding: 20px;
}
</style>
