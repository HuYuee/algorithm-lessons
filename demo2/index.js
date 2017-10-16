var max_heapify = function(arr,i){
    var left = 2*(i+1)-1,
        right = 2*(i+1),
        length = arr.length,
        key,
        next;
    if(left<=length&&arr[left]>arr[i]){
        next = left;
    }else{
        next = i;
    }
    if(right<=length&&arr[right]>arr[next]){
        next = right;
    }
    if(next!=i){
        key = arr[next];
        arr[next] = arr[i];
        arr[i] = key;
        max_heapify(arr,next);
    }
    return arr;
    
}

var sort = function(arr){
    var new_arr = [];
    var key;
    while(arr.length){
        key = max_heapify(arr,0);
        console.log(key);
        new_arr.push(key[0]);
        arr.shift();
    }
    return new_arr;
    
}

var arr = [16,4,10,14,7,9,3,2,8,1];
// console.log(arr);
console.log(sort(arr,1))