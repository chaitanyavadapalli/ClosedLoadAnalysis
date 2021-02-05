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
        data: {"result": {"minY": 174.0, "minX": 0.0, "maxY": 5581.0, "series": [{"data": [[0.0, 174.0], [0.1, 175.0], [0.2, 175.0], [0.3, 175.0], [0.4, 176.0], [0.5, 176.0], [0.6, 176.0], [0.7, 176.0], [0.8, 176.0], [0.9, 176.0], [1.0, 176.0], [1.1, 176.0], [1.2, 176.0], [1.3, 176.0], [1.4, 176.0], [1.5, 176.0], [1.6, 177.0], [1.7, 177.0], [1.8, 177.0], [1.9, 177.0], [2.0, 177.0], [2.1, 177.0], [2.2, 177.0], [2.3, 177.0], [2.4, 177.0], [2.5, 177.0], [2.6, 177.0], [2.7, 178.0], [2.8, 178.0], [2.9, 178.0], [3.0, 178.0], [3.1, 178.0], [3.2, 178.0], [3.3, 178.0], [3.4, 178.0], [3.5, 178.0], [3.6, 178.0], [3.7, 178.0], [3.8, 178.0], [3.9, 178.0], [4.0, 178.0], [4.1, 179.0], [4.2, 179.0], [4.3, 179.0], [4.4, 179.0], [4.5, 179.0], [4.6, 179.0], [4.7, 179.0], [4.8, 179.0], [4.9, 179.0], [5.0, 179.0], [5.1, 179.0], [5.2, 179.0], [5.3, 179.0], [5.4, 179.0], [5.5, 179.0], [5.6, 179.0], [5.7, 180.0], [5.8, 180.0], [5.9, 180.0], [6.0, 180.0], [6.1, 180.0], [6.2, 180.0], [6.3, 180.0], [6.4, 180.0], [6.5, 180.0], [6.6, 180.0], [6.7, 180.0], [6.8, 180.0], [6.9, 180.0], [7.0, 180.0], [7.1, 180.0], [7.2, 180.0], [7.3, 180.0], [7.4, 180.0], [7.5, 180.0], [7.6, 180.0], [7.7, 180.0], [7.8, 181.0], [7.9, 181.0], [8.0, 181.0], [8.1, 181.0], [8.2, 181.0], [8.3, 181.0], [8.4, 181.0], [8.5, 181.0], [8.6, 181.0], [8.7, 181.0], [8.8, 181.0], [8.9, 181.0], [9.0, 181.0], [9.1, 181.0], [9.2, 181.0], [9.3, 181.0], [9.4, 181.0], [9.5, 181.0], [9.6, 181.0], [9.7, 181.0], [9.8, 181.0], [9.9, 181.0], [10.0, 181.0], [10.1, 181.0], [10.2, 181.0], [10.3, 181.0], [10.4, 181.0], [10.5, 182.0], [10.6, 182.0], [10.7, 182.0], [10.8, 182.0], [10.9, 182.0], [11.0, 182.0], [11.1, 182.0], [11.2, 182.0], [11.3, 182.0], [11.4, 182.0], [11.5, 182.0], [11.6, 182.0], [11.7, 182.0], [11.8, 182.0], [11.9, 182.0], [12.0, 182.0], [12.1, 182.0], [12.2, 182.0], [12.3, 182.0], [12.4, 182.0], [12.5, 182.0], [12.6, 182.0], [12.7, 182.0], [12.8, 182.0], [12.9, 183.0], [13.0, 183.0], [13.1, 183.0], [13.2, 183.0], [13.3, 183.0], [13.4, 183.0], [13.5, 183.0], [13.6, 183.0], [13.7, 183.0], [13.8, 183.0], [13.9, 183.0], [14.0, 183.0], [14.1, 183.0], [14.2, 183.0], [14.3, 183.0], [14.4, 183.0], [14.5, 183.0], [14.6, 183.0], [14.7, 183.0], [14.8, 183.0], [14.9, 183.0], [15.0, 183.0], [15.1, 183.0], [15.2, 183.0], [15.3, 183.0], [15.4, 183.0], [15.5, 183.0], [15.6, 184.0], [15.7, 184.0], [15.8, 184.0], [15.9, 184.0], [16.0, 184.0], [16.1, 184.0], [16.2, 184.0], [16.3, 184.0], [16.4, 184.0], [16.5, 184.0], [16.6, 184.0], [16.7, 184.0], [16.8, 184.0], [16.9, 184.0], [17.0, 184.0], [17.1, 184.0], [17.2, 184.0], [17.3, 184.0], [17.4, 184.0], [17.5, 184.0], [17.6, 184.0], [17.7, 185.0], [17.8, 185.0], [17.9, 185.0], [18.0, 185.0], [18.1, 185.0], [18.2, 185.0], [18.3, 185.0], [18.4, 185.0], [18.5, 185.0], [18.6, 185.0], [18.7, 185.0], [18.8, 185.0], [18.9, 185.0], [19.0, 185.0], [19.1, 185.0], [19.2, 185.0], [19.3, 186.0], [19.4, 186.0], [19.5, 186.0], [19.6, 186.0], [19.7, 186.0], [19.8, 186.0], [19.9, 186.0], [20.0, 186.0], [20.1, 186.0], [20.2, 186.0], [20.3, 186.0], [20.4, 187.0], [20.5, 187.0], [20.6, 187.0], [20.7, 187.0], [20.8, 187.0], [20.9, 187.0], [21.0, 188.0], [21.1, 188.0], [21.2, 188.0], [21.3, 188.0], [21.4, 188.0], [21.5, 188.0], [21.6, 188.0], [21.7, 189.0], [21.8, 189.0], [21.9, 189.0], [22.0, 189.0], [22.1, 189.0], [22.2, 189.0], [22.3, 190.0], [22.4, 190.0], [22.5, 190.0], [22.6, 190.0], [22.7, 191.0], [22.8, 191.0], [22.9, 191.0], [23.0, 191.0], [23.1, 191.0], [23.2, 191.0], [23.3, 192.0], [23.4, 192.0], [23.5, 192.0], [23.6, 192.0], [23.7, 193.0], [23.8, 193.0], [23.9, 193.0], [24.0, 193.0], [24.1, 193.0], [24.2, 194.0], [24.3, 194.0], [24.4, 194.0], [24.5, 195.0], [24.6, 195.0], [24.7, 195.0], [24.8, 196.0], [24.9, 196.0], [25.0, 196.0], [25.1, 197.0], [25.2, 197.0], [25.3, 198.0], [25.4, 198.0], [25.5, 199.0], [25.6, 199.0], [25.7, 200.0], [25.8, 200.0], [25.9, 200.0], [26.0, 201.0], [26.1, 201.0], [26.2, 201.0], [26.3, 201.0], [26.4, 202.0], [26.5, 202.0], [26.6, 202.0], [26.7, 202.0], [26.8, 203.0], [26.9, 203.0], [27.0, 204.0], [27.1, 204.0], [27.2, 204.0], [27.3, 205.0], [27.4, 205.0], [27.5, 206.0], [27.6, 206.0], [27.7, 206.0], [27.8, 207.0], [27.9, 207.0], [28.0, 208.0], [28.1, 208.0], [28.2, 209.0], [28.3, 209.0], [28.4, 209.0], [28.5, 210.0], [28.6, 210.0], [28.7, 211.0], [28.8, 213.0], [28.9, 213.0], [29.0, 213.0], [29.1, 213.0], [29.2, 214.0], [29.3, 214.0], [29.4, 215.0], [29.5, 215.0], [29.6, 216.0], [29.7, 216.0], [29.8, 218.0], [29.9, 218.0], [30.0, 219.0], [30.1, 219.0], [30.2, 220.0], [30.3, 220.0], [30.4, 220.0], [30.5, 221.0], [30.6, 221.0], [30.7, 222.0], [30.8, 223.0], [30.9, 223.0], [31.0, 224.0], [31.1, 224.0], [31.2, 225.0], [31.3, 226.0], [31.4, 227.0], [31.5, 228.0], [31.6, 228.0], [31.7, 229.0], [31.8, 230.0], [31.9, 231.0], [32.0, 232.0], [32.1, 233.0], [32.2, 234.0], [32.3, 236.0], [32.4, 237.0], [32.5, 238.0], [32.6, 238.0], [32.7, 240.0], [32.8, 240.0], [32.9, 241.0], [33.0, 243.0], [33.1, 244.0], [33.2, 245.0], [33.3, 248.0], [33.4, 249.0], [33.5, 250.0], [33.6, 251.0], [33.7, 251.0], [33.8, 252.0], [33.9, 254.0], [34.0, 255.0], [34.1, 257.0], [34.2, 258.0], [34.3, 260.0], [34.4, 261.0], [34.5, 264.0], [34.6, 265.0], [34.7, 266.0], [34.8, 269.0], [34.9, 269.0], [35.0, 271.0], [35.1, 273.0], [35.2, 275.0], [35.3, 277.0], [35.4, 278.0], [35.5, 281.0], [35.6, 283.0], [35.7, 287.0], [35.8, 293.0], [35.9, 293.0], [36.0, 294.0], [36.1, 296.0], [36.2, 297.0], [36.3, 301.0], [36.4, 305.0], [36.5, 306.0], [36.6, 310.0], [36.7, 313.0], [36.8, 316.0], [36.9, 317.0], [37.0, 320.0], [37.1, 325.0], [37.2, 328.0], [37.3, 330.0], [37.4, 332.0], [37.5, 333.0], [37.6, 335.0], [37.7, 336.0], [37.8, 337.0], [37.9, 340.0], [38.0, 342.0], [38.1, 344.0], [38.2, 345.0], [38.3, 348.0], [38.4, 350.0], [38.5, 351.0], [38.6, 353.0], [38.7, 355.0], [38.8, 356.0], [38.9, 357.0], [39.0, 359.0], [39.1, 361.0], [39.2, 364.0], [39.3, 367.0], [39.4, 369.0], [39.5, 370.0], [39.6, 376.0], [39.7, 379.0], [39.8, 380.0], [39.9, 382.0], [40.0, 383.0], [40.1, 386.0], [40.2, 388.0], [40.3, 391.0], [40.4, 394.0], [40.5, 395.0], [40.6, 396.0], [40.7, 399.0], [40.8, 402.0], [40.9, 405.0], [41.0, 407.0], [41.1, 412.0], [41.2, 415.0], [41.3, 417.0], [41.4, 418.0], [41.5, 421.0], [41.6, 425.0], [41.7, 428.0], [41.8, 430.0], [41.9, 431.0], [42.0, 433.0], [42.1, 438.0], [42.2, 441.0], [42.3, 444.0], [42.4, 449.0], [42.5, 452.0], [42.6, 457.0], [42.7, 460.0], [42.8, 464.0], [42.9, 468.0], [43.0, 475.0], [43.1, 482.0], [43.2, 484.0], [43.3, 488.0], [43.4, 492.0], [43.5, 494.0], [43.6, 496.0], [43.7, 500.0], [43.8, 506.0], [43.9, 509.0], [44.0, 513.0], [44.1, 521.0], [44.2, 524.0], [44.3, 526.0], [44.4, 529.0], [44.5, 535.0], [44.6, 538.0], [44.7, 538.0], [44.8, 544.0], [44.9, 549.0], [45.0, 550.0], [45.1, 557.0], [45.2, 561.0], [45.3, 565.0], [45.4, 568.0], [45.5, 572.0], [45.6, 579.0], [45.7, 583.0], [45.8, 590.0], [45.9, 596.0], [46.0, 601.0], [46.1, 610.0], [46.2, 613.0], [46.3, 616.0], [46.4, 620.0], [46.5, 623.0], [46.6, 624.0], [46.7, 630.0], [46.8, 632.0], [46.9, 638.0], [47.0, 643.0], [47.1, 645.0], [47.2, 649.0], [47.3, 656.0], [47.4, 659.0], [47.5, 663.0], [47.6, 665.0], [47.7, 666.0], [47.8, 669.0], [47.9, 674.0], [48.0, 678.0], [48.1, 682.0], [48.2, 688.0], [48.3, 692.0], [48.4, 696.0], [48.5, 702.0], [48.6, 704.0], [48.7, 708.0], [48.8, 711.0], [48.9, 716.0], [49.0, 719.0], [49.1, 724.0], [49.2, 729.0], [49.3, 732.0], [49.4, 736.0], [49.5, 739.0], [49.6, 741.0], [49.7, 743.0], [49.8, 747.0], [49.9, 749.0], [50.0, 757.0], [50.1, 762.0], [50.2, 766.0], [50.3, 768.0], [50.4, 772.0], [50.5, 775.0], [50.6, 781.0], [50.7, 783.0], [50.8, 785.0], [50.9, 791.0], [51.0, 794.0], [51.1, 799.0], [51.2, 804.0], [51.3, 811.0], [51.4, 815.0], [51.5, 817.0], [51.6, 820.0], [51.7, 824.0], [51.8, 832.0], [51.9, 835.0], [52.0, 840.0], [52.1, 842.0], [52.2, 849.0], [52.3, 852.0], [52.4, 855.0], [52.5, 859.0], [52.6, 862.0], [52.7, 867.0], [52.8, 871.0], [52.9, 874.0], [53.0, 878.0], [53.1, 884.0], [53.2, 889.0], [53.3, 894.0], [53.4, 898.0], [53.5, 899.0], [53.6, 904.0], [53.7, 905.0], [53.8, 906.0], [53.9, 910.0], [54.0, 912.0], [54.1, 915.0], [54.2, 917.0], [54.3, 921.0], [54.4, 926.0], [54.5, 928.0], [54.6, 930.0], [54.7, 933.0], [54.8, 938.0], [54.9, 941.0], [55.0, 944.0], [55.1, 950.0], [55.2, 955.0], [55.3, 956.0], [55.4, 962.0], [55.5, 964.0], [55.6, 970.0], [55.7, 973.0], [55.8, 977.0], [55.9, 981.0], [56.0, 985.0], [56.1, 987.0], [56.2, 990.0], [56.3, 994.0], [56.4, 997.0], [56.5, 1000.0], [56.6, 1004.0], [56.7, 1008.0], [56.8, 1011.0], [56.9, 1016.0], [57.0, 1020.0], [57.1, 1026.0], [57.2, 1029.0], [57.3, 1034.0], [57.4, 1036.0], [57.5, 1041.0], [57.6, 1044.0], [57.7, 1046.0], [57.8, 1050.0], [57.9, 1051.0], [58.0, 1052.0], [58.1, 1056.0], [58.2, 1059.0], [58.3, 1061.0], [58.4, 1064.0], [58.5, 1069.0], [58.6, 1072.0], [58.7, 1073.0], [58.8, 1075.0], [58.9, 1078.0], [59.0, 1084.0], [59.1, 1087.0], [59.2, 1090.0], [59.3, 1093.0], [59.4, 1095.0], [59.5, 1100.0], [59.6, 1102.0], [59.7, 1104.0], [59.8, 1110.0], [59.9, 1113.0], [60.0, 1115.0], [60.1, 1119.0], [60.2, 1124.0], [60.3, 1127.0], [60.4, 1130.0], [60.5, 1133.0], [60.6, 1133.0], [60.7, 1140.0], [60.8, 1144.0], [60.9, 1147.0], [61.0, 1148.0], [61.1, 1152.0], [61.2, 1155.0], [61.3, 1157.0], [61.4, 1160.0], [61.5, 1166.0], [61.6, 1168.0], [61.7, 1170.0], [61.8, 1171.0], [61.9, 1175.0], [62.0, 1177.0], [62.1, 1180.0], [62.2, 1180.0], [62.3, 1184.0], [62.4, 1185.0], [62.5, 1187.0], [62.6, 1190.0], [62.7, 1193.0], [62.8, 1194.0], [62.9, 1198.0], [63.0, 1203.0], [63.1, 1205.0], [63.2, 1207.0], [63.3, 1208.0], [63.4, 1211.0], [63.5, 1213.0], [63.6, 1216.0], [63.7, 1220.0], [63.8, 1223.0], [63.9, 1229.0], [64.0, 1232.0], [64.1, 1234.0], [64.2, 1237.0], [64.3, 1242.0], [64.4, 1246.0], [64.5, 1250.0], [64.6, 1254.0], [64.7, 1258.0], [64.8, 1260.0], [64.9, 1264.0], [65.0, 1269.0], [65.1, 1272.0], [65.2, 1276.0], [65.3, 1281.0], [65.4, 1286.0], [65.5, 1291.0], [65.6, 1294.0], [65.7, 1296.0], [65.8, 1302.0], [65.9, 1306.0], [66.0, 1309.0], [66.1, 1315.0], [66.2, 1319.0], [66.3, 1322.0], [66.4, 1326.0], [66.5, 1328.0], [66.6, 1333.0], [66.7, 1340.0], [66.8, 1342.0], [66.9, 1350.0], [67.0, 1354.0], [67.1, 1364.0], [67.2, 1374.0], [67.3, 1379.0], [67.4, 1383.0], [67.5, 1387.0], [67.6, 1395.0], [67.7, 1399.0], [67.8, 1404.0], [67.9, 1409.0], [68.0, 1414.0], [68.1, 1419.0], [68.2, 1426.0], [68.3, 1431.0], [68.4, 1440.0], [68.5, 1445.0], [68.6, 1452.0], [68.7, 1455.0], [68.8, 1462.0], [68.9, 1470.0], [69.0, 1475.0], [69.1, 1479.0], [69.2, 1489.0], [69.3, 1493.0], [69.4, 1498.0], [69.5, 1504.0], [69.6, 1510.0], [69.7, 1517.0], [69.8, 1522.0], [69.9, 1529.0], [70.0, 1538.0], [70.1, 1544.0], [70.2, 1550.0], [70.3, 1556.0], [70.4, 1568.0], [70.5, 1577.0], [70.6, 1578.0], [70.7, 1587.0], [70.8, 1595.0], [70.9, 1602.0], [71.0, 1606.0], [71.1, 1616.0], [71.2, 1622.0], [71.3, 1632.0], [71.4, 1638.0], [71.5, 1642.0], [71.6, 1657.0], [71.7, 1667.0], [71.8, 1673.0], [71.9, 1678.0], [72.0, 1688.0], [72.1, 1699.0], [72.2, 1708.0], [72.3, 1714.0], [72.4, 1719.0], [72.5, 1726.0], [72.6, 1731.0], [72.7, 1741.0], [72.8, 1752.0], [72.9, 1764.0], [73.0, 1776.0], [73.1, 1782.0], [73.2, 1785.0], [73.3, 1797.0], [73.4, 1806.0], [73.5, 1821.0], [73.6, 1831.0], [73.7, 1837.0], [73.8, 1848.0], [73.9, 1853.0], [74.0, 1857.0], [74.1, 1861.0], [74.2, 1867.0], [74.3, 1876.0], [74.4, 1882.0], [74.5, 1887.0], [74.6, 1901.0], [74.7, 1905.0], [74.8, 1915.0], [74.9, 1922.0], [75.0, 1933.0], [75.1, 1938.0], [75.2, 1941.0], [75.3, 1949.0], [75.4, 1954.0], [75.5, 1967.0], [75.6, 1972.0], [75.7, 1982.0], [75.8, 1994.0], [75.9, 2006.0], [76.0, 2018.0], [76.1, 2039.0], [76.2, 2062.0], [76.3, 2074.0], [76.4, 2087.0], [76.5, 2105.0], [76.6, 2111.0], [76.7, 2120.0], [76.8, 2134.0], [76.9, 2141.0], [77.0, 2159.0], [77.1, 2178.0], [77.2, 2184.0], [77.3, 2203.0], [77.4, 2215.0], [77.5, 2227.0], [77.6, 2241.0], [77.7, 2248.0], [77.8, 2258.0], [77.9, 2274.0], [78.0, 2290.0], [78.1, 2295.0], [78.2, 2303.0], [78.3, 2307.0], [78.4, 2315.0], [78.5, 2323.0], [78.6, 2327.0], [78.7, 2346.0], [78.8, 2353.0], [78.9, 2358.0], [79.0, 2367.0], [79.1, 2374.0], [79.2, 2390.0], [79.3, 2403.0], [79.4, 2407.0], [79.5, 2424.0], [79.6, 2446.0], [79.7, 2455.0], [79.8, 2476.0], [79.9, 2495.0], [80.0, 2512.0], [80.1, 2536.0], [80.2, 2540.0], [80.3, 2557.0], [80.4, 2566.0], [80.5, 2586.0], [80.6, 2599.0], [80.7, 2624.0], [80.8, 2635.0], [80.9, 2654.0], [81.0, 2662.0], [81.1, 2673.0], [81.2, 2674.0], [81.3, 2683.0], [81.4, 2686.0], [81.5, 2694.0], [81.6, 2700.0], [81.7, 2703.0], [81.8, 2707.0], [81.9, 2710.0], [82.0, 2716.0], [82.1, 2727.0], [82.2, 2733.0], [82.3, 2740.0], [82.4, 2751.0], [82.5, 2753.0], [82.6, 2766.0], [82.7, 2772.0], [82.8, 2780.0], [82.9, 2783.0], [83.0, 2795.0], [83.1, 2803.0], [83.2, 2812.0], [83.3, 2819.0], [83.4, 2825.0], [83.5, 2832.0], [83.6, 2845.0], [83.7, 2860.0], [83.8, 2872.0], [83.9, 2884.0], [84.0, 2897.0], [84.1, 2903.0], [84.2, 2917.0], [84.3, 2941.0], [84.4, 2953.0], [84.5, 2963.0], [84.6, 2979.0], [84.7, 3000.0], [84.8, 3011.0], [84.9, 3031.0], [85.0, 3047.0], [85.1, 3063.0], [85.2, 3073.0], [85.3, 3083.0], [85.4, 3098.0], [85.5, 3108.0], [85.6, 3116.0], [85.7, 3122.0], [85.8, 3135.0], [85.9, 3148.0], [86.0, 3155.0], [86.1, 3180.0], [86.2, 3190.0], [86.3, 3197.0], [86.4, 3204.0], [86.5, 3226.0], [86.6, 3236.0], [86.7, 3249.0], [86.8, 3282.0], [86.9, 3296.0], [87.0, 3302.0], [87.1, 3310.0], [87.2, 3317.0], [87.3, 3329.0], [87.4, 3336.0], [87.5, 3344.0], [87.6, 3353.0], [87.7, 3358.0], [87.8, 3367.0], [87.9, 3373.0], [88.0, 3390.0], [88.1, 3409.0], [88.2, 3416.0], [88.3, 3423.0], [88.4, 3444.0], [88.5, 3452.0], [88.6, 3467.0], [88.7, 3478.0], [88.8, 3488.0], [88.9, 3496.0], [89.0, 3511.0], [89.1, 3517.0], [89.2, 3525.0], [89.3, 3540.0], [89.4, 3546.0], [89.5, 3555.0], [89.6, 3562.0], [89.7, 3573.0], [89.8, 3579.0], [89.9, 3599.0], [90.0, 3608.0], [90.1, 3621.0], [90.2, 3634.0], [90.3, 3639.0], [90.4, 3646.0], [90.5, 3658.0], [90.6, 3663.0], [90.7, 3693.0], [90.8, 3702.0], [90.9, 3724.0], [91.0, 3735.0], [91.1, 3754.0], [91.2, 3791.0], [91.3, 3806.0], [91.4, 3816.0], [91.5, 3832.0], [91.6, 3842.0], [91.7, 3857.0], [91.8, 3875.0], [91.9, 3882.0], [92.0, 3905.0], [92.1, 3917.0], [92.2, 3931.0], [92.3, 3945.0], [92.4, 3958.0], [92.5, 3979.0], [92.6, 4009.0], [92.7, 4017.0], [92.8, 4035.0], [92.9, 4042.0], [93.0, 4053.0], [93.1, 4062.0], [93.2, 4077.0], [93.3, 4089.0], [93.4, 4101.0], [93.5, 4116.0], [93.6, 4129.0], [93.7, 4148.0], [93.8, 4152.0], [93.9, 4166.0], [94.0, 4181.0], [94.1, 4197.0], [94.2, 4204.0], [94.3, 4220.0], [94.4, 4231.0], [94.5, 4235.0], [94.6, 4241.0], [94.7, 4258.0], [94.8, 4278.0], [94.9, 4285.0], [95.0, 4303.0], [95.1, 4313.0], [95.2, 4322.0], [95.3, 4328.0], [95.4, 4349.0], [95.5, 4359.0], [95.6, 4375.0], [95.7, 4383.0], [95.8, 4390.0], [95.9, 4398.0], [96.0, 4407.0], [96.1, 4413.0], [96.2, 4427.0], [96.3, 4438.0], [96.4, 4445.0], [96.5, 4451.0], [96.6, 4452.0], [96.7, 4462.0], [96.8, 4471.0], [96.9, 4483.0], [97.0, 4496.0], [97.1, 4511.0], [97.2, 4526.0], [97.3, 4545.0], [97.4, 4565.0], [97.5, 4616.0], [97.6, 4646.0], [97.7, 4727.0], [97.8, 4948.0], [97.9, 5051.0], [98.0, 5259.0], [98.1, 5287.0], [98.2, 5345.0], [98.3, 5356.0], [98.4, 5367.0], [98.5, 5381.0], [98.6, 5386.0], [98.7, 5392.0], [98.8, 5399.0], [98.9, 5404.0], [99.0, 5420.0], [99.1, 5428.0], [99.2, 5434.0], [99.3, 5442.0], [99.4, 5475.0], [99.5, 5511.0], [99.6, 5546.0], [99.7, 5556.0], [99.8, 5561.0], [99.9, 5568.0], [100.0, 5581.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1254.0, "series": [{"data": [[600.0, 123.0], [700.0, 128.0], [800.0, 117.0], [900.0, 145.0], [1000.0, 147.0], [1100.0, 169.0], [1200.0, 135.0], [1300.0, 98.0], [1400.0, 82.0], [1500.0, 70.0], [1600.0, 62.0], [1700.0, 58.0], [1800.0, 63.0], [1900.0, 59.0], [2000.0, 31.0], [2100.0, 40.0], [2200.0, 42.0], [2300.0, 56.0], [2400.0, 32.0], [2500.0, 34.0], [2600.0, 47.0], [2800.0, 49.0], [2700.0, 71.0], [2900.0, 32.0], [3000.0, 35.0], [3100.0, 44.0], [3200.0, 32.0], [3300.0, 54.0], [3400.0, 43.0], [3500.0, 47.0], [3600.0, 42.0], [3700.0, 25.0], [3800.0, 31.0], [3900.0, 31.0], [4000.0, 40.0], [4300.0, 46.0], [4100.0, 37.0], [4200.0, 41.0], [4400.0, 55.0], [4500.0, 21.0], [4600.0, 10.0], [4700.0, 5.0], [4900.0, 2.0], [5000.0, 7.0], [5100.0, 1.0], [5200.0, 7.0], [5300.0, 33.0], [5400.0, 31.0], [5500.0, 27.0], [100.0, 1254.0], [200.0, 516.0], [300.0, 218.0], [400.0, 143.0], [500.0, 113.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1255.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2133.0, "series": [{"data": [[0.0, 2133.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1255.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1493.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 111.72885283893399, "minX": 1.61253234E12, "maxY": 120.0, "series": [{"data": [[1.61253264E12, 111.72885283893399], [1.61253234E12, 120.0], [1.61253252E12, 120.0], [1.6125324E12, 120.0], [1.61253258E12, 120.0], [1.61253246E12, 120.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253264E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 176.0, "minX": 1.0, "maxY": 1327.634817303659, "series": [{"data": [[2.0, 181.0], [3.0, 182.0], [4.0, 182.0], [5.0, 182.0], [6.0, 179.0], [7.0, 183.0], [8.0, 183.0], [9.0, 184.0], [10.0, 184.0], [11.0, 184.0], [12.0, 183.0], [13.0, 182.0], [14.0, 183.0], [15.0, 183.0], [16.0, 181.0], [17.0, 181.0], [18.0, 182.0], [19.0, 182.0], [20.0, 185.0], [21.0, 185.0], [22.0, 190.0], [23.0, 185.0], [24.0, 185.0], [25.0, 185.0], [26.0, 184.0], [27.0, 191.0], [28.0, 200.0], [29.0, 223.0], [30.0, 349.0], [31.0, 492.0], [33.0, 366.0], [32.0, 402.0], [35.0, 447.0], [34.0, 418.0], [37.0, 704.0], [36.0, 647.0], [39.0, 889.0], [38.0, 714.0], [41.0, 914.0], [40.0, 761.0], [43.0, 457.0], [42.0, 697.0], [45.0, 781.0], [44.0, 659.0], [47.0, 941.0], [46.0, 811.0], [49.0, 994.0], [48.0, 804.0], [51.0, 1144.0], [50.0, 695.0], [53.0, 939.0], [52.0, 932.0], [55.0, 949.0], [54.0, 1100.0], [57.0, 545.0], [56.0, 1014.0], [58.0, 1126.0], [61.0, 1073.0], [60.0, 1150.0], [63.0, 1068.0], [62.0, 990.0], [67.0, 1004.0], [66.0, 1020.0], [65.0, 980.0], [64.0, 1017.0], [71.0, 963.0], [70.0, 1088.0], [69.0, 944.0], [68.0, 955.0], [74.0, 1008.0], [73.0, 942.0], [72.0, 1034.0], [79.0, 794.0], [78.0, 929.0], [77.0, 977.0], [76.0, 952.0], [83.0, 729.0], [82.0, 801.0], [81.0, 835.0], [80.0, 783.0], [87.0, 512.0], [86.0, 663.0], [85.0, 736.0], [84.0, 656.0], [91.0, 550.0], [90.0, 563.0], [89.0, 497.0], [88.0, 643.0], [95.0, 451.0], [94.0, 344.0], [93.0, 444.0], [92.0, 506.0], [99.0, 316.0], [98.0, 425.0], [97.0, 429.0], [96.0, 318.0], [103.0, 286.0], [102.0, 352.0], [101.0, 305.0], [100.0, 336.0], [107.0, 185.0], [106.0, 226.0], [105.0, 266.0], [104.0, 265.0], [111.0, 209.0], [110.0, 204.0], [109.0, 178.0], [108.0, 180.0], [115.0, 176.0], [114.0, 189.0], [113.0, 184.0], [112.0, 193.0], [119.0, 180.0], [118.0, 180.0], [117.0, 179.0], [116.0, 179.0], [120.0, 1327.634817303659], [1.0, 178.0]], "isOverall": false, "label": "Home", "isController": false}, {"data": [[118.53759475517309, 1308.318582257739]], "isOverall": false, "label": "Home-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 120.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 260.0, "minX": 1.61253234E12, "maxY": 5570.4, "series": [{"data": [[1.61253264E12, 4403.2], [1.61253234E12, 615.1666666666666], [1.61253252E12, 5407.5], [1.6125324E12, 4192.366666666667], [1.61253258E12, 5570.4], [1.61253246E12, 4637.016666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61253264E12, 1869.8333333333333], [1.61253234E12, 260.0], [1.61253252E12, 2301.0], [1.6125324E12, 1789.6666666666667], [1.61253258E12, 2370.3333333333335], [1.61253246E12, 1984.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253264E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 524.2352259559667, "minX": 1.61253234E12, "maxY": 5319.341666666667, "series": [{"data": [[1.61253264E12, 524.2352259559667], [1.61253234E12, 5319.341666666667], [1.61253252E12, 872.8691148775879], [1.6125324E12, 2793.2627118644045], [1.61253258E12, 551.86197440585], [1.61253246E12, 1590.8384279475988]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253264E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 25.399768250289693, "minX": 1.61253234E12, "maxY": 369.9083333333334, "series": [{"data": [[1.61253264E12, 25.399768250289693], [1.61253234E12, 369.9083333333334], [1.61253252E12, 38.055555555555536], [1.6125324E12, 106.0835351089588], [1.61253258E12, 26.965265082266914], [1.61253246E12, 60.52183406113535]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253264E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5753295668549888, "minX": 1.61253234E12, "maxY": 52.51666666666667, "series": [{"data": [[1.61253264E12, 0.7439165701042877], [1.61253234E12, 52.51666666666667], [1.61253252E12, 0.5753295668549888], [1.6125324E12, 0.8256658595641653], [1.61253258E12, 0.7138939670932362], [1.61253246E12, 0.6943231441048037]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253264E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 174.0, "minX": 1.61253234E12, "maxY": 5581.0, "series": [{"data": [[1.61253264E12, 1415.0], [1.61253234E12, 5581.0], [1.61253252E12, 3423.0], [1.6125324E12, 4958.0], [1.61253258E12, 1605.0], [1.61253246E12, 4645.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61253264E12, 1139.2], [1.61253234E12, 5557.0], [1.61253252E12, 1856.4], [1.6125324E12, 4394.900000000001], [1.61253258E12, 1207.0], [1.61253246E12, 3077.6000000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61253264E12, 1313.72], [1.61253234E12, 5580.16], [1.61253252E12, 2373.37], [1.6125324E12, 4572.1900000000005], [1.61253258E12, 1445.0], [1.61253246E12, 3482.8800000000015]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61253264E12, 1215.3999999999999], [1.61253234E12, 5567.0], [1.61253252E12, 1971.6999999999998], [1.6125324E12, 4464.6], [1.61253258E12, 1320.5], [1.61253246E12, 3240.0999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61253264E12, 176.0], [1.61253234E12, 4381.0], [1.61253252E12, 175.0], [1.6125324E12, 175.0], [1.61253258E12, 175.0], [1.61253246E12, 174.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61253264E12, 321.0], [1.61253234E12, 5397.0], [1.61253252E12, 664.5], [1.6125324E12, 3496.0], [1.61253258E12, 331.0], [1.61253246E12, 1804.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253264E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 182.0, "minX": 1.0, "maxY": 5404.0, "series": [{"data": [[32.0, 2362.5], [2.0, 335.5], [34.0, 1395.5], [36.0, 1803.0], [39.0, 2089.0], [42.0, 2701.5], [46.0, 2750.0], [3.0, 186.0], [48.0, 3098.0], [50.0, 3208.0], [60.0, 3626.0], [67.0, 4470.0], [4.0, 1187.5], [68.0, 3866.5], [77.0, 3452.0], [5.0, 186.0], [84.0, 4094.0], [89.0, 4239.0], [6.0, 184.0], [107.0, 5404.0], [7.0, 845.0], [8.0, 183.0], [9.0, 182.0], [10.0, 247.0], [11.0, 188.0], [12.0, 191.0], [13.0, 189.0], [14.0, 192.0], [15.0, 215.0], [1.0, 779.5], [16.0, 290.5], [17.0, 198.0], [18.0, 286.0], [19.0, 336.5], [20.0, 380.5], [21.0, 210.0], [22.0, 1089.0], [23.0, 1072.0], [24.0, 1267.0], [25.0, 651.0], [26.0, 605.0], [27.0, 914.0], [28.0, 776.5], [29.0, 871.0], [30.0, 1095.5], [31.0, 1872.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8.0, "minX": 1.0, "maxY": 431.0, "series": [{"data": [[32.0, 63.0], [2.0, 16.0], [34.0, 61.0], [36.0, 82.0], [39.0, 107.0], [42.0, 107.0], [46.0, 105.5], [3.0, 17.0], [48.0, 124.5], [50.0, 132.5], [60.0, 124.0], [67.0, 246.0], [4.0, 22.0], [68.0, 149.5], [77.0, 130.0], [5.0, 15.0], [84.0, 166.0], [89.0, 178.0], [6.0, 13.0], [107.0, 431.0], [7.0, 19.0], [8.0, 10.5], [9.0, 8.0], [10.0, 18.0], [11.0, 11.0], [12.0, 9.0], [13.0, 9.0], [14.0, 12.0], [15.0, 16.5], [1.0, 18.0], [16.0, 19.0], [17.0, 13.0], [18.0, 21.0], [19.0, 21.0], [20.0, 26.0], [21.0, 10.0], [22.0, 36.0], [23.0, 45.0], [24.0, 49.0], [25.0, 38.0], [26.0, 26.0], [27.0, 44.0], [28.0, 38.0], [29.0, 49.0], [30.0, 52.0], [31.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.61253234E12, "maxY": 18.216666666666665, "series": [{"data": [[1.61253264E12, 14.316666666666666], [1.61253234E12, 2.0], [1.61253252E12, 17.666666666666668], [1.6125324E12, 13.766666666666667], [1.61253258E12, 18.216666666666665], [1.61253246E12, 15.383333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253264E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.61253234E12, "maxY": 18.233333333333334, "series": [{"data": [[1.61253264E12, 14.383333333333333], [1.61253234E12, 2.0], [1.61253252E12, 17.7], [1.6125324E12, 13.766666666666667], [1.61253258E12, 18.233333333333334], [1.61253246E12, 15.266666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253264E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.61253234E12, "maxY": 18.233333333333334, "series": [{"data": [[1.61253264E12, 14.383333333333333], [1.61253234E12, 2.0], [1.61253252E12, 17.7], [1.6125324E12, 13.766666666666667], [1.61253258E12, 18.233333333333334], [1.61253246E12, 15.266666666666667]], "isOverall": false, "label": "Home-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253264E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.61253234E12, "maxY": 18.233333333333334, "series": [{"data": [[1.61253264E12, 14.383333333333333], [1.61253234E12, 2.0], [1.61253252E12, 17.7], [1.6125324E12, 13.766666666666667], [1.61253258E12, 18.233333333333334], [1.61253246E12, 15.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253264E12, "title": "Total Transactions Per Second"}},
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

