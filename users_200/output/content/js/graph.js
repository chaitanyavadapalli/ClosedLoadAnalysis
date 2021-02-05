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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 9693.0, "series": [{"data": [[0.0, 175.0], [0.1, 176.0], [0.2, 176.0], [0.3, 177.0], [0.4, 177.0], [0.5, 177.0], [0.6, 177.0], [0.7, 178.0], [0.8, 178.0], [0.9, 179.0], [1.0, 179.0], [1.1, 179.0], [1.2, 179.0], [1.3, 180.0], [1.4, 181.0], [1.5, 181.0], [1.6, 181.0], [1.7, 181.0], [1.8, 182.0], [1.9, 182.0], [2.0, 182.0], [2.1, 183.0], [2.2, 183.0], [2.3, 183.0], [2.4, 183.0], [2.5, 183.0], [2.6, 184.0], [2.7, 184.0], [2.8, 184.0], [2.9, 184.0], [3.0, 185.0], [3.1, 185.0], [3.2, 186.0], [3.3, 186.0], [3.4, 187.0], [3.5, 188.0], [3.6, 188.0], [3.7, 189.0], [3.8, 190.0], [3.9, 191.0], [4.0, 192.0], [4.1, 193.0], [4.2, 198.0], [4.3, 200.0], [4.4, 203.0], [4.5, 204.0], [4.6, 206.0], [4.7, 210.0], [4.8, 212.0], [4.9, 213.0], [5.0, 216.0], [5.1, 219.0], [5.2, 223.0], [5.3, 226.0], [5.4, 229.0], [5.5, 233.0], [5.6, 235.0], [5.7, 243.0], [5.8, 248.0], [5.9, 251.0], [6.0, 255.0], [6.1, 260.0], [6.2, 266.0], [6.3, 273.0], [6.4, 277.0], [6.5, 282.0], [6.6, 290.0], [6.7, 294.0], [6.8, 299.0], [6.9, 305.0], [7.0, 311.0], [7.1, 319.0], [7.2, 321.0], [7.3, 327.0], [7.4, 333.0], [7.5, 336.0], [7.6, 340.0], [7.7, 344.0], [7.8, 350.0], [7.9, 352.0], [8.0, 356.0], [8.1, 358.0], [8.2, 361.0], [8.3, 365.0], [8.4, 368.0], [8.5, 373.0], [8.6, 384.0], [8.7, 389.0], [8.8, 391.0], [8.9, 397.0], [9.0, 401.0], [9.1, 404.0], [9.2, 410.0], [9.3, 414.0], [9.4, 418.0], [9.5, 421.0], [9.6, 426.0], [9.7, 433.0], [9.8, 438.0], [9.9, 442.0], [10.0, 447.0], [10.1, 452.0], [10.2, 459.0], [10.3, 469.0], [10.4, 476.0], [10.5, 486.0], [10.6, 490.0], [10.7, 496.0], [10.8, 500.0], [10.9, 505.0], [11.0, 507.0], [11.1, 512.0], [11.2, 521.0], [11.3, 532.0], [11.4, 540.0], [11.5, 545.0], [11.6, 548.0], [11.7, 553.0], [11.8, 570.0], [11.9, 574.0], [12.0, 580.0], [12.1, 590.0], [12.2, 596.0], [12.3, 603.0], [12.4, 617.0], [12.5, 626.0], [12.6, 634.0], [12.7, 639.0], [12.8, 647.0], [12.9, 652.0], [13.0, 661.0], [13.1, 671.0], [13.2, 684.0], [13.3, 697.0], [13.4, 707.0], [13.5, 718.0], [13.6, 733.0], [13.7, 742.0], [13.8, 752.0], [13.9, 764.0], [14.0, 777.0], [14.1, 784.0], [14.2, 790.0], [14.3, 798.0], [14.4, 808.0], [14.5, 814.0], [14.6, 822.0], [14.7, 826.0], [14.8, 834.0], [14.9, 842.0], [15.0, 851.0], [15.1, 855.0], [15.2, 860.0], [15.3, 870.0], [15.4, 882.0], [15.5, 891.0], [15.6, 911.0], [15.7, 918.0], [15.8, 927.0], [15.9, 938.0], [16.0, 947.0], [16.1, 953.0], [16.2, 962.0], [16.3, 978.0], [16.4, 993.0], [16.5, 1007.0], [16.6, 1014.0], [16.7, 1022.0], [16.8, 1032.0], [16.9, 1042.0], [17.0, 1059.0], [17.1, 1064.0], [17.2, 1072.0], [17.3, 1079.0], [17.4, 1089.0], [17.5, 1100.0], [17.6, 1114.0], [17.7, 1124.0], [17.8, 1135.0], [17.9, 1149.0], [18.0, 1163.0], [18.1, 1171.0], [18.2, 1176.0], [18.3, 1193.0], [18.4, 1210.0], [18.5, 1220.0], [18.6, 1227.0], [18.7, 1235.0], [18.8, 1251.0], [18.9, 1260.0], [19.0, 1265.0], [19.1, 1275.0], [19.2, 1283.0], [19.3, 1299.0], [19.4, 1319.0], [19.5, 1331.0], [19.6, 1343.0], [19.7, 1366.0], [19.8, 1373.0], [19.9, 1388.0], [20.0, 1396.0], [20.1, 1412.0], [20.2, 1431.0], [20.3, 1443.0], [20.4, 1463.0], [20.5, 1475.0], [20.6, 1493.0], [20.7, 1503.0], [20.8, 1513.0], [20.9, 1520.0], [21.0, 1538.0], [21.1, 1544.0], [21.2, 1555.0], [21.3, 1563.0], [21.4, 1579.0], [21.5, 1586.0], [21.6, 1594.0], [21.7, 1603.0], [21.8, 1611.0], [21.9, 1619.0], [22.0, 1624.0], [22.1, 1650.0], [22.2, 1667.0], [22.3, 1689.0], [22.4, 1706.0], [22.5, 1716.0], [22.6, 1725.0], [22.7, 1731.0], [22.8, 1750.0], [22.9, 1760.0], [23.0, 1781.0], [23.1, 1791.0], [23.2, 1801.0], [23.3, 1826.0], [23.4, 1839.0], [23.5, 1845.0], [23.6, 1855.0], [23.7, 1872.0], [23.8, 1891.0], [23.9, 1902.0], [24.0, 1910.0], [24.1, 1919.0], [24.2, 1931.0], [24.3, 1951.0], [24.4, 1960.0], [24.5, 1973.0], [24.6, 2007.0], [24.7, 2027.0], [24.8, 2047.0], [24.9, 2059.0], [25.0, 2070.0], [25.1, 2079.0], [25.2, 2092.0], [25.3, 2115.0], [25.4, 2125.0], [25.5, 2139.0], [25.6, 2150.0], [25.7, 2157.0], [25.8, 2164.0], [25.9, 2170.0], [26.0, 2181.0], [26.1, 2191.0], [26.2, 2198.0], [26.3, 2206.0], [26.4, 2229.0], [26.5, 2247.0], [26.6, 2264.0], [26.7, 2272.0], [26.8, 2284.0], [26.9, 2298.0], [27.0, 2303.0], [27.1, 2314.0], [27.2, 2324.0], [27.3, 2329.0], [27.4, 2352.0], [27.5, 2370.0], [27.6, 2381.0], [27.7, 2391.0], [27.8, 2398.0], [27.9, 2411.0], [28.0, 2433.0], [28.1, 2466.0], [28.2, 2474.0], [28.3, 2487.0], [28.4, 2495.0], [28.5, 2510.0], [28.6, 2521.0], [28.7, 2529.0], [28.8, 2538.0], [28.9, 2547.0], [29.0, 2560.0], [29.1, 2566.0], [29.2, 2589.0], [29.3, 2600.0], [29.4, 2612.0], [29.5, 2639.0], [29.6, 2645.0], [29.7, 2658.0], [29.8, 2673.0], [29.9, 2690.0], [30.0, 2699.0], [30.1, 2715.0], [30.2, 2729.0], [30.3, 2749.0], [30.4, 2772.0], [30.5, 2785.0], [30.6, 2797.0], [30.7, 2814.0], [30.8, 2825.0], [30.9, 2834.0], [31.0, 2848.0], [31.1, 2865.0], [31.2, 2878.0], [31.3, 2890.0], [31.4, 2898.0], [31.5, 2914.0], [31.6, 2924.0], [31.7, 2931.0], [31.8, 2943.0], [31.9, 2953.0], [32.0, 2959.0], [32.1, 2970.0], [32.2, 2988.0], [32.3, 3006.0], [32.4, 3015.0], [32.5, 3022.0], [32.6, 3032.0], [32.7, 3047.0], [32.8, 3064.0], [32.9, 3071.0], [33.0, 3081.0], [33.1, 3088.0], [33.2, 3098.0], [33.3, 3114.0], [33.4, 3120.0], [33.5, 3132.0], [33.6, 3140.0], [33.7, 3161.0], [33.8, 3179.0], [33.9, 3191.0], [34.0, 3202.0], [34.1, 3210.0], [34.2, 3225.0], [34.3, 3232.0], [34.4, 3244.0], [34.5, 3261.0], [34.6, 3270.0], [34.7, 3286.0], [34.8, 3295.0], [34.9, 3306.0], [35.0, 3312.0], [35.1, 3324.0], [35.2, 3333.0], [35.3, 3353.0], [35.4, 3360.0], [35.5, 3370.0], [35.6, 3377.0], [35.7, 3396.0], [35.8, 3403.0], [35.9, 3416.0], [36.0, 3423.0], [36.1, 3451.0], [36.2, 3467.0], [36.3, 3476.0], [36.4, 3485.0], [36.5, 3494.0], [36.6, 3500.0], [36.7, 3516.0], [36.8, 3522.0], [36.9, 3533.0], [37.0, 3549.0], [37.1, 3556.0], [37.2, 3569.0], [37.3, 3575.0], [37.4, 3583.0], [37.5, 3596.0], [37.6, 3612.0], [37.7, 3615.0], [37.8, 3635.0], [37.9, 3651.0], [38.0, 3660.0], [38.1, 3666.0], [38.2, 3679.0], [38.3, 3690.0], [38.4, 3702.0], [38.5, 3710.0], [38.6, 3721.0], [38.7, 3734.0], [38.8, 3745.0], [38.9, 3755.0], [39.0, 3768.0], [39.1, 3777.0], [39.2, 3782.0], [39.3, 3793.0], [39.4, 3797.0], [39.5, 3805.0], [39.6, 3816.0], [39.7, 3824.0], [39.8, 3835.0], [39.9, 3840.0], [40.0, 3854.0], [40.1, 3862.0], [40.2, 3871.0], [40.3, 3877.0], [40.4, 3885.0], [40.5, 3891.0], [40.6, 3902.0], [40.7, 3910.0], [40.8, 3919.0], [40.9, 3929.0], [41.0, 3935.0], [41.1, 3949.0], [41.2, 3957.0], [41.3, 3961.0], [41.4, 3968.0], [41.5, 3977.0], [41.6, 3988.0], [41.7, 3995.0], [41.8, 4003.0], [41.9, 4014.0], [42.0, 4022.0], [42.1, 4032.0], [42.2, 4043.0], [42.3, 4048.0], [42.4, 4065.0], [42.5, 4083.0], [42.6, 4094.0], [42.7, 4103.0], [42.8, 4108.0], [42.9, 4114.0], [43.0, 4122.0], [43.1, 4124.0], [43.2, 4139.0], [43.3, 4150.0], [43.4, 4157.0], [43.5, 4164.0], [43.6, 4172.0], [43.7, 4182.0], [43.8, 4189.0], [43.9, 4194.0], [44.0, 4204.0], [44.1, 4210.0], [44.2, 4221.0], [44.3, 4237.0], [44.4, 4239.0], [44.5, 4247.0], [44.6, 4250.0], [44.7, 4255.0], [44.8, 4260.0], [44.9, 4268.0], [45.0, 4274.0], [45.1, 4294.0], [45.2, 4302.0], [45.3, 4307.0], [45.4, 4311.0], [45.5, 4318.0], [45.6, 4324.0], [45.7, 4334.0], [45.8, 4337.0], [45.9, 4344.0], [46.0, 4350.0], [46.1, 4367.0], [46.2, 4374.0], [46.3, 4379.0], [46.4, 4389.0], [46.5, 4395.0], [46.6, 4401.0], [46.7, 4410.0], [46.8, 4418.0], [46.9, 4423.0], [47.0, 4433.0], [47.1, 4440.0], [47.2, 4446.0], [47.3, 4449.0], [47.4, 4456.0], [47.5, 4466.0], [47.6, 4473.0], [47.7, 4478.0], [47.8, 4484.0], [47.9, 4488.0], [48.0, 4491.0], [48.1, 4498.0], [48.2, 4513.0], [48.3, 4518.0], [48.4, 4523.0], [48.5, 4530.0], [48.6, 4536.0], [48.7, 4543.0], [48.8, 4547.0], [48.9, 4555.0], [49.0, 4564.0], [49.1, 4570.0], [49.2, 4574.0], [49.3, 4581.0], [49.4, 4593.0], [49.5, 4603.0], [49.6, 4606.0], [49.7, 4613.0], [49.8, 4624.0], [49.9, 4633.0], [50.0, 4640.0], [50.1, 4650.0], [50.2, 4656.0], [50.3, 4661.0], [50.4, 4669.0], [50.5, 4674.0], [50.6, 4680.0], [50.7, 4687.0], [50.8, 4689.0], [50.9, 4695.0], [51.0, 4707.0], [51.1, 4709.0], [51.2, 4719.0], [51.3, 4725.0], [51.4, 4729.0], [51.5, 4739.0], [51.6, 4745.0], [51.7, 4751.0], [51.8, 4759.0], [51.9, 4764.0], [52.0, 4769.0], [52.1, 4775.0], [52.2, 4782.0], [52.3, 4792.0], [52.4, 4796.0], [52.5, 4804.0], [52.6, 4809.0], [52.7, 4815.0], [52.8, 4819.0], [52.9, 4822.0], [53.0, 4824.0], [53.1, 4830.0], [53.2, 4835.0], [53.3, 4840.0], [53.4, 4844.0], [53.5, 4849.0], [53.6, 4857.0], [53.7, 4862.0], [53.8, 4869.0], [53.9, 4879.0], [54.0, 4885.0], [54.1, 4888.0], [54.2, 4891.0], [54.3, 4901.0], [54.4, 4912.0], [54.5, 4918.0], [54.6, 4925.0], [54.7, 4934.0], [54.8, 4940.0], [54.9, 4946.0], [55.0, 4951.0], [55.1, 4960.0], [55.2, 4968.0], [55.3, 4973.0], [55.4, 4977.0], [55.5, 4979.0], [55.6, 4988.0], [55.7, 4993.0], [55.8, 4996.0], [55.9, 5000.0], [56.0, 5002.0], [56.1, 5005.0], [56.2, 5008.0], [56.3, 5011.0], [56.4, 5013.0], [56.5, 5017.0], [56.6, 5020.0], [56.7, 5025.0], [56.8, 5029.0], [56.9, 5037.0], [57.0, 5042.0], [57.1, 5047.0], [57.2, 5051.0], [57.3, 5056.0], [57.4, 5063.0], [57.5, 5067.0], [57.6, 5070.0], [57.7, 5077.0], [57.8, 5079.0], [57.9, 5081.0], [58.0, 5087.0], [58.1, 5094.0], [58.2, 5100.0], [58.3, 5105.0], [58.4, 5108.0], [58.5, 5112.0], [58.6, 5117.0], [58.7, 5126.0], [58.8, 5133.0], [58.9, 5141.0], [59.0, 5146.0], [59.1, 5155.0], [59.2, 5163.0], [59.3, 5175.0], [59.4, 5181.0], [59.5, 5184.0], [59.6, 5189.0], [59.7, 5197.0], [59.8, 5202.0], [59.9, 5204.0], [60.0, 5212.0], [60.1, 5221.0], [60.2, 5223.0], [60.3, 5224.0], [60.4, 5227.0], [60.5, 5231.0], [60.6, 5234.0], [60.7, 5237.0], [60.8, 5246.0], [60.9, 5248.0], [61.0, 5251.0], [61.1, 5257.0], [61.2, 5260.0], [61.3, 5268.0], [61.4, 5272.0], [61.5, 5277.0], [61.6, 5281.0], [61.7, 5285.0], [61.8, 5287.0], [61.9, 5289.0], [62.0, 5292.0], [62.1, 5293.0], [62.2, 5294.0], [62.3, 5296.0], [62.4, 5303.0], [62.5, 5308.0], [62.6, 5314.0], [62.7, 5316.0], [62.8, 5318.0], [62.9, 5319.0], [63.0, 5322.0], [63.1, 5326.0], [63.2, 5329.0], [63.3, 5331.0], [63.4, 5332.0], [63.5, 5338.0], [63.6, 5340.0], [63.7, 5344.0], [63.8, 5346.0], [63.9, 5347.0], [64.0, 5350.0], [64.1, 5353.0], [64.2, 5356.0], [64.3, 5358.0], [64.4, 5361.0], [64.5, 5365.0], [64.6, 5367.0], [64.7, 5369.0], [64.8, 5375.0], [64.9, 5377.0], [65.0, 5382.0], [65.1, 5384.0], [65.2, 5387.0], [65.3, 5388.0], [65.4, 5390.0], [65.5, 5391.0], [65.6, 5395.0], [65.7, 5399.0], [65.8, 5401.0], [65.9, 5406.0], [66.0, 5409.0], [66.1, 5412.0], [66.2, 5413.0], [66.3, 5416.0], [66.4, 5418.0], [66.5, 5421.0], [66.6, 5422.0], [66.7, 5424.0], [66.8, 5427.0], [66.9, 5433.0], [67.0, 5436.0], [67.1, 5440.0], [67.2, 5444.0], [67.3, 5445.0], [67.4, 5449.0], [67.5, 5453.0], [67.6, 5456.0], [67.7, 5460.0], [67.8, 5464.0], [67.9, 5466.0], [68.0, 5469.0], [68.1, 5471.0], [68.2, 5475.0], [68.3, 5477.0], [68.4, 5479.0], [68.5, 5484.0], [68.6, 5486.0], [68.7, 5491.0], [68.8, 5493.0], [68.9, 5495.0], [69.0, 5498.0], [69.1, 5499.0], [69.2, 5502.0], [69.3, 5505.0], [69.4, 5507.0], [69.5, 5509.0], [69.6, 5512.0], [69.7, 5514.0], [69.8, 5516.0], [69.9, 5517.0], [70.0, 5519.0], [70.1, 5520.0], [70.2, 5521.0], [70.3, 5522.0], [70.4, 5523.0], [70.5, 5526.0], [70.6, 5528.0], [70.7, 5530.0], [70.8, 5531.0], [70.9, 5532.0], [71.0, 5536.0], [71.1, 5539.0], [71.2, 5541.0], [71.3, 5543.0], [71.4, 5547.0], [71.5, 5551.0], [71.6, 5555.0], [71.7, 5557.0], [71.8, 5559.0], [71.9, 5563.0], [72.0, 5565.0], [72.1, 5567.0], [72.2, 5569.0], [72.3, 5572.0], [72.4, 5575.0], [72.5, 5577.0], [72.6, 5579.0], [72.7, 5583.0], [72.8, 5584.0], [72.9, 5587.0], [73.0, 5594.0], [73.1, 5596.0], [73.2, 5599.0], [73.3, 5601.0], [73.4, 5604.0], [73.5, 5607.0], [73.6, 5609.0], [73.7, 5611.0], [73.8, 5613.0], [73.9, 5615.0], [74.0, 5618.0], [74.1, 5622.0], [74.2, 5625.0], [74.3, 5627.0], [74.4, 5632.0], [74.5, 5635.0], [74.6, 5638.0], [74.7, 5640.0], [74.8, 5645.0], [74.9, 5648.0], [75.0, 5651.0], [75.1, 5655.0], [75.2, 5659.0], [75.3, 5663.0], [75.4, 5668.0], [75.5, 5674.0], [75.6, 5677.0], [75.7, 5680.0], [75.8, 5683.0], [75.9, 5688.0], [76.0, 5691.0], [76.1, 5695.0], [76.2, 5696.0], [76.3, 5701.0], [76.4, 5704.0], [76.5, 5706.0], [76.6, 5712.0], [76.7, 5715.0], [76.8, 5720.0], [76.9, 5723.0], [77.0, 5726.0], [77.1, 5729.0], [77.2, 5735.0], [77.3, 5744.0], [77.4, 5748.0], [77.5, 5753.0], [77.6, 5759.0], [77.7, 5763.0], [77.8, 5768.0], [77.9, 5773.0], [78.0, 5778.0], [78.1, 5789.0], [78.2, 5791.0], [78.3, 5800.0], [78.4, 5806.0], [78.5, 5814.0], [78.6, 5818.0], [78.7, 5825.0], [78.8, 5831.0], [78.9, 5836.0], [79.0, 5839.0], [79.1, 5843.0], [79.2, 5848.0], [79.3, 5856.0], [79.4, 5862.0], [79.5, 5870.0], [79.6, 5884.0], [79.7, 5894.0], [79.8, 5898.0], [79.9, 5905.0], [80.0, 5910.0], [80.1, 5919.0], [80.2, 5926.0], [80.3, 5935.0], [80.4, 5941.0], [80.5, 5947.0], [80.6, 5953.0], [80.7, 5959.0], [80.8, 5966.0], [80.9, 5975.0], [81.0, 5983.0], [81.1, 5990.0], [81.2, 5996.0], [81.3, 6006.0], [81.4, 6012.0], [81.5, 6016.0], [81.6, 6024.0], [81.7, 6036.0], [81.8, 6042.0], [81.9, 6046.0], [82.0, 6056.0], [82.1, 6067.0], [82.2, 6071.0], [82.3, 6078.0], [82.4, 6084.0], [82.5, 6090.0], [82.6, 6094.0], [82.7, 6105.0], [82.8, 6113.0], [82.9, 6124.0], [83.0, 6133.0], [83.1, 6138.0], [83.2, 6144.0], [83.3, 6152.0], [83.4, 6156.0], [83.5, 6164.0], [83.6, 6171.0], [83.7, 6179.0], [83.8, 6187.0], [83.9, 6195.0], [84.0, 6205.0], [84.1, 6215.0], [84.2, 6220.0], [84.3, 6227.0], [84.4, 6237.0], [84.5, 6242.0], [84.6, 6252.0], [84.7, 6265.0], [84.8, 6280.0], [84.9, 6288.0], [85.0, 6296.0], [85.1, 6301.0], [85.2, 6314.0], [85.3, 6322.0], [85.4, 6330.0], [85.5, 6338.0], [85.6, 6351.0], [85.7, 6358.0], [85.8, 6365.0], [85.9, 6376.0], [86.0, 6386.0], [86.1, 6392.0], [86.2, 6400.0], [86.3, 6409.0], [86.4, 6419.0], [86.5, 6426.0], [86.6, 6437.0], [86.7, 6453.0], [86.8, 6463.0], [86.9, 6468.0], [87.0, 6478.0], [87.1, 6483.0], [87.2, 6487.0], [87.3, 6498.0], [87.4, 6507.0], [87.5, 6519.0], [87.6, 6532.0], [87.7, 6540.0], [87.8, 6543.0], [87.9, 6555.0], [88.0, 6567.0], [88.1, 6573.0], [88.2, 6575.0], [88.3, 6581.0], [88.4, 6585.0], [88.5, 6588.0], [88.6, 6599.0], [88.7, 6604.0], [88.8, 6622.0], [88.9, 6625.0], [89.0, 6636.0], [89.1, 6647.0], [89.2, 6655.0], [89.3, 6667.0], [89.4, 6673.0], [89.5, 6679.0], [89.6, 6696.0], [89.7, 6704.0], [89.8, 6718.0], [89.9, 6730.0], [90.0, 6747.0], [90.1, 6768.0], [90.2, 6777.0], [90.3, 6782.0], [90.4, 6791.0], [90.5, 6795.0], [90.6, 6809.0], [90.7, 6816.0], [90.8, 6827.0], [90.9, 6837.0], [91.0, 6857.0], [91.1, 6866.0], [91.2, 6888.0], [91.3, 6897.0], [91.4, 6908.0], [91.5, 6918.0], [91.6, 6926.0], [91.7, 6941.0], [91.8, 6947.0], [91.9, 6964.0], [92.0, 6972.0], [92.1, 6988.0], [92.2, 7000.0], [92.3, 7042.0], [92.4, 7079.0], [92.5, 7091.0], [92.6, 7108.0], [92.7, 7120.0], [92.8, 7127.0], [92.9, 7142.0], [93.0, 7157.0], [93.1, 7168.0], [93.2, 7175.0], [93.3, 7186.0], [93.4, 7192.0], [93.5, 7199.0], [93.6, 7211.0], [93.7, 7217.0], [93.8, 7228.0], [93.9, 7236.0], [94.0, 7240.0], [94.1, 7245.0], [94.2, 7256.0], [94.3, 7265.0], [94.4, 7283.0], [94.5, 7301.0], [94.6, 7318.0], [94.7, 7329.0], [94.8, 7340.0], [94.9, 7355.0], [95.0, 7366.0], [95.1, 7382.0], [95.2, 7398.0], [95.3, 7403.0], [95.4, 7411.0], [95.5, 7429.0], [95.6, 7447.0], [95.7, 7465.0], [95.8, 7482.0], [95.9, 7511.0], [96.0, 7538.0], [96.1, 7567.0], [96.2, 7573.0], [96.3, 7591.0], [96.4, 7679.0], [96.5, 7710.0], [96.6, 7724.0], [96.7, 7794.0], [96.8, 7815.0], [96.9, 7902.0], [97.0, 8001.0], [97.1, 8113.0], [97.2, 8297.0], [97.3, 8367.0], [97.4, 8406.0], [97.5, 8421.0], [97.6, 8450.0], [97.7, 8483.0], [97.8, 8547.0], [97.9, 8586.0], [98.0, 8660.0], [98.1, 8737.0], [98.2, 8808.0], [98.3, 8858.0], [98.4, 8926.0], [98.5, 8953.0], [98.6, 8996.0], [98.7, 9028.0], [98.8, 9041.0], [98.9, 9070.0], [99.0, 9090.0], [99.1, 9100.0], [99.2, 9125.0], [99.3, 9146.0], [99.4, 9157.0], [99.5, 9165.0], [99.6, 9180.0], [99.7, 9194.0], [99.8, 9205.0], [99.9, 9231.0], [100.0, 9693.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 255.0, "series": [{"data": [[600.0, 65.0], [700.0, 58.0], [800.0, 75.0], [900.0, 51.0], [1000.0, 64.0], [1100.0, 50.0], [1200.0, 58.0], [1300.0, 43.0], [1400.0, 39.0], [1500.0, 59.0], [1600.0, 41.0], [1700.0, 50.0], [1800.0, 41.0], [1900.0, 41.0], [2000.0, 40.0], [2100.0, 59.0], [2300.0, 55.0], [2200.0, 40.0], [2400.0, 36.0], [2500.0, 51.0], [2600.0, 43.0], [2800.0, 45.0], [2700.0, 38.0], [2900.0, 52.0], [3000.0, 57.0], [3100.0, 43.0], [3300.0, 54.0], [3200.0, 53.0], [3400.0, 49.0], [3500.0, 59.0], [3700.0, 63.0], [3600.0, 48.0], [3800.0, 68.0], [3900.0, 70.0], [4000.0, 55.0], [4200.0, 74.0], [4100.0, 76.0], [4300.0, 83.0], [4400.0, 92.0], [4500.0, 82.0], [4600.0, 85.0], [4800.0, 110.0], [4700.0, 91.0], [4900.0, 94.0], [5100.0, 92.0], [5000.0, 138.0], [5200.0, 156.0], [5300.0, 203.0], [5400.0, 200.0], [5500.0, 246.0], [5600.0, 178.0], [5700.0, 123.0], [5800.0, 92.0], [5900.0, 84.0], [6000.0, 83.0], [6100.0, 77.0], [6200.0, 66.0], [6300.0, 67.0], [6600.0, 62.0], [6500.0, 76.0], [6400.0, 69.0], [6700.0, 53.0], [6800.0, 46.0], [6900.0, 52.0], [7000.0, 23.0], [7100.0, 56.0], [7200.0, 57.0], [7300.0, 47.0], [7400.0, 36.0], [7500.0, 28.0], [7600.0, 10.0], [7700.0, 13.0], [7800.0, 11.0], [7900.0, 6.0], [8000.0, 5.0], [8100.0, 3.0], [8200.0, 5.0], [8300.0, 9.0], [8400.0, 21.0], [8500.0, 11.0], [8600.0, 6.0], [8700.0, 11.0], [8800.0, 10.0], [8900.0, 15.0], [9000.0, 28.0], [9100.0, 38.0], [9200.0, 14.0], [9400.0, 2.0], [9600.0, 1.0], [100.0, 255.0], [200.0, 151.0], [300.0, 127.0], [400.0, 110.0], [500.0, 86.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 587.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4726.0, "series": [{"data": [[0.0, 645.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 587.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4726.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 175.40791100123613, "minX": 1.61253426E12, "maxY": 200.0, "series": [{"data": [[1.61253438E12, 200.0], [1.6125345E12, 200.0], [1.61253432E12, 200.0], [1.61253444E12, 200.0], [1.61253426E12, 200.0], [1.61253456E12, 175.40791100123613]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253456E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 503.0, "minX": 1.0, "maxY": 5661.0, "series": [{"data": [[2.0, 2957.0], [3.0, 3498.0], [4.0, 3345.0], [5.0, 3495.0], [6.0, 3468.0], [7.0, 3550.0], [8.0, 3346.0], [9.0, 3819.0], [10.0, 3690.0], [12.0, 4010.5], [13.0, 3519.0], [14.0, 3164.0], [16.0, 4029.5], [18.0, 3703.0], [19.0, 3202.0], [20.0, 3243.0], [21.0, 3920.0], [22.0, 4194.0], [23.0, 4132.0], [24.0, 3596.0], [25.0, 4163.0], [26.0, 4185.0], [27.0, 4248.0], [28.0, 3854.0], [29.0, 3891.0], [30.0, 4339.0], [31.0, 4674.0], [33.0, 4570.0], [32.0, 4009.0], [35.0, 4486.0], [34.0, 4583.0], [37.0, 4606.0], [36.0, 4631.0], [39.0, 4547.0], [38.0, 4707.0], [41.0, 4572.0], [40.0, 4166.0], [43.0, 4708.0], [42.0, 4685.0], [45.0, 4351.0], [44.0, 4782.0], [47.0, 4833.0], [46.0, 4736.0], [49.0, 4738.0], [48.0, 4876.0], [51.0, 4925.0], [50.0, 4858.0], [53.0, 4995.0], [52.0, 4886.0], [55.0, 4551.0], [54.0, 5661.0], [57.0, 5047.0], [56.0, 4921.0], [59.0, 4690.0], [58.0, 5068.0], [61.0, 5042.0], [60.0, 5078.0], [63.0, 5057.0], [62.0, 4879.0], [67.0, 4926.0], [66.0, 4869.0], [65.0, 5066.0], [64.0, 5056.0], [71.0, 5344.0], [70.0, 5054.0], [69.0, 4825.0], [68.0, 4789.0], [75.0, 5150.0], [74.0, 5003.0], [73.0, 5005.0], [72.0, 5021.0], [79.0, 5001.0], [78.0, 4992.0], [77.0, 5010.0], [76.0, 4977.0], [83.0, 5052.0], [82.0, 4988.0], [81.0, 5081.0], [80.0, 5023.0], [87.0, 5017.0], [86.0, 5037.0], [85.0, 5041.0], [84.0, 5000.0], [91.0, 5038.0], [90.0, 5051.0], [89.0, 5176.0], [88.0, 5038.0], [95.0, 5047.0], [94.0, 5017.0], [93.0, 5051.0], [92.0, 5143.0], [99.0, 5086.0], [98.0, 5008.0], [97.0, 4992.0], [96.0, 5002.0], [103.0, 4999.0], [102.0, 5044.0], [101.0, 5077.0], [100.0, 5024.0], [107.0, 4986.0], [106.0, 5002.0], [105.0, 4982.0], [104.0, 5002.0], [111.0, 4796.0], [110.0, 4963.0], [109.0, 4824.0], [108.0, 4862.0], [115.0, 4580.0], [114.0, 4731.0], [113.0, 4676.0], [112.0, 4707.0], [119.0, 4483.0], [118.0, 4551.0], [117.0, 4688.0], [116.0, 4639.0], [123.0, 4391.0], [122.0, 4397.0], [121.0, 4420.0], [120.0, 4571.0], [127.0, 4333.0], [126.0, 4322.0], [125.0, 4457.5], [135.0, 3955.0], [134.0, 4002.0], [133.0, 3999.0], [132.0, 4331.0], [131.0, 4397.0], [130.0, 4427.0], [129.0, 4418.0], [128.0, 4297.0], [143.0, 3744.0], [142.0, 3520.0], [141.0, 3687.0], [140.0, 3702.0], [139.0, 3719.0], [138.0, 3846.0], [137.0, 3856.0], [136.0, 4066.0], [151.0, 3140.0], [150.0, 3012.0], [149.0, 3026.0], [148.0, 3110.0], [147.0, 3295.0], [146.0, 3500.0], [145.0, 3554.0], [144.0, 3612.0], [159.0, 2237.0], [158.0, 2158.0], [157.0, 2263.0], [156.0, 2230.0], [155.0, 2300.0], [154.0, 2528.0], [153.0, 2680.0], [152.0, 3034.0], [167.0, 1792.0], [166.0, 1970.0], [165.0, 2071.0], [164.0, 2007.0], [163.0, 2164.0], [162.0, 2190.0], [161.0, 2205.0], [160.0, 2256.0], [175.0, 1507.0], [174.0, 1518.0], [173.0, 1497.0], [172.0, 1788.0], [171.0, 1702.0], [170.0, 1832.0], [169.0, 1914.0], [168.0, 1870.0], [183.0, 953.0], [182.0, 1114.0], [181.0, 1265.0], [180.0, 1170.0], [179.0, 1347.0], [178.0, 1218.0], [177.0, 1319.0], [176.0, 1428.0], [191.0, 535.0], [190.0, 697.0], [189.0, 747.0], [188.0, 859.0], [187.0, 896.0], [186.0, 878.0], [185.0, 822.0], [184.0, 942.0], [199.0, 532.0], [198.0, 504.0], [197.0, 503.0], [196.0, 521.5], [194.0, 521.0], [193.0, 570.0], [192.0, 590.0], [200.0, 4085.1630491404985], [1.0, 5318.0]], "isOverall": false, "label": "Home", "isController": false}, {"data": [[196.66079221215182, 4073.56764014772]], "isOverall": false, "label": "Home-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 522.1666666666666, "minX": 1.61253426E12, "maxY": 6749.533333333334, "series": [{"data": [[1.61253438E12, 5789.15], [1.6125345E12, 6749.533333333334], [1.61253432E12, 6109.283333333334], [1.61253444E12, 6499.666666666667], [1.61253426E12, 1227.2833333333333], [1.61253456E12, 4150.283333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61253438E12, 2454.8333333333335], [1.6125345E12, 2847.0], [1.61253432E12, 2587.0], [1.61253444E12, 2745.1666666666665], [1.61253426E12, 522.1666666666666], [1.61253456E12, 1752.8333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253456E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3403.1803652968, "minX": 1.61253426E12, "maxY": 7408.5560165975185, "series": [{"data": [[1.61253438E12, 3919.6354810238254], [1.6125345E12, 3403.1803652968], [1.61253432E12, 5109.463149078729], [1.61253444E12, 3692.303867403316], [1.61253426E12, 7408.5560165975185], [1.61253456E12, 3452.756489493201]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253456E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 119.61804697156991, "minX": 1.61253426E12, "maxY": 670.360995850623, "series": [{"data": [[1.61253438E12, 131.17034421888775], [1.6125345E12, 122.29756468797574], [1.61253432E12, 172.95728643216097], [1.61253444E12, 128.559589581689], [1.61253426E12, 670.360995850623], [1.61253456E12, 119.61804697156991]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253456E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5224940805051302, "minX": 1.61253426E12, "maxY": 19.921161825726134, "series": [{"data": [[1.61253438E12, 0.5489849955869375], [1.6125345E12, 0.5631659056316582], [1.61253432E12, 0.6306532663316591], [1.61253444E12, 0.5224940805051302], [1.61253426E12, 19.921161825726134], [1.61253456E12, 0.5278121137206425]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253456E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.61253426E12, "maxY": 9693.0, "series": [{"data": [[1.61253438E12, 8909.0], [1.6125345E12, 9241.0], [1.61253432E12, 9693.0], [1.61253444E12, 9431.0], [1.61253426E12, 9404.0], [1.61253456E12, 8765.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61253438E12, 6169.6], [1.6125345E12, 5507.0], [1.61253432E12, 7320.0], [1.61253444E12, 5626.400000000001], [1.61253426E12, 9165.8], [1.61253456E12, 5413.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61253438E12, 6534.66], [1.6125345E12, 5689.85], [1.61253432E12, 7745.3499999999985], [1.61253444E12, 5972.799999999999], [1.61253426E12, 9239.119999999999], [1.61253456E12, 6014.399999999993]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61253438E12, 6319.3], [1.6125345E12, 5583.0], [1.61253432E12, 7468.5], [1.61253444E12, 5754.799999999999], [1.61253426E12, 9200.3], [1.61253456E12, 5510.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61253438E12, 175.0], [1.6125345E12, 175.0], [1.61253432E12, 175.0], [1.61253444E12, 177.0], [1.61253426E12, 180.0], [1.61253456E12, 177.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61253438E12, 4660.0], [1.6125345E12, 3933.0], [1.61253432E12, 6340.0], [1.61253444E12, 4443.0], [1.61253426E12, 8557.0], [1.61253456E12, 4065.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253456E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 390.5, "minX": 1.0, "maxY": 8989.0, "series": [{"data": [[2.0, 2967.5], [3.0, 1980.0], [4.0, 2520.0], [5.0, 2486.0], [6.0, 2675.5], [7.0, 1865.0], [8.0, 1667.0], [9.0, 3284.0], [10.0, 2720.0], [11.0, 1025.0], [12.0, 1856.0], [13.0, 3174.0], [14.0, 1255.5], [15.0, 2767.0], [16.0, 2601.0], [17.0, 3712.0], [18.0, 461.0], [19.0, 420.0], [20.0, 390.5], [21.0, 1624.0], [22.0, 4814.5], [23.0, 4934.0], [24.0, 466.0], [25.0, 5823.0], [26.0, 5188.0], [27.0, 3355.0], [28.0, 4899.0], [29.0, 5325.0], [30.0, 5397.5], [31.0, 3289.5], [32.0, 5348.0], [33.0, 4688.5], [35.0, 6975.5], [34.0, 6001.5], [36.0, 3595.5], [37.0, 5459.0], [39.0, 4260.0], [38.0, 5042.5], [40.0, 4715.0], [41.0, 5383.5], [42.0, 5891.0], [43.0, 4107.0], [45.0, 5402.0], [44.0, 4180.0], [47.0, 6673.0], [48.0, 4819.0], [49.0, 5647.0], [50.0, 6443.5], [51.0, 3217.0], [52.0, 6748.0], [53.0, 6353.0], [56.0, 5707.5], [58.0, 6221.5], [61.0, 6057.0], [64.0, 4418.5], [83.0, 6888.0], [89.0, 7232.0], [92.0, 7480.5], [154.0, 8989.0], [1.0, 4094.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 154.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 25.5, "minX": 1.0, "maxY": 1122.5, "series": [{"data": [[2.0, 30.0], [3.0, 29.0], [4.0, 35.0], [5.0, 31.5], [6.0, 50.5], [7.0, 30.0], [8.0, 31.5], [9.0, 55.5], [10.0, 64.5], [11.0, 32.0], [12.0, 46.0], [13.0, 55.0], [14.0, 28.5], [15.0, 52.5], [16.0, 51.0], [17.0, 78.0], [18.0, 29.0], [19.0, 29.0], [20.0, 26.0], [21.0, 44.0], [22.0, 109.5], [23.0, 109.0], [24.0, 25.5], [25.0, 123.0], [26.0, 73.5], [27.0, 130.0], [28.0, 219.5], [29.0, 114.0], [30.0, 150.0], [31.0, 150.0], [32.0, 154.5], [33.0, 215.0], [35.0, 168.5], [34.0, 199.5], [36.0, 182.0], [37.0, 190.0], [39.0, 205.0], [38.0, 175.0], [40.0, 172.0], [41.0, 202.5], [42.0, 152.0], [43.0, 234.0], [45.0, 207.0], [44.0, 201.0], [47.0, 268.0], [48.0, 201.5], [49.0, 226.0], [50.0, 166.0], [51.0, 196.0], [52.0, 193.5], [53.0, 208.0], [56.0, 243.5], [58.0, 248.0], [61.0, 231.0], [64.0, 197.0], [83.0, 233.0], [89.0, 222.0], [92.0, 352.0], [154.0, 1122.5], [1.0, 71.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 154.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.783333333333333, "minX": 1.61253426E12, "maxY": 21.15, "series": [{"data": [[1.61253438E12, 21.15], [1.6125345E12, 20.616666666666667], [1.61253432E12, 17.133333333333333], [1.61253444E12, 20.266666666666666], [1.61253426E12, 6.783333333333333], [1.61253456E12, 13.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253456E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.016666666666667, "minX": 1.61253426E12, "maxY": 21.9, "series": [{"data": [[1.61253438E12, 18.883333333333333], [1.6125345E12, 21.9], [1.61253432E12, 19.9], [1.61253444E12, 21.116666666666667], [1.61253426E12, 4.016666666666667], [1.61253456E12, 13.483333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253456E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.016666666666667, "minX": 1.61253426E12, "maxY": 21.9, "series": [{"data": [[1.61253438E12, 18.883333333333333], [1.6125345E12, 21.9], [1.61253432E12, 19.9], [1.61253444E12, 21.116666666666667], [1.61253426E12, 4.016666666666667], [1.61253456E12, 13.483333333333333]], "isOverall": false, "label": "Home-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253456E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.016666666666667, "minX": 1.61253426E12, "maxY": 21.9, "series": [{"data": [[1.61253438E12, 18.883333333333333], [1.6125345E12, 21.9], [1.61253432E12, 19.9], [1.61253444E12, 21.116666666666667], [1.61253426E12, 4.016666666666667], [1.61253456E12, 13.483333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253456E12, "title": "Total Transactions Per Second"}},
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

