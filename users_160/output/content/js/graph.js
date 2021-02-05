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
        data: {"result": {"minY": 174.0, "minX": 0.0, "maxY": 7599.0, "series": [{"data": [[0.0, 174.0], [0.1, 175.0], [0.2, 175.0], [0.3, 176.0], [0.4, 176.0], [0.5, 176.0], [0.6, 176.0], [0.7, 176.0], [0.8, 176.0], [0.9, 177.0], [1.0, 177.0], [1.1, 177.0], [1.2, 177.0], [1.3, 177.0], [1.4, 178.0], [1.5, 178.0], [1.6, 178.0], [1.7, 178.0], [1.8, 179.0], [1.9, 179.0], [2.0, 179.0], [2.1, 179.0], [2.2, 179.0], [2.3, 179.0], [2.4, 180.0], [2.5, 180.0], [2.6, 180.0], [2.7, 180.0], [2.8, 180.0], [2.9, 180.0], [3.0, 180.0], [3.1, 181.0], [3.2, 181.0], [3.3, 181.0], [3.4, 181.0], [3.5, 181.0], [3.6, 181.0], [3.7, 182.0], [3.8, 182.0], [3.9, 182.0], [4.0, 182.0], [4.1, 182.0], [4.2, 182.0], [4.3, 182.0], [4.4, 182.0], [4.5, 183.0], [4.6, 183.0], [4.7, 183.0], [4.8, 183.0], [4.9, 183.0], [5.0, 183.0], [5.1, 184.0], [5.2, 184.0], [5.3, 184.0], [5.4, 184.0], [5.5, 184.0], [5.6, 184.0], [5.7, 184.0], [5.8, 184.0], [5.9, 184.0], [6.0, 185.0], [6.1, 185.0], [6.2, 185.0], [6.3, 185.0], [6.4, 186.0], [6.5, 186.0], [6.6, 186.0], [6.7, 186.0], [6.8, 186.0], [6.9, 187.0], [7.0, 187.0], [7.1, 189.0], [7.2, 189.0], [7.3, 189.0], [7.4, 190.0], [7.5, 192.0], [7.6, 192.0], [7.7, 194.0], [7.8, 196.0], [7.9, 197.0], [8.0, 198.0], [8.1, 201.0], [8.2, 201.0], [8.3, 203.0], [8.4, 204.0], [8.5, 206.0], [8.6, 208.0], [8.7, 209.0], [8.8, 210.0], [8.9, 211.0], [9.0, 212.0], [9.1, 213.0], [9.2, 215.0], [9.3, 216.0], [9.4, 218.0], [9.5, 219.0], [9.6, 222.0], [9.7, 224.0], [9.8, 224.0], [9.9, 226.0], [10.0, 229.0], [10.1, 231.0], [10.2, 234.0], [10.3, 235.0], [10.4, 236.0], [10.5, 239.0], [10.6, 241.0], [10.7, 244.0], [10.8, 246.0], [10.9, 249.0], [11.0, 251.0], [11.1, 253.0], [11.2, 256.0], [11.3, 259.0], [11.4, 262.0], [11.5, 268.0], [11.6, 273.0], [11.7, 276.0], [11.8, 280.0], [11.9, 283.0], [12.0, 288.0], [12.1, 291.0], [12.2, 295.0], [12.3, 299.0], [12.4, 301.0], [12.5, 308.0], [12.6, 310.0], [12.7, 312.0], [12.8, 317.0], [12.9, 324.0], [13.0, 325.0], [13.1, 331.0], [13.2, 336.0], [13.3, 340.0], [13.4, 344.0], [13.5, 351.0], [13.6, 353.0], [13.7, 357.0], [13.8, 359.0], [13.9, 361.0], [14.0, 365.0], [14.1, 366.0], [14.2, 366.0], [14.3, 371.0], [14.4, 375.0], [14.5, 381.0], [14.6, 385.0], [14.7, 389.0], [14.8, 394.0], [14.9, 399.0], [15.0, 402.0], [15.1, 407.0], [15.2, 414.0], [15.3, 419.0], [15.4, 424.0], [15.5, 429.0], [15.6, 433.0], [15.7, 438.0], [15.8, 442.0], [15.9, 449.0], [16.0, 452.0], [16.1, 460.0], [16.2, 469.0], [16.3, 478.0], [16.4, 485.0], [16.5, 491.0], [16.6, 507.0], [16.7, 511.0], [16.8, 516.0], [16.9, 529.0], [17.0, 539.0], [17.1, 548.0], [17.2, 551.0], [17.3, 559.0], [17.4, 561.0], [17.5, 564.0], [17.6, 571.0], [17.7, 574.0], [17.8, 576.0], [17.9, 580.0], [18.0, 587.0], [18.1, 594.0], [18.2, 600.0], [18.3, 606.0], [18.4, 609.0], [18.5, 620.0], [18.6, 626.0], [18.7, 632.0], [18.8, 636.0], [18.9, 646.0], [19.0, 648.0], [19.1, 655.0], [19.2, 666.0], [19.3, 672.0], [19.4, 679.0], [19.5, 686.0], [19.6, 697.0], [19.7, 702.0], [19.8, 704.0], [19.9, 707.0], [20.0, 716.0], [20.1, 725.0], [20.2, 733.0], [20.3, 744.0], [20.4, 750.0], [20.5, 756.0], [20.6, 764.0], [20.7, 771.0], [20.8, 773.0], [20.9, 777.0], [21.0, 783.0], [21.1, 785.0], [21.2, 794.0], [21.3, 800.0], [21.4, 810.0], [21.5, 813.0], [21.6, 818.0], [21.7, 822.0], [21.8, 832.0], [21.9, 840.0], [22.0, 851.0], [22.1, 855.0], [22.2, 862.0], [22.3, 869.0], [22.4, 873.0], [22.5, 880.0], [22.6, 888.0], [22.7, 895.0], [22.8, 898.0], [22.9, 902.0], [23.0, 908.0], [23.1, 911.0], [23.2, 914.0], [23.3, 919.0], [23.4, 923.0], [23.5, 929.0], [23.6, 937.0], [23.7, 944.0], [23.8, 949.0], [23.9, 961.0], [24.0, 970.0], [24.1, 975.0], [24.2, 985.0], [24.3, 996.0], [24.4, 1003.0], [24.5, 1011.0], [24.6, 1018.0], [24.7, 1032.0], [24.8, 1039.0], [24.9, 1055.0], [25.0, 1061.0], [25.1, 1067.0], [25.2, 1075.0], [25.3, 1083.0], [25.4, 1089.0], [25.5, 1093.0], [25.6, 1099.0], [25.7, 1101.0], [25.8, 1107.0], [25.9, 1111.0], [26.0, 1117.0], [26.1, 1120.0], [26.2, 1134.0], [26.3, 1141.0], [26.4, 1147.0], [26.5, 1152.0], [26.6, 1156.0], [26.7, 1160.0], [26.8, 1164.0], [26.9, 1171.0], [27.0, 1185.0], [27.1, 1189.0], [27.2, 1195.0], [27.3, 1199.0], [27.4, 1205.0], [27.5, 1209.0], [27.6, 1222.0], [27.7, 1226.0], [27.8, 1231.0], [27.9, 1239.0], [28.0, 1252.0], [28.1, 1262.0], [28.2, 1267.0], [28.3, 1272.0], [28.4, 1285.0], [28.5, 1287.0], [28.6, 1296.0], [28.7, 1308.0], [28.8, 1322.0], [28.9, 1330.0], [29.0, 1339.0], [29.1, 1345.0], [29.2, 1355.0], [29.3, 1374.0], [29.4, 1377.0], [29.5, 1386.0], [29.6, 1393.0], [29.7, 1404.0], [29.8, 1418.0], [29.9, 1425.0], [30.0, 1433.0], [30.1, 1440.0], [30.2, 1445.0], [30.3, 1455.0], [30.4, 1460.0], [30.5, 1467.0], [30.6, 1474.0], [30.7, 1479.0], [30.8, 1485.0], [30.9, 1490.0], [31.0, 1499.0], [31.1, 1505.0], [31.2, 1514.0], [31.3, 1517.0], [31.4, 1527.0], [31.5, 1532.0], [31.6, 1539.0], [31.7, 1542.0], [31.8, 1552.0], [31.9, 1555.0], [32.0, 1562.0], [32.1, 1568.0], [32.2, 1573.0], [32.3, 1579.0], [32.4, 1581.0], [32.5, 1588.0], [32.6, 1591.0], [32.7, 1599.0], [32.8, 1602.0], [32.9, 1607.0], [33.0, 1624.0], [33.1, 1627.0], [33.2, 1640.0], [33.3, 1649.0], [33.4, 1654.0], [33.5, 1670.0], [33.6, 1680.0], [33.7, 1682.0], [33.8, 1685.0], [33.9, 1697.0], [34.0, 1701.0], [34.1, 1714.0], [34.2, 1722.0], [34.3, 1727.0], [34.4, 1737.0], [34.5, 1743.0], [34.6, 1751.0], [34.7, 1761.0], [34.8, 1775.0], [34.9, 1780.0], [35.0, 1785.0], [35.1, 1791.0], [35.2, 1801.0], [35.3, 1805.0], [35.4, 1808.0], [35.5, 1812.0], [35.6, 1820.0], [35.7, 1831.0], [35.8, 1834.0], [35.9, 1840.0], [36.0, 1842.0], [36.1, 1848.0], [36.2, 1854.0], [36.3, 1856.0], [36.4, 1868.0], [36.5, 1872.0], [36.6, 1883.0], [36.7, 1888.0], [36.8, 1893.0], [36.9, 1897.0], [37.0, 1904.0], [37.1, 1909.0], [37.2, 1916.0], [37.3, 1923.0], [37.4, 1931.0], [37.5, 1936.0], [37.6, 1941.0], [37.7, 1945.0], [37.8, 1953.0], [37.9, 1955.0], [38.0, 1960.0], [38.1, 1965.0], [38.2, 1971.0], [38.3, 1974.0], [38.4, 1980.0], [38.5, 1985.0], [38.6, 1990.0], [38.7, 1994.0], [38.8, 1999.0], [38.9, 2005.0], [39.0, 2008.0], [39.1, 2012.0], [39.2, 2018.0], [39.3, 2022.0], [39.4, 2025.0], [39.5, 2031.0], [39.6, 2035.0], [39.7, 2042.0], [39.8, 2050.0], [39.9, 2057.0], [40.0, 2064.0], [40.1, 2069.0], [40.2, 2074.0], [40.3, 2079.0], [40.4, 2082.0], [40.5, 2087.0], [40.6, 2090.0], [40.7, 2095.0], [40.8, 2107.0], [40.9, 2111.0], [41.0, 2117.0], [41.1, 2120.0], [41.2, 2126.0], [41.3, 2133.0], [41.4, 2139.0], [41.5, 2142.0], [41.6, 2154.0], [41.7, 2158.0], [41.8, 2163.0], [41.9, 2168.0], [42.0, 2174.0], [42.1, 2178.0], [42.2, 2184.0], [42.3, 2190.0], [42.4, 2199.0], [42.5, 2203.0], [42.6, 2206.0], [42.7, 2210.0], [42.8, 2213.0], [42.9, 2215.0], [43.0, 2220.0], [43.1, 2225.0], [43.2, 2230.0], [43.3, 2235.0], [43.4, 2239.0], [43.5, 2244.0], [43.6, 2250.0], [43.7, 2254.0], [43.8, 2259.0], [43.9, 2264.0], [44.0, 2269.0], [44.1, 2275.0], [44.2, 2281.0], [44.3, 2285.0], [44.4, 2293.0], [44.5, 2299.0], [44.6, 2305.0], [44.7, 2312.0], [44.8, 2318.0], [44.9, 2322.0], [45.0, 2323.0], [45.1, 2334.0], [45.2, 2342.0], [45.3, 2351.0], [45.4, 2353.0], [45.5, 2362.0], [45.6, 2366.0], [45.7, 2372.0], [45.8, 2375.0], [45.9, 2387.0], [46.0, 2387.0], [46.1, 2395.0], [46.2, 2400.0], [46.3, 2406.0], [46.4, 2415.0], [46.5, 2423.0], [46.6, 2429.0], [46.7, 2439.0], [46.8, 2446.0], [46.9, 2451.0], [47.0, 2462.0], [47.1, 2469.0], [47.2, 2474.0], [47.3, 2480.0], [47.4, 2487.0], [47.5, 2491.0], [47.6, 2498.0], [47.7, 2504.0], [47.8, 2508.0], [47.9, 2515.0], [48.0, 2520.0], [48.1, 2524.0], [48.2, 2529.0], [48.3, 2540.0], [48.4, 2545.0], [48.5, 2549.0], [48.6, 2557.0], [48.7, 2562.0], [48.8, 2571.0], [48.9, 2576.0], [49.0, 2582.0], [49.1, 2589.0], [49.2, 2592.0], [49.3, 2598.0], [49.4, 2600.0], [49.5, 2604.0], [49.6, 2610.0], [49.7, 2616.0], [49.8, 2619.0], [49.9, 2628.0], [50.0, 2637.0], [50.1, 2646.0], [50.2, 2653.0], [50.3, 2659.0], [50.4, 2668.0], [50.5, 2671.0], [50.6, 2677.0], [50.7, 2685.0], [50.8, 2697.0], [50.9, 2702.0], [51.0, 2708.0], [51.1, 2717.0], [51.2, 2725.0], [51.3, 2733.0], [51.4, 2740.0], [51.5, 2743.0], [51.6, 2749.0], [51.7, 2755.0], [51.8, 2759.0], [51.9, 2763.0], [52.0, 2768.0], [52.1, 2775.0], [52.2, 2782.0], [52.3, 2785.0], [52.4, 2787.0], [52.5, 2791.0], [52.6, 2799.0], [52.7, 2803.0], [52.8, 2806.0], [52.9, 2807.0], [53.0, 2811.0], [53.1, 2813.0], [53.2, 2820.0], [53.3, 2824.0], [53.4, 2826.0], [53.5, 2833.0], [53.6, 2837.0], [53.7, 2840.0], [53.8, 2850.0], [53.9, 2860.0], [54.0, 2865.0], [54.1, 2871.0], [54.2, 2882.0], [54.3, 2889.0], [54.4, 2895.0], [54.5, 2898.0], [54.6, 2903.0], [54.7, 2909.0], [54.8, 2915.0], [54.9, 2918.0], [55.0, 2924.0], [55.1, 2926.0], [55.2, 2935.0], [55.3, 2939.0], [55.4, 2942.0], [55.5, 2946.0], [55.6, 2947.0], [55.7, 2952.0], [55.8, 2954.0], [55.9, 2957.0], [56.0, 2959.0], [56.1, 2967.0], [56.2, 2969.0], [56.3, 2972.0], [56.4, 2975.0], [56.5, 2978.0], [56.6, 2982.0], [56.7, 2987.0], [56.8, 2992.0], [56.9, 2997.0], [57.0, 3000.0], [57.1, 3002.0], [57.2, 3005.0], [57.3, 3007.0], [57.4, 3012.0], [57.5, 3017.0], [57.6, 3020.0], [57.7, 3026.0], [57.8, 3028.0], [57.9, 3031.0], [58.0, 3033.0], [58.1, 3037.0], [58.2, 3038.0], [58.3, 3042.0], [58.4, 3044.0], [58.5, 3047.0], [58.6, 3049.0], [58.7, 3052.0], [58.8, 3055.0], [58.9, 3057.0], [59.0, 3059.0], [59.1, 3061.0], [59.2, 3063.0], [59.3, 3067.0], [59.4, 3071.0], [59.5, 3073.0], [59.6, 3078.0], [59.7, 3081.0], [59.8, 3085.0], [59.9, 3088.0], [60.0, 3089.0], [60.1, 3093.0], [60.2, 3096.0], [60.3, 3097.0], [60.4, 3102.0], [60.5, 3104.0], [60.6, 3106.0], [60.7, 3109.0], [60.8, 3111.0], [60.9, 3113.0], [61.0, 3114.0], [61.1, 3117.0], [61.2, 3120.0], [61.3, 3121.0], [61.4, 3124.0], [61.5, 3125.0], [61.6, 3127.0], [61.7, 3129.0], [61.8, 3131.0], [61.9, 3133.0], [62.0, 3136.0], [62.1, 3141.0], [62.2, 3143.0], [62.3, 3145.0], [62.4, 3149.0], [62.5, 3150.0], [62.6, 3151.0], [62.7, 3155.0], [62.8, 3158.0], [62.9, 3160.0], [63.0, 3161.0], [63.1, 3164.0], [63.2, 3165.0], [63.3, 3175.0], [63.4, 3178.0], [63.5, 3181.0], [63.6, 3186.0], [63.7, 3189.0], [63.8, 3193.0], [63.9, 3196.0], [64.0, 3198.0], [64.1, 3200.0], [64.2, 3206.0], [64.3, 3210.0], [64.4, 3213.0], [64.5, 3217.0], [64.6, 3220.0], [64.7, 3222.0], [64.8, 3225.0], [64.9, 3227.0], [65.0, 3230.0], [65.1, 3234.0], [65.2, 3238.0], [65.3, 3240.0], [65.4, 3243.0], [65.5, 3247.0], [65.6, 3249.0], [65.7, 3252.0], [65.8, 3255.0], [65.9, 3257.0], [66.0, 3261.0], [66.1, 3263.0], [66.2, 3267.0], [66.3, 3271.0], [66.4, 3276.0], [66.5, 3278.0], [66.6, 3283.0], [66.7, 3288.0], [66.8, 3292.0], [66.9, 3297.0], [67.0, 3301.0], [67.1, 3307.0], [67.2, 3312.0], [67.3, 3317.0], [67.4, 3320.0], [67.5, 3323.0], [67.6, 3330.0], [67.7, 3335.0], [67.8, 3339.0], [67.9, 3344.0], [68.0, 3346.0], [68.1, 3349.0], [68.2, 3353.0], [68.3, 3357.0], [68.4, 3360.0], [68.5, 3365.0], [68.6, 3370.0], [68.7, 3373.0], [68.8, 3376.0], [68.9, 3378.0], [69.0, 3380.0], [69.1, 3388.0], [69.2, 3389.0], [69.3, 3392.0], [69.4, 3397.0], [69.5, 3404.0], [69.6, 3408.0], [69.7, 3410.0], [69.8, 3414.0], [69.9, 3417.0], [70.0, 3423.0], [70.1, 3427.0], [70.2, 3430.0], [70.3, 3431.0], [70.4, 3435.0], [70.5, 3440.0], [70.6, 3444.0], [70.7, 3448.0], [70.8, 3453.0], [70.9, 3458.0], [71.0, 3463.0], [71.1, 3465.0], [71.2, 3470.0], [71.3, 3475.0], [71.4, 3487.0], [71.5, 3490.0], [71.6, 3494.0], [71.7, 3501.0], [71.8, 3504.0], [71.9, 3507.0], [72.0, 3510.0], [72.1, 3518.0], [72.2, 3528.0], [72.3, 3542.0], [72.4, 3547.0], [72.5, 3556.0], [72.6, 3569.0], [72.7, 3579.0], [72.8, 3593.0], [72.9, 3598.0], [73.0, 3610.0], [73.1, 3620.0], [73.2, 3630.0], [73.3, 3634.0], [73.4, 3644.0], [73.5, 3656.0], [73.6, 3662.0], [73.7, 3671.0], [73.8, 3687.0], [73.9, 3690.0], [74.0, 3696.0], [74.1, 3704.0], [74.2, 3723.0], [74.3, 3727.0], [74.4, 3739.0], [74.5, 3758.0], [74.6, 3767.0], [74.7, 3774.0], [74.8, 3785.0], [74.9, 3795.0], [75.0, 3805.0], [75.1, 3814.0], [75.2, 3827.0], [75.3, 3833.0], [75.4, 3857.0], [75.5, 3868.0], [75.6, 3879.0], [75.7, 3890.0], [75.8, 3896.0], [75.9, 3909.0], [76.0, 3919.0], [76.1, 3928.0], [76.2, 3942.0], [76.3, 3958.0], [76.4, 3970.0], [76.5, 3980.0], [76.6, 4000.0], [76.7, 4017.0], [76.8, 4035.0], [76.9, 4049.0], [77.0, 4055.0], [77.1, 4071.0], [77.2, 4085.0], [77.3, 4107.0], [77.4, 4125.0], [77.5, 4136.0], [77.6, 4159.0], [77.7, 4167.0], [77.8, 4180.0], [77.9, 4197.0], [78.0, 4214.0], [78.1, 4232.0], [78.2, 4248.0], [78.3, 4272.0], [78.4, 4286.0], [78.5, 4313.0], [78.6, 4329.0], [78.7, 4356.0], [78.8, 4376.0], [78.9, 4403.0], [79.0, 4414.0], [79.1, 4430.0], [79.2, 4450.0], [79.3, 4475.0], [79.4, 4481.0], [79.5, 4491.0], [79.6, 4496.0], [79.7, 4503.0], [79.8, 4510.0], [79.9, 4518.0], [80.0, 4531.0], [80.1, 4536.0], [80.2, 4546.0], [80.3, 4550.0], [80.4, 4556.0], [80.5, 4567.0], [80.6, 4573.0], [80.7, 4581.0], [80.8, 4596.0], [80.9, 4606.0], [81.0, 4609.0], [81.1, 4624.0], [81.2, 4638.0], [81.3, 4662.0], [81.4, 4671.0], [81.5, 4679.0], [81.6, 4706.0], [81.7, 4716.0], [81.8, 4727.0], [81.9, 4735.0], [82.0, 4751.0], [82.1, 4762.0], [82.2, 4773.0], [82.3, 4792.0], [82.4, 4807.0], [82.5, 4809.0], [82.6, 4826.0], [82.7, 4835.0], [82.8, 4852.0], [82.9, 4873.0], [83.0, 4879.0], [83.1, 4885.0], [83.2, 4894.0], [83.3, 4904.0], [83.4, 4912.0], [83.5, 4919.0], [83.6, 4923.0], [83.7, 4932.0], [83.8, 4947.0], [83.9, 4970.0], [84.0, 4980.0], [84.1, 4989.0], [84.2, 4998.0], [84.3, 5004.0], [84.4, 5013.0], [84.5, 5021.0], [84.6, 5031.0], [84.7, 5047.0], [84.8, 5057.0], [84.9, 5066.0], [85.0, 5087.0], [85.1, 5113.0], [85.2, 5119.0], [85.3, 5131.0], [85.4, 5149.0], [85.5, 5164.0], [85.6, 5177.0], [85.7, 5195.0], [85.8, 5206.0], [85.9, 5226.0], [86.0, 5236.0], [86.1, 5251.0], [86.2, 5256.0], [86.3, 5263.0], [86.4, 5272.0], [86.5, 5281.0], [86.6, 5295.0], [86.7, 5300.0], [86.8, 5309.0], [86.9, 5314.0], [87.0, 5322.0], [87.1, 5328.0], [87.2, 5340.0], [87.3, 5354.0], [87.4, 5365.0], [87.5, 5369.0], [87.6, 5378.0], [87.7, 5382.0], [87.8, 5391.0], [87.9, 5400.0], [88.0, 5415.0], [88.1, 5422.0], [88.2, 5435.0], [88.3, 5445.0], [88.4, 5461.0], [88.5, 5470.0], [88.6, 5476.0], [88.7, 5492.0], [88.8, 5497.0], [88.9, 5503.0], [89.0, 5515.0], [89.1, 5528.0], [89.2, 5535.0], [89.3, 5543.0], [89.4, 5552.0], [89.5, 5561.0], [89.6, 5571.0], [89.7, 5583.0], [89.8, 5594.0], [89.9, 5610.0], [90.0, 5629.0], [90.1, 5643.0], [90.2, 5648.0], [90.3, 5651.0], [90.4, 5662.0], [90.5, 5671.0], [90.6, 5685.0], [90.7, 5693.0], [90.8, 5701.0], [90.9, 5718.0], [91.0, 5730.0], [91.1, 5752.0], [91.2, 5756.0], [91.3, 5763.0], [91.4, 5770.0], [91.5, 5776.0], [91.6, 5786.0], [91.7, 5792.0], [91.8, 5801.0], [91.9, 5806.0], [92.0, 5815.0], [92.1, 5821.0], [92.2, 5834.0], [92.3, 5843.0], [92.4, 5853.0], [92.5, 5859.0], [92.6, 5866.0], [92.7, 5871.0], [92.8, 5877.0], [92.9, 5882.0], [93.0, 5887.0], [93.1, 5892.0], [93.2, 5896.0], [93.3, 5898.0], [93.4, 5902.0], [93.5, 5906.0], [93.6, 5912.0], [93.7, 5918.0], [93.8, 5924.0], [93.9, 5930.0], [94.0, 5941.0], [94.1, 5945.0], [94.2, 5954.0], [94.3, 5970.0], [94.4, 5984.0], [94.5, 5995.0], [94.6, 6003.0], [94.7, 6034.0], [94.8, 6055.0], [94.9, 6072.0], [95.0, 6096.0], [95.1, 6129.0], [95.2, 6167.0], [95.3, 6210.0], [95.4, 6248.0], [95.5, 6262.0], [95.6, 6282.0], [95.7, 6294.0], [95.8, 6303.0], [95.9, 6321.0], [96.0, 6335.0], [96.1, 6351.0], [96.2, 6356.0], [96.3, 6371.0], [96.4, 6379.0], [96.5, 6397.0], [96.6, 6410.0], [96.7, 6429.0], [96.8, 6443.0], [96.9, 6467.0], [97.0, 6485.0], [97.1, 6525.0], [97.2, 6591.0], [97.3, 6653.0], [97.4, 6692.0], [97.5, 6797.0], [97.6, 6996.0], [97.7, 7042.0], [97.8, 7080.0], [97.9, 7128.0], [98.0, 7168.0], [98.1, 7193.0], [98.2, 7208.0], [98.3, 7225.0], [98.4, 7237.0], [98.5, 7249.0], [98.6, 7268.0], [98.7, 7276.0], [98.8, 7300.0], [98.9, 7306.0], [99.0, 7312.0], [99.1, 7326.0], [99.2, 7345.0], [99.3, 7362.0], [99.4, 7371.0], [99.5, 7384.0], [99.6, 7393.0], [99.7, 7406.0], [99.8, 7407.0], [99.9, 7412.0], [100.0, 7599.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 440.0, "series": [{"data": [[600.0, 80.0], [700.0, 89.0], [800.0, 87.0], [900.0, 83.0], [1000.0, 69.0], [1100.0, 93.0], [1200.0, 72.0], [1300.0, 56.0], [1400.0, 75.0], [1500.0, 93.0], [1600.0, 66.0], [1700.0, 69.0], [1800.0, 98.0], [1900.0, 103.0], [2000.0, 104.0], [2100.0, 93.0], [2200.0, 114.0], [2300.0, 91.0], [2400.0, 80.0], [2500.0, 96.0], [2600.0, 79.0], [2700.0, 98.0], [2800.0, 106.0], [2900.0, 133.0], [3000.0, 186.0], [3100.0, 203.0], [3300.0, 133.0], [3200.0, 160.0], [3400.0, 124.0], [3500.0, 68.0], [3700.0, 49.0], [3600.0, 62.0], [3800.0, 50.0], [3900.0, 41.0], [4000.0, 36.0], [4100.0, 36.0], [4200.0, 32.0], [4300.0, 22.0], [4500.0, 66.0], [4400.0, 41.0], [4600.0, 39.0], [4700.0, 43.0], [4800.0, 50.0], [4900.0, 54.0], [5000.0, 42.0], [5100.0, 40.0], [5200.0, 52.0], [5300.0, 66.0], [5600.0, 53.0], [5400.0, 52.0], [5500.0, 54.0], [5700.0, 54.0], [5800.0, 86.0], [5900.0, 67.0], [6000.0, 24.0], [6100.0, 16.0], [6200.0, 27.0], [6300.0, 40.0], [6400.0, 28.0], [6500.0, 12.0], [6600.0, 9.0], [6700.0, 5.0], [6800.0, 2.0], [6900.0, 4.0], [7000.0, 13.0], [7100.0, 18.0], [7200.0, 34.0], [7300.0, 48.0], [7400.0, 17.0], [7500.0, 1.0], [100.0, 440.0], [200.0, 235.0], [300.0, 143.0], [400.0, 89.0], [500.0, 89.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 793.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3781.0, "series": [{"data": [[0.0, 908.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 793.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3781.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 146.8238341968911, "minX": 1.6125333E12, "maxY": 160.0, "series": [{"data": [[1.6125336E12, 146.8238341968911], [1.6125333E12, 160.0], [1.61253348E12, 160.0], [1.61253336E12, 160.0], [1.61253354E12, 160.0], [1.61253342E12, 160.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6125336E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.0, "maxY": 4553.0, "series": [{"data": [[2.0, 3424.0], [3.0, 2094.0], [4.0, 2081.0], [5.0, 2230.0], [6.0, 2168.0], [7.0, 2186.0], [8.0, 2167.0], [10.0, 2021.5], [12.0, 2293.0], [13.0, 2253.0], [14.0, 2175.0], [15.0, 2221.0], [16.0, 2237.0], [18.0, 2208.0], [19.0, 2385.0], [20.0, 4553.0], [21.0, 2304.0], [22.0, 2375.0], [23.0, 2285.0], [24.0, 2319.0], [25.0, 2363.0], [26.0, 2355.0], [27.0, 2518.0], [28.0, 2576.0], [29.0, 2568.0], [30.0, 2604.0], [31.0, 2487.0], [33.0, 2599.0], [32.0, 2627.0], [35.0, 2694.0], [34.0, 2627.0], [37.0, 2562.0], [36.0, 2670.0], [39.0, 2737.0], [38.0, 2740.0], [41.0, 2739.0], [40.0, 2656.0], [43.0, 2791.0], [42.0, 2681.0], [45.0, 2697.0], [44.0, 2669.0], [47.0, 2680.0], [46.0, 2670.0], [49.0, 2581.0], [48.0, 2690.0], [51.0, 2576.0], [50.0, 2597.0], [53.0, 2570.0], [52.0, 2451.0], [55.0, 2559.0], [54.0, 2573.0], [57.0, 2408.0], [56.0, 2540.0], [59.0, 2486.0], [58.0, 2496.0], [61.0, 2352.0], [60.0, 2496.0], [63.0, 2422.0], [62.0, 2462.0], [67.0, 2207.0], [66.0, 2312.0], [65.0, 2342.0], [64.0, 2448.0], [71.0, 2036.0], [70.0, 2172.0], [69.0, 2319.0], [68.0, 2322.0], [75.0, 2127.0], [74.0, 2156.0], [73.0, 2161.0], [72.0, 1982.0], [79.0, 1888.0], [78.0, 1840.0], [77.0, 1868.0], [76.0, 1968.0], [83.0, 1377.0], [82.0, 1473.0], [81.0, 1549.0], [80.0, 1689.0], [87.0, 1252.0], [86.0, 1324.0], [85.0, 1322.0], [84.0, 1339.0], [91.0, 1200.0], [90.0, 1162.0], [89.0, 1179.0], [88.0, 1195.0], [95.0, 1143.0], [94.0, 1187.0], [93.0, 1156.0], [92.0, 1182.0], [99.0, 1154.0], [98.0, 1156.0], [97.0, 1086.0], [96.0, 1161.0], [103.0, 1077.0], [102.0, 992.0], [101.0, 1018.0], [100.0, 1147.0], [107.0, 854.0], [106.0, 944.0], [105.0, 998.0], [104.0, 1014.0], [111.0, 650.0], [110.0, 717.0], [109.0, 800.5], [115.0, 421.0], [114.0, 358.0], [113.0, 449.0], [112.0, 594.0], [119.0, 401.0], [118.0, 395.0], [117.0, 447.0], [123.0, 346.0], [122.0, 365.0], [121.0, 358.0], [120.0, 371.0], [127.0, 246.0], [126.0, 305.0], [125.0, 215.0], [124.0, 244.0], [135.0, 184.0], [134.0, 183.0], [133.0, 186.0], [132.0, 183.0], [131.0, 197.0], [130.0, 215.0], [129.0, 213.0], [128.0, 217.0], [143.0, 179.0], [142.0, 177.0], [141.0, 176.0], [140.0, 175.0], [139.0, 184.0], [138.0, 180.0], [137.0, 182.0], [136.0, 184.0], [151.0, 365.0], [150.0, 365.0], [149.0, 366.0], [148.0, 328.0], [147.0, 320.0], [146.0, 280.0], [145.0, 270.0], [144.0, 260.0], [159.0, 217.0], [158.0, 183.0], [157.0, 183.0], [156.0, 182.0], [155.0, 181.0], [154.0, 182.0], [153.0, 191.0], [152.0, 276.0], [160.0, 2756.3734736051083], [1.0, 2470.0]], "isOverall": false, "label": "Home", "isController": false}, {"data": [[157.68059102517324, 2720.4102517329443]], "isOverall": false, "label": "Home-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 160.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 346.6666666666667, "minX": 1.6125333E12, "maxY": 6215.883333333333, "series": [{"data": [[1.6125336E12, 4942.1], [1.6125333E12, 816.7833333333333], [1.61253348E12, 6015.55], [1.61253336E12, 4740.95], [1.61253354E12, 6215.883333333333], [1.61253342E12, 5284.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6125336E12, 2090.8333333333335], [1.6125333E12, 346.6666666666667], [1.61253348E12, 2552.3333333333335], [1.61253336E12, 2012.8333333333333], [1.61253354E12, 2628.1666666666665], [1.61253342E12, 2246.8333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6125336E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1831.80518134715, "minX": 1.6125333E12, "maxY": 7143.456249999999, "series": [{"data": [[1.6125336E12, 1831.80518134715], [1.6125333E12, 7143.456249999999], [1.61253348E12, 2059.489813242783], [1.61253336E12, 4388.601722282023], [1.61253354E12, 1965.9752679307503], [1.61253342E12, 3003.6894889103182]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6125336E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 71.58031088082903, "minX": 1.6125333E12, "maxY": 476.7, "series": [{"data": [[1.6125336E12, 71.58031088082903], [1.6125333E12, 476.7], [1.61253348E12, 78.88455008488965], [1.61253336E12, 153.08934337997854], [1.61253354E12, 74.86644682605103], [1.61253342E12, 104.29893924783028]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6125336E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.623248145094806, "minX": 1.6125333E12, "maxY": 61.7125, "series": [{"data": [[1.6125336E12, 0.7181347150259071], [1.6125333E12, 61.7125], [1.61253348E12, 0.678268251273344], [1.61253336E12, 0.721205597416577], [1.61253354E12, 0.623248145094806], [1.61253342E12, 0.6624879459980711]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6125336E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 174.0, "minX": 1.6125333E12, "maxY": 7599.0, "series": [{"data": [[1.6125336E12, 4553.0], [1.6125333E12, 7599.0], [1.61253348E12, 6570.0], [1.61253336E12, 7386.0], [1.61253354E12, 4550.0], [1.61253342E12, 6355.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6125336E12, 3153.2], [1.6125333E12, 7406.0], [1.61253348E12, 3572.0], [1.61253336E12, 6257.0], [1.61253354E12, 3337.8], [1.61253342E12, 4984.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6125336E12, 3463.4000000000005], [1.6125333E12, 7486.149999999998], [1.61253348E12, 3971.63], [1.61253336E12, 6491.3], [1.61253354E12, 3504.4399999999996], [1.61253342E12, 5625.079999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6125336E12, 3272.0], [1.6125333E12, 7410.0], [1.61253348E12, 3702.1], [1.61253336E12, 6372.5], [1.61253354E12, 3411.6], [1.61253342E12, 5256.1]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6125336E12, 175.0], [1.6125333E12, 5792.0], [1.61253348E12, 175.0], [1.61253336E12, 175.0], [1.61253354E12, 175.0], [1.61253342E12, 174.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6125336E12, 2035.0], [1.6125333E12, 7251.5], [1.61253348E12, 2139.0], [1.61253336E12, 5421.0], [1.61253354E12, 2124.0], [1.61253342E12, 3764.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6125336E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 184.0, "minX": 1.0, "maxY": 7225.0, "series": [{"data": [[2.0, 544.5], [3.0, 1092.0], [4.0, 1781.5], [5.0, 2038.0], [6.0, 184.0], [7.0, 1482.0], [8.0, 624.5], [9.0, 1311.5], [10.0, 1474.5], [11.0, 702.0], [12.0, 220.0], [13.0, 1698.5], [14.0, 313.0], [15.0, 402.0], [16.0, 658.5], [17.0, 1530.5], [18.0, 417.5], [19.0, 677.0], [20.0, 1473.5], [21.0, 3402.0], [22.0, 1051.0], [23.0, 3058.0], [24.0, 2064.0], [25.0, 2142.0], [26.0, 3321.0], [27.0, 3061.0], [28.0, 3269.5], [29.0, 3232.5], [30.0, 3054.5], [31.0, 1666.0], [32.0, 3189.5], [33.0, 3069.0], [35.0, 3161.0], [34.0, 1858.5], [37.0, 2023.0], [36.0, 3113.0], [38.0, 2204.5], [39.0, 2159.0], [40.0, 2754.5], [42.0, 4344.5], [43.0, 4077.5], [44.0, 2250.0], [45.0, 3874.0], [46.0, 2946.0], [48.0, 4850.5], [50.0, 5180.0], [51.0, 4844.0], [55.0, 4678.0], [56.0, 4804.0], [59.0, 5354.0], [63.0, 5322.0], [85.0, 5770.0], [94.0, 5846.0], [98.0, 5819.5], [119.0, 6330.0], [125.0, 7225.0], [1.0, 1536.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 11.5, "minX": 1.0, "maxY": 417.0, "series": [{"data": [[2.0, 19.0], [3.0, 22.0], [4.0, 19.5], [5.0, 29.0], [6.0, 11.5], [7.0, 29.0], [8.0, 18.0], [9.0, 28.5], [10.0, 27.5], [11.0, 26.0], [12.0, 22.0], [13.0, 48.5], [14.0, 20.5], [15.0, 25.0], [16.0, 31.0], [17.0, 48.5], [18.0, 28.0], [19.0, 43.0], [20.0, 63.0], [21.0, 86.0], [22.0, 41.0], [23.0, 87.0], [24.0, 68.0], [25.0, 92.0], [26.0, 112.5], [27.0, 120.0], [28.0, 136.5], [29.0, 100.5], [30.0, 91.5], [31.0, 79.0], [32.0, 117.5], [33.0, 123.0], [35.0, 130.0], [34.0, 74.0], [37.0, 103.0], [36.0, 122.0], [38.0, 118.0], [39.0, 119.0], [40.0, 121.0], [42.0, 128.0], [43.0, 159.0], [44.0, 122.0], [45.0, 138.0], [46.0, 132.0], [48.0, 120.0], [50.0, 202.5], [51.0, 191.0], [55.0, 143.0], [56.0, 201.0], [59.0, 174.0], [63.0, 136.0], [85.0, 191.0], [94.0, 201.5], [98.0, 178.0], [119.0, 289.0], [125.0, 417.0], [1.0, 18.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.6125333E12, "maxY": 20.233333333333334, "series": [{"data": [[1.6125336E12, 14.95], [1.6125333E12, 2.6666666666666665], [1.61253348E12, 20.233333333333334], [1.61253336E12, 15.483333333333333], [1.61253354E12, 20.116666666666667], [1.61253342E12, 17.916666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6125336E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.6125333E12, "maxY": 20.216666666666665, "series": [{"data": [[1.6125336E12, 16.083333333333332], [1.6125333E12, 2.6666666666666665], [1.61253348E12, 19.633333333333333], [1.61253336E12, 15.483333333333333], [1.61253354E12, 20.216666666666665], [1.61253342E12, 17.283333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6125336E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.6125333E12, "maxY": 20.216666666666665, "series": [{"data": [[1.6125336E12, 16.083333333333332], [1.6125333E12, 2.6666666666666665], [1.61253348E12, 19.633333333333333], [1.61253336E12, 15.483333333333333], [1.61253354E12, 20.216666666666665], [1.61253342E12, 17.283333333333335]], "isOverall": false, "label": "Home-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6125336E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.6125333E12, "maxY": 20.216666666666665, "series": [{"data": [[1.6125336E12, 16.083333333333332], [1.6125333E12, 2.6666666666666665], [1.61253348E12, 19.633333333333333], [1.61253336E12, 15.483333333333333], [1.61253354E12, 20.216666666666665], [1.61253342E12, 17.283333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6125336E12, "title": "Total Transactions Per Second"}},
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

