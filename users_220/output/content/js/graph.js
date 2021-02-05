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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 10626.0, "series": [{"data": [[0.0, 175.0], [0.1, 175.0], [0.2, 176.0], [0.3, 176.0], [0.4, 176.0], [0.5, 177.0], [0.6, 177.0], [0.7, 177.0], [0.8, 177.0], [0.9, 177.0], [1.0, 178.0], [1.1, 178.0], [1.2, 178.0], [1.3, 178.0], [1.4, 179.0], [1.5, 179.0], [1.6, 179.0], [1.7, 180.0], [1.8, 180.0], [1.9, 180.0], [2.0, 180.0], [2.1, 181.0], [2.2, 181.0], [2.3, 181.0], [2.4, 181.0], [2.5, 181.0], [2.6, 181.0], [2.7, 182.0], [2.8, 182.0], [2.9, 182.0], [3.0, 182.0], [3.1, 182.0], [3.2, 182.0], [3.3, 183.0], [3.4, 183.0], [3.5, 183.0], [3.6, 183.0], [3.7, 183.0], [3.8, 183.0], [3.9, 183.0], [4.0, 184.0], [4.1, 184.0], [4.2, 184.0], [4.3, 184.0], [4.4, 184.0], [4.5, 185.0], [4.6, 185.0], [4.7, 185.0], [4.8, 186.0], [4.9, 186.0], [5.0, 187.0], [5.1, 187.0], [5.2, 187.0], [5.3, 188.0], [5.4, 190.0], [5.5, 191.0], [5.6, 192.0], [5.7, 193.0], [5.8, 194.0], [5.9, 196.0], [6.0, 197.0], [6.1, 198.0], [6.2, 200.0], [6.3, 202.0], [6.4, 204.0], [6.5, 208.0], [6.6, 209.0], [6.7, 211.0], [6.8, 213.0], [6.9, 216.0], [7.0, 219.0], [7.1, 221.0], [7.2, 226.0], [7.3, 228.0], [7.4, 232.0], [7.5, 235.0], [7.6, 241.0], [7.7, 244.0], [7.8, 247.0], [7.9, 252.0], [8.0, 255.0], [8.1, 263.0], [8.2, 268.0], [8.3, 275.0], [8.4, 280.0], [8.5, 290.0], [8.6, 300.0], [8.7, 305.0], [8.8, 320.0], [8.9, 330.0], [9.0, 341.0], [9.1, 351.0], [9.2, 356.0], [9.3, 361.0], [9.4, 370.0], [9.5, 377.0], [9.6, 386.0], [9.7, 390.0], [9.8, 398.0], [9.9, 404.0], [10.0, 423.0], [10.1, 428.0], [10.2, 441.0], [10.3, 454.0], [10.4, 460.0], [10.5, 467.0], [10.6, 491.0], [10.7, 505.0], [10.8, 519.0], [10.9, 526.0], [11.0, 536.0], [11.1, 559.0], [11.2, 570.0], [11.3, 589.0], [11.4, 599.0], [11.5, 608.0], [11.6, 619.0], [11.7, 629.0], [11.8, 637.0], [11.9, 649.0], [12.0, 659.0], [12.1, 664.0], [12.2, 681.0], [12.3, 686.0], [12.4, 696.0], [12.5, 717.0], [12.6, 721.0], [12.7, 725.0], [12.8, 733.0], [12.9, 746.0], [13.0, 760.0], [13.1, 773.0], [13.2, 782.0], [13.3, 799.0], [13.4, 811.0], [13.5, 815.0], [13.6, 827.0], [13.7, 846.0], [13.8, 865.0], [13.9, 878.0], [14.0, 887.0], [14.1, 892.0], [14.2, 906.0], [14.3, 917.0], [14.4, 923.0], [14.5, 931.0], [14.6, 943.0], [14.7, 950.0], [14.8, 964.0], [14.9, 974.0], [15.0, 990.0], [15.1, 998.0], [15.2, 1011.0], [15.3, 1021.0], [15.4, 1041.0], [15.5, 1066.0], [15.6, 1086.0], [15.7, 1106.0], [15.8, 1125.0], [15.9, 1151.0], [16.0, 1195.0], [16.1, 1227.0], [16.2, 1255.0], [16.3, 1277.0], [16.4, 1305.0], [16.5, 1318.0], [16.6, 1332.0], [16.7, 1358.0], [16.8, 1380.0], [16.9, 1387.0], [17.0, 1408.0], [17.1, 1433.0], [17.2, 1449.0], [17.3, 1467.0], [17.4, 1493.0], [17.5, 1508.0], [17.6, 1535.0], [17.7, 1563.0], [17.8, 1569.0], [17.9, 1595.0], [18.0, 1607.0], [18.1, 1644.0], [18.2, 1683.0], [18.3, 1705.0], [18.4, 1724.0], [18.5, 1753.0], [18.6, 1795.0], [18.7, 1803.0], [18.8, 1822.0], [18.9, 1846.0], [19.0, 1863.0], [19.1, 1880.0], [19.2, 1892.0], [19.3, 1905.0], [19.4, 1910.0], [19.5, 1931.0], [19.6, 1950.0], [19.7, 1974.0], [19.8, 1992.0], [19.9, 2009.0], [20.0, 2023.0], [20.1, 2049.0], [20.2, 2058.0], [20.3, 2077.0], [20.4, 2108.0], [20.5, 2142.0], [20.6, 2157.0], [20.7, 2229.0], [20.8, 2245.0], [20.9, 2259.0], [21.0, 2281.0], [21.1, 2315.0], [21.2, 2328.0], [21.3, 2352.0], [21.4, 2359.0], [21.5, 2379.0], [21.6, 2403.0], [21.7, 2435.0], [21.8, 2467.0], [21.9, 2503.0], [22.0, 2535.0], [22.1, 2551.0], [22.2, 2563.0], [22.3, 2601.0], [22.4, 2613.0], [22.5, 2635.0], [22.6, 2651.0], [22.7, 2677.0], [22.8, 2738.0], [22.9, 2762.0], [23.0, 2783.0], [23.1, 2798.0], [23.2, 2823.0], [23.3, 2848.0], [23.4, 2895.0], [23.5, 2933.0], [23.6, 2955.0], [23.7, 2996.0], [23.8, 3010.0], [23.9, 3023.0], [24.0, 3049.0], [24.1, 3083.0], [24.2, 3112.0], [24.3, 3121.0], [24.4, 3140.0], [24.5, 3153.0], [24.6, 3168.0], [24.7, 3211.0], [24.8, 3241.0], [24.9, 3289.0], [25.0, 3314.0], [25.1, 3348.0], [25.2, 3390.0], [25.3, 3412.0], [25.4, 3441.0], [25.5, 3470.0], [25.6, 3510.0], [25.7, 3555.0], [25.8, 3603.0], [25.9, 3633.0], [26.0, 3651.0], [26.1, 3681.0], [26.2, 3711.0], [26.3, 3723.0], [26.4, 3749.0], [26.5, 3764.0], [26.6, 3791.0], [26.7, 3829.0], [26.8, 3867.0], [26.9, 3886.0], [27.0, 3895.0], [27.1, 3909.0], [27.2, 3941.0], [27.3, 3955.0], [27.4, 3979.0], [27.5, 4016.0], [27.6, 4032.0], [27.7, 4061.0], [27.8, 4090.0], [27.9, 4124.0], [28.0, 4135.0], [28.1, 4166.0], [28.2, 4181.0], [28.3, 4207.0], [28.4, 4227.0], [28.5, 4241.0], [28.6, 4261.0], [28.7, 4276.0], [28.8, 4286.0], [28.9, 4306.0], [29.0, 4333.0], [29.1, 4347.0], [29.2, 4359.0], [29.3, 4364.0], [29.4, 4371.0], [29.5, 4384.0], [29.6, 4398.0], [29.7, 4409.0], [29.8, 4412.0], [29.9, 4417.0], [30.0, 4426.0], [30.1, 4444.0], [30.2, 4462.0], [30.3, 4482.0], [30.4, 4497.0], [30.5, 4508.0], [30.6, 4515.0], [30.7, 4529.0], [30.8, 4548.0], [30.9, 4567.0], [31.0, 4587.0], [31.1, 4602.0], [31.2, 4621.0], [31.3, 4637.0], [31.4, 4648.0], [31.5, 4669.0], [31.6, 4689.0], [31.7, 4706.0], [31.8, 4728.0], [31.9, 4741.0], [32.0, 4761.0], [32.1, 4770.0], [32.2, 4786.0], [32.3, 4804.0], [32.4, 4824.0], [32.5, 4835.0], [32.6, 4853.0], [32.7, 4865.0], [32.8, 4871.0], [32.9, 4884.0], [33.0, 4905.0], [33.1, 4916.0], [33.2, 4928.0], [33.3, 4934.0], [33.4, 4943.0], [33.5, 4950.0], [33.6, 4976.0], [33.7, 4985.0], [33.8, 5003.0], [33.9, 5015.0], [34.0, 5034.0], [34.1, 5046.0], [34.2, 5064.0], [34.3, 5077.0], [34.4, 5093.0], [34.5, 5103.0], [34.6, 5112.0], [34.7, 5116.0], [34.8, 5128.0], [34.9, 5139.0], [35.0, 5149.0], [35.1, 5162.0], [35.2, 5173.0], [35.3, 5187.0], [35.4, 5196.0], [35.5, 5204.0], [35.6, 5217.0], [35.7, 5242.0], [35.8, 5264.0], [35.9, 5277.0], [36.0, 5289.0], [36.1, 5306.0], [36.2, 5318.0], [36.3, 5324.0], [36.4, 5329.0], [36.5, 5338.0], [36.6, 5352.0], [36.7, 5358.0], [36.8, 5372.0], [36.9, 5379.0], [37.0, 5388.0], [37.1, 5394.0], [37.2, 5413.0], [37.3, 5428.0], [37.4, 5433.0], [37.5, 5442.0], [37.6, 5446.0], [37.7, 5455.0], [37.8, 5465.0], [37.9, 5476.0], [38.0, 5489.0], [38.1, 5502.0], [38.2, 5511.0], [38.3, 5515.0], [38.4, 5525.0], [38.5, 5546.0], [38.6, 5556.0], [38.7, 5566.0], [38.8, 5574.0], [38.9, 5584.0], [39.0, 5595.0], [39.1, 5604.0], [39.2, 5610.0], [39.3, 5623.0], [39.4, 5641.0], [39.5, 5649.0], [39.6, 5656.0], [39.7, 5672.0], [39.8, 5689.0], [39.9, 5706.0], [40.0, 5713.0], [40.1, 5732.0], [40.2, 5744.0], [40.3, 5754.0], [40.4, 5759.0], [40.5, 5773.0], [40.6, 5792.0], [40.7, 5798.0], [40.8, 5817.0], [40.9, 5823.0], [41.0, 5828.0], [41.1, 5838.0], [41.2, 5849.0], [41.3, 5863.0], [41.4, 5873.0], [41.5, 5878.0], [41.6, 5887.0], [41.7, 5906.0], [41.8, 5917.0], [41.9, 5926.0], [42.0, 5938.0], [42.1, 5954.0], [42.2, 5973.0], [42.3, 5982.0], [42.4, 5996.0], [42.5, 6006.0], [42.6, 6013.0], [42.7, 6019.0], [42.8, 6023.0], [42.9, 6033.0], [43.0, 6050.0], [43.1, 6064.0], [43.2, 6071.0], [43.3, 6078.0], [43.4, 6090.0], [43.5, 6099.0], [43.6, 6109.0], [43.7, 6112.0], [43.8, 6120.0], [43.9, 6134.0], [44.0, 6141.0], [44.1, 6145.0], [44.2, 6163.0], [44.3, 6175.0], [44.4, 6182.0], [44.5, 6194.0], [44.6, 6205.0], [44.7, 6209.0], [44.8, 6221.0], [44.9, 6233.0], [45.0, 6238.0], [45.1, 6245.0], [45.2, 6251.0], [45.3, 6257.0], [45.4, 6263.0], [45.5, 6266.0], [45.6, 6272.0], [45.7, 6282.0], [45.8, 6288.0], [45.9, 6292.0], [46.0, 6297.0], [46.1, 6307.0], [46.2, 6316.0], [46.3, 6330.0], [46.4, 6338.0], [46.5, 6345.0], [46.6, 6350.0], [46.7, 6356.0], [46.8, 6361.0], [46.9, 6365.0], [47.0, 6375.0], [47.1, 6383.0], [47.2, 6392.0], [47.3, 6397.0], [47.4, 6407.0], [47.5, 6418.0], [47.6, 6429.0], [47.7, 6439.0], [47.8, 6443.0], [47.9, 6451.0], [48.0, 6459.0], [48.1, 6461.0], [48.2, 6468.0], [48.3, 6475.0], [48.4, 6484.0], [48.5, 6492.0], [48.6, 6495.0], [48.7, 6505.0], [48.8, 6513.0], [48.9, 6518.0], [49.0, 6522.0], [49.1, 6528.0], [49.2, 6531.0], [49.3, 6544.0], [49.4, 6546.0], [49.5, 6553.0], [49.6, 6559.0], [49.7, 6561.0], [49.8, 6566.0], [49.9, 6571.0], [50.0, 6575.0], [50.1, 6584.0], [50.2, 6591.0], [50.3, 6591.0], [50.4, 6596.0], [50.5, 6600.0], [50.6, 6607.0], [50.7, 6609.0], [50.8, 6613.0], [50.9, 6616.0], [51.0, 6618.0], [51.1, 6621.0], [51.2, 6625.0], [51.3, 6633.0], [51.4, 6639.0], [51.5, 6643.0], [51.6, 6649.0], [51.7, 6654.0], [51.8, 6659.0], [51.9, 6663.0], [52.0, 6667.0], [52.1, 6673.0], [52.2, 6678.0], [52.3, 6688.0], [52.4, 6691.0], [52.5, 6701.0], [52.6, 6704.0], [52.7, 6709.0], [52.8, 6713.0], [52.9, 6719.0], [53.0, 6722.0], [53.1, 6725.0], [53.2, 6728.0], [53.3, 6735.0], [53.4, 6738.0], [53.5, 6745.0], [53.6, 6747.0], [53.7, 6749.0], [53.8, 6754.0], [53.9, 6759.0], [54.0, 6763.0], [54.1, 6766.0], [54.2, 6771.0], [54.3, 6776.0], [54.4, 6778.0], [54.5, 6781.0], [54.6, 6784.0], [54.7, 6789.0], [54.8, 6791.0], [54.9, 6798.0], [55.0, 6800.0], [55.1, 6802.0], [55.2, 6803.0], [55.3, 6808.0], [55.4, 6811.0], [55.5, 6813.0], [55.6, 6815.0], [55.7, 6817.0], [55.8, 6818.0], [55.9, 6824.0], [56.0, 6826.0], [56.1, 6829.0], [56.2, 6835.0], [56.3, 6837.0], [56.4, 6839.0], [56.5, 6842.0], [56.6, 6844.0], [56.7, 6847.0], [56.8, 6850.0], [56.9, 6853.0], [57.0, 6856.0], [57.1, 6860.0], [57.2, 6861.0], [57.3, 6865.0], [57.4, 6867.0], [57.5, 6869.0], [57.6, 6872.0], [57.7, 6874.0], [57.8, 6879.0], [57.9, 6884.0], [58.0, 6890.0], [58.1, 6894.0], [58.2, 6896.0], [58.3, 6899.0], [58.4, 6902.0], [58.5, 6904.0], [58.6, 6908.0], [58.7, 6911.0], [58.8, 6915.0], [58.9, 6920.0], [59.0, 6921.0], [59.1, 6924.0], [59.2, 6928.0], [59.3, 6931.0], [59.4, 6937.0], [59.5, 6941.0], [59.6, 6944.0], [59.7, 6945.0], [59.8, 6949.0], [59.9, 6951.0], [60.0, 6953.0], [60.1, 6955.0], [60.2, 6957.0], [60.3, 6962.0], [60.4, 6965.0], [60.5, 6968.0], [60.6, 6972.0], [60.7, 6974.0], [60.8, 6977.0], [60.9, 6981.0], [61.0, 6983.0], [61.1, 6987.0], [61.2, 6991.0], [61.3, 6993.0], [61.4, 6998.0], [61.5, 7001.0], [61.6, 7003.0], [61.7, 7005.0], [61.8, 7007.0], [61.9, 7011.0], [62.0, 7015.0], [62.1, 7018.0], [62.2, 7019.0], [62.3, 7021.0], [62.4, 7022.0], [62.5, 7025.0], [62.6, 7030.0], [62.7, 7032.0], [62.8, 7033.0], [62.9, 7039.0], [63.0, 7041.0], [63.1, 7044.0], [63.2, 7047.0], [63.3, 7049.0], [63.4, 7051.0], [63.5, 7054.0], [63.6, 7059.0], [63.7, 7060.0], [63.8, 7063.0], [63.9, 7067.0], [64.0, 7070.0], [64.1, 7073.0], [64.2, 7076.0], [64.3, 7078.0], [64.4, 7084.0], [64.5, 7090.0], [64.6, 7093.0], [64.7, 7097.0], [64.8, 7099.0], [64.9, 7101.0], [65.0, 7108.0], [65.1, 7112.0], [65.2, 7116.0], [65.3, 7121.0], [65.4, 7124.0], [65.5, 7128.0], [65.6, 7132.0], [65.7, 7137.0], [65.8, 7138.0], [65.9, 7143.0], [66.0, 7150.0], [66.1, 7151.0], [66.2, 7160.0], [66.3, 7165.0], [66.4, 7168.0], [66.5, 7177.0], [66.6, 7182.0], [66.7, 7184.0], [66.8, 7191.0], [66.9, 7195.0], [67.0, 7198.0], [67.1, 7199.0], [67.2, 7204.0], [67.3, 7211.0], [67.4, 7214.0], [67.5, 7219.0], [67.6, 7226.0], [67.7, 7233.0], [67.8, 7239.0], [67.9, 7243.0], [68.0, 7247.0], [68.1, 7254.0], [68.2, 7255.0], [68.3, 7259.0], [68.4, 7262.0], [68.5, 7264.0], [68.6, 7271.0], [68.7, 7284.0], [68.8, 7291.0], [68.9, 7294.0], [69.0, 7303.0], [69.1, 7307.0], [69.2, 7314.0], [69.3, 7321.0], [69.4, 7329.0], [69.5, 7334.0], [69.6, 7339.0], [69.7, 7352.0], [69.8, 7355.0], [69.9, 7359.0], [70.0, 7370.0], [70.1, 7379.0], [70.2, 7387.0], [70.3, 7395.0], [70.4, 7399.0], [70.5, 7413.0], [70.6, 7417.0], [70.7, 7420.0], [70.8, 7426.0], [70.9, 7430.0], [71.0, 7435.0], [71.1, 7442.0], [71.2, 7449.0], [71.3, 7453.0], [71.4, 7465.0], [71.5, 7469.0], [71.6, 7475.0], [71.7, 7483.0], [71.8, 7492.0], [71.9, 7499.0], [72.0, 7504.0], [72.1, 7509.0], [72.2, 7512.0], [72.3, 7517.0], [72.4, 7525.0], [72.5, 7530.0], [72.6, 7537.0], [72.7, 7541.0], [72.8, 7547.0], [72.9, 7552.0], [73.0, 7555.0], [73.1, 7561.0], [73.2, 7569.0], [73.3, 7575.0], [73.4, 7581.0], [73.5, 7590.0], [73.6, 7595.0], [73.7, 7600.0], [73.8, 7610.0], [73.9, 7623.0], [74.0, 7628.0], [74.1, 7637.0], [74.2, 7639.0], [74.3, 7652.0], [74.4, 7658.0], [74.5, 7669.0], [74.6, 7674.0], [74.7, 7680.0], [74.8, 7687.0], [74.9, 7700.0], [75.0, 7704.0], [75.1, 7722.0], [75.2, 7733.0], [75.3, 7740.0], [75.4, 7745.0], [75.5, 7754.0], [75.6, 7769.0], [75.7, 7775.0], [75.8, 7781.0], [75.9, 7786.0], [76.0, 7793.0], [76.1, 7798.0], [76.2, 7806.0], [76.3, 7812.0], [76.4, 7823.0], [76.5, 7833.0], [76.6, 7840.0], [76.7, 7845.0], [76.8, 7852.0], [76.9, 7856.0], [77.0, 7868.0], [77.1, 7873.0], [77.2, 7881.0], [77.3, 7885.0], [77.4, 7890.0], [77.5, 7897.0], [77.6, 7905.0], [77.7, 7909.0], [77.8, 7915.0], [77.9, 7920.0], [78.0, 7926.0], [78.1, 7936.0], [78.2, 7942.0], [78.3, 7948.0], [78.4, 7958.0], [78.5, 7964.0], [78.6, 7972.0], [78.7, 7977.0], [78.8, 7981.0], [78.9, 7984.0], [79.0, 7992.0], [79.1, 8002.0], [79.2, 8014.0], [79.3, 8022.0], [79.4, 8030.0], [79.5, 8040.0], [79.6, 8043.0], [79.7, 8058.0], [79.8, 8066.0], [79.9, 8069.0], [80.0, 8077.0], [80.1, 8082.0], [80.2, 8085.0], [80.3, 8095.0], [80.4, 8099.0], [80.5, 8104.0], [80.6, 8107.0], [80.7, 8112.0], [80.8, 8115.0], [80.9, 8119.0], [81.0, 8127.0], [81.1, 8131.0], [81.2, 8138.0], [81.3, 8147.0], [81.4, 8154.0], [81.5, 8162.0], [81.6, 8169.0], [81.7, 8171.0], [81.8, 8173.0], [81.9, 8175.0], [82.0, 8177.0], [82.1, 8181.0], [82.2, 8192.0], [82.3, 8194.0], [82.4, 8201.0], [82.5, 8205.0], [82.6, 8208.0], [82.7, 8219.0], [82.8, 8224.0], [82.9, 8230.0], [83.0, 8235.0], [83.1, 8241.0], [83.2, 8250.0], [83.3, 8257.0], [83.4, 8267.0], [83.5, 8271.0], [83.6, 8283.0], [83.7, 8295.0], [83.8, 8301.0], [83.9, 8304.0], [84.0, 8307.0], [84.1, 8311.0], [84.2, 8320.0], [84.3, 8321.0], [84.4, 8328.0], [84.5, 8331.0], [84.6, 8338.0], [84.7, 8348.0], [84.8, 8351.0], [84.9, 8360.0], [85.0, 8364.0], [85.1, 8368.0], [85.2, 8373.0], [85.3, 8379.0], [85.4, 8383.0], [85.5, 8395.0], [85.6, 8403.0], [85.7, 8409.0], [85.8, 8412.0], [85.9, 8415.0], [86.0, 8427.0], [86.1, 8429.0], [86.2, 8445.0], [86.3, 8448.0], [86.4, 8453.0], [86.5, 8462.0], [86.6, 8468.0], [86.7, 8475.0], [86.8, 8486.0], [86.9, 8494.0], [87.0, 8504.0], [87.1, 8514.0], [87.2, 8519.0], [87.3, 8522.0], [87.4, 8527.0], [87.5, 8531.0], [87.6, 8534.0], [87.7, 8536.0], [87.8, 8538.0], [87.9, 8544.0], [88.0, 8548.0], [88.1, 8552.0], [88.2, 8559.0], [88.3, 8568.0], [88.4, 8570.0], [88.5, 8575.0], [88.6, 8580.0], [88.7, 8586.0], [88.8, 8592.0], [88.9, 8594.0], [89.0, 8600.0], [89.1, 8612.0], [89.2, 8616.0], [89.3, 8622.0], [89.4, 8632.0], [89.5, 8637.0], [89.6, 8645.0], [89.7, 8650.0], [89.8, 8654.0], [89.9, 8660.0], [90.0, 8665.0], [90.1, 8669.0], [90.2, 8677.0], [90.3, 8680.0], [90.4, 8686.0], [90.5, 8694.0], [90.6, 8696.0], [90.7, 8701.0], [90.8, 8711.0], [90.9, 8717.0], [91.0, 8730.0], [91.1, 8735.0], [91.2, 8738.0], [91.3, 8744.0], [91.4, 8756.0], [91.5, 8765.0], [91.6, 8782.0], [91.7, 8806.0], [91.8, 8811.0], [91.9, 8822.0], [92.0, 8852.0], [92.1, 8859.0], [92.2, 8880.0], [92.3, 8894.0], [92.4, 8899.0], [92.5, 8912.0], [92.6, 8930.0], [92.7, 8948.0], [92.8, 8975.0], [92.9, 8992.0], [93.0, 9017.0], [93.1, 9032.0], [93.2, 9040.0], [93.3, 9067.0], [93.4, 9088.0], [93.5, 9098.0], [93.6, 9108.0], [93.7, 9122.0], [93.8, 9139.0], [93.9, 9161.0], [94.0, 9171.0], [94.1, 9192.0], [94.2, 9207.0], [94.3, 9224.0], [94.4, 9239.0], [94.5, 9250.0], [94.6, 9258.0], [94.7, 9267.0], [94.8, 9283.0], [94.9, 9289.0], [95.0, 9299.0], [95.1, 9305.0], [95.2, 9310.0], [95.3, 9339.0], [95.4, 9358.0], [95.5, 9368.0], [95.6, 9373.0], [95.7, 9381.0], [95.8, 9385.0], [95.9, 9403.0], [96.0, 9438.0], [96.1, 9483.0], [96.2, 9593.0], [96.3, 9647.0], [96.4, 9676.0], [96.5, 9711.0], [96.6, 9782.0], [96.7, 9802.0], [96.8, 9815.0], [96.9, 9829.0], [97.0, 9838.0], [97.1, 9844.0], [97.2, 9862.0], [97.3, 9874.0], [97.4, 9891.0], [97.5, 9897.0], [97.6, 9899.0], [97.7, 9909.0], [97.8, 9912.0], [97.9, 9925.0], [98.0, 9936.0], [98.1, 9944.0], [98.2, 9972.0], [98.3, 9991.0], [98.4, 10018.0], [98.5, 10020.0], [98.6, 10030.0], [98.7, 10056.0], [98.8, 10061.0], [98.9, 10069.0], [99.0, 10090.0], [99.1, 10099.0], [99.2, 10110.0], [99.3, 10120.0], [99.4, 10131.0], [99.5, 10143.0], [99.6, 10153.0], [99.7, 10171.0], [99.8, 10180.0], [99.9, 10266.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 349.0, "series": [{"data": [[100.0, 349.0], [200.0, 138.0], [300.0, 70.0], [400.0, 48.0], [500.0, 42.0], [600.0, 57.0], [700.0, 51.0], [800.0, 47.0], [900.0, 56.0], [1000.0, 29.0], [1100.0, 21.0], [1200.0, 20.0], [1300.0, 35.0], [1400.0, 26.0], [1500.0, 29.0], [1600.0, 18.0], [1700.0, 22.0], [1800.0, 36.0], [1900.0, 31.0], [2000.0, 30.0], [2100.0, 17.0], [2300.0, 31.0], [2200.0, 22.0], [2400.0, 15.0], [2500.0, 25.0], [2600.0, 23.0], [2700.0, 23.0], [2800.0, 18.0], [2900.0, 16.0], [3000.0, 26.0], [3100.0, 30.0], [3200.0, 16.0], [3300.0, 14.0], [3400.0, 21.0], [3500.0, 10.0], [3700.0, 26.0], [3600.0, 23.0], [3800.0, 21.0], [3900.0, 27.0], [4000.0, 19.0], [4100.0, 25.0], [4300.0, 42.0], [4200.0, 36.0], [4400.0, 45.0], [4500.0, 37.0], [4600.0, 35.0], [4800.0, 40.0], [4700.0, 32.0], [5100.0, 55.0], [4900.0, 46.0], [5000.0, 39.0], [5200.0, 33.0], [5300.0, 62.0], [5500.0, 56.0], [5600.0, 46.0], [5400.0, 55.0], [5700.0, 47.0], [5800.0, 54.0], [5900.0, 45.0], [6000.0, 60.0], [6100.0, 61.0], [6200.0, 83.0], [6300.0, 74.0], [6500.0, 102.0], [6400.0, 75.0], [6600.0, 114.0], [6800.0, 188.0], [6900.0, 178.0], [6700.0, 143.0], [7000.0, 192.0], [7100.0, 129.0], [7200.0, 104.0], [7300.0, 83.0], [7400.0, 86.0], [7500.0, 101.0], [7600.0, 68.0], [7900.0, 88.0], [7700.0, 69.0], [7800.0, 80.0], [8100.0, 108.0], [8000.0, 78.0], [8300.0, 103.0], [8500.0, 116.0], [8700.0, 56.0], [8200.0, 80.0], [8400.0, 77.0], [8600.0, 96.0], [9000.0, 34.0], [9100.0, 35.0], [9200.0, 50.0], [8800.0, 43.0], [8900.0, 29.0], [9300.0, 49.0], [9400.0, 14.0], [9500.0, 5.0], [9600.0, 13.0], [9700.0, 12.0], [9800.0, 54.0], [9900.0, 41.0], [10000.0, 43.0], [10100.0, 44.0], [10200.0, 2.0], [10300.0, 1.0], [10500.0, 2.0], [10400.0, 1.0], [10600.0, 1.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 382.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4684.0, "series": [{"data": [[0.0, 607.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 382.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4684.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 150.4277456647398, "minX": 1.6125348E12, "maxY": 220.0, "series": [{"data": [[1.61253486E12, 220.0], [1.61253498E12, 220.0], [1.6125348E12, 220.0], [1.6125351E12, 150.4277456647398], [1.61253492E12, 220.0], [1.61253504E12, 220.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6125351E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.0, "maxY": 6947.0, "series": [{"data": [[2.0, 1840.0], [3.0, 1795.0], [4.0, 1897.0], [5.0, 1880.0], [7.0, 1859.0], [8.0, 1928.5], [11.0, 1806.0], [12.0, 2000.0], [13.0, 1968.0], [15.0, 2063.0], [17.0, 1954.0], [19.0, 2027.5], [20.0, 2098.0], [21.0, 2018.0], [22.0, 1951.0], [23.0, 1959.0], [24.0, 1948.0], [25.0, 1690.0], [26.0, 1835.0], [27.0, 1936.0], [28.0, 1824.0], [30.0, 1902.5], [31.0, 2038.0], [33.0, 1864.0], [32.0, 2048.0], [35.0, 2052.0], [34.0, 1895.0], [37.0, 2068.0], [36.0, 2063.0], [39.0, 1947.0], [38.0, 1822.0], [41.0, 1650.0], [40.0, 1686.0], [43.0, 1459.0], [42.0, 1574.0], [45.0, 1456.0], [44.0, 1470.0], [47.0, 1414.0], [46.0, 1423.0], [49.0, 1318.0], [48.0, 1383.0], [51.0, 1062.0], [50.0, 1301.0], [53.0, 1108.0], [52.0, 1122.0], [55.0, 990.0], [54.0, 845.0], [57.0, 760.0], [56.0, 686.0], [59.0, 773.0], [58.0, 973.0], [61.0, 1015.0], [60.0, 961.0], [63.0, 973.0], [62.0, 973.0], [67.0, 922.0], [66.0, 781.0], [65.0, 780.5], [71.0, 1105.0], [70.0, 722.0], [69.0, 840.0], [68.0, 892.0], [75.0, 917.0], [74.0, 1235.0], [73.0, 922.0], [72.0, 919.0], [79.0, 722.0], [78.0, 652.0], [77.0, 877.0], [76.0, 686.0], [83.0, 460.0], [82.0, 518.0], [81.0, 637.0], [80.0, 536.0], [87.0, 359.0], [86.0, 361.0], [85.0, 431.0], [84.0, 305.0], [91.0, 184.0], [90.0, 184.0], [89.0, 246.0], [88.0, 305.0], [94.0, 192.0], [93.0, 187.0], [99.0, 180.0], [98.0, 181.0], [97.0, 180.0], [96.0, 179.5], [103.0, 370.0], [102.0, 186.0], [101.0, 179.0], [100.0, 180.0], [107.0, 607.0], [106.0, 390.0], [105.0, 425.5], [110.0, 1323.0], [109.0, 1170.0], [108.0, 748.0], [115.0, 1607.0], [114.0, 997.0], [113.0, 596.0], [112.0, 1403.5], [119.0, 2106.5], [117.0, 1906.0], [116.0, 1074.0], [123.0, 2123.0], [122.0, 2053.0], [121.0, 1491.0], [120.0, 2158.0], [127.0, 2820.0], [126.0, 2023.0], [125.0, 2462.0], [124.0, 2378.0], [135.0, 3179.0], [134.0, 3295.0], [133.0, 3088.0], [132.0, 2875.0], [131.0, 2847.0], [130.0, 3211.0], [129.0, 3330.0], [128.0, 3153.0], [143.0, 4261.0], [142.0, 3949.0], [141.0, 3725.0], [140.0, 3587.0], [139.0, 4031.0], [138.0, 3824.0], [137.0, 3322.0], [136.0, 3922.0], [151.0, 4804.0], [150.0, 4952.0], [149.0, 4653.0], [148.0, 4671.0], [146.0, 4410.0], [145.0, 4409.0], [144.0, 4359.0], [159.0, 5173.0], [158.0, 5594.0], [157.0, 5383.0], [156.0, 5520.0], [155.0, 5338.0], [154.0, 5203.0], [153.0, 4801.0], [152.0, 4587.0], [167.0, 5382.0], [166.0, 5793.0], [165.0, 5818.0], [164.0, 5473.0], [163.0, 5706.0], [162.0, 5142.0], [161.0, 5216.0], [160.0, 5656.0], [175.0, 5712.0], [174.0, 6112.0], [173.0, 6060.0], [172.0, 5982.0], [171.0, 5647.0], [170.0, 5852.0], [169.0, 5884.0], [168.0, 5703.0], [183.0, 6110.0], [182.0, 6135.0], [181.0, 6079.0], [180.0, 6019.0], [179.0, 5989.0], [178.0, 6339.0], [177.0, 5874.0], [176.0, 6135.0], [191.0, 6330.0], [190.0, 6443.0], [189.0, 6398.0], [188.0, 6301.0], [187.0, 6267.0], [186.0, 6324.0], [185.0, 6557.0], [184.0, 6333.0], [199.0, 6723.0], [198.0, 6348.0], [197.0, 6438.0], [195.0, 6456.0], [194.0, 6356.0], [193.0, 6485.0], [192.0, 6386.0], [207.0, 6597.0], [206.0, 6547.0], [205.0, 6705.0], [204.0, 6813.0], [203.0, 6835.0], [202.0, 6563.0], [200.0, 6774.0], [215.0, 6672.0], [214.0, 6615.0], [213.0, 6635.0], [212.0, 6871.0], [211.0, 6947.0], [210.0, 6572.0], [209.0, 6591.0], [208.0, 6719.0], [220.0, 5634.696552988634], [219.0, 6889.0], [218.0, 6707.0], [217.0, 6930.0], [216.0, 6846.0], [1.0, 2213.0]], "isOverall": false, "label": "Home", "isController": false}, {"data": [[215.75674246430475, 5535.53023091839]], "isOverall": false, "label": "Home-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 220.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 749.6666666666666, "minX": 1.6125348E12, "maxY": 6371.0, "series": [{"data": [[1.61253486E12, 5396.65], [1.61253498E12, 6134.416666666667], [1.6125348E12, 3556.516666666667], [1.6125351E12, 1772.55], [1.61253492E12, 5807.933333333333], [1.61253504E12, 6371.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61253486E12, 2288.0], [1.61253498E12, 2593.5], [1.6125348E12, 1508.0], [1.6125351E12, 749.6666666666666], [1.61253492E12, 2461.3333333333335], [1.61253504E12, 2691.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6125351E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4181.985549132954, "minX": 1.6125348E12, "maxY": 8433.800287356322, "series": [{"data": [[1.61253486E12, 6337.382575757582], [1.61253498E12, 4787.274853801169], [1.6125348E12, 8433.800287356322], [1.6125351E12, 4181.985549132954], [1.61253492E12, 5373.43309859156], [1.61253504E12, 4476.092592592591]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6125351E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 146.61271676300572, "minX": 1.6125348E12, "maxY": 376.61781609195407, "series": [{"data": [[1.61253486E12, 193.07765151515156], [1.61253498E12, 155.68003341687546], [1.6125348E12, 376.61781609195407], [1.6125351E12, 146.61271676300572], [1.61253492E12, 171.9269366197183], [1.61253504E12, 147.087761674718]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6125351E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5028901734104043, "minX": 1.6125348E12, "maxY": 14.899425287356339, "series": [{"data": [[1.61253486E12, 0.5255681818181818], [1.61253498E12, 0.5029239766081876], [1.6125348E12, 14.899425287356339], [1.6125351E12, 0.5028901734104043], [1.61253492E12, 0.5149647887323945], [1.61253504E12, 0.5491143317230269]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6125351E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.6125348E12, "maxY": 10626.0, "series": [{"data": [[1.61253486E12, 10069.0], [1.61253498E12, 10519.0], [1.6125348E12, 10266.0], [1.6125351E12, 7111.0], [1.61253492E12, 10543.0], [1.61253504E12, 10626.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61253486E12, 8594.0], [1.61253498E12, 7199.0], [1.6125348E12, 10053.6], [1.6125351E12, 6890.5], [1.61253492E12, 7886.0], [1.61253504E12, 6950.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61253486E12, 8810.600000000002], [1.61253498E12, 7721.36], [1.6125348E12, 10180.09], [1.6125351E12, 7069.59], [1.61253492E12, 8449.26], [1.61253504E12, 7130.139999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61253486E12, 8681.15], [1.61253498E12, 7284.1], [1.6125348E12, 10120.6], [1.6125351E12, 7012.3], [1.61253492E12, 8139.199999999999], [1.61253504E12, 7022.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61253486E12, 175.0], [1.61253498E12, 175.0], [1.6125348E12, 176.0], [1.6125351E12, 179.0], [1.61253492E12, 175.0], [1.61253504E12, 177.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61253486E12, 7960.5], [1.61253498E12, 5773.0], [1.6125348E12, 9097.5], [1.6125351E12, 4937.0], [1.61253492E12, 6897.5], [1.61253504E12, 5477.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6125351E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 327.0, "minX": 1.0, "maxY": 9944.0, "series": [{"data": [[2.0, 3573.0], [3.0, 2327.0], [4.0, 1768.5], [5.0, 2442.5], [6.0, 3755.0], [7.0, 2320.0], [8.0, 2417.0], [9.0, 2563.0], [10.0, 847.5], [11.0, 2487.5], [12.0, 336.5], [13.0, 781.0], [14.0, 5026.5], [15.0, 3515.0], [16.0, 4174.0], [17.0, 464.0], [18.0, 5903.5], [19.0, 327.0], [21.0, 1880.0], [22.0, 3303.5], [23.0, 3593.0], [24.0, 1304.5], [25.0, 4929.0], [26.0, 2031.5], [27.0, 6301.0], [28.0, 7074.5], [29.0, 8265.0], [30.0, 6972.5], [31.0, 5776.5], [33.0, 6568.0], [32.0, 6832.0], [35.0, 8622.0], [34.0, 4490.5], [36.0, 7877.0], [37.0, 5216.5], [38.0, 7166.5], [40.0, 6948.0], [41.0, 6148.0], [43.0, 7192.0], [42.0, 4114.5], [44.0, 5322.0], [45.0, 6903.0], [47.0, 5039.0], [46.0, 6559.5], [49.0, 5471.0], [51.0, 4778.0], [53.0, 5698.0], [52.0, 6916.5], [55.0, 4804.0], [54.0, 6657.0], [56.0, 6805.0], [59.0, 7015.5], [58.0, 6719.5], [61.0, 7407.0], [62.0, 7585.5], [67.0, 7840.0], [66.0, 6816.5], [74.0, 7690.5], [78.0, 8179.5], [80.0, 7781.5], [91.0, 8173.0], [106.0, 8505.0], [110.0, 8422.5], [138.0, 8531.0], [148.0, 8783.5], [159.0, 9254.0], [200.0, 9944.0], [1.0, 2911.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 200.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 19.5, "minX": 1.0, "maxY": 625.5, "series": [{"data": [[2.0, 33.5], [3.0, 33.0], [4.0, 23.5], [5.0, 42.0], [6.0, 44.0], [7.0, 34.0], [8.0, 47.5], [9.0, 41.0], [10.0, 27.5], [11.0, 49.0], [12.0, 19.5], [13.0, 29.0], [14.0, 58.5], [15.0, 60.5], [16.0, 106.5], [17.0, 25.0], [18.0, 109.0], [19.0, 21.0], [21.0, 49.0], [22.0, 55.0], [23.0, 172.0], [24.0, 55.0], [25.0, 78.0], [26.0, 173.5], [27.0, 134.0], [28.0, 152.0], [29.0, 120.0], [30.0, 140.5], [31.0, 160.5], [33.0, 123.0], [32.0, 160.5], [35.0, 102.0], [34.0, 184.5], [36.0, 94.0], [37.0, 164.0], [38.0, 181.0], [40.0, 178.5], [41.0, 263.0], [43.0, 188.0], [42.0, 250.5], [44.0, 241.0], [45.0, 209.0], [47.0, 223.0], [46.0, 242.5], [49.0, 275.5], [51.0, 303.0], [53.0, 278.0], [52.0, 216.5], [55.0, 280.0], [54.0, 254.0], [56.0, 233.0], [59.0, 243.0], [58.0, 264.5], [61.0, 239.0], [62.0, 209.0], [67.0, 317.0], [66.0, 309.0], [74.0, 297.5], [78.0, 239.0], [80.0, 251.5], [91.0, 264.0], [106.0, 248.0], [110.0, 257.0], [138.0, 296.0], [148.0, 306.5], [159.0, 386.0], [200.0, 625.5], [1.0, 21.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 200.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.466666666666667, "minX": 1.6125348E12, "maxY": 21.383333333333333, "series": [{"data": [[1.61253486E12, 17.6], [1.61253498E12, 21.383333333333333], [1.6125348E12, 11.616666666666667], [1.6125351E12, 3.466666666666667], [1.61253492E12, 19.2], [1.61253504E12, 21.283333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6125351E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.6125348E12, "maxY": 20.7, "series": [{"data": [[1.61253486E12, 17.6], [1.61253498E12, 19.95], [1.6125348E12, 11.6], [1.6125351E12, 5.766666666666667], [1.61253492E12, 18.933333333333334], [1.61253504E12, 20.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6125351E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.6125348E12, "maxY": 20.7, "series": [{"data": [[1.61253486E12, 17.6], [1.61253498E12, 19.95], [1.6125348E12, 11.6], [1.6125351E12, 5.766666666666667], [1.61253492E12, 18.933333333333334], [1.61253504E12, 20.7]], "isOverall": false, "label": "Home-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6125351E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.6125348E12, "maxY": 20.7, "series": [{"data": [[1.61253486E12, 17.6], [1.61253498E12, 19.95], [1.6125348E12, 11.6], [1.6125351E12, 5.766666666666667], [1.61253492E12, 18.933333333333334], [1.61253504E12, 20.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6125351E12, "title": "Total Transactions Per Second"}},
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

