<template>
    <div>
        <div id="chartdiv"></div>
    </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {

    data() {
        return {
            chartDataArr: [],
            chartColorArr: [],
        }
    },
    
    props: {
        data: {
            type: Array,
            required: true,
        },
    },

    created() {
        
        // console.log(this.data);

        this.data.forEach(el => {

            if (el.k_category) {
                this.chartDataArr.push({
                    category: el.text_category,
                    count: el.m_sum,
                })

                this.chartColorArr.push(am4core.color(el.a_icon.s_icon_color))
                // console.log(el.a_icon.s_icon_color);
            } else {
                this.chartDataArr.push({
                    category: el.text_group,
                    count: el.m_sum,
                })

                this.chartColorArr.push(am4core.color(el.s_icon_color))
                // console.log(el.s_icon_color);
            }

            // this.chartColorArr.push(am4core.color(el.),)

        })

        // const chartTemp = document.getElementById('chartdiv');
        // console.log(chartTemp);
    },

    mounted() {
        // am4core.useTheme(am4themes_animated);

        // это должно решить проблемму с выводом ошибки в консоль
        am4core.options.autoDispose = true;
        // Themes end

        // Create chart instance
        const chart = am4core.create("chartdiv", am4charts.PieChart);

        // Add data
        chart.data = this.chartDataArr;

        // chart.data = [ {
        // "country": "Lithuania",
        // "litres": 501.9,
        // }, {
        // "country": "Czechia",
        // "litres": 301.9,
        // }, {
        // "country": "Ireland",
        // "litres": 201.1,
        // }, {
        // "country": "Germany",
        // "litres": 165.8,
        // }, {
        // "country": "Australia",
        // "litres": 139.9,
        // }, {
        // "country": "Austria",
        // "litres": 128.3,
        // }, {
        // "country": "UK",
        // "litres": 99,
        // }
        // ];

        // Add and configure Series
        const pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "count";
        pieSeries.dataFields.category = "category";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        // pieSeries.hiddenState.properties.opacity = 1;
        // pieSeries.hiddenState.properties.endAngle = -90;
        // pieSeries.hiddenState.properties.startAngle = -90;

        // на компе следующая строка должна работать
        pieSeries.labels.template.disabled = true;

        

        // pieSeries.tooltip.disabled = true;

        // chart.hiddenState.properties.radius = am4core.percent(0);

        // chart.legend = new am4charts.Legend();


        pieSeries.colors.list = this.chartColorArr;

        // pieSeries.colors.list = [
        //     am4core.color("#845EC2"),
        //     am4core.color("#D65DB1"),
        //     am4core.color("#FF6F91"),
        //     am4core.color("#FF9671"),
        //     am4core.color("#FFC75F"),
        //     am4core.color("#F9F871"),
        // ];

        this.hiddenLink();
    },

    methods: {
        hiddenLink() {
            const chartTemp = document.getElementById('chartdiv');
            let link = chartTemp.firstElementChild;

            for(let i = 0; i < 6; ++i) {
                link = link.lastElementChild;
            }
            link.previousElementSibling.style = "display: none"
        },
    },
}
</script>

<style scoped>
#chartdiv {
  width: 100%;
  height: 250px;
  /* background: orange; */
}
</style>