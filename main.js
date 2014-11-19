//compute the euclidean distance between two vectors
//function assumes vectors are arrays of equal length
var dist = function(v1,v2){
  var sum = 0;
  v1.forEach(function(val,index){
    sum += Math.pow(val - v2[index],2);
  });
  return Math.sqrt(sum);
};

var updateMax = function(val,arr){
    var max = 0;
    arr.forEach(function(obj){
        max = Math.max(max,obj.d);
    });
    return max;
};

function mode(array)
{
    if(array.length === 0)
      return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
      var el = array[i];
      if(modeMap[el] === null)
        modeMap[el] = 1;
      else
        modeMap[el]++;
      if(modeMap[el] > maxCount)
      {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    return maxEl;
}


var kNear = function(k){
  //PRIVATE
  var training = [];


  //PUBLIC

  //add a point to the training set
  this.train = function(vector, label){
    var obj = {v:vector, lab: label};
    training.push(obj);
  };

  this.classify = function(v){
    var voteBloc = [];
    var maxD = 0;
    training.forEach(function(obj){
      var o = {d:dist(v,obj.v), vote:obj.lab};
      if (voteBloc.length < k){
        voteBloc.push(o);
        maxD = updateMax(maxD,voteBloc);
      }
      else {
        if (o.d < maxD){
          var bool = true;
          var count = 0;
          while (bool){
            if (Number(voteBloc[count].d) === maxD){
              voteBloc.splice(count,1,o);
              maxD = updateMax(maxD,voteBloc);
              bool = false;
            }
            else{
              if(count < voteBloc.length-1){
                count++;
              }
              else{
                bool = false;
              }
            }
          }
        }
      }

    });
    var votes = [];
    voteBloc.forEach(function(el){
      votes.push(el.vote);
    });
    return mode(votes);
  };
};