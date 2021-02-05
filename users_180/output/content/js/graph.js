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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 8478.0, "series": [{"data": [[0.0, 175.0], [0.1, 176.0], [0.2, 176.0], [0.3, 176.0], [0.4, 177.0], [0.5, 177.0], [0.6, 177.0], [0.7, 177.0], [0.8, 177.0], [0.9, 178.0], [1.0, 178.0], [1.1, 178.0], [1.2, 179.0], [1.3, 179.0], [1.4, 179.0], [1.5, 179.0], [1.6, 180.0], [1.7, 180.0], [1.8, 180.0], [1.9, 180.0], [2.0, 180.0], [2.1, 181.0], [2.2, 181.0], [2.3, 181.0], [2.4, 181.0], [2.5, 182.0], [2.6, 182.0], [2.7, 182.0], [2.8, 182.0], [2.9, 182.0], [3.0, 183.0], [3.1, 183.0], [3.2, 183.0], [3.3, 183.0], [3.4, 183.0], [3.5, 183.0], [3.6, 183.0], [3.7, 184.0], [3.8, 184.0], [3.9, 184.0], [4.0, 184.0], [4.1, 184.0], [4.2, 184.0], [4.3, 185.0], [4.4, 185.0], [4.5, 185.0], [4.6, 185.0], [4.7, 186.0], [4.8, 187.0], [4.9, 187.0], [5.0, 187.0], [5.1, 188.0], [5.2, 189.0], [5.3, 189.0], [5.4, 191.0], [5.5, 192.0], [5.6, 193.0], [5.7, 195.0], [5.8, 196.0], [5.9, 198.0], [6.0, 199.0], [6.1, 200.0], [6.2, 202.0], [6.3, 203.0], [6.4, 205.0], [6.5, 208.0], [6.6, 209.0], [6.7, 210.0], [6.8, 213.0], [6.9, 214.0], [7.0, 217.0], [7.1, 218.0], [7.2, 219.0], [7.3, 222.0], [7.4, 223.0], [7.5, 227.0], [7.6, 229.0], [7.7, 232.0], [7.8, 237.0], [7.9, 240.0], [8.0, 244.0], [8.1, 250.0], [8.2, 252.0], [8.3, 255.0], [8.4, 258.0], [8.5, 263.0], [8.6, 269.0], [8.7, 271.0], [8.8, 274.0], [8.9, 278.0], [9.0, 285.0], [9.1, 290.0], [9.2, 296.0], [9.3, 304.0], [9.4, 310.0], [9.5, 313.0], [9.6, 317.0], [9.7, 320.0], [9.8, 324.0], [9.9, 334.0], [10.0, 338.0], [10.1, 341.0], [10.2, 348.0], [10.3, 352.0], [10.4, 357.0], [10.5, 361.0], [10.6, 366.0], [10.7, 373.0], [10.8, 379.0], [10.9, 383.0], [11.0, 388.0], [11.1, 393.0], [11.2, 396.0], [11.3, 401.0], [11.4, 408.0], [11.5, 412.0], [11.6, 423.0], [11.7, 427.0], [11.8, 434.0], [11.9, 437.0], [12.0, 439.0], [12.1, 448.0], [12.2, 450.0], [12.3, 455.0], [12.4, 464.0], [12.5, 469.0], [12.6, 477.0], [12.7, 479.0], [12.8, 484.0], [12.9, 498.0], [13.0, 504.0], [13.1, 509.0], [13.2, 516.0], [13.3, 522.0], [13.4, 531.0], [13.5, 539.0], [13.6, 542.0], [13.7, 546.0], [13.8, 555.0], [13.9, 558.0], [14.0, 568.0], [14.1, 580.0], [14.2, 585.0], [14.3, 597.0], [14.4, 602.0], [14.5, 610.0], [14.6, 616.0], [14.7, 623.0], [14.8, 632.0], [14.9, 640.0], [15.0, 652.0], [15.1, 658.0], [15.2, 667.0], [15.3, 672.0], [15.4, 680.0], [15.5, 687.0], [15.6, 694.0], [15.7, 698.0], [15.8, 706.0], [15.9, 711.0], [16.0, 724.0], [16.1, 739.0], [16.2, 750.0], [16.3, 754.0], [16.4, 760.0], [16.5, 767.0], [16.6, 776.0], [16.7, 787.0], [16.8, 792.0], [16.9, 796.0], [17.0, 802.0], [17.1, 805.0], [17.2, 815.0], [17.3, 825.0], [17.4, 829.0], [17.5, 836.0], [17.6, 840.0], [17.7, 843.0], [17.8, 850.0], [17.9, 851.0], [18.0, 856.0], [18.1, 864.0], [18.2, 869.0], [18.3, 877.0], [18.4, 887.0], [18.5, 895.0], [18.6, 900.0], [18.7, 907.0], [18.8, 913.0], [18.9, 921.0], [19.0, 928.0], [19.1, 932.0], [19.2, 937.0], [19.3, 947.0], [19.4, 951.0], [19.5, 953.0], [19.6, 956.0], [19.7, 965.0], [19.8, 970.0], [19.9, 973.0], [20.0, 985.0], [20.1, 993.0], [20.2, 1001.0], [20.3, 1007.0], [20.4, 1016.0], [20.5, 1022.0], [20.6, 1034.0], [20.7, 1038.0], [20.8, 1044.0], [20.9, 1050.0], [21.0, 1054.0], [21.1, 1062.0], [21.2, 1072.0], [21.3, 1084.0], [21.4, 1091.0], [21.5, 1099.0], [21.6, 1106.0], [21.7, 1109.0], [21.8, 1113.0], [21.9, 1129.0], [22.0, 1138.0], [22.1, 1147.0], [22.2, 1154.0], [22.3, 1159.0], [22.4, 1165.0], [22.5, 1173.0], [22.6, 1176.0], [22.7, 1184.0], [22.8, 1196.0], [22.9, 1203.0], [23.0, 1207.0], [23.1, 1214.0], [23.2, 1225.0], [23.3, 1235.0], [23.4, 1239.0], [23.5, 1249.0], [23.6, 1265.0], [23.7, 1272.0], [23.8, 1278.0], [23.9, 1290.0], [24.0, 1299.0], [24.1, 1304.0], [24.2, 1313.0], [24.3, 1327.0], [24.4, 1329.0], [24.5, 1335.0], [24.6, 1340.0], [24.7, 1350.0], [24.8, 1357.0], [24.9, 1366.0], [25.0, 1376.0], [25.1, 1381.0], [25.2, 1384.0], [25.3, 1392.0], [25.4, 1398.0], [25.5, 1408.0], [25.6, 1415.0], [25.7, 1423.0], [25.8, 1434.0], [25.9, 1448.0], [26.0, 1452.0], [26.1, 1458.0], [26.2, 1467.0], [26.3, 1471.0], [26.4, 1484.0], [26.5, 1498.0], [26.6, 1503.0], [26.7, 1508.0], [26.8, 1513.0], [26.9, 1525.0], [27.0, 1532.0], [27.1, 1541.0], [27.2, 1552.0], [27.3, 1560.0], [27.4, 1573.0], [27.5, 1579.0], [27.6, 1584.0], [27.7, 1593.0], [27.8, 1605.0], [27.9, 1619.0], [28.0, 1633.0], [28.1, 1641.0], [28.2, 1656.0], [28.3, 1659.0], [28.4, 1668.0], [28.5, 1687.0], [28.6, 1699.0], [28.7, 1708.0], [28.8, 1718.0], [28.9, 1728.0], [29.0, 1739.0], [29.1, 1745.0], [29.2, 1752.0], [29.3, 1763.0], [29.4, 1779.0], [29.5, 1789.0], [29.6, 1796.0], [29.7, 1808.0], [29.8, 1829.0], [29.9, 1841.0], [30.0, 1857.0], [30.1, 1868.0], [30.2, 1872.0], [30.3, 1881.0], [30.4, 1887.0], [30.5, 1893.0], [30.6, 1905.0], [30.7, 1914.0], [30.8, 1928.0], [30.9, 1932.0], [31.0, 1945.0], [31.1, 1959.0], [31.2, 1974.0], [31.3, 1978.0], [31.4, 1987.0], [31.5, 1998.0], [31.6, 2005.0], [31.7, 2014.0], [31.8, 2018.0], [31.9, 2030.0], [32.0, 2038.0], [32.1, 2052.0], [32.2, 2068.0], [32.3, 2080.0], [32.4, 2088.0], [32.5, 2095.0], [32.6, 2104.0], [32.7, 2117.0], [32.8, 2121.0], [32.9, 2129.0], [33.0, 2137.0], [33.1, 2151.0], [33.2, 2163.0], [33.3, 2171.0], [33.4, 2180.0], [33.5, 2186.0], [33.6, 2192.0], [33.7, 2203.0], [33.8, 2215.0], [33.9, 2225.0], [34.0, 2239.0], [34.1, 2243.0], [34.2, 2248.0], [34.3, 2252.0], [34.4, 2268.0], [34.5, 2278.0], [34.6, 2295.0], [34.7, 2298.0], [34.8, 2304.0], [34.9, 2318.0], [35.0, 2324.0], [35.1, 2339.0], [35.2, 2354.0], [35.3, 2362.0], [35.4, 2371.0], [35.5, 2377.0], [35.6, 2383.0], [35.7, 2387.0], [35.8, 2389.0], [35.9, 2401.0], [36.0, 2411.0], [36.1, 2416.0], [36.2, 2423.0], [36.3, 2427.0], [36.4, 2436.0], [36.5, 2444.0], [36.6, 2447.0], [36.7, 2456.0], [36.8, 2463.0], [36.9, 2471.0], [37.0, 2475.0], [37.1, 2485.0], [37.2, 2496.0], [37.3, 2504.0], [37.4, 2513.0], [37.5, 2531.0], [37.6, 2545.0], [37.7, 2553.0], [37.8, 2556.0], [37.9, 2566.0], [38.0, 2571.0], [38.1, 2578.0], [38.2, 2585.0], [38.3, 2595.0], [38.4, 2602.0], [38.5, 2607.0], [38.6, 2617.0], [38.7, 2623.0], [38.8, 2631.0], [38.9, 2643.0], [39.0, 2654.0], [39.1, 2662.0], [39.2, 2669.0], [39.3, 2674.0], [39.4, 2680.0], [39.5, 2689.0], [39.6, 2694.0], [39.7, 2699.0], [39.8, 2708.0], [39.9, 2713.0], [40.0, 2719.0], [40.1, 2729.0], [40.2, 2736.0], [40.3, 2744.0], [40.4, 2750.0], [40.5, 2761.0], [40.6, 2764.0], [40.7, 2773.0], [40.8, 2780.0], [40.9, 2786.0], [41.0, 2790.0], [41.1, 2795.0], [41.2, 2797.0], [41.3, 2801.0], [41.4, 2810.0], [41.5, 2815.0], [41.6, 2822.0], [41.7, 2828.0], [41.8, 2832.0], [41.9, 2840.0], [42.0, 2844.0], [42.1, 2850.0], [42.2, 2858.0], [42.3, 2864.0], [42.4, 2867.0], [42.5, 2871.0], [42.6, 2879.0], [42.7, 2884.0], [42.8, 2889.0], [42.9, 2896.0], [43.0, 2899.0], [43.1, 2905.0], [43.2, 2913.0], [43.3, 2922.0], [43.4, 2927.0], [43.5, 2934.0], [43.6, 2941.0], [43.7, 2947.0], [43.8, 2954.0], [43.9, 2960.0], [44.0, 2968.0], [44.1, 2973.0], [44.2, 2987.0], [44.3, 2995.0], [44.4, 2998.0], [44.5, 3002.0], [44.6, 3007.0], [44.7, 3009.0], [44.8, 3019.0], [44.9, 3034.0], [45.0, 3042.0], [45.1, 3044.0], [45.2, 3051.0], [45.3, 3058.0], [45.4, 3066.0], [45.5, 3079.0], [45.6, 3086.0], [45.7, 3094.0], [45.8, 3107.0], [45.9, 3117.0], [46.0, 3125.0], [46.1, 3128.0], [46.2, 3141.0], [46.3, 3145.0], [46.4, 3157.0], [46.5, 3165.0], [46.6, 3170.0], [46.7, 3176.0], [46.8, 3179.0], [46.9, 3185.0], [47.0, 3197.0], [47.1, 3206.0], [47.2, 3217.0], [47.3, 3221.0], [47.4, 3226.0], [47.5, 3232.0], [47.6, 3235.0], [47.7, 3239.0], [47.8, 3244.0], [47.9, 3249.0], [48.0, 3255.0], [48.1, 3266.0], [48.2, 3270.0], [48.3, 3277.0], [48.4, 3282.0], [48.5, 3287.0], [48.6, 3294.0], [48.7, 3301.0], [48.8, 3309.0], [48.9, 3312.0], [49.0, 3317.0], [49.1, 3321.0], [49.2, 3332.0], [49.3, 3338.0], [49.4, 3344.0], [49.5, 3352.0], [49.6, 3357.0], [49.7, 3365.0], [49.8, 3371.0], [49.9, 3378.0], [50.0, 3383.0], [50.1, 3387.0], [50.2, 3395.0], [50.3, 3404.0], [50.4, 3411.0], [50.5, 3416.0], [50.6, 3424.0], [50.7, 3433.0], [50.8, 3440.0], [50.9, 3448.0], [51.0, 3453.0], [51.1, 3457.0], [51.2, 3461.0], [51.3, 3468.0], [51.4, 3471.0], [51.5, 3475.0], [51.6, 3481.0], [51.7, 3488.0], [51.8, 3494.0], [51.9, 3501.0], [52.0, 3509.0], [52.1, 3512.0], [52.2, 3526.0], [52.3, 3529.0], [52.4, 3536.0], [52.5, 3541.0], [52.6, 3548.0], [52.7, 3557.0], [52.8, 3560.0], [52.9, 3566.0], [53.0, 3569.0], [53.1, 3573.0], [53.2, 3578.0], [53.3, 3580.0], [53.4, 3585.0], [53.5, 3593.0], [53.6, 3600.0], [53.7, 3611.0], [53.8, 3617.0], [53.9, 3621.0], [54.0, 3626.0], [54.1, 3629.0], [54.2, 3633.0], [54.3, 3639.0], [54.4, 3647.0], [54.5, 3657.0], [54.6, 3661.0], [54.7, 3669.0], [54.8, 3672.0], [54.9, 3676.0], [55.0, 3682.0], [55.1, 3690.0], [55.2, 3694.0], [55.3, 3698.0], [55.4, 3707.0], [55.5, 3710.0], [55.6, 3713.0], [55.7, 3720.0], [55.8, 3723.0], [55.9, 3729.0], [56.0, 3736.0], [56.1, 3741.0], [56.2, 3745.0], [56.3, 3749.0], [56.4, 3754.0], [56.5, 3761.0], [56.6, 3767.0], [56.7, 3769.0], [56.8, 3772.0], [56.9, 3776.0], [57.0, 3783.0], [57.1, 3787.0], [57.2, 3791.0], [57.3, 3794.0], [57.4, 3797.0], [57.5, 3799.0], [57.6, 3803.0], [57.7, 3807.0], [57.8, 3811.0], [57.9, 3816.0], [58.0, 3819.0], [58.1, 3822.0], [58.2, 3829.0], [58.3, 3836.0], [58.4, 3840.0], [58.5, 3844.0], [58.6, 3845.0], [58.7, 3847.0], [58.8, 3858.0], [58.9, 3861.0], [59.0, 3862.0], [59.1, 3864.0], [59.2, 3868.0], [59.3, 3875.0], [59.4, 3880.0], [59.5, 3885.0], [59.6, 3888.0], [59.7, 3893.0], [59.8, 3896.0], [59.9, 3903.0], [60.0, 3908.0], [60.1, 3912.0], [60.2, 3914.0], [60.3, 3918.0], [60.4, 3922.0], [60.5, 3924.0], [60.6, 3929.0], [60.7, 3932.0], [60.8, 3937.0], [60.9, 3940.0], [61.0, 3944.0], [61.1, 3952.0], [61.2, 3955.0], [61.3, 3959.0], [61.4, 3965.0], [61.5, 3969.0], [61.6, 3975.0], [61.7, 3977.0], [61.8, 3982.0], [61.9, 3983.0], [62.0, 3987.0], [62.1, 3989.0], [62.2, 3993.0], [62.3, 4000.0], [62.4, 4003.0], [62.5, 4005.0], [62.6, 4009.0], [62.7, 4014.0], [62.8, 4017.0], [62.9, 4019.0], [63.0, 4021.0], [63.1, 4024.0], [63.2, 4026.0], [63.3, 4030.0], [63.4, 4033.0], [63.5, 4035.0], [63.6, 4037.0], [63.7, 4039.0], [63.8, 4042.0], [63.9, 4045.0], [64.0, 4048.0], [64.1, 4052.0], [64.2, 4054.0], [64.3, 4057.0], [64.4, 4064.0], [64.5, 4067.0], [64.6, 4070.0], [64.7, 4072.0], [64.8, 4076.0], [64.9, 4078.0], [65.0, 4080.0], [65.1, 4084.0], [65.2, 4086.0], [65.3, 4087.0], [65.4, 4089.0], [65.5, 4091.0], [65.6, 4096.0], [65.7, 4099.0], [65.8, 4102.0], [65.9, 4104.0], [66.0, 4105.0], [66.1, 4106.0], [66.2, 4109.0], [66.3, 4110.0], [66.4, 4114.0], [66.5, 4116.0], [66.6, 4118.0], [66.7, 4120.0], [66.8, 4123.0], [66.9, 4126.0], [67.0, 4127.0], [67.1, 4129.0], [67.2, 4134.0], [67.3, 4135.0], [67.4, 4136.0], [67.5, 4138.0], [67.6, 4140.0], [67.7, 4141.0], [67.8, 4143.0], [67.9, 4144.0], [68.0, 4145.0], [68.1, 4148.0], [68.2, 4150.0], [68.3, 4152.0], [68.4, 4152.0], [68.5, 4154.0], [68.6, 4157.0], [68.7, 4158.0], [68.8, 4161.0], [68.9, 4163.0], [69.0, 4165.0], [69.1, 4166.0], [69.2, 4169.0], [69.3, 4172.0], [69.4, 4173.0], [69.5, 4177.0], [69.6, 4181.0], [69.7, 4182.0], [69.8, 4183.0], [69.9, 4185.0], [70.0, 4187.0], [70.1, 4188.0], [70.2, 4190.0], [70.3, 4193.0], [70.4, 4195.0], [70.5, 4196.0], [70.6, 4197.0], [70.7, 4200.0], [70.8, 4203.0], [70.9, 4204.0], [71.0, 4206.0], [71.1, 4209.0], [71.2, 4213.0], [71.3, 4216.0], [71.4, 4218.0], [71.5, 4220.0], [71.6, 4224.0], [71.7, 4225.0], [71.8, 4227.0], [71.9, 4229.0], [72.0, 4230.0], [72.1, 4232.0], [72.2, 4234.0], [72.3, 4237.0], [72.4, 4239.0], [72.5, 4243.0], [72.6, 4244.0], [72.7, 4247.0], [72.8, 4249.0], [72.9, 4251.0], [73.0, 4252.0], [73.1, 4255.0], [73.2, 4257.0], [73.3, 4259.0], [73.4, 4261.0], [73.5, 4262.0], [73.6, 4264.0], [73.7, 4265.0], [73.8, 4267.0], [73.9, 4269.0], [74.0, 4273.0], [74.1, 4275.0], [74.2, 4276.0], [74.3, 4278.0], [74.4, 4280.0], [74.5, 4282.0], [74.6, 4284.0], [74.7, 4287.0], [74.8, 4288.0], [74.9, 4290.0], [75.0, 4295.0], [75.1, 4297.0], [75.2, 4299.0], [75.3, 4302.0], [75.4, 4304.0], [75.5, 4306.0], [75.6, 4309.0], [75.7, 4312.0], [75.8, 4313.0], [75.9, 4316.0], [76.0, 4321.0], [76.1, 4325.0], [76.2, 4332.0], [76.3, 4334.0], [76.4, 4336.0], [76.5, 4340.0], [76.6, 4343.0], [76.7, 4349.0], [76.8, 4355.0], [76.9, 4357.0], [77.0, 4363.0], [77.1, 4365.0], [77.2, 4367.0], [77.3, 4369.0], [77.4, 4373.0], [77.5, 4375.0], [77.6, 4378.0], [77.7, 4381.0], [77.8, 4385.0], [77.9, 4389.0], [78.0, 4396.0], [78.1, 4398.0], [78.2, 4402.0], [78.3, 4405.0], [78.4, 4410.0], [78.5, 4414.0], [78.6, 4417.0], [78.7, 4419.0], [78.8, 4426.0], [78.9, 4431.0], [79.0, 4441.0], [79.1, 4447.0], [79.2, 4452.0], [79.3, 4458.0], [79.4, 4467.0], [79.5, 4470.0], [79.6, 4475.0], [79.7, 4479.0], [79.8, 4488.0], [79.9, 4494.0], [80.0, 4500.0], [80.1, 4502.0], [80.2, 4507.0], [80.3, 4510.0], [80.4, 4514.0], [80.5, 4519.0], [80.6, 4522.0], [80.7, 4530.0], [80.8, 4534.0], [80.9, 4538.0], [81.0, 4540.0], [81.1, 4546.0], [81.2, 4552.0], [81.3, 4555.0], [81.4, 4560.0], [81.5, 4568.0], [81.6, 4571.0], [81.7, 4580.0], [81.8, 4585.0], [81.9, 4592.0], [82.0, 4594.0], [82.1, 4602.0], [82.2, 4605.0], [82.3, 4608.0], [82.4, 4612.0], [82.5, 4615.0], [82.6, 4624.0], [82.7, 4628.0], [82.8, 4639.0], [82.9, 4641.0], [83.0, 4648.0], [83.1, 4652.0], [83.2, 4660.0], [83.3, 4667.0], [83.4, 4669.0], [83.5, 4685.0], [83.6, 4693.0], [83.7, 4702.0], [83.8, 4705.0], [83.9, 4718.0], [84.0, 4726.0], [84.1, 4730.0], [84.2, 4737.0], [84.3, 4742.0], [84.4, 4755.0], [84.5, 4759.0], [84.6, 4773.0], [84.7, 4784.0], [84.8, 4789.0], [84.9, 4793.0], [85.0, 4809.0], [85.1, 4813.0], [85.2, 4829.0], [85.3, 4854.0], [85.4, 4870.0], [85.5, 4887.0], [85.6, 4902.0], [85.7, 4924.0], [85.8, 4934.0], [85.9, 4947.0], [86.0, 4962.0], [86.1, 4971.0], [86.2, 4981.0], [86.3, 4992.0], [86.4, 5008.0], [86.5, 5030.0], [86.6, 5045.0], [86.7, 5057.0], [86.8, 5073.0], [86.9, 5089.0], [87.0, 5107.0], [87.1, 5119.0], [87.2, 5141.0], [87.3, 5154.0], [87.4, 5181.0], [87.5, 5191.0], [87.6, 5212.0], [87.7, 5233.0], [87.8, 5254.0], [87.9, 5265.0], [88.0, 5289.0], [88.1, 5299.0], [88.2, 5311.0], [88.3, 5326.0], [88.4, 5346.0], [88.5, 5356.0], [88.6, 5364.0], [88.7, 5373.0], [88.8, 5379.0], [88.9, 5382.0], [89.0, 5389.0], [89.1, 5406.0], [89.2, 5417.0], [89.3, 5425.0], [89.4, 5438.0], [89.5, 5454.0], [89.6, 5459.0], [89.7, 5470.0], [89.8, 5472.0], [89.9, 5480.0], [90.0, 5485.0], [90.1, 5491.0], [90.2, 5496.0], [90.3, 5509.0], [90.4, 5514.0], [90.5, 5524.0], [90.6, 5534.0], [90.7, 5555.0], [90.8, 5570.0], [90.9, 5606.0], [91.0, 5614.0], [91.1, 5625.0], [91.2, 5642.0], [91.3, 5658.0], [91.4, 5686.0], [91.5, 5700.0], [91.6, 5712.0], [91.7, 5727.0], [91.8, 5737.0], [91.9, 5749.0], [92.0, 5777.0], [92.1, 5792.0], [92.2, 5800.0], [92.3, 5809.0], [92.4, 5821.0], [92.5, 5836.0], [92.6, 5846.0], [92.7, 5855.0], [92.8, 5864.0], [92.9, 5874.0], [93.0, 5882.0], [93.1, 5883.0], [93.2, 5895.0], [93.3, 5902.0], [93.4, 5911.0], [93.5, 5937.0], [93.6, 5966.0], [93.7, 6027.0], [93.8, 6040.0], [93.9, 6089.0], [94.0, 6132.0], [94.1, 6214.0], [94.2, 6246.0], [94.3, 6273.0], [94.4, 6293.0], [94.5, 6312.0], [94.6, 6346.0], [94.7, 6370.0], [94.8, 6383.0], [94.9, 6410.0], [95.0, 6430.0], [95.1, 6455.0], [95.2, 6504.0], [95.3, 6540.0], [95.4, 6572.0], [95.5, 6588.0], [95.6, 6615.0], [95.7, 6633.0], [95.8, 6660.0], [95.9, 6671.0], [96.0, 6711.0], [96.1, 6754.0], [96.2, 6764.0], [96.3, 6771.0], [96.4, 6798.0], [96.5, 6823.0], [96.6, 6862.0], [96.7, 6890.0], [96.8, 6915.0], [96.9, 6944.0], [97.0, 7050.0], [97.1, 7167.0], [97.2, 7310.0], [97.3, 7326.0], [97.4, 7432.0], [97.5, 7477.0], [97.6, 7538.0], [97.7, 7608.0], [97.8, 7672.0], [97.9, 7705.0], [98.0, 7754.0], [98.1, 7796.0], [98.2, 7874.0], [98.3, 7948.0], [98.4, 8008.0], [98.5, 8049.0], [98.6, 8073.0], [98.7, 8134.0], [98.8, 8170.0], [98.9, 8189.0], [99.0, 8222.0], [99.1, 8248.0], [99.2, 8264.0], [99.3, 8274.0], [99.4, 8284.0], [99.5, 8302.0], [99.6, 8314.0], [99.7, 8318.0], [99.8, 8322.0], [99.9, 8331.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 355.0, "series": [{"data": [[600.0, 80.0], [700.0, 74.0], [800.0, 95.0], [900.0, 91.0], [1000.0, 81.0], [1100.0, 78.0], [1200.0, 67.0], [1300.0, 83.0], [1400.0, 66.0], [1500.0, 71.0], [1600.0, 49.0], [1700.0, 60.0], [1800.0, 53.0], [1900.0, 58.0], [2000.0, 59.0], [2100.0, 67.0], [2300.0, 67.0], [2200.0, 63.0], [2400.0, 77.0], [2500.0, 67.0], [2600.0, 80.0], [2800.0, 102.0], [2700.0, 91.0], [2900.0, 84.0], [3000.0, 76.0], [3100.0, 76.0], [3300.0, 92.0], [3200.0, 96.0], [3400.0, 95.0], [3500.0, 100.0], [3700.0, 128.0], [3600.0, 102.0], [3800.0, 136.0], [3900.0, 144.0], [4000.0, 201.0], [4100.0, 289.0], [4200.0, 266.0], [4300.0, 171.0], [4600.0, 94.0], [4500.0, 123.0], [4400.0, 108.0], [4700.0, 74.0], [4800.0, 36.0], [5000.0, 31.0], [5100.0, 37.0], [4900.0, 48.0], [5200.0, 34.0], [5300.0, 54.0], [5600.0, 37.0], [5400.0, 71.0], [5500.0, 36.0], [5800.0, 60.0], [5700.0, 41.0], [5900.0, 26.0], [6000.0, 15.0], [6100.0, 9.0], [6200.0, 21.0], [6300.0, 26.0], [6400.0, 18.0], [6500.0, 23.0], [6600.0, 21.0], [6800.0, 20.0], [6900.0, 10.0], [6700.0, 30.0], [7000.0, 4.0], [7100.0, 6.0], [7200.0, 3.0], [7300.0, 10.0], [7400.0, 12.0], [7500.0, 7.0], [7600.0, 13.0], [7700.0, 12.0], [7800.0, 9.0], [7900.0, 8.0], [8000.0, 14.0], [8100.0, 19.0], [8200.0, 31.0], [8300.0, 28.0], [8400.0, 2.0], [100.0, 355.0], [200.0, 186.0], [300.0, 118.0], [400.0, 98.0], [500.0, 83.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 758.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4300.0, "series": [{"data": [[0.0, 758.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 798.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4300.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 157.8528198074279, "minX": 1.61253384E12, "maxY": 180.0, "series": [{"data": [[1.6125339E12, 180.0], [1.61253402E12, 180.0], [1.61253384E12, 180.0], [1.61253414E12, 157.8528198074279], [1.61253396E12, 180.0], [1.61253408E12, 180.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253414E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.0, "maxY": 7683.0, "series": [{"data": [[3.0, 182.5], [4.0, 189.0], [5.0, 175.0], [6.0, 180.0], [7.0, 185.0], [8.0, 335.0], [9.0, 466.0], [10.0, 320.0], [12.0, 589.5], [13.0, 583.0], [14.0, 437.0], [15.0, 503.0], [16.0, 710.0], [17.0, 412.0], [18.0, 570.0], [19.0, 497.0], [20.0, 906.0], [21.0, 1249.0], [22.0, 1163.0], [23.0, 1099.0], [24.0, 1199.0], [25.0, 1342.0], [26.0, 1528.0], [27.0, 1579.0], [28.0, 1607.0], [29.0, 646.0], [30.0, 1781.0], [31.0, 1427.0], [33.0, 1523.0], [32.0, 1874.0], [35.0, 1890.0], [34.0, 1567.0], [37.0, 1980.0], [36.0, 1946.0], [39.0, 1761.0], [38.0, 1740.0], [41.0, 2130.0], [40.0, 2067.0], [43.0, 2252.0], [42.0, 2162.0], [45.0, 2339.0], [44.0, 2338.0], [47.0, 2405.0], [46.0, 2387.0], [49.0, 2423.0], [48.0, 2426.0], [51.0, 2411.0], [50.0, 2441.0], [53.0, 7683.0], [52.0, 2470.0], [55.0, 2658.0], [54.0, 2669.0], [57.0, 2697.0], [56.0, 2683.0], [59.0, 2896.0], [58.0, 2697.0], [61.0, 2916.0], [63.0, 3044.5], [67.0, 3157.0], [66.0, 3230.0], [65.0, 3111.0], [64.0, 3059.0], [71.0, 3398.0], [70.0, 3384.0], [69.0, 3136.0], [68.0, 3060.0], [75.0, 3159.0], [74.0, 3099.0], [73.0, 3122.0], [72.0, 3376.0], [79.0, 3611.0], [78.0, 3443.0], [76.0, 3487.0], [83.0, 3395.0], [82.0, 3424.0], [81.0, 3630.0], [80.0, 3375.0], [87.0, 3941.0], [86.0, 3535.0], [85.0, 3548.0], [84.0, 3756.0], [91.0, 3749.0], [90.0, 3686.0], [89.0, 3699.0], [88.0, 3664.0], [95.0, 4065.0], [94.0, 3806.0], [93.0, 3887.0], [92.0, 4133.0], [99.0, 4475.0], [98.0, 4125.0], [97.0, 4082.0], [96.0, 4304.0], [103.0, 4365.0], [102.0, 4287.0], [101.0, 4438.0], [100.0, 4461.0], [107.0, 4501.5], [105.0, 4340.0], [104.0, 4675.0], [111.0, 4444.0], [110.0, 4502.0], [109.0, 4669.0], [108.0, 4644.0], [115.0, 4556.0], [114.0, 4606.0], [112.0, 4756.0], [119.0, 4509.0], [118.0, 4508.0], [117.0, 4578.0], [116.0, 4428.0], [123.0, 4540.0], [122.0, 4705.0], [121.0, 4495.0], [120.0, 4619.0], [127.0, 4429.0], [126.0, 4452.0], [125.0, 4400.0], [124.0, 5692.0], [135.0, 4767.0], [134.0, 4568.0], [133.0, 4535.0], [132.0, 4466.0], [130.0, 4539.0], [129.0, 4755.0], [128.0, 4536.0], [143.0, 4542.0], [142.0, 4405.0], [141.0, 4571.0], [140.0, 4570.0], [139.0, 4560.0], [138.0, 6664.0], [137.0, 4538.0], [136.0, 4741.0], [151.0, 4401.0], [150.0, 4475.0], [149.0, 4740.0], [148.0, 4759.0], [147.0, 4380.0], [146.0, 4758.0], [145.0, 4699.0], [144.0, 4534.0], [159.0, 4288.0], [158.0, 4248.0], [157.0, 4614.0], [156.0, 4651.0], [155.0, 4305.0], [154.0, 4448.0], [153.0, 4648.0], [167.0, 4219.0], [166.0, 4527.0], [165.0, 4215.0], [164.0, 4262.0], [163.0, 4534.0], [162.0, 4389.0], [161.0, 4396.0], [160.0, 4248.0], [175.0, 6035.0], [174.0, 4195.0], [173.0, 4133.0], [172.0, 4196.0], [171.0, 4164.0], [170.0, 4477.0], [169.0, 4206.0], [168.0, 4216.0], [180.0, 3114.940285361994], [179.0, 4166.0], [178.0, 4318.0], [177.0, 4161.0], [176.0, 4181.0], [1.0, 182.0]], "isOverall": false, "label": "Home", "isController": false}, {"data": [[177.25051229508193, 3121.257513661212]], "isOverall": false, "label": "Home-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 180.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 565.5, "minX": 1.61253384E12, "maxY": 6540.45, "series": [{"data": [[1.6125339E12, 5711.483333333334], [1.61253402E12, 6411.316666666667], [1.61253384E12, 1329.6166666666666], [1.61253414E12, 3727.25], [1.61253396E12, 6540.45], [1.61253408E12, 6245.633333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6125339E12, 2428.8333333333335], [1.61253402E12, 2710.5], [1.61253384E12, 565.5], [1.61253414E12, 1575.1666666666667], [1.61253396E12, 2764.6666666666665], [1.61253408E12, 2643.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253414E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2466.4090163934425, "minX": 1.61253384E12, "maxY": 6610.647509578543, "series": [{"data": [[1.6125339E12, 3848.8349687778837], [1.61253402E12, 2715.3021582733763], [1.61253384E12, 6610.647509578543], [1.61253414E12, 2987.568088033016], [1.61253396E12, 2868.6026645768025], [1.61253408E12, 2466.4090163934425]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253414E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 91.66475409836085, "minX": 1.61253384E12, "maxY": 512.4444444444446, "series": [{"data": [[1.6125339E12, 146.77966101694904], [1.61253402E12, 100.00639488409273], [1.61253384E12, 512.4444444444446], [1.61253414E12, 107.88583218707005], [1.61253396E12, 104.39263322884021], [1.61253408E12, 91.66475409836085]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253414E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.6231086657496557, "minX": 1.61253384E12, "maxY": 30.919540229885026, "series": [{"data": [[1.6125339E12, 0.705619982158788], [1.61253402E12, 0.6714628297362117], [1.61253384E12, 30.919540229885026], [1.61253414E12, 0.6231086657496557], [1.61253396E12, 0.6927899686520359], [1.61253408E12, 0.6909836065573776]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253414E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.61253384E12, "maxY": 8478.0, "series": [{"data": [[1.6125339E12, 8478.0], [1.61253402E12, 5988.0], [1.61253384E12, 8455.0], [1.61253414E12, 7994.0], [1.61253396E12, 7987.0], [1.61253408E12, 7120.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6125339E12, 6372.0], [1.61253402E12, 4247.8], [1.61253384E12, 8306.8], [1.61253414E12, 4651.4], [1.61253396E12, 4663.799999999999], [1.61253408E12, 4194.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6125339E12, 6930.0], [1.61253402E12, 4585.200000000001], [1.61253384E12, 8340.9], [1.61253414E12, 6112.040000000003], [1.61253396E12, 5142.15], [1.61253408E12, 4432.58]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6125339E12, 6727.9], [1.61253402E12, 4312.0], [1.61253384E12, 8320.9], [1.61253414E12, 4766.6], [1.61253396E12, 4925.9], [1.61253408E12, 4296.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6125339E12, 175.0], [1.61253402E12, 175.0], [1.61253384E12, 176.0], [1.61253414E12, 175.0], [1.61253396E12, 176.0], [1.61253408E12, 176.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6125339E12, 4606.0], [1.61253402E12, 3038.0], [1.61253384E12, 7540.0], [1.61253414E12, 3600.0], [1.61253396E12, 3300.0], [1.61253408E12, 2733.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253414E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 237.0, "minX": 1.0, "maxY": 8149.0, "series": [{"data": [[3.0, 1729.0], [4.0, 1501.5], [5.0, 786.5], [6.0, 1710.0], [7.0, 1802.0], [8.0, 1944.0], [9.0, 2552.5], [10.0, 786.5], [11.0, 1108.5], [12.0, 3804.5], [13.0, 1625.0], [14.0, 2348.0], [15.0, 1912.5], [16.0, 2401.5], [17.0, 237.0], [18.0, 278.0], [19.0, 3169.0], [20.0, 1885.0], [21.0, 1794.0], [22.0, 1324.0], [23.0, 3752.5], [24.0, 697.0], [25.0, 3475.0], [26.0, 2712.5], [27.0, 3007.0], [28.0, 3776.5], [29.0, 3935.0], [30.0, 1091.5], [31.0, 4002.0], [32.0, 4492.5], [33.0, 3450.0], [34.0, 3901.5], [35.0, 4180.0], [36.0, 4344.0], [37.0, 4126.5], [39.0, 3859.0], [38.0, 5343.5], [40.0, 2385.0], [41.0, 4234.0], [42.0, 3522.5], [43.0, 4354.0], [44.0, 4004.5], [47.0, 5351.0], [46.0, 4294.5], [49.0, 3508.5], [48.0, 5332.0], [52.0, 4986.0], [53.0, 3863.5], [54.0, 5499.5], [55.0, 4188.0], [57.0, 5745.0], [65.0, 5970.0], [97.0, 6727.0], [141.0, 8149.0], [1.0, 2659.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 141.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 21.0, "minX": 1.0, "maxY": 885.0, "series": [{"data": [[3.0, 27.5], [4.0, 27.5], [5.0, 21.0], [6.0, 32.5], [7.0, 30.0], [8.0, 35.0], [9.0, 46.0], [10.0, 28.0], [11.0, 31.0], [12.0, 69.0], [13.0, 50.0], [14.0, 68.5], [15.0, 53.0], [16.0, 56.0], [17.0, 21.0], [18.0, 21.0], [19.0, 79.0], [20.0, 54.0], [21.0, 55.0], [22.0, 54.0], [23.0, 116.5], [24.0, 45.5], [25.0, 103.0], [26.0, 97.5], [27.0, 98.0], [28.0, 176.0], [29.0, 148.0], [30.0, 57.0], [31.0, 130.0], [32.0, 136.0], [33.0, 93.0], [34.0, 149.5], [35.0, 147.5], [36.0, 147.5], [37.0, 109.0], [39.0, 166.0], [38.0, 144.5], [40.0, 138.0], [41.0, 123.0], [42.0, 145.0], [43.0, 165.0], [44.0, 146.0], [47.0, 212.0], [46.0, 161.5], [49.0, 177.5], [48.0, 192.5], [52.0, 197.5], [53.0, 187.0], [54.0, 156.5], [55.0, 150.0], [57.0, 186.0], [65.0, 182.0], [97.0, 353.0], [141.0, 885.0], [1.0, 34.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 141.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.366666666666666, "minX": 1.61253384E12, "maxY": 21.383333333333333, "series": [{"data": [[1.6125339E12, 18.7], [1.61253402E12, 20.983333333333334], [1.61253384E12, 6.366666666666666], [1.61253414E12, 10.4], [1.61253396E12, 19.766666666666666], [1.61253408E12, 21.383333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253414E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.35, "minX": 1.61253384E12, "maxY": 21.266666666666666, "series": [{"data": [[1.6125339E12, 18.683333333333334], [1.61253402E12, 20.85], [1.61253384E12, 4.35], [1.61253414E12, 12.116666666666667], [1.61253396E12, 21.266666666666666], [1.61253408E12, 20.333333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253414E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.35, "minX": 1.61253384E12, "maxY": 21.266666666666666, "series": [{"data": [[1.6125339E12, 18.683333333333334], [1.61253402E12, 20.85], [1.61253384E12, 4.35], [1.61253414E12, 12.116666666666667], [1.61253396E12, 21.266666666666666], [1.61253408E12, 20.333333333333332]], "isOverall": false, "label": "Home-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253414E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.35, "minX": 1.61253384E12, "maxY": 21.266666666666666, "series": [{"data": [[1.6125339E12, 18.683333333333334], [1.61253402E12, 20.85], [1.61253384E12, 4.35], [1.61253414E12, 12.116666666666667], [1.61253396E12, 21.266666666666666], [1.61253408E12, 20.333333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253414E12, "title": "Total Transactions Per Second"}},
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

