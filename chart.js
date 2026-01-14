
/* Mock Data (дараа нь DB-с орж ирнэ) */
const analyticsData = {
  monthlyJobs: [5, 8, 12, 6, 10, 14],
  ratings: [1, 2, 3, 4, 5],
  ratingCount: [1, 2, 4, 10, 18],
  repairTypes: {
    hardware: 15,
    software: 10,
    internet: 6
  },
  locations: {
    'Баянзүрх': 12,
    'СХД': 8,
    'Чингэлтэй': 6,
    'Хан-Уул': 5
  }
};

/* Summary */
totalRequests.innerText = 31;
doneJobs.innerText = 22;
avgRating.innerText = "4.3 ⭐";

/* Monthly Jobs */
new Chart(monthlyJobChart, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5','6'],
    datasets: [{
      data: analyticsData.monthlyJobs,
      tension: 0.4,
      fill: true
    }]
  },
  options:{ plugins:{legend:{display:false}} }
});

/* Rating Pie */
new Chart(ratingPie, {
  type: 'doughnut',
  data: {
    labels: ['1⭐','2⭐','3⭐','4⭐','5⭐'],
    datasets: [{
      data: analyticsData.ratingCount
    }]
  }
});

/* Repair Type */
new Chart(repairTypeChart, {
  type: 'bar',
  data: {
    labels: Object.keys(analyticsData.repairTypes),
    datasets: [{
      data: Object.values(analyticsData.repairTypes)
    }]
  },
  options:{ plugins:{legend:{display:false}} }
});

/* Location */
new Chart(locationChart, {
  type: 'bar',
  data: {
    labels: Object.keys(analyticsData.locations),
    datasets: [{
      data: Object.values(analyticsData.locations)
    }]
  },
  options:{ plugins:{legend:{display:false}} }
});

