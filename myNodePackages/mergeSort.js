function mergeSort(data, sortBy)
{
    var n = data.length;
    if(n == 1)
    {
        return data;
    }

    var mid = n/2;
    var firstHalf  = new Array();
    var secondHalf = new Array();
    
    firstHalf = data.slice(0, mid);
    secondHalf = data.slice(mid);

    var firstSort  = mergeSort(firstHalf, sortBy);
    var secondSort = mergeSort(secondHalf, sortBy);
    var sortedArray  = merge(firstSort, secondSort, sortBy);

    return sortedArray;
}

function merge(firstHalf, secondHalf, sortBy)
{
    var mergedArray = new Array();

    var i = 0;
    var j = 0;

    while(i < firstHalf.length && j < secondHalf.length)
    {
        if(firstHalf[i] && secondHalf[j])
        {
            var b = firstHalf[i];
            var c = secondHalf[j];

            if(b[sortBy] >= c[sortBy])
            {
                mergedArray.push(b);
            }
            else
            {
                mergedArray.push(c);
            }
        }
        i++;
        j++;
    }

    while (i < firstHalf.length)
    {
        mergedArray.push(firstHalf[i]);
        i++;
    }

    while (j < secondHalf.length)
    {
        mergedArray.push(secondHalf[j]);
        j++;
    }
    return mergedArray;
}