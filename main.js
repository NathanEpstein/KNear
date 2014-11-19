//compute the euclidean distance between two vectors
//function assumes vectors are arrays of equal length
var dist = function(v1,v2){
  var sum = 0;
  v1.forEach(function(val,index){
    sum += Math.pow(val - v2[index],2);
  })
  return Math.sqrt(sum);
}


var kNear = function(k){
  //PRIVATE
  var training = [];


  //PUBLIC

  //add a point to the training set
  this.train = function(vector, label){
    var obj = {v:vector, lab: label}
    training.push(obj);
  }

  this.classify = function(v){
    var voteBloc = [];
    var maxD = 0;
    training.forEach(function(obj){
      var o = {d:dist(v,obj.v), vote:obj.lab};

      if (voteBloc.length < k){
           console.log(voteBloc.length, k)
        maxD = Math.max(maxD, o.d);
        voteBloc.push(o);
      }
      else {
        if (o.d < maxD){
          var bool = true;
          var count = 0;
          while (bool){
            if (Number(training[count].d) === maxD){
              training.splice(count,1,o);
              bool = false;
            }
            else{
              count++;
            }
          }
        }
      }
    })
    console.log(voteBloc);
  }
}

var opt = new kNear(2);
opt.train([0,0,0],'buy');
opt.train([1,1,1],'buy');
opt.train([10,0,10],'sell');
opt.train([9,0,9],'sell');