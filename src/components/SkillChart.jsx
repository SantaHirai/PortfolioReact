// src/components/SkillChart.jsx
import React, { useEffect } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
);

const SkillChart = () => {
  const data = {
    labels: ["HTML/CSS", "JavaScript", "Git/GitHub", "MySQL", "Python", "Rust", "Java", "C"],
    datasets: [{
      label: "Skill Level", // このラベルは凡例が表示される場合に意味を持つ
      data: [4, 3, 3, 3, 4, 2, 3, 3],
      backgroundColor: 'RGBA(225,255,255, 0.5)',
      borderColor: 'RGBA(255,255,255, 1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(0, 0, 0, 0)'
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true, // 元のHTMLではCanvasサイズが固定されていないためtrueが適切かも
    plugins: {
      title: {
        display: false, // 元のコードではfalse
        text: 'SkillChart',
        font: { family: "misaki_gothic_2nd", size: 20 }
      },
      legend: {
        display: false, // 元のコードではfalse
        labels: {
          font: { family: "misaki_gothic_2nd", size: 20 } // 凡例のフォント設定
        }
      }
    },
    scales: {
      r: {
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
          display: false, // 目盛り数値を非表示 (元のコードの display: false に合わせる)
          font: { family: "misaki_gothic_2nd", size: 20 }, // 目盛り数値のフォント
          // backdropColor: 'rgba(0,0,0,0)' // 目盛り数値の背景
        },
        grid: { // グリッド線 (背景の蜘蛛の巣線)
          color: 'RGB(255,255,255)'
        },
        pointLabels: { // 各スキルのラベル (HTML/CSSなど)
          font: { size: 20, family: "misaki_gothic_2nd" },
          color: 'RGB(255,255,255)'
        },
        angleLines: { // 中心から放射状に伸びる線
          color: 'RGB(255,255,255)'
        }
      }
    },
    animation: {
      duration: 3000
    },
    // Chart.js v2 の Chart.defaults.global.defaultFontSize = 20; に相当する設定を
    // 各要素の font オプションで行う。
    // もしグローバルに設定したい場合は、ChartJS.defaults.font.size = 20; などを
    // main.jsx や App.jsx の初期化時に設定する。
  };
  
  // グローバルフォントサイズ設定 (推奨はオプション内での個別設定)
  useEffect(() => {
    // ChartJS.defaults.font.size = 20;
    // ChartJS.defaults.font.family = "misaki_gothic_2nd";
  }, []);

  return <canvas id="mySkillChart"><Radar data={data} options={options} /></canvas>; // 元のHTMLのidを維持
};

export default SkillChart;