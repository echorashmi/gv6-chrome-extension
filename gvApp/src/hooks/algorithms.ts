export function convertJsonObject(originalJsonObject, groupByVariable){
    console.log('Grouping Algorithm Invoked');
    var arrKeys:any = new Array();
    var workingJsonObject = new Object(); 
    var reorderedJsonObject = new Array();
    var originalLength = originalJsonObject.length;
  
    for (var i = 0; i < originalLength; i++) {
      switch(groupByVariable)
        {
            case 'domain':
              var label = originalJsonObject[i].Domain;
              break;
            case 'category':
              var label = originalJsonObject[i].Content;
              break;
            case 'score':
              var label = originalJsonObject[i].Score;
              break;
        }
  
      arrKeys = Object.keys(workingJsonObject);
      if(arrKeys.includes(label)){
  
        //Check if it is already an array, then push this new value to it
        if(Array.isArray(workingJsonObject[label])){
          workingJsonObject[label].push(originalJsonObject[i]);
        }
        else{
          var temp = workingJsonObject[label];
          workingJsonObject[label] = [];
          workingJsonObject[label].push(temp);
          workingJsonObject[label].push(originalJsonObject[i]);
        }
      }
      else{
        workingJsonObject[label] = originalJsonObject[i];
        if(groupByVariable == 'score'){
          reorderedJsonObject.push(originalJsonObject[i]);
        }
      }
    }
  
    Object.keys(workingJsonObject).forEach(function(key){
        for(i = 0; i < workingJsonObject[key].length; i++){
          reorderedJsonObject.push(workingJsonObject[key][i]);
        }
    });
  
    return reorderedJsonObject;
  }