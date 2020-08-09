function addToSheets(str: string) {
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(str.split(/\r\n|\n/));
}

function doPost(e: any) {
  var contents = JSON.parse(e.postData.contents);
  addToSheets(contents.event.text);

  // for verification
  return ContentService.createTextOutput(JSON.stringify(e)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doGet(e: any) {
  return doPost(e);
}
