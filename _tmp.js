
var res = "";

for (i=1; i<52; i++ ) {
if (entry().field( i.toString() ) == true) {
  var d = (1 + (i - 1) * 7); // 1st of January + 7 days for each week
  res = res + ", " + new Date(2022, 0, d);
}
}

res