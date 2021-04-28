<template>
    <div>
        <div id="chartdiv"></div>
    </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
    
    mounted() {
        // am4core.useTheme(am4themes_animated);

        // это должно решить проблемму с выводом ошибки в консоль
        am4core.options.autoDispose = true;
        // Themes end

        // Create chart instance
        const chart = am4core.create("chartdiv", am4charts.PieChart);

        // Add data
        chart.data = [ {
        "country": "Lithuania",
        "litres": 501.9,
        }, {
        "country": "Czechia",
        "litres": 301.9,
        }, {
        "country": "Ireland",
        "litres": 201.1,
        }, {
        "country": "Germany",
        "litres": 165.8,
        }, {
        "country": "Australia",
        "litres": 139.9,
        }, {
        "country": "Austria",
        "litres": 128.3,
        }, {
        "country": "UK",
        "litres": 99,
        }
        ];

        // Add and configure Series
        const pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        // на компе следующая строка должна работать
        pieSeries.labels.template.disabled = true;

        

        // pieSeries.tooltip.disabled = true;

        chart.hiddenState.properties.radius = am4core.percent(0);

        // chart.legend = new am4charts.Legend();

        pieSeries.colors.list = [
            am4core.color("#845EC2"),
            am4core.color("#D65DB1"),
            am4core.color("#FF6F91"),
            am4core.color("#FF9671"),
            am4core.color("#FFC75F"),
            am4core.color("#F9F871"),
        ];
    }
}
</script>

<style scoped>
#chartdiv {
  width: 100%;
  height: 250px;
  /* background: orange; */
}
</style>