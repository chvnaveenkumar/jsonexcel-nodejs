var XLSX = require('xlsx');

var workbook = XLSX.readFile('input.xlsx');

var sheet_name_list = workbook.SheetNames;
var json_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

console.log(json_object[0]);

var wb = XLSX.utils.book_new();
var json_to_sheet = XLSX.utils.json_to_sheet(json_object);
wb.SheetNames.push("Test Sheet");
wb.Sheets["Test Sheet"] = json_to_sheet;

XLSX.writeFile(wb, 'output.xlsx');