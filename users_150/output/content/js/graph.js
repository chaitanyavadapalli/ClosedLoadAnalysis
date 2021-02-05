/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 174.0, "minX": 0.0, "maxY": 7125.0, "series": [{"data": [[0.0, 174.0], [0.1, 175.0], [0.2, 176.0], [0.3, 176.0], [0.4, 176.0], [0.5, 176.0], [0.6, 177.0], [0.7, 177.0], [0.8, 177.0], [0.9, 177.0], [1.0, 178.0], [1.1, 178.0], [1.2, 178.0], [1.3, 178.0], [1.4, 178.0], [1.5, 178.0], [1.6, 178.0], [1.7, 179.0], [1.8, 179.0], [1.9, 179.0], [2.0, 179.0], [2.1, 179.0], [2.2, 179.0], [2.3, 179.0], [2.4, 180.0], [2.5, 180.0], [2.6, 180.0], [2.7, 180.0], [2.8, 181.0], [2.9, 181.0], [3.0, 181.0], [3.1, 181.0], [3.2, 181.0], [3.3, 181.0], [3.4, 181.0], [3.5, 181.0], [3.6, 182.0], [3.7, 182.0], [3.8, 182.0], [3.9, 182.0], [4.0, 182.0], [4.1, 182.0], [4.2, 182.0], [4.3, 183.0], [4.4, 183.0], [4.5, 183.0], [4.6, 183.0], [4.7, 183.0], [4.8, 183.0], [4.9, 183.0], [5.0, 183.0], [5.1, 183.0], [5.2, 183.0], [5.3, 184.0], [5.4, 184.0], [5.5, 184.0], [5.6, 184.0], [5.7, 184.0], [5.8, 184.0], [5.9, 184.0], [6.0, 185.0], [6.1, 185.0], [6.2, 185.0], [6.3, 185.0], [6.4, 185.0], [6.5, 185.0], [6.6, 185.0], [6.7, 185.0], [6.8, 186.0], [6.9, 186.0], [7.0, 186.0], [7.1, 186.0], [7.2, 187.0], [7.3, 187.0], [7.4, 187.0], [7.5, 188.0], [7.6, 189.0], [7.7, 189.0], [7.8, 190.0], [7.9, 190.0], [8.0, 191.0], [8.1, 191.0], [8.2, 192.0], [8.3, 193.0], [8.4, 193.0], [8.5, 194.0], [8.6, 195.0], [8.7, 196.0], [8.8, 197.0], [8.9, 198.0], [9.0, 199.0], [9.1, 201.0], [9.2, 202.0], [9.3, 203.0], [9.4, 204.0], [9.5, 205.0], [9.6, 207.0], [9.7, 208.0], [9.8, 208.0], [9.9, 210.0], [10.0, 211.0], [10.1, 212.0], [10.2, 213.0], [10.3, 215.0], [10.4, 217.0], [10.5, 220.0], [10.6, 221.0], [10.7, 224.0], [10.8, 225.0], [10.9, 225.0], [11.0, 228.0], [11.1, 229.0], [11.2, 230.0], [11.3, 232.0], [11.4, 234.0], [11.5, 235.0], [11.6, 238.0], [11.7, 240.0], [11.8, 242.0], [11.9, 245.0], [12.0, 249.0], [12.1, 250.0], [12.2, 251.0], [12.3, 255.0], [12.4, 259.0], [12.5, 259.0], [12.6, 262.0], [12.7, 265.0], [12.8, 268.0], [12.9, 271.0], [13.0, 274.0], [13.1, 278.0], [13.2, 282.0], [13.3, 283.0], [13.4, 287.0], [13.5, 290.0], [13.6, 295.0], [13.7, 296.0], [13.8, 303.0], [13.9, 308.0], [14.0, 314.0], [14.1, 317.0], [14.2, 320.0], [14.3, 324.0], [14.4, 327.0], [14.5, 330.0], [14.6, 333.0], [14.7, 337.0], [14.8, 340.0], [14.9, 343.0], [15.0, 345.0], [15.1, 347.0], [15.2, 348.0], [15.3, 352.0], [15.4, 355.0], [15.5, 357.0], [15.6, 361.0], [15.7, 364.0], [15.8, 366.0], [15.9, 371.0], [16.0, 372.0], [16.1, 376.0], [16.2, 380.0], [16.3, 380.0], [16.4, 382.0], [16.5, 386.0], [16.6, 388.0], [16.7, 391.0], [16.8, 393.0], [16.9, 398.0], [17.0, 400.0], [17.1, 401.0], [17.2, 404.0], [17.3, 407.0], [17.4, 411.0], [17.5, 417.0], [17.6, 421.0], [17.7, 425.0], [17.8, 428.0], [17.9, 430.0], [18.0, 435.0], [18.1, 436.0], [18.2, 441.0], [18.3, 442.0], [18.4, 447.0], [18.5, 452.0], [18.6, 455.0], [18.7, 462.0], [18.8, 466.0], [18.9, 470.0], [19.0, 474.0], [19.1, 478.0], [19.2, 481.0], [19.3, 484.0], [19.4, 488.0], [19.5, 491.0], [19.6, 493.0], [19.7, 495.0], [19.8, 499.0], [19.9, 503.0], [20.0, 507.0], [20.1, 510.0], [20.2, 514.0], [20.3, 516.0], [20.4, 519.0], [20.5, 523.0], [20.6, 526.0], [20.7, 530.0], [20.8, 534.0], [20.9, 539.0], [21.0, 542.0], [21.1, 548.0], [21.2, 553.0], [21.3, 557.0], [21.4, 560.0], [21.5, 561.0], [21.6, 564.0], [21.7, 569.0], [21.8, 573.0], [21.9, 576.0], [22.0, 579.0], [22.1, 584.0], [22.2, 587.0], [22.3, 592.0], [22.4, 594.0], [22.5, 598.0], [22.6, 602.0], [22.7, 610.0], [22.8, 612.0], [22.9, 615.0], [23.0, 623.0], [23.1, 628.0], [23.2, 632.0], [23.3, 635.0], [23.4, 636.0], [23.5, 639.0], [23.6, 641.0], [23.7, 645.0], [23.8, 650.0], [23.9, 651.0], [24.0, 654.0], [24.1, 657.0], [24.2, 664.0], [24.3, 668.0], [24.4, 671.0], [24.5, 674.0], [24.6, 680.0], [24.7, 683.0], [24.8, 687.0], [24.9, 689.0], [25.0, 693.0], [25.1, 701.0], [25.2, 707.0], [25.3, 710.0], [25.4, 714.0], [25.5, 722.0], [25.6, 727.0], [25.7, 734.0], [25.8, 738.0], [25.9, 743.0], [26.0, 747.0], [26.1, 751.0], [26.2, 755.0], [26.3, 758.0], [26.4, 764.0], [26.5, 775.0], [26.6, 779.0], [26.7, 783.0], [26.8, 788.0], [26.9, 794.0], [27.0, 796.0], [27.1, 801.0], [27.2, 807.0], [27.3, 816.0], [27.4, 820.0], [27.5, 828.0], [27.6, 831.0], [27.7, 837.0], [27.8, 841.0], [27.9, 847.0], [28.0, 849.0], [28.1, 855.0], [28.2, 861.0], [28.3, 867.0], [28.4, 871.0], [28.5, 874.0], [28.6, 881.0], [28.7, 886.0], [28.8, 891.0], [28.9, 895.0], [29.0, 900.0], [29.1, 904.0], [29.2, 907.0], [29.3, 912.0], [29.4, 916.0], [29.5, 923.0], [29.6, 933.0], [29.7, 938.0], [29.8, 944.0], [29.9, 946.0], [30.0, 952.0], [30.1, 956.0], [30.2, 962.0], [30.3, 969.0], [30.4, 977.0], [30.5, 982.0], [30.6, 987.0], [30.7, 995.0], [30.8, 1001.0], [30.9, 1007.0], [31.0, 1015.0], [31.1, 1020.0], [31.2, 1024.0], [31.3, 1027.0], [31.4, 1034.0], [31.5, 1039.0], [31.6, 1042.0], [31.7, 1048.0], [31.8, 1056.0], [31.9, 1062.0], [32.0, 1067.0], [32.1, 1070.0], [32.2, 1074.0], [32.3, 1076.0], [32.4, 1079.0], [32.5, 1085.0], [32.6, 1090.0], [32.7, 1096.0], [32.8, 1099.0], [32.9, 1107.0], [33.0, 1111.0], [33.1, 1116.0], [33.2, 1120.0], [33.3, 1125.0], [33.4, 1128.0], [33.5, 1131.0], [33.6, 1140.0], [33.7, 1142.0], [33.8, 1144.0], [33.9, 1146.0], [34.0, 1152.0], [34.1, 1156.0], [34.2, 1159.0], [34.3, 1163.0], [34.4, 1167.0], [34.5, 1172.0], [34.6, 1176.0], [34.7, 1180.0], [34.8, 1183.0], [34.9, 1188.0], [35.0, 1191.0], [35.1, 1192.0], [35.2, 1194.0], [35.3, 1198.0], [35.4, 1201.0], [35.5, 1206.0], [35.6, 1209.0], [35.7, 1213.0], [35.8, 1217.0], [35.9, 1220.0], [36.0, 1225.0], [36.1, 1231.0], [36.2, 1236.0], [36.3, 1240.0], [36.4, 1242.0], [36.5, 1244.0], [36.6, 1248.0], [36.7, 1254.0], [36.8, 1257.0], [36.9, 1261.0], [37.0, 1268.0], [37.1, 1273.0], [37.2, 1279.0], [37.3, 1281.0], [37.4, 1286.0], [37.5, 1288.0], [37.6, 1292.0], [37.7, 1295.0], [37.8, 1297.0], [37.9, 1300.0], [38.0, 1305.0], [38.1, 1310.0], [38.2, 1313.0], [38.3, 1315.0], [38.4, 1316.0], [38.5, 1320.0], [38.6, 1322.0], [38.7, 1325.0], [38.8, 1327.0], [38.9, 1332.0], [39.0, 1335.0], [39.1, 1339.0], [39.2, 1341.0], [39.3, 1352.0], [39.4, 1355.0], [39.5, 1359.0], [39.6, 1365.0], [39.7, 1370.0], [39.8, 1375.0], [39.9, 1377.0], [40.0, 1378.0], [40.1, 1383.0], [40.2, 1387.0], [40.3, 1390.0], [40.4, 1394.0], [40.5, 1401.0], [40.6, 1404.0], [40.7, 1408.0], [40.8, 1410.0], [40.9, 1416.0], [41.0, 1418.0], [41.1, 1421.0], [41.2, 1425.0], [41.3, 1429.0], [41.4, 1435.0], [41.5, 1439.0], [41.6, 1444.0], [41.7, 1449.0], [41.8, 1452.0], [41.9, 1456.0], [42.0, 1461.0], [42.1, 1466.0], [42.2, 1468.0], [42.3, 1472.0], [42.4, 1476.0], [42.5, 1479.0], [42.6, 1482.0], [42.7, 1484.0], [42.8, 1488.0], [42.9, 1492.0], [43.0, 1497.0], [43.1, 1499.0], [43.2, 1505.0], [43.3, 1513.0], [43.4, 1518.0], [43.5, 1525.0], [43.6, 1530.0], [43.7, 1535.0], [43.8, 1538.0], [43.9, 1544.0], [44.0, 1549.0], [44.1, 1555.0], [44.2, 1561.0], [44.3, 1571.0], [44.4, 1572.0], [44.5, 1577.0], [44.6, 1581.0], [44.7, 1584.0], [44.8, 1590.0], [44.9, 1596.0], [45.0, 1601.0], [45.1, 1605.0], [45.2, 1608.0], [45.3, 1612.0], [45.4, 1615.0], [45.5, 1616.0], [45.6, 1619.0], [45.7, 1622.0], [45.8, 1628.0], [45.9, 1631.0], [46.0, 1634.0], [46.1, 1638.0], [46.2, 1642.0], [46.3, 1644.0], [46.4, 1646.0], [46.5, 1654.0], [46.6, 1657.0], [46.7, 1661.0], [46.8, 1663.0], [46.9, 1669.0], [47.0, 1671.0], [47.1, 1678.0], [47.2, 1680.0], [47.3, 1683.0], [47.4, 1687.0], [47.5, 1690.0], [47.6, 1694.0], [47.7, 1697.0], [47.8, 1702.0], [47.9, 1707.0], [48.0, 1713.0], [48.1, 1715.0], [48.2, 1720.0], [48.3, 1723.0], [48.4, 1733.0], [48.5, 1736.0], [48.6, 1738.0], [48.7, 1744.0], [48.8, 1747.0], [48.9, 1755.0], [49.0, 1758.0], [49.1, 1760.0], [49.2, 1765.0], [49.3, 1769.0], [49.4, 1772.0], [49.5, 1775.0], [49.6, 1780.0], [49.7, 1784.0], [49.8, 1792.0], [49.9, 1797.0], [50.0, 1801.0], [50.1, 1804.0], [50.2, 1809.0], [50.3, 1815.0], [50.4, 1824.0], [50.5, 1828.0], [50.6, 1830.0], [50.7, 1833.0], [50.8, 1843.0], [50.9, 1851.0], [51.0, 1853.0], [51.1, 1861.0], [51.2, 1865.0], [51.3, 1872.0], [51.4, 1879.0], [51.5, 1884.0], [51.6, 1886.0], [51.7, 1892.0], [51.8, 1894.0], [51.9, 1905.0], [52.0, 1909.0], [52.1, 1915.0], [52.2, 1919.0], [52.3, 1924.0], [52.4, 1928.0], [52.5, 1932.0], [52.6, 1938.0], [52.7, 1945.0], [52.8, 1952.0], [52.9, 1959.0], [53.0, 1960.0], [53.1, 1964.0], [53.2, 1972.0], [53.3, 1976.0], [53.4, 1981.0], [53.5, 1985.0], [53.6, 1989.0], [53.7, 1995.0], [53.8, 1998.0], [53.9, 2003.0], [54.0, 2009.0], [54.1, 2012.0], [54.2, 2018.0], [54.3, 2023.0], [54.4, 2027.0], [54.5, 2032.0], [54.6, 2036.0], [54.7, 2039.0], [54.8, 2042.0], [54.9, 2044.0], [55.0, 2049.0], [55.1, 2055.0], [55.2, 2057.0], [55.3, 2062.0], [55.4, 2072.0], [55.5, 2078.0], [55.6, 2080.0], [55.7, 2088.0], [55.8, 2092.0], [55.9, 2094.0], [56.0, 2096.0], [56.1, 2103.0], [56.2, 2107.0], [56.3, 2113.0], [56.4, 2116.0], [56.5, 2120.0], [56.6, 2123.0], [56.7, 2129.0], [56.8, 2136.0], [56.9, 2141.0], [57.0, 2147.0], [57.1, 2149.0], [57.2, 2152.0], [57.3, 2156.0], [57.4, 2160.0], [57.5, 2164.0], [57.6, 2169.0], [57.7, 2174.0], [57.8, 2175.0], [57.9, 2178.0], [58.0, 2182.0], [58.1, 2187.0], [58.2, 2190.0], [58.3, 2195.0], [58.4, 2199.0], [58.5, 2205.0], [58.6, 2207.0], [58.7, 2210.0], [58.8, 2212.0], [58.9, 2214.0], [59.0, 2217.0], [59.1, 2218.0], [59.2, 2221.0], [59.3, 2223.0], [59.4, 2227.0], [59.5, 2228.0], [59.6, 2231.0], [59.7, 2235.0], [59.8, 2237.0], [59.9, 2240.0], [60.0, 2242.0], [60.1, 2245.0], [60.2, 2247.0], [60.3, 2248.0], [60.4, 2250.0], [60.5, 2253.0], [60.6, 2260.0], [60.7, 2263.0], [60.8, 2267.0], [60.9, 2270.0], [61.0, 2274.0], [61.1, 2276.0], [61.2, 2282.0], [61.3, 2284.0], [61.4, 2287.0], [61.5, 2291.0], [61.6, 2293.0], [61.7, 2298.0], [61.8, 2301.0], [61.9, 2303.0], [62.0, 2304.0], [62.1, 2307.0], [62.2, 2309.0], [62.3, 2312.0], [62.4, 2315.0], [62.5, 2319.0], [62.6, 2322.0], [62.7, 2325.0], [62.8, 2328.0], [62.9, 2331.0], [63.0, 2333.0], [63.1, 2338.0], [63.2, 2341.0], [63.3, 2345.0], [63.4, 2347.0], [63.5, 2349.0], [63.6, 2351.0], [63.7, 2356.0], [63.8, 2360.0], [63.9, 2366.0], [64.0, 2371.0], [64.1, 2374.0], [64.2, 2377.0], [64.3, 2378.0], [64.4, 2381.0], [64.5, 2385.0], [64.6, 2390.0], [64.7, 2394.0], [64.8, 2396.0], [64.9, 2399.0], [65.0, 2402.0], [65.1, 2403.0], [65.2, 2408.0], [65.3, 2410.0], [65.4, 2414.0], [65.5, 2417.0], [65.6, 2423.0], [65.7, 2428.0], [65.8, 2431.0], [65.9, 2436.0], [66.0, 2439.0], [66.1, 2441.0], [66.2, 2446.0], [66.3, 2448.0], [66.4, 2453.0], [66.5, 2458.0], [66.6, 2463.0], [66.7, 2466.0], [66.8, 2469.0], [66.9, 2471.0], [67.0, 2475.0], [67.1, 2478.0], [67.2, 2480.0], [67.3, 2484.0], [67.4, 2490.0], [67.5, 2492.0], [67.6, 2497.0], [67.7, 2499.0], [67.8, 2501.0], [67.9, 2504.0], [68.0, 2507.0], [68.1, 2510.0], [68.2, 2513.0], [68.3, 2518.0], [68.4, 2522.0], [68.5, 2525.0], [68.6, 2527.0], [68.7, 2530.0], [68.8, 2533.0], [68.9, 2534.0], [69.0, 2537.0], [69.1, 2541.0], [69.2, 2547.0], [69.3, 2551.0], [69.4, 2554.0], [69.5, 2561.0], [69.6, 2564.0], [69.7, 2569.0], [69.8, 2571.0], [69.9, 2575.0], [70.0, 2577.0], [70.1, 2585.0], [70.2, 2587.0], [70.3, 2592.0], [70.4, 2595.0], [70.5, 2597.0], [70.6, 2598.0], [70.7, 2606.0], [70.8, 2611.0], [70.9, 2616.0], [71.0, 2620.0], [71.1, 2624.0], [71.2, 2632.0], [71.3, 2642.0], [71.4, 2647.0], [71.5, 2652.0], [71.6, 2657.0], [71.7, 2661.0], [71.8, 2673.0], [71.9, 2683.0], [72.0, 2694.0], [72.1, 2703.0], [72.2, 2720.0], [72.3, 2726.0], [72.4, 2735.0], [72.5, 2746.0], [72.6, 2752.0], [72.7, 2758.0], [72.8, 2774.0], [72.9, 2785.0], [73.0, 2795.0], [73.1, 2798.0], [73.2, 2818.0], [73.3, 2828.0], [73.4, 2848.0], [73.5, 2854.0], [73.6, 2862.0], [73.7, 2870.0], [73.8, 2877.0], [73.9, 2891.0], [74.0, 2899.0], [74.1, 2919.0], [74.2, 2931.0], [74.3, 2935.0], [74.4, 2944.0], [74.5, 2953.0], [74.6, 2962.0], [74.7, 2979.0], [74.8, 2989.0], [74.9, 2997.0], [75.0, 3007.0], [75.1, 3016.0], [75.2, 3025.0], [75.3, 3037.0], [75.4, 3042.0], [75.5, 3051.0], [75.6, 3058.0], [75.7, 3065.0], [75.8, 3071.0], [75.9, 3078.0], [76.0, 3089.0], [76.1, 3103.0], [76.2, 3109.0], [76.3, 3124.0], [76.4, 3128.0], [76.5, 3132.0], [76.6, 3144.0], [76.7, 3146.0], [76.8, 3157.0], [76.9, 3165.0], [77.0, 3173.0], [77.1, 3187.0], [77.2, 3193.0], [77.3, 3201.0], [77.4, 3208.0], [77.5, 3220.0], [77.6, 3244.0], [77.7, 3252.0], [77.8, 3262.0], [77.9, 3268.0], [78.0, 3281.0], [78.1, 3292.0], [78.2, 3297.0], [78.3, 3304.0], [78.4, 3318.0], [78.5, 3322.0], [78.6, 3330.0], [78.7, 3337.0], [78.8, 3345.0], [78.9, 3350.0], [79.0, 3357.0], [79.1, 3367.0], [79.2, 3378.0], [79.3, 3383.0], [79.4, 3392.0], [79.5, 3400.0], [79.6, 3404.0], [79.7, 3409.0], [79.8, 3412.0], [79.9, 3418.0], [80.0, 3423.0], [80.1, 3431.0], [80.2, 3445.0], [80.3, 3450.0], [80.4, 3454.0], [80.5, 3464.0], [80.6, 3469.0], [80.7, 3482.0], [80.8, 3487.0], [80.9, 3494.0], [81.0, 3496.0], [81.1, 3498.0], [81.2, 3508.0], [81.3, 3513.0], [81.4, 3520.0], [81.5, 3530.0], [81.6, 3539.0], [81.7, 3543.0], [81.8, 3549.0], [81.9, 3552.0], [82.0, 3559.0], [82.1, 3566.0], [82.2, 3573.0], [82.3, 3577.0], [82.4, 3582.0], [82.5, 3588.0], [82.6, 3599.0], [82.7, 3616.0], [82.8, 3626.0], [82.9, 3631.0], [83.0, 3640.0], [83.1, 3645.0], [83.2, 3649.0], [83.3, 3656.0], [83.4, 3662.0], [83.5, 3676.0], [83.6, 3687.0], [83.7, 3694.0], [83.8, 3702.0], [83.9, 3708.0], [84.0, 3736.0], [84.1, 3766.0], [84.2, 3787.0], [84.3, 3807.0], [84.4, 3828.0], [84.5, 3850.0], [84.6, 3876.0], [84.7, 3882.0], [84.8, 3899.0], [84.9, 3910.0], [85.0, 3933.0], [85.1, 3951.0], [85.2, 3970.0], [85.3, 3986.0], [85.4, 4013.0], [85.5, 4033.0], [85.6, 4053.0], [85.7, 4075.0], [85.8, 4097.0], [85.9, 4111.0], [86.0, 4120.0], [86.1, 4129.0], [86.2, 4135.0], [86.3, 4140.0], [86.4, 4145.0], [86.5, 4150.0], [86.6, 4156.0], [86.7, 4166.0], [86.8, 4177.0], [86.9, 4185.0], [87.0, 4187.0], [87.1, 4197.0], [87.2, 4203.0], [87.3, 4209.0], [87.4, 4215.0], [87.5, 4221.0], [87.6, 4223.0], [87.7, 4231.0], [87.8, 4235.0], [87.9, 4248.0], [88.0, 4252.0], [88.1, 4257.0], [88.2, 4266.0], [88.3, 4271.0], [88.4, 4279.0], [88.5, 4292.0], [88.6, 4309.0], [88.7, 4320.0], [88.8, 4329.0], [88.9, 4340.0], [89.0, 4349.0], [89.1, 4354.0], [89.2, 4359.0], [89.3, 4368.0], [89.4, 4378.0], [89.5, 4387.0], [89.6, 4400.0], [89.7, 4406.0], [89.8, 4416.0], [89.9, 4421.0], [90.0, 4431.0], [90.1, 4444.0], [90.2, 4451.0], [90.3, 4460.0], [90.4, 4469.0], [90.5, 4483.0], [90.6, 4491.0], [90.7, 4503.0], [90.8, 4520.0], [90.9, 4535.0], [91.0, 4554.0], [91.1, 4582.0], [91.2, 4602.0], [91.3, 4615.0], [91.4, 4625.0], [91.5, 4649.0], [91.6, 4677.0], [91.7, 4709.0], [91.8, 4728.0], [91.9, 4757.0], [92.0, 4770.0], [92.1, 4796.0], [92.2, 4802.0], [92.3, 4812.0], [92.4, 4827.0], [92.5, 4836.0], [92.6, 4842.0], [92.7, 4852.0], [92.8, 4857.0], [92.9, 4862.0], [93.0, 4880.0], [93.1, 4887.0], [93.2, 4902.0], [93.3, 4911.0], [93.4, 4921.0], [93.5, 4943.0], [93.6, 4966.0], [93.7, 5012.0], [93.8, 5023.0], [93.9, 5041.0], [94.0, 5070.0], [94.1, 5101.0], [94.2, 5151.0], [94.3, 5161.0], [94.4, 5188.0], [94.5, 5211.0], [94.6, 5221.0], [94.7, 5233.0], [94.8, 5258.0], [94.9, 5280.0], [95.0, 5294.0], [95.1, 5344.0], [95.2, 5417.0], [95.3, 5564.0], [95.4, 5619.0], [95.5, 5656.0], [95.6, 5679.0], [95.7, 5719.0], [95.8, 5758.0], [95.9, 5789.0], [96.0, 5845.0], [96.1, 5852.0], [96.2, 5861.0], [96.3, 5869.0], [96.4, 5878.0], [96.5, 5886.0], [96.6, 5903.0], [96.7, 5912.0], [96.8, 5919.0], [96.9, 5930.0], [97.0, 5940.0], [97.1, 5967.0], [97.2, 6013.0], [97.3, 6051.0], [97.4, 6163.0], [97.5, 6228.0], [97.6, 6260.0], [97.7, 6296.0], [97.8, 6384.0], [97.9, 6530.0], [98.0, 6566.0], [98.1, 6610.0], [98.2, 6660.0], [98.3, 6699.0], [98.4, 6727.0], [98.5, 6744.0], [98.6, 6780.0], [98.7, 6796.0], [98.8, 6817.0], [98.9, 6856.0], [99.0, 6879.0], [99.1, 6893.0], [99.2, 6899.0], [99.3, 6906.0], [99.4, 6913.0], [99.5, 6920.0], [99.6, 6923.0], [99.7, 6928.0], [99.8, 6937.0], [99.9, 6943.0], [100.0, 7125.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 497.0, "series": [{"data": [[600.0, 142.0], [700.0, 110.0], [800.0, 105.0], [900.0, 99.0], [1000.0, 112.0], [1100.0, 141.0], [1200.0, 138.0], [1300.0, 144.0], [1400.0, 145.0], [1500.0, 103.0], [1600.0, 155.0], [1700.0, 120.0], [1800.0, 105.0], [1900.0, 109.0], [2000.0, 122.0], [2100.0, 130.0], [2300.0, 176.0], [2200.0, 183.0], [2400.0, 155.0], [2500.0, 160.0], [2600.0, 81.0], [2700.0, 56.0], [2800.0, 50.0], [2900.0, 51.0], [3000.0, 64.0], [3100.0, 65.0], [3200.0, 54.0], [3300.0, 69.0], [3400.0, 89.0], [3500.0, 84.0], [3600.0, 64.0], [3700.0, 25.0], [3800.0, 31.0], [3900.0, 31.0], [4000.0, 24.0], [4200.0, 81.0], [4300.0, 56.0], [4100.0, 72.0], [4400.0, 60.0], [4600.0, 27.0], [4500.0, 28.0], [4700.0, 26.0], [4800.0, 56.0], [5000.0, 26.0], [4900.0, 25.0], [5100.0, 20.0], [5200.0, 32.0], [5300.0, 6.0], [5500.0, 3.0], [5400.0, 7.0], [5600.0, 19.0], [5800.0, 36.0], [5700.0, 14.0], [6000.0, 12.0], [6100.0, 6.0], [5900.0, 31.0], [6200.0, 15.0], [6300.0, 4.0], [6400.0, 4.0], [6500.0, 12.0], [6600.0, 12.0], [6700.0, 22.0], [6800.0, 27.0], [6900.0, 43.0], [7100.0, 1.0], [100.0, 497.0], [200.0, 261.0], [300.0, 178.0], [400.0, 159.0], [500.0, 147.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1096.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3138.0, "series": [{"data": [[0.0, 1096.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1283.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3138.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 136.52352231604343, "minX": 1.61253288E12, "maxY": 150.0, "series": [{"data": [[1.61253312E12, 150.0], [1.612533E12, 150.0], [1.61253318E12, 136.52352231604343], [1.61253288E12, 150.0], [1.61253306E12, 150.0], [1.61253294E12, 150.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253318E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 441.0, "minX": 1.0, "maxY": 4844.0, "series": [{"data": [[2.0, 470.0], [4.0, 627.0], [5.0, 747.0], [6.0, 441.0], [7.0, 743.0], [8.0, 602.0], [9.0, 699.0], [10.0, 712.0], [11.0, 775.0], [12.0, 751.0], [13.0, 745.0], [14.0, 823.0], [15.0, 859.0], [16.0, 852.0], [17.0, 938.0], [18.0, 949.0], [19.0, 891.0], [20.0, 919.0], [21.0, 864.0], [22.0, 1031.0], [23.0, 1074.0], [24.0, 1115.0], [25.0, 1307.0], [26.0, 883.0], [27.0, 1387.0], [28.0, 1007.0], [29.0, 1001.0], [30.0, 2347.0], [31.0, 1283.0], [33.0, 1305.5], [35.0, 1535.0], [34.0, 1484.0], [37.0, 1694.0], [36.0, 1680.0], [39.0, 1760.0], [38.0, 1468.0], [41.0, 1803.0], [40.0, 4844.0], [43.0, 1769.0], [42.0, 1723.0], [45.0, 1851.0], [47.0, 1961.0], [46.0, 1961.0], [49.0, 1828.0], [48.0, 1984.0], [51.0, 2049.0], [50.0, 2032.0], [53.0, 1959.0], [52.0, 1862.0], [55.0, 2152.0], [54.0, 2138.0], [57.0, 2086.0], [56.0, 2220.0], [59.0, 2207.0], [58.0, 2238.0], [61.0, 2233.0], [60.0, 2424.0], [63.0, 2427.0], [62.0, 2428.0], [67.0, 2491.0], [66.0, 2506.0], [65.0, 2493.0], [64.0, 2517.0], [71.0, 2468.0], [70.0, 2586.0], [69.0, 2557.0], [68.0, 2531.0], [75.0, 2570.0], [74.0, 2644.0], [73.0, 2606.0], [72.0, 2619.0], [79.0, 2727.0], [78.0, 2383.0], [77.0, 2404.0], [76.0, 2695.0], [83.0, 2631.0], [82.0, 2374.0], [81.0, 2501.0], [80.0, 2392.0], [87.0, 2598.0], [86.0, 2649.0], [85.0, 2775.0], [84.0, 2769.0], [91.0, 2640.0], [90.0, 2786.0], [89.0, 2785.0], [88.0, 2588.0], [95.0, 2598.0], [94.0, 2588.0], [93.0, 2575.0], [92.0, 4630.0], [99.0, 2562.0], [98.0, 2349.0], [97.0, 2746.0], [96.0, 2574.0], [103.0, 2303.0], [102.0, 2607.0], [101.0, 2344.0], [100.0, 2624.0], [107.0, 2508.0], [106.0, 2487.0], [105.0, 2602.0], [104.0, 2527.0], [111.0, 2529.0], [110.0, 2292.0], [109.0, 2753.0], [108.0, 2583.0], [115.0, 2500.0], [114.0, 2463.0], [113.0, 2505.0], [112.0, 2266.0], [119.0, 2120.0], [118.0, 2450.0], [117.0, 2484.0], [116.0, 2499.0], [123.0, 2123.0], [122.0, 2141.0], [121.0, 2192.0], [120.0, 2207.0], [127.0, 1829.0], [126.0, 2132.0], [125.0, 2151.0], [124.0, 2210.0], [135.0, 1941.0], [134.0, 1945.0], [133.0, 1780.0], [132.0, 1803.0], [131.0, 1809.0], [130.0, 1963.0], [129.0, 1978.0], [128.0, 1815.0], [143.0, 1685.0], [142.0, 1761.0], [141.0, 1756.0], [140.0, 1832.0], [139.0, 1851.0], [138.0, 1851.0], [137.0, 1872.0], [136.0, 1960.0], [150.0, 2096.261177347225], [149.0, 1471.0], [148.0, 1480.0], [147.0, 1466.0], [146.0, 1486.0], [145.0, 1571.0], [144.0, 1716.0], [1.0, 592.0]], "isOverall": false, "label": "Home", "isController": false}, {"data": [[147.97498640565516, 2092.6559724487756]], "isOverall": false, "label": "Home-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 351.0, "minX": 1.61253288E12, "maxY": 6237.416666666667, "series": [{"data": [[1.61253312E12, 6162.016666666666], [1.612533E12, 5511.25], [1.61253318E12, 4250.9], [1.61253288E12, 824.1833333333333], [1.61253306E12, 6237.416666666667], [1.61253294E12, 5228.583333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61253312E12, 2608.6666666666665], [1.612533E12, 2340.0], [1.61253318E12, 1796.1666666666667], [1.61253288E12, 351.0], [1.61253306E12, 2639.0], [1.61253294E12, 2218.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253318E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1302.80149501661, "minX": 1.61253288E12, "maxY": 6210.351851851848, "series": [{"data": [[1.61253312E12, 1302.80149501661], [1.612533E12, 2105.674074074076], [1.61253318E12, 1436.5814234016887], [1.61253288E12, 6210.351851851848], [1.61253306E12, 1593.3243021346473], [1.61253294E12, 3481.2597656250064]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253318E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 53.312292358803965, "minX": 1.61253288E12, "maxY": 507.01851851851825, "series": [{"data": [[1.61253312E12, 53.312292358803965], [1.612533E12, 78.63333333333334], [1.61253318E12, 57.513872135102545], [1.61253288E12, 507.01851851851825], [1.61253306E12, 62.47536945812801], [1.61253294E12, 129.8076171875]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253318E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.5205254515599341, "minX": 1.61253288E12, "maxY": 41.253086419753075, "series": [{"data": [[1.61253312E12, 0.6461794019933546], [1.612533E12, 0.6601851851851853], [1.61253318E12, 0.6248492159227993], [1.61253288E12, 41.253086419753075], [1.61253306E12, 0.5205254515599341], [1.61253294E12, 0.7724609375000009]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253318E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 174.0, "minX": 1.61253288E12, "maxY": 7125.0, "series": [{"data": [[1.61253312E12, 4845.0], [1.612533E12, 6322.0], [1.61253318E12, 4844.0], [1.61253288E12, 7125.0], [1.61253306E12, 5849.0], [1.61253294E12, 6680.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61253312E12, 2445.0], [1.612533E12, 3653.8], [1.61253318E12, 2451.0], [1.61253288E12, 6930.1], [1.61253306E12, 2870.1000000000004], [1.61253294E12, 5637.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61253312E12, 2797.2000000000007], [1.612533E12, 4277.38], [1.61253318E12, 2773.2000000000003], [1.61253288E12, 7022.9400000000005], [1.61253306E12, 3257.579999999999], [1.61253294E12, 6009.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61253312E12, 2585.5], [1.612533E12, 3898.9500000000007], [1.61253318E12, 2568.0], [1.61253288E12, 6941.0], [1.61253306E12, 3058.0], [1.61253294E12, 5879.75]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61253312E12, 176.0], [1.612533E12, 174.0], [1.61253318E12, 176.0], [1.61253288E12, 182.0], [1.61253306E12, 175.0], [1.61253294E12, 175.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61253312E12, 1288.0], [1.612533E12, 2190.0], [1.61253318E12, 1468.0], [1.61253288E12, 6750.5], [1.61253306E12, 1607.5], [1.61253294E12, 4218.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253318E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 185.0, "minX": 1.0, "maxY": 6912.0, "series": [{"data": [[2.0, 1193.0], [3.0, 185.0], [4.0, 1900.5], [5.0, 760.5], [6.0, 428.0], [7.0, 1161.0], [8.0, 799.5], [9.0, 200.0], [10.0, 207.0], [11.0, 1366.0], [12.0, 1675.0], [13.0, 294.0], [14.0, 479.0], [15.0, 647.0], [16.0, 677.5], [17.0, 1461.0], [18.0, 1047.5], [19.0, 1085.0], [20.0, 1310.5], [21.0, 1106.0], [22.0, 1367.5], [23.0, 486.0], [24.0, 2159.0], [25.0, 1035.0], [26.0, 2576.0], [27.0, 2331.0], [28.0, 1546.0], [29.0, 1266.0], [30.0, 2242.0], [31.0, 2176.0], [33.0, 3058.0], [32.0, 1877.5], [34.0, 1892.0], [35.0, 1600.0], [37.0, 2300.0], [36.0, 2377.5], [38.0, 2079.5], [39.0, 2941.0], [40.0, 4196.5], [42.0, 5930.5], [43.0, 3383.5], [45.0, 3211.0], [46.0, 4548.0], [49.0, 3626.0], [51.0, 4200.0], [54.0, 3934.0], [57.0, 4870.0], [60.0, 4428.0], [70.0, 6912.0], [69.0, 4244.0], [75.0, 6574.0], [82.0, 5843.5], [84.0, 5166.5], [1.0, 704.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 785.0, "series": [{"data": [[2.0, 21.0], [3.0, 16.0], [4.0, 21.5], [5.0, 19.5], [6.0, 19.5], [7.0, 26.0], [8.0, 27.0], [9.0, 13.0], [10.0, 16.0], [11.0, 37.0], [12.0, 34.0], [13.0, 24.0], [14.0, 24.0], [15.0, 23.0], [16.0, 32.0], [17.0, 45.0], [18.0, 28.0], [19.0, 34.5], [20.0, 51.0], [21.0, 43.0], [22.0, 47.0], [23.0, 35.0], [24.0, 66.0], [25.0, 60.5], [26.0, 95.0], [27.0, 82.0], [28.0, 73.0], [29.0, 65.0], [30.0, 92.0], [31.0, 88.0], [33.0, 92.0], [32.0, 89.0], [34.0, 93.5], [35.0, 69.0], [37.0, 95.0], [36.0, 104.0], [38.0, 127.0], [39.0, 123.0], [40.0, 98.5], [42.0, 284.0], [43.0, 148.0], [45.0, 143.0], [46.0, 88.5], [49.0, 121.0], [51.0, 166.0], [54.0, 154.0], [57.0, 155.0], [60.0, 191.0], [70.0, 785.0], [69.0, 156.0], [75.0, 310.0], [82.0, 245.5], [84.0, 256.0], [1.0, 18.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.61253288E12, "maxY": 20.5, "series": [{"data": [[1.61253312E12, 20.5], [1.612533E12, 18.316666666666666], [1.61253318E12, 13.15], [1.61253288E12, 5.0], [1.61253306E12, 19.666666666666668], [1.61253294E12, 15.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253318E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.7, "minX": 1.61253288E12, "maxY": 20.3, "series": [{"data": [[1.61253312E12, 20.066666666666666], [1.612533E12, 18.0], [1.61253318E12, 13.816666666666666], [1.61253288E12, 2.7], [1.61253306E12, 20.3], [1.61253294E12, 17.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253318E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.7, "minX": 1.61253288E12, "maxY": 20.3, "series": [{"data": [[1.61253312E12, 20.066666666666666], [1.612533E12, 18.0], [1.61253318E12, 13.816666666666666], [1.61253288E12, 2.7], [1.61253306E12, 20.3], [1.61253294E12, 17.066666666666666]], "isOverall": false, "label": "Home-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253318E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.7, "minX": 1.61253288E12, "maxY": 20.3, "series": [{"data": [[1.61253312E12, 20.066666666666666], [1.612533E12, 18.0], [1.61253318E12, 13.816666666666666], [1.61253288E12, 2.7], [1.61253306E12, 20.3], [1.61253294E12, 17.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253318E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

