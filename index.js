const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
function superbowlWin(array) {
    const win = array.find(time => time.result === 'W');
    if (win === undefined) {
        return undefined
    } else {
        return win.year
    }
};
console.log(superbowlWin(record))