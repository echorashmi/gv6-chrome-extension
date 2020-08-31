//Array with 5555 listings and reviews:
const { PerformanceObserver, performance } = require('perf_hooks');
var data = require('./listings_and_reviews_5555.json');

//Practicing Sorting and Searching Functions:

const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0].duration);
    performance.clearMarks(); 
  });
obs.observe({ entryTypes: ['measure'] });

//Function Calls:

/*
//Linear Search:
performance.mark('A');
console.log("Linear Search: ");
var countData = linearSearch(data);
console.log("Count of number of listings with cancellation policy :moderate: " + countData);
performance.mark('B');
performance.measure('A to B', 'A', 'B');

console.log("------------------------------");

//Binary Search:
performance.mark('C');
console.log("Binary Search: ");
countData = binarySearch(data, 0, data.length, 'moderate');
console.log("Count of number of listings with cancellation policy :moderate: (This is incorrect, have to find a way to do this using Binary Search)" + countData);
performance.mark('D');
performance.measure('C to D', 'C', 'D');
*/
console.log("------------------------------");

//Selection Sort:
console.log("Selection Sort: ");
performance.mark('E');
var largestListing = selectionSort(data, 'number_of_reviews');
console.log("_id of Listing with maximum number of Reviews: " + largestListing['_id']);
console.log("Number of Reviews: " + largestListing['number_of_reviews']);
performance.mark('F');
performance.measure('E to F', 'E', 'F');


console.log("------------------------------");

//Merge Sort:

console.log("Merge Sort: ");
performance.mark('G');
var sortedArrayMerge = mergeSort(data, 'number_of_reviews');
performance.mark('H');
performance.measure('G to H', 'G', 'H');
console.log("Id with largest number of Reviews: " + sortedArrayMerge[0]['_id'] + " Number of Reviews: " + sortedArrayMerge[0]['number_of_reviews']);

//Problem Statement: Get count of listings with cancellation_policy = moderate
//Linear Search: 
function linearSearch(data)
{
    var count = 0;
    var length = data.length;
    performance.mark('A');
    for (i = 0; i < length; i++)
    {
        if(data[i].cancellation_policy == 'moderate')
        {
            count++;
        }
    }
    return count;
}

//Binary Search: Needs a Sorted Array as Input. This function is incorrect, needs to be changed. 
//Problem Statement: Get count of listings with cancellation_policy = moderate
function binarySearch(data, start, end, needle)
{
    var count = 0;
    while (start < end)
    {
        var mid = Math.floor(start + (end - start) / 2);

        if(data[mid].cancellation_policy == needle)
        {
            count++; 
            end = mid - 1;  
        }
        else
        {
            start = mid + 1;
        }
    }
    return count;
}

/*
    Use Case for Binary Search to be Improved, the input is not sorted. 
    Lets sort by Number of Reviews. 
*/

function selectionSort(data, sortBy)
{
    var count = 0;
    for(i = 0; i < data.length; i++)
    {
        for(j = 0; j < data.length; j++)
        {
            if(data[i][sortBy] > data[j][sortBy]) //Use Greater than to sort Descending
            {
                var tmp = data[i];
                data[i] = data[j];
                data[j] = tmp;
                count++;
            }
        }
    }
    return data[0];
}

function mergeSort(data, sortBy)
{
    var n = data.length;
    
    //console.log(data);
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