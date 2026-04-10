---
title: "敘述統計"
date: "2026-04-09"
description: "descriptive statistics"
layout: ../../layouts/Layout.astro
---



### 範例資料(以r分析)


<div class="mb-8 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
  <h3 class="text-lg font-bold text-gray-800 mb-4 border-b pb-2">📊 資料集欄位說明 (mtcars)(共32筆資料)</h3>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
    <div class="flex flex-col"><span class="font-mono text-blue-600 font-bold">mpg</span> <span class="text-gray-600">油耗值</span></div>
    <div class="flex flex-col"><span class="font-mono text-blue-600 font-bold">cyl</span> <span class="text-gray-600">氣缸數</span></div>
    <div class="flex flex-col"><span class="font-mono text-blue-600 font-bold">disp</span> <span class="text-gray-600">排氣量</span></div>
    <div class="flex flex-col"><span class="font-mono text-blue-600 font-bold">hp</span> <span class="text-gray-600">總馬力</span></div>
    <div class="flex flex-col"><span class="font-mono text-blue-600 font-bold">drat</span> <span class="text-gray-600">後軸齒輪比</span></div>
    <div class="flex flex-col"><span class="font-mono text-blue-600 font-bold">wt</span> <span class="text-gray-600">車重</span></div>
    <div class="flex flex-col"><span class="font-mono text-blue-600 font-bold">qsec</span> <span class="text-gray-600">1/4英里加速時間</span></div>
    <div class="flex flex-col"><span class="font-mono text-blue-600 font-bold">vs</span> <span class="text-gray-600">引擎形式</span></div>
    <div class="flex flex-col"><span class="font-mono text-blue-600 font-bold">am</span> <span class="text-gray-600">變速箱類型</span></div>
    <div class="flex flex-col"><span class="font-mono text-blue-600 font-bold">gear</span> <span class="text-gray-600">前進檔位數</span></div>
    <div class="flex flex-col"><span class="font-mono text-blue-600 font-bold">carb</span> <span class="text-gray-600">化油器數量</span></div>
  </div>
</div>

<div class="overflow-x-auto mb-12 rounded-lg border border-gray-200 shadow-sm">
  <table class="min-w-full text-sm text-left text-gray-600 whitespace-nowrap">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
      <tr>
        <th scope="col" class="px-6 py-4 font-bold">車款 (前六筆)</th>
        <th scope="col" class="px-4 py-4 font-mono text-blue-600">mpg</th>
        <th scope="col" class="px-4 py-4 font-mono text-blue-600">cyl</th>
        <th scope="col" class="px-4 py-4 font-mono text-blue-600">disp</th>
        <th scope="col" class="px-4 py-4 font-mono text-blue-600">hp</th>
        <th scope="col" class="px-4 py-4 font-mono text-blue-600">drat</th>
        <th scope="col" class="px-4 py-4 font-mono text-blue-600">wt</th>
        <th scope="col" class="px-4 py-4 font-mono text-blue-600">qsec</th>
        <th scope="col" class="px-4 py-4 font-mono text-blue-600">vs</th>
        <th scope="col" class="px-4 py-4 font-mono text-blue-600">am</th>
        <th scope="col" class="px-4 py-4 font-mono text-blue-600">gear</th>
        <th scope="col" class="px-4 py-4 font-mono text-blue-600">carb</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 bg-white">
      <tr class="hover:bg-blue-50 transition-colors">
        <td class="px-6 py-3 font-medium text-gray-900">Mazda RX4</td>
        <td class="px-4 py-3">21.0</td><td class="px-4 py-3">6</td><td class="px-4 py-3">160</td><td class="px-4 py-3">110</td><td class="px-4 py-3">3.90</td><td class="px-4 py-3">2.620</td><td class="px-4 py-3">16.46</td><td class="px-4 py-3">0</td><td class="px-4 py-3">1</td><td class="px-4 py-3">4</td><td class="px-4 py-3">4</td>
      </tr>
      <tr class="hover:bg-blue-50 transition-colors">
        <td class="px-6 py-3 font-medium text-gray-900">Mazda RX4 Wag</td>
        <td class="px-4 py-3">21.0</td><td class="px-4 py-3">6</td><td class="px-4 py-3">160</td><td class="px-4 py-3">110</td><td class="px-4 py-3">3.90</td><td class="px-4 py-3">2.875</td><td class="px-4 py-3">17.02</td><td class="px-4 py-3">0</td><td class="px-4 py-3">1</td><td class="px-4 py-3">4</td><td class="px-4 py-3">4</td>
      </tr>
      <tr class="hover:bg-blue-50 transition-colors">
        <td class="px-6 py-3 font-medium text-gray-900">Datsun 710</td>
        <td class="px-4 py-3">22.8</td><td class="px-4 py-3">4</td><td class="px-4 py-3">108</td><td class="px-4 py-3">93</td><td class="px-4 py-3">3.85</td><td class="px-4 py-3">2.320</td><td class="px-4 py-3">18.61</td><td class="px-4 py-3">1</td><td class="px-4 py-3">1</td><td class="px-4 py-3">4</td><td class="px-4 py-3">1</td>
      </tr>
      <tr class="hover:bg-blue-50 transition-colors">
        <td class="px-6 py-3 font-medium text-gray-900">Hornet 4 Drive</td>
        <td class="px-4 py-3">21.4</td><td class="px-4 py-3">6</td><td class="px-4 py-3">258</td><td class="px-4 py-3">110</td><td class="px-4 py-3">3.08</td><td class="px-4 py-3">3.215</td><td class="px-4 py-3">19.44</td><td class="px-4 py-3">1</td><td class="px-4 py-3">0</td><td class="px-4 py-3">3</td><td class="px-4 py-3">1</td>
      </tr>
      <tr class="hover:bg-blue-50 transition-colors">
        <td class="px-6 py-3 font-medium text-gray-900">Hornet Sportabout</td>
        <td class="px-4 py-3">18.7</td><td class="px-4 py-3">8</td><td class="px-4 py-3">360</td><td class="px-4 py-3">175</td><td class="px-4 py-3">3.15</td><td class="px-4 py-3">3.440</td><td class="px-4 py-3">17.02</td><td class="px-4 py-3">0</td><td class="px-4 py-3">0</td><td class="px-4 py-3">3</td><td class="px-4 py-3">2</td>
      </tr>
      <tr class="hover:bg-blue-50 transition-colors">
        <td class="px-6 py-3 font-medium text-gray-900">Valiant</td>
        <td class="px-4 py-3">18.1</td><td class="px-4 py-3">6</td><td class="px-4 py-3">225</td><td class="px-4 py-3">105</td><td class="px-4 py-3">2.76</td><td class="px-4 py-3">3.460</td><td class="px-4 py-3">20.22</td><td class="px-4 py-3">1</td><td class="px-4 py-3">0</td><td class="px-4 py-3">3</td><td class="px-4 py-3">1</td>
      </tr>
    </tbody>
  </table>
</div>

## 敘述統計分析：以油耗 (mpg) 為例

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
  <div class="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
    <div class="text-sm text-blue-600 font-bold mb-1">平均數 (Mean)</div>
    <div class="text-3xl font-black text-gray-800">20.09</div>
  </div>
  <div class="bg-green-50 border border-green-100 p-4 rounded-xl text-center">
    <div class="text-sm text-green-600 font-bold mb-1">中位數 (Median)</div>
    <div class="text-3xl font-black text-gray-800">19.20</div>
  </div>
  <div class="bg-purple-50 border border-purple-100 p-4 rounded-xl text-center">
    <div class="text-sm text-purple-600 font-bold mb-1">標準差 (SD)</div>
    <div class="text-3xl font-black text-gray-800">6.02</div>
  </div>
  <div class="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center">
    <div class="text-sm text-gray-500 font-bold mb-1">變異數 (Variance)</div>
    <div class="text-xl font-bold text-gray-700">36.324</div>
  </div>
  <div class="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center">
    <div class="text-sm text-gray-500 font-bold mb-1">全距 (Range)</div>
    <div class="text-xl font-bold text-gray-700">10.4 - 33.9</div>
  </div>
  <div class="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center">
    <div class="text-sm text-gray-500 font-bold mb-1">四分位距 (IQR)</div>
    <div class="text-xl font-bold text-gray-700">7.375</div>
  </div>
</div>

---

<div class="flex flex-col md:flex-row items-center gap-8 my-12">
  <div class="w-full md:w-3/5">
    <img src="/images/first-project/mpg.svg" alt="油耗分佈圖" class="w-full h-auto rounded-lg shadow-sm border border-gray-100" />
  </div>
  <div class="w-full md:w-2/5">
    <h4 class="text-xl font-bold text-gray-800 mb-3">油耗整體分佈情形</h4>
    <p class="text-gray-600 leading-relaxed mb-4">
      從分佈曲線中可以觀察到，多數車款的油耗集中在 15 到 25 mpg 之間。平均數與中位數相當接近，顯示數據分佈相對對稱，並無極端嚴重的偏態。
    </p>
  </div>
</div>

<div class="flex flex-col md:flex-row-reverse items-center gap-8 my-12">
  <div class="w-full md:w-3/5">
    <img src="/images/first-project/各車款油耗表現排名.svg" alt="各車款油耗表現排名" class="w-full h-auto rounded-lg shadow-sm border border-gray-100" />
  </div>
  <div class="w-full md:w-2/5">
    <h4 class="text-xl font-bold text-gray-800 mb-3">各車款油耗表現排名</h4>
    <p class="text-gray-600 leading-relaxed mb-4">
      透過長條圖的排序，我們可以清楚辨識出市場上最具燃油經濟性與最耗油的車型。這有助於消費者在購車時進行量化對比。
    </p>
  </div>
</div>

<div class="flex flex-col md:flex-row items-center gap-8 my-12">
  <div class="w-full md:w-3/5">
    <img src="/images/first-project/不同汽缸數的油耗表現比較.svg" alt="不同汽缸數的油耗表現比較" class="w-full h-auto rounded-lg shadow-sm border border-gray-100" />
  </div>
  <div class="w-full md:w-2/5">
    <h4 class="text-xl font-bold text-gray-800 mb-3">引擎規格對油耗的影響</h4>
    <p class="text-gray-600 leading-relaxed mb-4">
      利用箱型圖交叉分析，結果顯示明確的負相關：汽缸數越多的車款，其整體油耗表現顯著下降。
    </p>
  </div>
</div>


<div class="mt-16 pt-8 border-t border-gray-200">
  <a href="/" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 group">
    <span class="transform group-hover:-translate-x-1 transition-transform duration-200">&larr;</span> 
    返回首頁
  </a>
</div>