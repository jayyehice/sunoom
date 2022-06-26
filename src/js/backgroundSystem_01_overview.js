Vue.component('overview',{
    props:['list'],
    template:
    `
    <div class="pieChart col-10 container-fluid">
        <div class="col-2">
            <div class="overview">
                <div class="card-body">
                    <canvas id="myPieChart1" width="100%" height="50px"></canvas>
                </div>
            </div>
        </div>

        <div class="col-2">
            <div class="overview">
                <div class="card-body">
                    <canvas id="myPieChart2" width="100%" height="50px"></canvas>
                </div>
            </div>
        </div>

        <div class="col-2">
            <div class="overview">
                <div class="card-body">
                    <canvas id="myPieChart3" width="100%" height="50px"></canvas>
                </div>
            </div>
        </div>

        <div class="col-2">
            <div class="overview">
                <div class="card-body">
                    <canvas id="myPieChart4" width="100%" height="50px"></canvas>
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
                // labels: ["Blue", "慶隆廟", "Yellow", "Green"],
                datasets: [{
                    data: [12.21, 100, 11.25, 8.32],
                    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                }],
            },
        });

        new Chart(ctx2, {
            type: 'pie',
            data: {
                // labels: ["Blue", "慶隆廟", "Yellow", "Green"],
                datasets: [{
                    data: [12.21, 100, 11.25, 8.32],
                    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                }],
            },
        });

        new Chart(ctx3, {
            type: 'pie',
            data: {
                // labels: ["Blue", "慶隆廟", "Yellow", "Green"],
                datasets: [{
                    data: [12.21, 100, 11.25, 8.32],
                    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                }],
            },
        });

        new Chart(ctx4, {
            type: 'pie',
            data: {
                // labels: ["Blue", "慶隆廟", "Yellow", "Green"],
                datasets: [{
                    data: [12.21, 100, 11.25, 8.32],
                    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                }],
            },
        });
    },
})

