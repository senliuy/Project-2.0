     var barChartData = {
          
            labels : ["January","February","March","April","May","June","July","Auguest","September","October","Noveber","December"],
            datasets : [
                {
                    fillColor : "rgba(52, 152, 219, 0.8)",
                    data : [65,59,90,81,56,55,40,23,87,45,53,90]
                }
            ]

            
        }

    var myLine = new Chart(document.getElementById("indexCavas1").getContext("2d")).Bar(barChartData,{
        scaleShowLabels : false,
        pointLabelFontSize : 24
    });
