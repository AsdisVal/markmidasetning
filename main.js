const chartData = {
    labels: ["Hægri", "Braut", "Vinstri"],
    data: [30, 50, 20],

};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".driving-stats .details ul");

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                label:"Prósentan er: ",
                data: chartData.data,
            },
        ],
    },
    options: {
        borderWidth: 10,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

const populateUl = () => {
    chartData.labels.forEach((l, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
        ul?.appendChild(li);
    });
}

populateUl();