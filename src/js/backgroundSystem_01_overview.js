Vue.component('overview',{
    props:['list'],
    template:
    `

    
    
    <div class="overview col-10 container-fluid">

        <div class="col-12 number">
            <div class="col-4 analysis">
                <h3>本週人數成長率</h3>
                <h1>+30%</h1>

                <div class="wrapper">

                    <div class="this-week week">
                        <h5>本週登島人數</h5>
                        <div class="count">
                            <h5>26432</h5>
                            <h5>人</h5>
                        </div>
                    </div>
                    <div class="last-week week">
                        <h5>上週登島人數</h5>
                        <div class="count">
                            <h5>20324</h5>
                            <h5>人</h5>
                        </div>
                    </div>

                </div>

            </div>

            <!-- 長條圖區域 -->
            <div class="col-8 bar-chart">
                <h3>未來一週預定人數</h3>
                <div class="card-body">
                    <canvas id="myBarChart" width="100%" height="50"></canvas>
                </div>

            </div>


                
        </div>



        <div class="col-12 border-hr">
            
        </div>

        <div class="col-12 pie-chart-container">
            <div class="col-2">
                <h3>選購方案</h3>
            </div>
            <!-- 圓餅圖區域 -->
            <div class="col-2">
                <div class="pieChart">
                    <div class="card-body">
                        <canvas id="myPieChart1" width="100%" height="50px"></canvas>
                    </div>
                </div>
            </div>

            <div class="col-2">
                <div class="pieChart">
                    <div class="card-body">
                        <canvas id="myPieChart2" width="100%" height="50px"></canvas>
                    </div>
                </div>
            </div>

            <div class="col-2">
                <div class="pieChart">
                    <div class="card-body">
                        <canvas id="myPieChart3" width="100%" height="50px"></canvas>
                    </div>
                </div>
            </div>

            <div class="col-2">
                <div class="pieChart">
                    <div class="card-body">
                        <canvas id="myPieChart4" width="100%" height="50px"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `
    ,
    mounted() {
        let ctx1 = document.getElementById("myPieChart1");
        let ctx2 = document.getElementById("myPieChart2");
        let ctx3 = document.getElementById("myPieChart3");
        let ctx4 = document.getElementById("myPieChart4");

        new Chart(ctx1, {
            type: 'pie',
            data: {
                labels: ["陸", "海"],
                datasets: [{
                    data: [50, 50],
                    backgroundColor: ['#ADE2D8'],
                }],
            },
        });

        new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: ["Blue", "慶隆廟"],
                datasets: [{
                    data: [12.21, 100],
                    backgroundColor: ['#007bff', '#dc3545'],
                }],
            },
        });

        new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: ["Yellow", "Green"],
                datasets: [{
                    data: [11.25, 8.32],
                    backgroundColor: ['#ffc107', '#28a745'],
                }],
            },
        });

        new Chart(ctx4, {
            type: 'pie',
            data: {
                labels: ["日島", "月島", "皆有"],
                datasets: [{
                    data: [100, 100, 100],
                    backgroundColor: ['#6EACAB', '#9DBBC3', '#D2E9F6'],
                }],
            },
        });


        var ctx = document.getElementById("myBarChart");
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["7/7", "7/8", "7/9", "7/10", "7/11", "7/12", "7/13"],
                datasets: [{
                label: "預定人數",
                backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#007bff', '#dc3545', '#ffc107',],
                borderColor: "rgba(2,117,216,1)",
                data: [421, 531, 625, 784, 982, 1298, 1800],
                }],
            },
            options: {
                scales: {
                    xAxes: [{
                        time: {
                            unit: 'month'
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 7
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 2000,
                            maxTicksLimit: 5
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                },
                legend: {
                    display: false
                }
            }
        });

    },
})

