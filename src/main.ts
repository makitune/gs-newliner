function addToSheets(str: string) {
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(str.split(/\r\n|\n/));
}

function doPost(e: any) {
}

function doGet(e: any) {
}
