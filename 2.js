var data7 = {
  value: 0, //汇总
  color: '#FF543C',
};
var data8 = {
  value: 25, //质量
  color: '#3E88F0',
};
var value7 = data7.value || 0;
var value8 = data8.value || 0;

if (value7 > 100) {
  value_huizong = 100;
} else {
  value_huizong = value7;
};
if (value8 > 100) {
  value_zhiliang = 100;
} else {
  value_zhiliang = value8;
};
option2 = {
  backgroundColor: '#fff',
  // tooltip: {
  //     trigger: 'item',
  // },
  series: [{
      type: 'pie',
      startAngle: -90,
      radius: ['30', '40'],
      center: ['17%', '58%'],
      hoverAnimation: false,
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
          value: value7,
          name: data7.text,
          itemStyle: {
            normal: {
              color: data7.color,
            }
          },
          label: {
            normal: {
              textStyle: {
                fontSize: 12,
                fontWeight: 100,
                color: data7.color,
              }
            }
          }
        },
        {
          value: 100 - value_huizong,
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#fff',
            }
          },
          label: {
            normal: {
              formatter: value7 + '' + '%',
              textStyle: {
                fontSize: 16,
                color: data7.color
              }
            },

          }
        }
      ]
    },
    {
      type: 'pie',
      startAngle: -90,
      radius: ['30', '40'],
      center: ['50%', '58%'],
      hoverAnimation: false,
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
          value: value8,
          name: data8.text,
          itemStyle: {
            normal: {
              color: data8.color,
            }
          },
          label: {
            normal: {
              textStyle: {
                fontSize: 12,
                fontWeight: 100,
                color: data8.color,
              }
            }
          }
        },
        {
          value: 100 - value_zhiliang,
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#fff',
            }
          },
          label: {
            normal: {
              formatter: value8 + '' + '%',
              textStyle: {
                fontSize: 16,
                color: data8.color
              }
            },

          }
        }
      ]
    }
  ]
}