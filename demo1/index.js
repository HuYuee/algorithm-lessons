var mergeArray = function(arr_a, arr_b){
    var merge_arr = [],
        i = 0,
        j = 0;
    while(arr_a.length>i && arr_b.length>j){
        if(arr_a[i]<arr_b[j]){
            merge_arr.push(arr_a[i++]);

        }else{
            merge_arr.push(arr_b[j++]);
        }
    }
    while(arr_a.length>i){
        merge_arr.push(arr_a[i++]);
    }
    while(arr_b.length>j){
        merge_arr.push(arr_b[j++]);
    }
    return merge_arr;
}
// console.log(mergeArray([1,2,5,6],[2,3,4,7]));

var splitArray = function(arr){
    var start = 0,
        mid = 0,
        len = arr.length,
        arr_a = [],
        arr_b = [];
    if(len>1){
        mid = len/2;
        arr_a = arr.splice(0,mid);
        arr_b = arr;
        return mergeArray(splitArray(arr_a),splitArray(arr_b))
    }else{
        return arr;
    }
    
}
console.log(splitArray([1,5,2,8,4,4,10,7]));
