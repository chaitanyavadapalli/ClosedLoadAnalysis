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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 2963.0, "series": [{"data": [[0.0, 175.0], [0.1, 175.0], [0.2, 175.0], [0.3, 175.0], [0.4, 175.0], [0.5, 175.0], [0.6, 175.0], [0.7, 175.0], [0.8, 175.0], [0.9, 175.0], [1.0, 175.0], [1.1, 175.0], [1.2, 175.0], [1.3, 175.0], [1.4, 175.0], [1.5, 176.0], [1.6, 176.0], [1.7, 176.0], [1.8, 176.0], [1.9, 176.0], [2.0, 176.0], [2.1, 176.0], [2.2, 176.0], [2.3, 176.0], [2.4, 176.0], [2.5, 176.0], [2.6, 176.0], [2.7, 176.0], [2.8, 176.0], [2.9, 176.0], [3.0, 176.0], [3.1, 176.0], [3.2, 176.0], [3.3, 176.0], [3.4, 176.0], [3.5, 176.0], [3.6, 176.0], [3.7, 176.0], [3.8, 176.0], [3.9, 176.0], [4.0, 176.0], [4.1, 176.0], [4.2, 176.0], [4.3, 176.0], [4.4, 176.0], [4.5, 176.0], [4.6, 176.0], [4.7, 176.0], [4.8, 176.0], [4.9, 176.0], [5.0, 176.0], [5.1, 176.0], [5.2, 176.0], [5.3, 177.0], [5.4, 177.0], [5.5, 177.0], [5.6, 177.0], [5.7, 177.0], [5.8, 177.0], [5.9, 177.0], [6.0, 177.0], [6.1, 177.0], [6.2, 177.0], [6.3, 177.0], [6.4, 177.0], [6.5, 177.0], [6.6, 177.0], [6.7, 177.0], [6.8, 177.0], [6.9, 177.0], [7.0, 177.0], [7.1, 177.0], [7.2, 177.0], [7.3, 177.0], [7.4, 177.0], [7.5, 178.0], [7.6, 178.0], [7.7, 178.0], [7.8, 178.0], [7.9, 178.0], [8.0, 178.0], [8.1, 178.0], [8.2, 178.0], [8.3, 178.0], [8.4, 178.0], [8.5, 178.0], [8.6, 178.0], [8.7, 178.0], [8.8, 178.0], [8.9, 178.0], [9.0, 178.0], [9.1, 179.0], [9.2, 179.0], [9.3, 179.0], [9.4, 179.0], [9.5, 179.0], [9.6, 179.0], [9.7, 179.0], [9.8, 179.0], [9.9, 179.0], [10.0, 179.0], [10.1, 179.0], [10.2, 179.0], [10.3, 179.0], [10.4, 179.0], [10.5, 179.0], [10.6, 179.0], [10.7, 179.0], [10.8, 179.0], [10.9, 179.0], [11.0, 179.0], [11.1, 179.0], [11.2, 179.0], [11.3, 179.0], [11.4, 179.0], [11.5, 179.0], [11.6, 179.0], [11.7, 179.0], [11.8, 179.0], [11.9, 179.0], [12.0, 179.0], [12.1, 179.0], [12.2, 179.0], [12.3, 180.0], [12.4, 180.0], [12.5, 180.0], [12.6, 180.0], [12.7, 180.0], [12.8, 180.0], [12.9, 180.0], [13.0, 180.0], [13.1, 180.0], [13.2, 180.0], [13.3, 180.0], [13.4, 180.0], [13.5, 180.0], [13.6, 180.0], [13.7, 180.0], [13.8, 180.0], [13.9, 180.0], [14.0, 180.0], [14.1, 180.0], [14.2, 180.0], [14.3, 180.0], [14.4, 180.0], [14.5, 180.0], [14.6, 180.0], [14.7, 180.0], [14.8, 180.0], [14.9, 180.0], [15.0, 180.0], [15.1, 180.0], [15.2, 180.0], [15.3, 180.0], [15.4, 180.0], [15.5, 180.0], [15.6, 180.0], [15.7, 180.0], [15.8, 180.0], [15.9, 180.0], [16.0, 180.0], [16.1, 180.0], [16.2, 180.0], [16.3, 180.0], [16.4, 180.0], [16.5, 180.0], [16.6, 180.0], [16.7, 180.0], [16.8, 180.0], [16.9, 180.0], [17.0, 180.0], [17.1, 180.0], [17.2, 180.0], [17.3, 180.0], [17.4, 180.0], [17.5, 180.0], [17.6, 180.0], [17.7, 181.0], [17.8, 181.0], [17.9, 181.0], [18.0, 181.0], [18.1, 181.0], [18.2, 181.0], [18.3, 181.0], [18.4, 181.0], [18.5, 181.0], [18.6, 181.0], [18.7, 181.0], [18.8, 181.0], [18.9, 181.0], [19.0, 181.0], [19.1, 181.0], [19.2, 181.0], [19.3, 181.0], [19.4, 181.0], [19.5, 181.0], [19.6, 181.0], [19.7, 181.0], [19.8, 181.0], [19.9, 181.0], [20.0, 181.0], [20.1, 181.0], [20.2, 181.0], [20.3, 181.0], [20.4, 181.0], [20.5, 181.0], [20.6, 181.0], [20.7, 181.0], [20.8, 181.0], [20.9, 181.0], [21.0, 181.0], [21.1, 181.0], [21.2, 181.0], [21.3, 181.0], [21.4, 181.0], [21.5, 181.0], [21.6, 181.0], [21.7, 181.0], [21.8, 181.0], [21.9, 181.0], [22.0, 181.0], [22.1, 181.0], [22.2, 181.0], [22.3, 181.0], [22.4, 181.0], [22.5, 181.0], [22.6, 181.0], [22.7, 181.0], [22.8, 181.0], [22.9, 181.0], [23.0, 181.0], [23.1, 181.0], [23.2, 181.0], [23.3, 181.0], [23.4, 181.0], [23.5, 181.0], [23.6, 181.0], [23.7, 181.0], [23.8, 181.0], [23.9, 181.0], [24.0, 181.0], [24.1, 181.0], [24.2, 181.0], [24.3, 181.0], [24.4, 181.0], [24.5, 181.0], [24.6, 181.0], [24.7, 181.0], [24.8, 181.0], [24.9, 181.0], [25.0, 181.0], [25.1, 181.0], [25.2, 181.0], [25.3, 181.0], [25.4, 181.0], [25.5, 181.0], [25.6, 181.0], [25.7, 181.0], [25.8, 181.0], [25.9, 181.0], [26.0, 181.0], [26.1, 182.0], [26.2, 182.0], [26.3, 182.0], [26.4, 182.0], [26.5, 182.0], [26.6, 182.0], [26.7, 182.0], [26.8, 182.0], [26.9, 182.0], [27.0, 182.0], [27.1, 182.0], [27.2, 182.0], [27.3, 182.0], [27.4, 182.0], [27.5, 182.0], [27.6, 182.0], [27.7, 182.0], [27.8, 182.0], [27.9, 182.0], [28.0, 182.0], [28.1, 182.0], [28.2, 182.0], [28.3, 182.0], [28.4, 182.0], [28.5, 182.0], [28.6, 182.0], [28.7, 182.0], [28.8, 182.0], [28.9, 182.0], [29.0, 182.0], [29.1, 182.0], [29.2, 182.0], [29.3, 182.0], [29.4, 182.0], [29.5, 182.0], [29.6, 182.0], [29.7, 182.0], [29.8, 182.0], [29.9, 182.0], [30.0, 182.0], [30.1, 182.0], [30.2, 182.0], [30.3, 182.0], [30.4, 182.0], [30.5, 182.0], [30.6, 182.0], [30.7, 182.0], [30.8, 182.0], [30.9, 182.0], [31.0, 182.0], [31.1, 182.0], [31.2, 182.0], [31.3, 182.0], [31.4, 182.0], [31.5, 182.0], [31.6, 182.0], [31.7, 182.0], [31.8, 182.0], [31.9, 182.0], [32.0, 182.0], [32.1, 182.0], [32.2, 182.0], [32.3, 182.0], [32.4, 182.0], [32.5, 182.0], [32.6, 182.0], [32.7, 182.0], [32.8, 182.0], [32.9, 182.0], [33.0, 182.0], [33.1, 182.0], [33.2, 182.0], [33.3, 182.0], [33.4, 182.0], [33.5, 182.0], [33.6, 182.0], [33.7, 182.0], [33.8, 182.0], [33.9, 182.0], [34.0, 182.0], [34.1, 182.0], [34.2, 182.0], [34.3, 182.0], [34.4, 182.0], [34.5, 182.0], [34.6, 182.0], [34.7, 182.0], [34.8, 182.0], [34.9, 182.0], [35.0, 182.0], [35.1, 182.0], [35.2, 182.0], [35.3, 182.0], [35.4, 182.0], [35.5, 182.0], [35.6, 182.0], [35.7, 183.0], [35.8, 183.0], [35.9, 183.0], [36.0, 183.0], [36.1, 183.0], [36.2, 183.0], [36.3, 183.0], [36.4, 183.0], [36.5, 183.0], [36.6, 183.0], [36.7, 183.0], [36.8, 183.0], [36.9, 183.0], [37.0, 183.0], [37.1, 183.0], [37.2, 183.0], [37.3, 183.0], [37.4, 183.0], [37.5, 183.0], [37.6, 183.0], [37.7, 183.0], [37.8, 183.0], [37.9, 183.0], [38.0, 183.0], [38.1, 183.0], [38.2, 183.0], [38.3, 183.0], [38.4, 183.0], [38.5, 183.0], [38.6, 183.0], [38.7, 183.0], [38.8, 183.0], [38.9, 183.0], [39.0, 183.0], [39.1, 183.0], [39.2, 183.0], [39.3, 183.0], [39.4, 183.0], [39.5, 183.0], [39.6, 183.0], [39.7, 183.0], [39.8, 183.0], [39.9, 183.0], [40.0, 183.0], [40.1, 183.0], [40.2, 183.0], [40.3, 183.0], [40.4, 183.0], [40.5, 183.0], [40.6, 183.0], [40.7, 183.0], [40.8, 183.0], [40.9, 183.0], [41.0, 183.0], [41.1, 183.0], [41.2, 183.0], [41.3, 183.0], [41.4, 183.0], [41.5, 183.0], [41.6, 183.0], [41.7, 183.0], [41.8, 183.0], [41.9, 183.0], [42.0, 183.0], [42.1, 183.0], [42.2, 183.0], [42.3, 183.0], [42.4, 183.0], [42.5, 183.0], [42.6, 183.0], [42.7, 183.0], [42.8, 183.0], [42.9, 183.0], [43.0, 183.0], [43.1, 183.0], [43.2, 183.0], [43.3, 183.0], [43.4, 183.0], [43.5, 183.0], [43.6, 183.0], [43.7, 183.0], [43.8, 183.0], [43.9, 183.0], [44.0, 183.0], [44.1, 183.0], [44.2, 183.0], [44.3, 183.0], [44.4, 183.0], [44.5, 183.0], [44.6, 183.0], [44.7, 183.0], [44.8, 183.0], [44.9, 183.0], [45.0, 183.0], [45.1, 183.0], [45.2, 183.0], [45.3, 183.0], [45.4, 183.0], [45.5, 183.0], [45.6, 183.0], [45.7, 183.0], [45.8, 183.0], [45.9, 183.0], [46.0, 184.0], [46.1, 184.0], [46.2, 184.0], [46.3, 184.0], [46.4, 184.0], [46.5, 184.0], [46.6, 184.0], [46.7, 184.0], [46.8, 184.0], [46.9, 184.0], [47.0, 184.0], [47.1, 184.0], [47.2, 184.0], [47.3, 184.0], [47.4, 184.0], [47.5, 184.0], [47.6, 184.0], [47.7, 184.0], [47.8, 184.0], [47.9, 184.0], [48.0, 184.0], [48.1, 184.0], [48.2, 184.0], [48.3, 184.0], [48.4, 184.0], [48.5, 184.0], [48.6, 184.0], [48.7, 184.0], [48.8, 184.0], [48.9, 184.0], [49.0, 184.0], [49.1, 184.0], [49.2, 184.0], [49.3, 184.0], [49.4, 184.0], [49.5, 184.0], [49.6, 184.0], [49.7, 184.0], [49.8, 184.0], [49.9, 184.0], [50.0, 184.0], [50.1, 184.0], [50.2, 184.0], [50.3, 184.0], [50.4, 184.0], [50.5, 184.0], [50.6, 184.0], [50.7, 184.0], [50.8, 184.0], [50.9, 184.0], [51.0, 184.0], [51.1, 184.0], [51.2, 184.0], [51.3, 184.0], [51.4, 184.0], [51.5, 184.0], [51.6, 184.0], [51.7, 184.0], [51.8, 184.0], [51.9, 184.0], [52.0, 184.0], [52.1, 184.0], [52.2, 184.0], [52.3, 184.0], [52.4, 184.0], [52.5, 184.0], [52.6, 184.0], [52.7, 184.0], [52.8, 184.0], [52.9, 184.0], [53.0, 184.0], [53.1, 184.0], [53.2, 184.0], [53.3, 184.0], [53.4, 184.0], [53.5, 184.0], [53.6, 184.0], [53.7, 184.0], [53.8, 184.0], [53.9, 184.0], [54.0, 184.0], [54.1, 184.0], [54.2, 184.0], [54.3, 184.0], [54.4, 184.0], [54.5, 184.0], [54.6, 184.0], [54.7, 184.0], [54.8, 184.0], [54.9, 184.0], [55.0, 184.0], [55.1, 184.0], [55.2, 184.0], [55.3, 184.0], [55.4, 184.0], [55.5, 184.0], [55.6, 184.0], [55.7, 184.0], [55.8, 184.0], [55.9, 184.0], [56.0, 184.0], [56.1, 184.0], [56.2, 184.0], [56.3, 184.0], [56.4, 184.0], [56.5, 185.0], [56.6, 185.0], [56.7, 185.0], [56.8, 185.0], [56.9, 185.0], [57.0, 185.0], [57.1, 185.0], [57.2, 185.0], [57.3, 185.0], [57.4, 185.0], [57.5, 185.0], [57.6, 185.0], [57.7, 185.0], [57.8, 185.0], [57.9, 185.0], [58.0, 185.0], [58.1, 185.0], [58.2, 185.0], [58.3, 185.0], [58.4, 185.0], [58.5, 185.0], [58.6, 185.0], [58.7, 185.0], [58.8, 185.0], [58.9, 185.0], [59.0, 185.0], [59.1, 185.0], [59.2, 185.0], [59.3, 185.0], [59.4, 185.0], [59.5, 185.0], [59.6, 185.0], [59.7, 185.0], [59.8, 185.0], [59.9, 185.0], [60.0, 185.0], [60.1, 185.0], [60.2, 185.0], [60.3, 185.0], [60.4, 185.0], [60.5, 185.0], [60.6, 185.0], [60.7, 185.0], [60.8, 185.0], [60.9, 185.0], [61.0, 185.0], [61.1, 185.0], [61.2, 185.0], [61.3, 185.0], [61.4, 185.0], [61.5, 185.0], [61.6, 185.0], [61.7, 185.0], [61.8, 185.0], [61.9, 185.0], [62.0, 185.0], [62.1, 185.0], [62.2, 185.0], [62.3, 185.0], [62.4, 185.0], [62.5, 185.0], [62.6, 185.0], [62.7, 185.0], [62.8, 185.0], [62.9, 185.0], [63.0, 185.0], [63.1, 185.0], [63.2, 185.0], [63.3, 185.0], [63.4, 185.0], [63.5, 185.0], [63.6, 185.0], [63.7, 185.0], [63.8, 185.0], [63.9, 186.0], [64.0, 186.0], [64.1, 186.0], [64.2, 186.0], [64.3, 186.0], [64.4, 186.0], [64.5, 186.0], [64.6, 186.0], [64.7, 186.0], [64.8, 186.0], [64.9, 186.0], [65.0, 186.0], [65.1, 186.0], [65.2, 186.0], [65.3, 186.0], [65.4, 186.0], [65.5, 186.0], [65.6, 186.0], [65.7, 186.0], [65.8, 186.0], [65.9, 186.0], [66.0, 186.0], [66.1, 186.0], [66.2, 186.0], [66.3, 186.0], [66.4, 186.0], [66.5, 186.0], [66.6, 186.0], [66.7, 186.0], [66.8, 186.0], [66.9, 186.0], [67.0, 186.0], [67.1, 186.0], [67.2, 186.0], [67.3, 186.0], [67.4, 186.0], [67.5, 186.0], [67.6, 186.0], [67.7, 186.0], [67.8, 186.0], [67.9, 186.0], [68.0, 187.0], [68.1, 187.0], [68.2, 187.0], [68.3, 187.0], [68.4, 187.0], [68.5, 187.0], [68.6, 187.0], [68.7, 187.0], [68.8, 187.0], [68.9, 187.0], [69.0, 187.0], [69.1, 187.0], [69.2, 187.0], [69.3, 187.0], [69.4, 187.0], [69.5, 187.0], [69.6, 187.0], [69.7, 187.0], [69.8, 187.0], [69.9, 187.0], [70.0, 187.0], [70.1, 187.0], [70.2, 187.0], [70.3, 187.0], [70.4, 187.0], [70.5, 188.0], [70.6, 188.0], [70.7, 188.0], [70.8, 188.0], [70.9, 188.0], [71.0, 188.0], [71.1, 188.0], [71.2, 188.0], [71.3, 188.0], [71.4, 188.0], [71.5, 188.0], [71.6, 188.0], [71.7, 188.0], [71.8, 188.0], [71.9, 188.0], [72.0, 188.0], [72.1, 188.0], [72.2, 188.0], [72.3, 188.0], [72.4, 188.0], [72.5, 188.0], [72.6, 188.0], [72.7, 188.0], [72.8, 188.0], [72.9, 188.0], [73.0, 188.0], [73.1, 188.0], [73.2, 188.0], [73.3, 188.0], [73.4, 188.0], [73.5, 188.0], [73.6, 188.0], [73.7, 189.0], [73.8, 189.0], [73.9, 189.0], [74.0, 189.0], [74.1, 189.0], [74.2, 189.0], [74.3, 189.0], [74.4, 189.0], [74.5, 189.0], [74.6, 189.0], [74.7, 189.0], [74.8, 189.0], [74.9, 189.0], [75.0, 189.0], [75.1, 189.0], [75.2, 189.0], [75.3, 189.0], [75.4, 189.0], [75.5, 189.0], [75.6, 189.0], [75.7, 189.0], [75.8, 189.0], [75.9, 189.0], [76.0, 189.0], [76.1, 189.0], [76.2, 189.0], [76.3, 190.0], [76.4, 190.0], [76.5, 190.0], [76.6, 190.0], [76.7, 190.0], [76.8, 190.0], [76.9, 190.0], [77.0, 190.0], [77.1, 190.0], [77.2, 190.0], [77.3, 190.0], [77.4, 190.0], [77.5, 190.0], [77.6, 190.0], [77.7, 190.0], [77.8, 190.0], [77.9, 190.0], [78.0, 190.0], [78.1, 191.0], [78.2, 191.0], [78.3, 191.0], [78.4, 191.0], [78.5, 191.0], [78.6, 191.0], [78.7, 191.0], [78.8, 191.0], [78.9, 191.0], [79.0, 191.0], [79.1, 191.0], [79.2, 191.0], [79.3, 191.0], [79.4, 191.0], [79.5, 191.0], [79.6, 192.0], [79.7, 192.0], [79.8, 192.0], [79.9, 192.0], [80.0, 192.0], [80.1, 192.0], [80.2, 192.0], [80.3, 193.0], [80.4, 193.0], [80.5, 193.0], [80.6, 193.0], [80.7, 193.0], [80.8, 194.0], [80.9, 194.0], [81.0, 194.0], [81.1, 195.0], [81.2, 195.0], [81.3, 195.0], [81.4, 195.0], [81.5, 196.0], [81.6, 196.0], [81.7, 196.0], [81.8, 196.0], [81.9, 197.0], [82.0, 197.0], [82.1, 197.0], [82.2, 198.0], [82.3, 198.0], [82.4, 199.0], [82.5, 199.0], [82.6, 200.0], [82.7, 200.0], [82.8, 200.0], [82.9, 200.0], [83.0, 201.0], [83.1, 202.0], [83.2, 202.0], [83.3, 203.0], [83.4, 204.0], [83.5, 206.0], [83.6, 207.0], [83.7, 208.0], [83.8, 209.0], [83.9, 211.0], [84.0, 211.0], [84.1, 213.0], [84.2, 214.0], [84.3, 214.0], [84.4, 217.0], [84.5, 221.0], [84.6, 223.0], [84.7, 225.0], [84.8, 226.0], [84.9, 228.0], [85.0, 231.0], [85.1, 234.0], [85.2, 236.0], [85.3, 243.0], [85.4, 245.0], [85.5, 248.0], [85.6, 260.0], [85.7, 267.0], [85.8, 271.0], [85.9, 272.0], [86.0, 277.0], [86.1, 281.0], [86.2, 287.0], [86.3, 294.0], [86.4, 308.0], [86.5, 325.0], [86.6, 349.0], [86.7, 373.0], [86.8, 387.0], [86.9, 390.0], [87.0, 396.0], [87.1, 402.0], [87.2, 404.0], [87.3, 407.0], [87.4, 424.0], [87.5, 448.0], [87.6, 480.0], [87.7, 491.0], [87.8, 499.0], [87.9, 507.0], [88.0, 512.0], [88.1, 541.0], [88.2, 545.0], [88.3, 548.0], [88.4, 559.0], [88.5, 571.0], [88.6, 582.0], [88.7, 593.0], [88.8, 630.0], [88.9, 672.0], [89.0, 692.0], [89.1, 723.0], [89.2, 742.0], [89.3, 755.0], [89.4, 769.0], [89.5, 792.0], [89.6, 800.0], [89.7, 810.0], [89.8, 826.0], [89.9, 844.0], [90.0, 865.0], [90.1, 886.0], [90.2, 889.0], [90.3, 934.0], [90.4, 956.0], [90.5, 997.0], [90.6, 1015.0], [90.7, 1019.0], [90.8, 1036.0], [90.9, 1063.0], [91.0, 1068.0], [91.1, 1079.0], [91.2, 1100.0], [91.3, 1107.0], [91.4, 1134.0], [91.5, 1144.0], [91.6, 1153.0], [91.7, 1164.0], [91.8, 1173.0], [91.9, 1183.0], [92.0, 1224.0], [92.1, 1232.0], [92.2, 1250.0], [92.3, 1264.0], [92.4, 1286.0], [92.5, 1355.0], [92.6, 1386.0], [92.7, 1403.0], [92.8, 1415.0], [92.9, 1425.0], [93.0, 1433.0], [93.1, 1443.0], [93.2, 1451.0], [93.3, 1464.0], [93.4, 1469.0], [93.5, 1477.0], [93.6, 1487.0], [93.7, 1501.0], [93.8, 1505.0], [93.9, 1518.0], [94.0, 1524.0], [94.1, 1526.0], [94.2, 1533.0], [94.3, 1544.0], [94.4, 1572.0], [94.5, 1605.0], [94.6, 1612.0], [94.7, 1648.0], [94.8, 1656.0], [94.9, 1676.0], [95.0, 1682.0], [95.1, 1685.0], [95.2, 1738.0], [95.3, 1783.0], [95.4, 1790.0], [95.5, 1799.0], [95.6, 1809.0], [95.7, 1818.0], [95.8, 1824.0], [95.9, 1834.0], [96.0, 1854.0], [96.1, 1904.0], [96.2, 2064.0], [96.3, 2135.0], [96.4, 2181.0], [96.5, 2194.0], [96.6, 2207.0], [96.7, 2265.0], [96.8, 2273.0], [96.9, 2281.0], [97.0, 2292.0], [97.1, 2298.0], [97.2, 2310.0], [97.3, 2320.0], [97.4, 2335.0], [97.5, 2352.0], [97.6, 2357.0], [97.7, 2361.0], [97.8, 2380.0], [97.9, 2383.0], [98.0, 2539.0], [98.1, 2580.0], [98.2, 2585.0], [98.3, 2680.0], [98.4, 2699.0], [98.5, 2704.0], [98.6, 2708.0], [98.7, 2715.0], [98.8, 2729.0], [98.9, 2745.0], [99.0, 2756.0], [99.1, 2760.0], [99.2, 2763.0], [99.3, 2768.0], [99.4, 2796.0], [99.5, 2802.0], [99.6, 2808.0], [99.7, 2815.0], [99.8, 2818.0], [99.9, 2820.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 2310.0, "series": [{"data": [[600.0, 9.0], [700.0, 16.0], [800.0, 18.0], [900.0, 8.0], [1000.0, 18.0], [1100.0, 22.0], [1200.0, 13.0], [1300.0, 7.0], [1400.0, 28.0], [1500.0, 23.0], [100.0, 2310.0], [1600.0, 17.0], [1700.0, 12.0], [1800.0, 15.0], [1900.0, 3.0], [2000.0, 2.0], [2100.0, 8.0], [2200.0, 17.0], [2300.0, 23.0], [2400.0, 1.0], [2500.0, 6.0], [2600.0, 6.0], [2700.0, 29.0], [2800.0, 14.0], [2900.0, 1.0], [200.0, 105.0], [300.0, 20.0], [400.0, 21.0], [500.0, 25.0]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 164.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2456.0, "series": [{"data": [[0.0, 2456.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 164.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 177.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 55.59, "minX": 1.61253144E12, "maxY": 60.0, "series": [{"data": [[1.61253168E12, 60.0], [1.61253156E12, 60.0], [1.61253174E12, 55.59], [1.61253162E12, 60.0], [1.61253144E12, 60.0], [1.6125315E12, 60.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253174E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 176.0, "minX": 1.0, "maxY": 367.2297297297301, "series": [{"data": [[2.0, 214.0], [3.0, 196.0], [4.0, 201.0], [5.0, 184.0], [6.0, 185.0], [8.0, 183.5], [9.0, 182.0], [10.0, 183.0], [11.0, 184.0], [12.0, 184.0], [13.0, 182.0], [14.0, 181.0], [16.0, 189.5], [17.0, 185.0], [18.0, 184.0], [20.0, 190.0], [21.0, 180.0], [22.0, 186.0], [23.0, 182.0], [24.0, 182.0], [26.0, 185.5], [27.0, 176.0], [28.0, 177.0], [29.0, 177.0], [30.0, 267.0], [31.0, 184.0], [33.0, 185.0], [32.0, 186.0], [35.0, 185.0], [34.0, 184.0], [37.0, 183.0], [36.0, 185.0], [38.0, 182.0], [41.0, 183.0], [40.0, 178.0], [43.0, 183.0], [42.0, 188.0], [45.0, 199.0], [44.0, 184.0], [47.0, 186.0], [46.0, 193.0], [49.0, 192.0], [48.0, 184.0], [51.0, 182.0], [50.0, 192.0], [52.0, 190.0], [55.0, 185.0], [54.0, 183.0], [57.0, 184.0], [56.0, 190.0], [59.0, 178.0], [58.0, 183.0], [60.0, 367.2297297297301], [1.0, 191.0]], "isOverall": false, "label": "Home", "isController": false}, {"data": [[59.36932427600999, 363.42760100107307]], "isOverall": false, "label": "Home-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 260.0, "minX": 1.61253144E12, "maxY": 2924.45, "series": [{"data": [[1.61253168E12, 2906.8166666666666], [1.61253156E12, 2924.45], [1.61253174E12, 2007.7166666666667], [1.61253162E12, 2897.6833333333334], [1.61253144E12, 608.2333333333333], [1.6125315E12, 2655.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61253168E12, 1256.6666666666667], [1.61253156E12, 1271.8333333333333], [1.61253174E12, 866.6666666666666], [1.61253162E12, 1256.6666666666667], [1.61253144E12, 260.0], [1.6125315E12, 1148.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253174E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 184.40172413793104, "minX": 1.61253144E12, "maxY": 2371.4500000000007, "series": [{"data": [[1.61253168E12, 188.76206896551707], [1.61253156E12, 193.73253833049398], [1.61253174E12, 187.42999999999998], [1.61253162E12, 184.40172413793104], [1.61253144E12, 2371.4500000000007], [1.6125315E12, 616.6132075471693]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253174E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 10.170689655172417, "minX": 1.61253144E12, "maxY": 144.51666666666662, "series": [{"data": [[1.61253168E12, 10.879310344827587], [1.61253156E12, 10.819420783645652], [1.61253174E12, 11.332499999999989], [1.61253162E12, 10.170689655172417], [1.61253144E12, 144.51666666666662], [1.6125315E12, 29.094339622641535]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253174E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.7017241379310346, "minX": 1.61253144E12, "maxY": 19.64166666666668, "series": [{"data": [[1.61253168E12, 0.7172413793103442], [1.61253156E12, 0.9437819420783654], [1.61253174E12, 0.7600000000000007], [1.61253162E12, 0.7017241379310346], [1.61253144E12, 19.64166666666668], [1.6125315E12, 1.0075471698113199]], "isOverall": false, "label": "Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253174E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.61253144E12, "maxY": 2963.0, "series": [{"data": [[1.61253168E12, 409.0], [1.61253156E12, 545.0], [1.61253174E12, 406.0], [1.61253162E12, 394.0], [1.61253144E12, 2963.0], [1.6125315E12, 1857.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61253168E12, 193.0], [1.61253156E12, 196.0], [1.61253174E12, 191.0], [1.61253162E12, 188.89999999999998], [1.61253144E12, 2807.5], [1.6125315E12, 1525.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61253168E12, 400.3799999999999], [1.61253156E12, 501.72], [1.61253174E12, 275.95000000000005], [1.61253162E12, 218.70999999999947], [1.61253144E12, 2934.019999999999], [1.6125315E12, 1833.0699999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61253168E12, 207.0], [1.61253156E12, 255.20000000000027], [1.61253174E12, 195.0], [1.61253162E12, 190.0], [1.61253144E12, 2817.95], [1.6125315E12, 1708.25]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61253168E12, 175.0], [1.61253156E12, 175.0], [1.61253174E12, 175.0], [1.61253162E12, 175.0], [1.61253144E12, 183.0], [1.6125315E12, 175.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61253168E12, 184.0], [1.61253156E12, 182.0], [1.61253174E12, 185.0], [1.61253162E12, 183.0], [1.61253144E12, 2381.0], [1.6125315E12, 194.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253174E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 181.5, "minX": 1.0, "maxY": 2544.5, "series": [{"data": [[8.0, 184.0], [33.0, 1515.0], [2.0, 181.5], [35.0, 1144.0], [9.0, 182.5], [36.0, 1793.0], [10.0, 183.0], [11.0, 184.0], [47.0, 2544.5], [3.0, 183.0], [12.0, 184.0], [13.0, 184.0], [14.0, 184.0], [15.0, 187.0], [4.0, 183.0], [1.0, 189.0], [19.0, 601.0], [5.0, 182.0], [6.0, 182.0], [26.0, 778.5], [7.0, 183.0], [30.0, 1412.5], [31.0, 1017.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8.0, "minX": 1.0, "maxY": 154.5, "series": [{"data": [[8.0, 9.0], [33.0, 61.0], [2.0, 13.0], [35.0, 42.0], [9.0, 8.0], [36.0, 83.0], [10.0, 8.0], [11.0, 9.0], [47.0, 154.5], [3.0, 15.0], [12.0, 9.0], [13.0, 9.0], [14.0, 8.0], [15.0, 13.5], [4.0, 9.5], [1.0, 20.0], [19.0, 27.0], [5.0, 11.0], [6.0, 9.0], [26.0, 30.5], [7.0, 9.0], [30.0, 71.5], [31.0, 50.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.61253144E12, "maxY": 9.716666666666667, "series": [{"data": [[1.61253168E12, 9.7], [1.61253156E12, 9.716666666666667], [1.61253174E12, 6.633333333333334], [1.61253162E12, 9.666666666666666], [1.61253144E12, 2.0], [1.6125315E12, 8.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253174E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.61253144E12, "maxY": 9.783333333333333, "series": [{"data": [[1.61253168E12, 9.666666666666666], [1.61253156E12, 9.783333333333333], [1.61253174E12, 6.666666666666667], [1.61253162E12, 9.666666666666666], [1.61253144E12, 2.0], [1.6125315E12, 8.833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61253174E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.61253144E12, "maxY": 9.783333333333333, "series": [{"data": [[1.61253168E12, 9.666666666666666], [1.61253156E12, 9.783333333333333], [1.61253174E12, 6.666666666666667], [1.61253162E12, 9.666666666666666], [1.61253144E12, 2.0], [1.6125315E12, 8.833333333333334]], "isOverall": false, "label": "Home-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253174E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.61253144E12, "maxY": 9.783333333333333, "series": [{"data": [[1.61253168E12, 9.666666666666666], [1.61253156E12, 9.783333333333333], [1.61253174E12, 6.666666666666667], [1.61253162E12, 9.666666666666666], [1.61253144E12, 2.0], [1.6125315E12, 8.833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61253174E12, "title": "Total Transactions Per Second"}},
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

