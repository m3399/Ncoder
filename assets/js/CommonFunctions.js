var flag = true;
var count = 0;
// Creating array of 50 nos to check the uniquity
var usedRandomNumber = [];

function uniqueRandom() {
    var RanNo = Math.floor(Math.random() * 50);

    var v = usedRandomNumber.includes(RanNo);
    //console.log(v);
    if (v) {
        // console.log('same no' + RanNo);
        // console.log(usedRandomNumber.lastIndexOf(RanNo));
        uniqueRandom();
    } else {
        //  console.log('different number');
        usedRandomNumber.push(RanNo);
        op = RanNo;
        flag = false;
    }
    if (flag == false) {
        // console.log(op);
        return op;
    }

}

function getResult() {
    if (count < 50) {
        op = uniqueRandom();
        count++;
        return op;
    } else {
        count = 0;
        usedRandomNumber = [];
    }

}

function test() {
    for (let index = 0; index < 50; index++) {
        myFuns();

    }
}