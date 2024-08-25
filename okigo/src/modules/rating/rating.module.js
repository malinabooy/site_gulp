import { moonBlock } from '@verno.digital/moon-block'
import { Chart, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import gradient from 'chartjs-plugin-gradient'
import { CategoryScale } from 'chart.js'

moonBlock('.card-chart', ({ block }) => {
  const tags = ['', '', '', '']

  const json = JSON.parse(String(block.dataset.json))
  const data = json.map((item) => item.amount)
  const labels = json.map((item) => item.date)

  // const chartAreaBorder = {
  //   id: 'chartAreaBorder',
  //   beforeDraw(chart, args, options) {
  //     const {
  //       ctx,
  //       chartArea: { left, top, width, height }
  //     } = chart
  //     ctx.save()
  //
  //     ctx.strokeStyle = options.borderColor
  //     ctx.lineWidth = options.borderWidth
  //     ctx.beginPath()
  //     ctx.roundRect(1, 1, width + left, height + top, 15)
  //     ctx.stroke()
  //     ctx.restore()
  //   }
  // }

  const gradientBackground = () => {}

  const COLOR_LINE = block.getAttribute('data-line-color') ?? ''
  const GRADIENT_COLOR_START = block.getAttribute('data-gradient-start') ?? ''
  const GRADIENT_COLOR_STOP = block.getAttribute('data-gradient-stop') ?? ''

  Chart.register(CategoryScale)
  Chart.register(...registerables)

  const chart = new Chart(block, {
    plugins: [ChartDataLabels, gradient],
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          borderWidth: 2,
          borderColor: COLOR_LINE,
          lineTension: 0.5,
          pointStyle: true,
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          pointRadius: 8,
          hoverBorderColor: 'transparent',
          // hoverBackgroundColor: '#014C81E5',
          pointHoverRadius: 4,
          pointHitRadius: 0,
          pointBorderWidth: 0,
          fill: true,
          gradient: {
            backgroundColor: {
              axis: 'y',
              colors: {
                100: GRADIENT_COLOR_START,
                0: GRADIENT_COLOR_STOP
              }
            }
          }
        }
      ]
    },
    options: {
      layout: {},
      interaction: {
        mode: 'nearest',
        intersect: false
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          displayColors: false,
          enabled: true
        },
        legend: {
          display: false
        },
        datalabels: {
          display: false
        },
        filler: {
          propagate: true
        }
      },
      scales: {
        x: {
          display: false,
          border: {
            display: false
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          display: false,
          border: {
            display: false
          },
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    }
  })
})
