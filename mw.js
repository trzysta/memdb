








const Import = function (e) {

  this.CSVData = e.field("input").split(/\r\n|\r|\n/);
  this.lineCount = this.CSVData.length;
  this.data = new Array(this.lineCount);
  this.print = "";
  this.pos = 0;

  for (let i = 0; i < this.lineCount; i++) {

    let rawLine = this.CSVData[i];
    let arr = new Array;
    arr = rawLine.replace(/\s+/g, ' ').trim().toLowerCase().split(";");
    this.data[i] = new Array;
    this.data[i] =
    {
      raw: rawLine,
      date: arr[0],
      type: arr[2],
      description: arr[3]
    }
    this.print += this.data[i].date + ";" + this.data[i].type + ";" + this.data[i].description + "\n";
  }
}





let i = new Import(entry());
entry().set("output", i.print);