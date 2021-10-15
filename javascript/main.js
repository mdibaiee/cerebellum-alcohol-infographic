// Alcohol Abuse Chart

const alcoholAbuseCanvas = document.getElementById('alcohol-abuse');
const alcoholDeathPercent = alcoholAbuseData.Deaths.filter(function(a) { return a.metric == 'Percent' });
const alcoholPrevalencePercent = alcoholAbuseData.Prevalence.filter(function(a) { return a.metric == 'Percent' });
const alcoholAbuseChart = new Chart(alcoholAbuseCanvas, {
  type: 'line',
  data: {
    labels: alcoholDeathPercent.map(function(a) { return a.year }),
    datasets: [{
      label: 'Deaths by Alcohol Abuse',
      data: alcoholDeathPercent.map(function(a) { return a.val }),
      fill: true,
      backgroundColor: 'rgb(249, 98, 200)'
    }, {
      label: 'Prevalence of Alcohol Abuse',
      data: alcoholPrevalencePercent.map(function(a) { return a.val }),
      borderColor: 'rgb(97, 152, 250)'
    }]
  }
});

// Animations

anime({
  targets: '#human',
  opacity: 1,
  duration: 2000,
  easing: 'easeInOutExpo'
});

anime({
  targets: '#brain',
  opacity: 1,
  duration: 2000,
  delay: 1000,
  easing: 'easeInOutExpo'
});

anime({
  targets: '#brain-projection',
  opacity: 1,
  duration: 2000,
  delay: 1000,
  easing: 'easeInOutExpo'
});

anime({
  targets: '#Alcohol',
  opacity: 1,
  duration: 2000,
  delay: 2000,
  easing: 'easeInOutExpo'
});

anime({
  targets: '#connection-rectangle',
  opacity: 1,
  duration: 1000,
  delay: 3000,
  easing: 'easeInOutExpo'
});
