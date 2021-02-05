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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 4179.0, "series": [{"data": [[0.0, 175.0], [0.1, 175.0], [0.2, 175.0], [0.3, 175.0], [0.4, 175.0], [0.5, 175.0], [0.6, 175.0], [0.7, 175.0], [0.8, 176.0], [0.9, 176.0], [1.0, 176.0], [1.1, 176.0], [1.2, 176.0], [1.3, 176.0], [1.4, 176.0], [1.5, 176.0], [1.6, 176.0], [1.7, 176.0], [1.8, 176.0], [1.9, 176.0], [2.0, 176.0], [2.1, 176.0], [2.2, 176.0], [2.3, 176.0], [2.4, 176.0], [2.5, 176.0], [2.6, 176.0], [2.7, 176.0], [2.8, 176.0], [2.9, 176.0], [3.0, 176.0], [3.1, 176.0], [3.2, 176.0], [3.3, 177.0], [3.4, 177.0], [3.5, 177.0], [3.6, 177.0], [3.7, 177.0], [3.8, 177.0], [3.9, 177.0], [4.0, 177.0], [4.1, 177.0], [4.2, 177.0], [4.3, 177.0], [4.4, 177.0], [4.5, 177.0], [4.6, 177.0], [4.7, 177.0], [4.8, 177.0], [4.9, 177.0], [5.0, 177.0], [5.1, 177.0], [5.2, 177.0], [5.3, 177.0], [5.4, 177.0], [5.5, 177.0], [5.6, 177.0], [5.7, 177.0], [5.8, 177.0], [5.9, 177.0], [6.0, 178.0], [6.1, 178.0], [6.2, 178.0], [6.3, 178.0], [6.4, 178.0], [6.5, 178.0], [6.6, 178.0], [6.7, 178.0], [6.8, 178.0], [6.9, 178.0], [7.0, 178.0], [7.1, 178.0], [7.2, 178.0], [7.3, 178.0], [7.4, 178.0], [7.5, 178.0], [7.6, 178.0], [7.7, 178.0], [7.8, 178.0], [7.9, 178.0], [8.0, 178.0], [8.1, 178.0], [8.2, 178.0], [8.3, 178.0], [8.4, 178.0], [8.5, 178.0], [8.6, 178.0], [8.7, 178.0], [8.8, 178.0], [8.9, 178.0], [9.0, 178.0], [9.1, 178.0], [9.2, 178.0], [9.3, 178.0], [9.4, 178.0], [9.5, 178.0], [9.6, 178.0], [9.7, 178.0], [9.8, 178.0], [9.9, 179.0], [10.0, 179.0], [10.1, 179.0], [10.2, 179.0], [10.3, 179.0], [10.4, 179.0], [10.5, 179.0], [10.6, 179.0], [10.7, 179.0], [10.8, 179.0], [10.9, 179.0], [11.0, 179.0], [11.1, 179.0], [11.2, 179.0], [11.3, 179.0], [11.4, 179.0], [11.5, 179.0], [11.6, 179.0], [11.7, 179.0], [11.8, 179.0], [11.9, 179.0], [12.0, 179.0], [12.1, 179.0], [12.2, 179.0], [12.3, 179.0], [12.4, 179.0], [12.5, 179.0], [12.6, 179.0], [12.7, 179.0], [12.8, 179.0], [12.9, 179.0], [13.0, 179.0], [13.1, 179.0], [13.2, 179.0], [13.3, 179.0], [13.4, 179.0], [13.5, 179.0], [13.6, 179.0], [13.7, 179.0], [13.8, 179.0], [13.9, 179.0], [14.0, 179.0], [14.1, 180.0], [14.2, 180.0], [14.3, 180.0], [14.4, 180.0], [14.5, 180.0], [14.6, 180.0], [14.7, 180.0], [14.8, 180.0], [14.9, 180.0], [15.0, 180.0], [15.1, 180.0], [15.2, 180.0], [15.3, 180.0], [15.4, 180.0], [15.5, 180.0], [15.6, 180.0], [15.7, 180.0], [15.8, 180.0], [15.9, 180.0], [16.0, 180.0], [16.1, 180.0], [16.2, 180.0], [16.3, 180.0], [16.4, 180.0], [16.5, 180.0], [16.6, 180.0], [16.7, 180.0], [16.8, 180.0], [16.9, 180.0], [17.0, 180.0], [17.1, 180.0], [17.2, 180.0], [17.3, 180.0], [17.4, 180.0], [17.5, 180.0], [17.6, 180.0], [17.7, 180.0], [17.8, 180.0], [17.9, 180.0], [18.0, 180.0], [18.1, 180.0], [18.2, 180.0], [18.3, 180.0], [18.4, 180.0], [18.5, 180.0], [18.6, 180.0], [18.7, 180.0], [18.8, 180.0], [18.9, 180.0], [19.0, 180.0], [19.1, 180.0], [19.2, 180.0], [19.3, 181.0], [19.4, 181.0], [19.5, 181.0], [19.6, 181.0], [19.7, 181.0], [19.8, 181.0], [19.9, 181.0], [20.0, 181.0], [20.1, 181.0], [20.2, 181.0], [20.3, 181.0], [20.4, 181.0], [20.5, 181.0], [20.6, 181.0], [20.7, 181.0], [20.8, 181.0], [20.9, 181.0], [21.0, 181.0], [21.1, 181.0], [21.2, 181.0], [21.3, 181.0], [21.4, 181.0], [21.5, 181.0], [21.6, 181.0], [21.7, 181.0], [21.8, 181.0], [21.9, 181.0], [22.0, 181.0], [22.1, 181.0], [22.2, 181.0], [22.3, 181.0], [22.4, 181.0], [22.5, 181.0], [22.6, 181.0], [22.7, 181.0], [22.8, 181.0], [22.9, 181.0], [23.0, 181.0], [23.1, 181.0], [23.2, 181.0], [23.3, 181.0], [23.4, 181.0], [23.5, 181.0], [23.6, 181.0], [23.7, 181.0], [23.8, 181.0], [23.9, 181.0], [24.0, 181.0], [24.1, 181.0], [24.2, 181.0], [24.3, 181.0], [24.4, 181.0], [24.5, 181.0], [24.6, 181.0], [24.7, 181.0], [24.8, 181.0], [24.9, 181.0], [25.0, 182.0], [25.1, 182.0], [25.2, 182.0], [25.3, 182.0], [25.4, 182.0], [25.5, 182.0], [25.6, 182.0], [25.7, 182.0], [25.8, 182.0], [25.9, 182.0], [26.0, 182.0], [26.1, 182.0], [26.2, 182.0], [26.3, 182.0], [26.4, 182.0], [26.5, 182.0], [26.6, 182.0], [26.7, 182.0], [26.8, 182.0], [26.9, 182.0], [27.0, 182.0], [27.1, 182.0], [27.2, 182.0], [27.3, 182.0], [27.4, 182.0], [27.5, 182.0], [27.6, 182.0], [27.7, 182.0], [27.8, 182.0], [27.9, 182.0], [28.0, 182.0], [28.1, 182.0], [28.2, 182.0], [28.3, 182.0], [28.4, 182.0], [28.5, 182.0], [28.6, 182.0], [28.7, 182.0], [28.8, 182.0], [28.9, 182.0], [29.0, 182.0], [29.1, 182.0], [29.2, 182.0], [29.3, 182.0], [29.4, 182.0], [29.5, 182.0], [29.6, 182.0], [29.7, 182.0], [29.8, 182.0], [29.9, 182.0], [30.0, 182.0], [30.1, 182.0], [30.2, 182.0], [30.3, 182.0], [30.4, 182.0], [30.5, 182.0], [30.6, 182.0], [30.7, 182.0], [30.8, 182.0], [30.9, 182.0], [31.0, 182.0], [31.1, 182.0], [31.2, 182.0], [31.3, 182.0], [31.4, 182.0], [31.5, 182.0], [31.6, 182.0], [31.7, 182.0], [31.8, 183.0], [31.9, 183.0], [32.0, 183.0], [32.1, 183.0], [32.2, 183.0], [32.3, 183.0], [32.4, 183.0], [32.5, 183.0], [32.6, 183.0], [32.7, 183.0], [32.8, 183.0], [32.9, 183.0], [33.0, 183.0], [33.1, 183.0], [33.2, 183.0], [33.3, 183.0], [33.4, 183.0], [33.5, 183.0], [33.6, 183.0], [33.7, 183.0], [33.8, 183.0], [33.9, 183.0], [34.0, 183.0], [34.1, 183.0], [34.2, 183.0], [34.3, 183.0], [34.4, 183.0], [34.5, 183.0], [34.6, 183.0], [34.7, 183.0], [34.8, 183.0], [34.9, 183.0], [35.0, 183.0], [35.1, 183.0], [35.2, 183.0], [35.3, 183.0], [35.4, 183.0], [35.5, 183.0], [35.6, 183.0], [35.7, 183.0], [35.8, 183.0], [35.9, 183.0], [36.0, 183.0], [36.1, 183.0], [36.2, 183.0], [36.3, 183.0], [36.4, 183.0], [36.5, 183.0], [36.6, 183.0], [36.7, 183.0], [36.8, 183.0], [36.9, 183.0], [37.0, 183.0], [37.1, 183.0], [37.2, 183.0], [37.3, 183.0], [37.4, 183.0], [37.5, 183.0], [37.6, 183.0], [37.7, 183.0], [37.8, 183.0], [37.9, 183.0], [38.0, 183.0], [38.1, 183.0], [38.2, 183.0], [38.3, 183.0], [38.4, 183.0], [38.5, 183.0], [38.6, 183.0], [38.7, 183.0], [38.8, 183.0], [38.9, 183.0], [39.0, 183.0], [39.1, 183.0], [39.2, 183.0], [39.3, 183.0], [39.4, 183.0], [39.5, 183.0], [39.6, 183.0], [39.7, 183.0], [39.8, 183.0], [39.9, 183.0], [40.0, 183.0], [40.1, 183.0], [40.2, 183.0], [40.3, 183.0], [40.4, 183.0], [40.5, 183.0], [40.6, 183.0], [40.7, 183.0], [40.8, 183.0], [40.9, 183.0], [41.0, 183.0], [41.1, 183.0], [41.2, 183.0], [41.3, 183.0], [41.4, 184.0], [41.5, 184.0], [41.6, 184.0], [41.7, 184.0], [41.8, 184.0], [41.9, 184.0], [42.0, 184.0], [42.1, 184.0], [42.2, 184.0], [42.3, 184.0], [42.4, 184.0], [42.5, 184.0], [42.6, 184.0], [42.7, 184.0], [42.8, 184.0], [42.9, 184.0], [43.0, 184.0], [43.1, 184.0], [43.2, 184.0], [43.3, 184.0], [43.4, 184.0], [43.5, 184.0], [43.6, 184.0], [43.7, 184.0], [43.8, 184.0], [43.9, 184.0], [44.0, 184.0], [44.1, 184.0], [44.2, 184.0], [44.3, 184.0], [44.4, 184.0], [44.5, 184.0], [44.6, 184.0], [44.7, 184.0], [44.8, 184.0], [44.9, 184.0], [45.0, 184.0], [45.1, 184.0], [45.2, 184.0], [45.3, 184.0], [45.4, 184.0], [45.5, 184.0], [45.6, 184.0], [45.7, 184.0], [45.8, 184.0], [45.9, 184.0], [46.0, 184.0], [46.1, 184.0], [46.2, 184.0], [46.3, 184.0], [46.4, 184.0], [46.5, 184.0], [46.6, 184.0], [46.7, 184.0], [46.8, 184.0], [46.9, 184.0], [47.0, 184.0], [47.1, 184.0], [47.2, 184.0], [47.3, 184.0], [47.4, 184.0], [47.5, 184.0], [47.6, 184.0], [47.7, 184.0], [47.8, 184.0], [47.9, 184.0], [48.0, 184.0], [48.1, 184.0], [48.2, 184.0], [48.3, 184.0], [48.4, 184.0], [48.5, 184.0], [48.6, 184.0], [48.7, 184.0], [48.8, 184.0], [48.9, 184.0], [49.0, 184.0], [49.1, 184.0], [49.2, 185.0], [49.3, 185.0], [49.4, 185.0], [49.5, 185.0], [49.6, 185.0], [49.7, 185.0], [49.8, 185.0], [49.9, 185.0], [50.0, 185.0], [50.1, 185.0], [50.2, 185.0], [50.3, 185.0], [50.4, 185.0], [50.5, 185.0], [50.6, 185.0], [50.7, 185.0], [50.8, 185.0], [50.9, 185.0], [51.0, 185.0], [51.1, 185.0], [51.2, 185.0], [51.3, 185.0], [51.4, 185.0], [51.5, 185.0], [51.6, 185.0], [51.7, 185.0], [51.8, 185.0], [51.9, 185.0], [52.0, 185.0], [52.1, 185.0], [52.2, 185.0], [52.3, 185.0], [52.4, 185.0], [52.5, 186.0], [52.6, 186.0], [52.7, 186.0], [52.8, 186.0], [52.9, 186.0], [53.0, 186.0], [53.1, 186.0], [53.2, 186.0], [53.3, 186.0], [53.4, 186.0], [53.5, 186.0], [53.6, 186.0], [53.7, 186.0], [53.8, 186.0], [53.9, 186.0], [54.0, 186.0], [54.1, 186.0], [54.2, 186.0], [54.3, 187.0], [54.4, 187.0], [54.5, 187.0], [54.6, 187.0], [54.7, 187.0], [54.8, 187.0], [54.9, 187.0], [55.0, 187.0], [55.1, 187.0], [55.2, 187.0], [55.3, 187.0], [55.4, 187.0], [55.5, 187.0], [55.6, 187.0], [55.7, 187.0], [55.8, 187.0], [55.9, 188.0], [56.0, 188.0], [56.1, 188.0], [56.2, 188.0], [56.3, 188.0], [56.4, 188.0], [56.5, 188.0], [56.6, 188.0], [56.7, 188.0], [56.8, 188.0], [56.9, 188.0], [57.0, 188.0], [57.1, 188.0], [57.2, 189.0], [57.3, 189.0], [57.4, 189.0], [57.5, 189.0], [57.6, 189.0], [57.7, 189.0], [57.8, 189.0], [57.9, 189.0], [58.0, 189.0], [58.1, 190.0], [58.2, 190.0], [58.3, 190.0], [58.4, 190.0], [58.5, 190.0], [58.6, 190.0], [58.7, 190.0], [58.8, 190.0], [58.9, 191.0], [59.0, 191.0], [59.1, 191.0], [59.2, 191.0], [59.3, 191.0], [59.4, 191.0], [59.5, 192.0], [59.6, 192.0], [59.7, 192.0], [59.8, 192.0], [59.9, 193.0], [60.0, 193.0], [60.1, 193.0], [60.2, 193.0], [60.3, 194.0], [60.4, 194.0], [60.5, 195.0], [60.6, 195.0], [60.7, 195.0], [60.8, 195.0], [60.9, 196.0], [61.0, 196.0], [61.1, 196.0], [61.2, 197.0], [61.3, 197.0], [61.4, 198.0], [61.5, 198.0], [61.6, 198.0], [61.7, 198.0], [61.8, 199.0], [61.9, 199.0], [62.0, 199.0], [62.1, 200.0], [62.2, 200.0], [62.3, 200.0], [62.4, 201.0], [62.5, 201.0], [62.6, 202.0], [62.7, 202.0], [62.8, 203.0], [62.9, 203.0], [63.0, 204.0], [63.1, 205.0], [63.2, 205.0], [63.3, 206.0], [63.4, 206.0], [63.5, 207.0], [63.6, 208.0], [63.7, 209.0], [63.8, 210.0], [63.9, 211.0], [64.0, 212.0], [64.1, 212.0], [64.2, 213.0], [64.3, 214.0], [64.4, 214.0], [64.5, 216.0], [64.6, 218.0], [64.7, 218.0], [64.8, 221.0], [64.9, 221.0], [65.0, 222.0], [65.1, 223.0], [65.2, 225.0], [65.3, 225.0], [65.4, 227.0], [65.5, 227.0], [65.6, 228.0], [65.7, 229.0], [65.8, 230.0], [65.9, 232.0], [66.0, 232.0], [66.1, 233.0], [66.2, 235.0], [66.3, 237.0], [66.4, 240.0], [66.5, 242.0], [66.6, 244.0], [66.7, 246.0], [66.8, 247.0], [66.9, 249.0], [67.0, 252.0], [67.1, 254.0], [67.2, 255.0], [67.3, 260.0], [67.4, 265.0], [67.5, 268.0], [67.6, 272.0], [67.7, 274.0], [67.8, 275.0], [67.9, 279.0], [68.0, 282.0], [68.1, 286.0], [68.2, 292.0], [68.3, 294.0], [68.4, 296.0], [68.5, 299.0], [68.6, 302.0], [68.7, 305.0], [68.8, 309.0], [68.9, 314.0], [69.0, 316.0], [69.1, 318.0], [69.2, 325.0], [69.3, 330.0], [69.4, 335.0], [69.5, 339.0], [69.6, 344.0], [69.7, 348.0], [69.8, 348.0], [69.9, 352.0], [70.0, 358.0], [70.1, 360.0], [70.2, 363.0], [70.3, 367.0], [70.4, 369.0], [70.5, 373.0], [70.6, 375.0], [70.7, 380.0], [70.8, 385.0], [70.9, 389.0], [71.0, 393.0], [71.1, 396.0], [71.2, 398.0], [71.3, 401.0], [71.4, 403.0], [71.5, 404.0], [71.6, 406.0], [71.7, 409.0], [71.8, 411.0], [71.9, 416.0], [72.0, 419.0], [72.1, 421.0], [72.2, 423.0], [72.3, 430.0], [72.4, 432.0], [72.5, 436.0], [72.6, 438.0], [72.7, 441.0], [72.8, 447.0], [72.9, 451.0], [73.0, 454.0], [73.1, 457.0], [73.2, 461.0], [73.3, 466.0], [73.4, 468.0], [73.5, 469.0], [73.6, 473.0], [73.7, 481.0], [73.8, 486.0], [73.9, 487.0], [74.0, 499.0], [74.1, 503.0], [74.2, 508.0], [74.3, 514.0], [74.4, 517.0], [74.5, 521.0], [74.6, 524.0], [74.7, 525.0], [74.8, 528.0], [74.9, 535.0], [75.0, 542.0], [75.1, 550.0], [75.2, 554.0], [75.3, 558.0], [75.4, 563.0], [75.5, 567.0], [75.6, 576.0], [75.7, 583.0], [75.8, 586.0], [75.9, 588.0], [76.0, 592.0], [76.1, 598.0], [76.2, 602.0], [76.3, 607.0], [76.4, 610.0], [76.5, 614.0], [76.6, 620.0], [76.7, 623.0], [76.8, 631.0], [76.9, 635.0], [77.0, 643.0], [77.1, 653.0], [77.2, 659.0], [77.3, 664.0], [77.4, 670.0], [77.5, 683.0], [77.6, 685.0], [77.7, 698.0], [77.8, 702.0], [77.9, 711.0], [78.0, 724.0], [78.1, 736.0], [78.2, 747.0], [78.3, 752.0], [78.4, 760.0], [78.5, 774.0], [78.6, 787.0], [78.7, 794.0], [78.8, 824.0], [78.9, 833.0], [79.0, 841.0], [79.1, 847.0], [79.2, 856.0], [79.3, 865.0], [79.4, 869.0], [79.5, 877.0], [79.6, 885.0], [79.7, 893.0], [79.8, 907.0], [79.9, 916.0], [80.0, 925.0], [80.1, 944.0], [80.2, 951.0], [80.3, 956.0], [80.4, 966.0], [80.5, 975.0], [80.6, 986.0], [80.7, 991.0], [80.8, 994.0], [80.9, 1003.0], [81.0, 1008.0], [81.1, 1027.0], [81.2, 1038.0], [81.3, 1045.0], [81.4, 1056.0], [81.5, 1063.0], [81.6, 1079.0], [81.7, 1089.0], [81.8, 1097.0], [81.9, 1103.0], [82.0, 1105.0], [82.1, 1109.0], [82.2, 1134.0], [82.3, 1151.0], [82.4, 1176.0], [82.5, 1182.0], [82.6, 1188.0], [82.7, 1203.0], [82.8, 1215.0], [82.9, 1226.0], [83.0, 1233.0], [83.1, 1236.0], [83.2, 1248.0], [83.3, 1256.0], [83.4, 1265.0], [83.5, 1271.0], [83.6, 1276.0], [83.7, 1283.0], [83.8, 1295.0], [83.9, 1303.0], [84.0, 1322.0], [84.1, 1342.0], [84.2, 1367.0], [84.3, 1377.0], [84.4, 1384.0], [84.5, 1395.0], [84.6, 1405.0], [84.7, 1412.0], [84.8, 1422.0], [84.9, 1428.0], [85.0, 1444.0], [85.1, 1463.0], [85.2, 1481.0], [85.3, 1502.0], [85.4, 1523.0], [85.5, 1550.0], [85.6, 1566.0], [85.7, 1590.0], [85.8, 1635.0], [85.9, 1645.0], [86.0, 1661.0], [86.1, 1671.0], [86.2, 1683.0], [86.3, 1689.0], [86.4, 1702.0], [86.5, 1712.0], [86.6, 1728.0], [86.7, 1779.0], [86.8, 1798.0], [86.9, 1816.0], [87.0, 1828.0], [87.1, 1851.0], [87.2, 1865.0], [87.3, 1884.0], [87.4, 1893.0], [87.5, 1903.0], [87.6, 1921.0], [87.7, 1932.0], [87.8, 1945.0], [87.9, 1953.0], [88.0, 1975.0], [88.1, 1980.0], [88.2, 2006.0], [88.3, 2019.0], [88.4, 2027.0], [88.5, 2032.0], [88.6, 2044.0], [88.7, 2059.0], [88.8, 2076.0], [88.9, 2098.0], [89.0, 2121.0], [89.1, 2140.0], [89.2, 2170.0], [89.3, 2177.0], [89.4, 2190.0], [89.5, 2212.0], [89.6, 2229.0], [89.7, 2240.0], [89.8, 2243.0], [89.9, 2254.0], [90.0, 2265.0], [90.1, 2272.0], [90.2, 2285.0], [90.3, 2288.0], [90.4, 2291.0], [90.5, 2301.0], [90.6, 2311.0], [90.7, 2333.0], [90.8, 2340.0], [90.9, 2348.0], [91.0, 2355.0], [91.1, 2361.0], [91.2, 2372.0], [91.3, 2380.0], [91.4, 2386.0], [91.5, 2391.0], [91.6, 2395.0], [91.7, 2402.0], [91.8, 2410.0], [91.9, 2416.0], [92.0, 2429.0], [92.1, 2432.0], [92.2, 2434.0], [92.3, 2452.0], [92.4, 2459.0], [92.5, 2464.0], [92.6, 2475.0], [92.7, 2480.0], [92.8, 2482.0], [92.9, 2490.0], [93.0, 2501.0], [93.1, 2518.0], [93.2, 2525.0], [93.3, 2544.0], [93.4, 2557.0], [93.5, 2560.0], [93.6, 2562.0], [93.7, 2566.0], [93.8, 2569.0], [93.9, 2573.0], [94.0, 2582.0], [94.1, 2585.0], [94.2, 2607.0], [94.3, 2622.0], [94.4, 2712.0], [94.5, 2754.0], [94.6, 2791.0], [94.7, 2849.0], [94.8, 2894.0], [94.9, 2914.0], [95.0, 2973.0], [95.1, 2991.0], [95.2, 3002.0], [95.3, 3012.0], [95.4, 3018.0], [95.5, 3023.0], [95.6, 3028.0], [95.7, 3036.0], [95.8, 3040.0], [95.9, 3055.0], [96.0, 3089.0], [96.1, 3210.0], [96.2, 3475.0], [96.3, 3504.0], [96.4, 3532.0], [96.5, 3541.0], [96.6, 3547.0], [96.7, 3557.0], [96.8, 3563.0], [96.9, 3568.0], [97.0, 3581.0], [97.1, 3608.0], [97.2, 3620.0], [97.3, 3625.0], [97.4, 3635.0], [97.5, 3647.0], [97.6, 3662.0], [97.7, 3688.0], [97.8, 3703.0], [97.9, 3829.0], [98.0, 3881.0], [98.1, 3925.0], [98.2, 3969.0], [98.3, 3980.0], [98.4, 3996.0], [98.5, 4071.0], [98.6, 4074.0], [98.7, 4091.0], [98.8, 4101.0], [98.9, 4110.0], [99.0, 4130.0], [99.1, 4140.0], [99.2, 4148.0], [99.3, 4150.0], [99.4, 4154.0], [99.5, 4161.0], [99.6, 4165.0], [99.7, 4168.0], [99.8, 4174.0], [99.9, 4176.0], [100.0, 4179.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 2494.0, "series": [{"data": [[600.0, 66.0], [700.0, 39.0], [800.0, 41.0], [900.0, 44.0], [1000.0, 39.0], [1100.0, 33.0], [1200.0, 50.0], [1300.0, 28.0], [1400.0, 28.0], [1500.0, 17.0], [100.0, 2494.0], [1600.0, 27.0], [1700.0, 17.0], [1800.0, 26.0], [1900.0, 28.0], [2000.0, 31.0], [2100.0, 21.0], [2200.0, 41.0], [2300.0, 47.0], [2400.0, 54.0], [2500.0, 47.0], [2600.0, 10.0], [2700.0, 10.0], [2800.0, 7.0], [2900.0, 15.0], [3000.0, 35.0], [3100.0, 1.0], [3200.0, 2.0], [3300.0, 1.0], [200.0, 259.0], [3400.0, 4.0], [3500.0, 31.0], [3700.0, 4.0], [3600.0, 30.0], [3800.0, 6.0], [3900.0, 16.0], [4000.0, 14.0], [4100.0, 49.0], [300.0, 110.0], [400.0, 110.0], [500.0, 85.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 452.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2974.0, "series": [{"data": [[0.0, 2974.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 452.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 591.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 42.04819277108433, "minX": 1.61253198E12, "maxY": 90.0, "series": [{"data": [[1.61253216E12, 90.0], [1.61253204E12, 90.0], [1.61253222E12, 89.9769319492503], [1.6125321E12, 90.0], [1.61253228E12, 42.04819277108433], [1.61253198E12, 90.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253228E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.0, "maxY": 662.3316365487406, "series": [{"data": [[2.0, 183.0], [3.0, 183.0], [4.0, 183.0], [5.0, 183.0], [6.0, 184.0], [7.0, 184.0], [8.0, 184.0], [9.0, 182.0], [10.0, 184.0], [11.0, 180.0], [12.0, 181.0], [13.0, 182.0], [14.0, 182.0], [15.0, 191.0], [17.0, 190.0], [18.0, 195.0], [19.0, 199.0], [20.0, 191.0], [21.0, 295.0], [22.0, 191.0], [23.0, 201.0], [24.0, 186.0], [25.0, 183.0], [27.0, 186.5], [28.0, 183.0], [29.0, 182.0], [30.0, 185.0], [31.0, 186.0], [33.0, 183.0], [32.0, 182.0], [35.0, 182.0], [34.0, 181.0], [37.0, 180.0], [36.0, 181.0], [39.0, 183.0], [38.0, 182.0], [41.0, 181.0], [40.0, 183.0], [43.0, 181.0], [42.0, 183.0], [45.0, 186.5], [47.0, 184.0], [46.0, 184.0], [49.0, 186.0], [48.0, 183.0], [51.0, 183.0], [50.0, 184.0], [53.0, 184.0], [52.0, 184.0], [55.0, 181.0], [54.0, 183.0], [57.0, 184.0], [56.0, 187.0], [59.0, 185.0], [58.0, 187.0], [61.0, 185.0], [60.0, 185.0], [63.0, 184.0], [62.0, 186.0], [67.0, 183.0], [66.0, 184.0], [65.0, 184.0], [64.0, 184.0], [71.0, 183.0], [70.0, 184.0], [69.0, 183.0], [68.0, 184.0], [75.0, 184.0], [74.0, 184.0], [73.0, 182.0], [72.0, 182.0], [79.0, 184.0], [78.0, 185.5], [76.0, 182.0], [83.0, 183.0], [82.0, 192.0], [81.0, 183.0], [80.0, 182.0], [87.0, 180.0], [86.0, 178.0], [85.0, 180.0], [84.0, 182.0], [90.0, 662.3316365487406], [88.0, 181.0], [1.0, 187.0]], "isOverall": false, "label": "Home", "isController": false}, {"data": [[89.00423201394077, 651.8887229275584]], "isOverall": false, "label": "Home-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 90.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 179.83333333333334, "minX": 1.61253198E12, "maxY": 4371.383333333333, "series": [{"data": [[1.61253216E12, 4371.383333333333], [1.61253204E12, 3952.516666666667], [1.61253222E12, 4368.233333333334], [1.6125321E12, 4303.566666666667], [1.61253228E12, 418.8333333333333], [1.61253198E12, 2819.866666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61253216E12, 1880.6666666666667], [1.61253204E12, 1700.8333333333333], [1.61253222E12, 1878.5], [1.6125321E12, 1856.8333333333333], [1.61253228E12, 179.83333333333334], [1.61253198E12, 1206.8333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253228E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 185.96385542168676, "minX": 1.61253198E12, "maxY": 2244.048473967684, "series": [{"data": [[1.61253216E12, 227.35023041474653], [1.61253204E12, 884.4942675159234], [1.61253222E12, 186.8662053056518], [1.6125321E12, 349.5752625437574], [1.61253228E12, 185.96385542168676], [1.61253198E12, 2244.048473967684]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253228E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 9.665513264129169, "minX": 1.61253198E12, "maxY": 116.59245960502679, "series": [{"data": [[1.61253216E12, 12.066820276497696], [1.61253204E12, 36.84585987261151], [1.61253222E12, 9.665513264129169], [1.6125321E12, 17.47024504084015], [1.61253228E12, 9.975903614457831], [1.61253198E12, 116.59245960502679]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253228E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.6532258064516125, "minX": 1.61253198E12, "maxY": 5.831238779174152, "series": [{"data": [[1.61253216E12, 0.6532258064516125], [1.61253204E12, 0.778343949044585], [1.61253222E12, 0.6805074971164929], [1.6125321E12, 0.6732788798133025], [1.61253228E12, 0.6746987951807228], [1.61253198E12, 5.831238779174152]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253228E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.61253198E12, "maxY": 4179.0, "series": [{"data": [[1.61253216E12, 944.0], [1.61253204E12, 2813.0], [1.61253222E12, 405.0], [1.6125321E12, 1226.0], [1.61253228E12, 295.0], [1.61253198E12, 4179.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61253216E12, 399.1], [1.61253204E12, 2158.2], [1.61253222E12, 192.0], [1.6125321E12, 855.2], [1.61253228E12, 190.60000000000002], [1.61253198E12, 4079.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61253216E12, 581.3399999999992], [1.61253204E12, 2497.9399999999996], [1.61253222E12, 267.9599999999998], [1.6125321E12, 1139.8799999999994], [1.61253228E12, 295.0], [1.61253198E12, 4176.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61253216E12, 468.0], [1.61253204E12, 2360.1], [1.61253222E12, 206.0], [1.6125321E12, 999.1999999999998], [1.61253228E12, 194.39999999999998], [1.61253198E12, 4150.1]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61253216E12, 175.0], [1.61253204E12, 175.0], [1.61253222E12, 176.0], [1.6125321E12, 175.0], [1.61253228E12, 180.0], [1.61253198E12, 175.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61253216E12, 183.0], [1.61253204E12, 454.0], [1.61253222E12, 183.0], [1.6125321E12, 184.0], [1.61253228E12, 184.0], [1.61253198E12, 2485.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253228E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 181.0, "minX": 1.0, "maxY": 4112.0, "series": [{"data": [[2.0, 187.5], [33.0, 1443.5], [32.0, 1271.5], [34.0, 2367.0], [38.0, 1269.0], [3.0, 185.0], [51.0, 2538.0], [52.0, 2359.5], [56.0, 2351.0], [58.0, 3000.0], [4.0, 184.0], [67.0, 3595.0], [5.0, 184.0], [86.0, 4112.0], [6.0, 185.5], [7.0, 182.0], [8.0, 182.5], [9.0, 182.0], [10.0, 181.0], [11.0, 183.0], [12.0, 183.0], [13.0, 183.0], [14.0, 182.0], [15.0, 183.0], [1.0, 187.5], [16.0, 183.0], [17.0, 183.0], [18.0, 185.0], [19.0, 184.0], [20.0, 263.0], [21.0, 587.0], [22.0, 372.5], [24.0, 602.5], [25.0, 447.0], [26.0, 734.5], [27.0, 1924.0], [30.0, 1211.0], [31.0, 1440.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8.0, "minX": 1.0, "maxY": 339.0, "series": [{"data": [[2.0, 15.5], [33.0, 51.0], [32.0, 54.5], [34.0, 104.5], [38.0, 50.5], [3.0, 17.0], [51.0, 107.0], [52.0, 98.0], [56.0, 109.5], [58.0, 169.0], [4.0, 9.5], [67.0, 196.0], [5.0, 15.0], [86.0, 339.0], [6.0, 12.0], [7.0, 8.0], [8.0, 9.0], [9.0, 8.0], [10.0, 8.0], [11.0, 8.0], [12.0, 8.0], [13.0, 8.0], [14.0, 8.0], [15.0, 8.0], [1.0, 20.0], [16.0, 8.0], [17.0, 8.0], [18.0, 8.0], [19.0, 8.0], [20.0, 18.0], [21.0, 25.0], [22.0, 20.0], [24.0, 27.5], [25.0, 29.0], [26.0, 37.0], [27.0, 86.0], [30.0, 39.0], [31.0, 65.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3166666666666667, "minX": 1.61253198E12, "maxY": 14.466666666666667, "series": [{"data": [[1.61253216E12, 14.383333333333333], [1.61253204E12, 12.75], [1.61253222E12, 14.466666666666667], [1.6125321E12, 14.383333333333333], [1.61253228E12, 1.3166666666666667], [1.61253198E12, 9.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253228E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.3833333333333333, "minX": 1.61253198E12, "maxY": 14.466666666666667, "series": [{"data": [[1.61253216E12, 14.466666666666667], [1.61253204E12, 13.083333333333334], [1.61253222E12, 14.45], [1.6125321E12, 14.283333333333333], [1.61253228E12, 1.3833333333333333], [1.61253198E12, 9.283333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253228E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.3833333333333333, "minX": 1.61253198E12, "maxY": 14.466666666666667, "series": [{"data": [[1.61253216E12, 14.466666666666667], [1.61253204E12, 13.083333333333334], [1.61253222E12, 14.45], [1.6125321E12, 14.283333333333333], [1.61253228E12, 1.3833333333333333], [1.61253198E12, 9.283333333333333]], "isOverall": false, "label": "Home-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253228E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.3833333333333333, "minX": 1.61253198E12, "maxY": 14.466666666666667, "series": [{"data": [[1.61253216E12, 14.466666666666667], [1.61253204E12, 13.083333333333334], [1.61253222E12, 14.45], [1.6125321E12, 14.283333333333333], [1.61253228E12, 1.3833333333333333], [1.61253198E12, 9.283333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253228E12, "title": "Total Transactions Per Second"}},
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

