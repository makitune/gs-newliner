function addToSheets(str: string) {
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(str.split(/\r\n|\n/));
}

function doPost(e: any) {
  var contents = JSON.parse(e.postData.contents);

  // for verification
  if (contents.event == null) {
    return ContentService.createTextOutput(JSON.stringify(e)).setMimeType(
      ContentService.MimeType.JSON
    );
  }

  addToSheets(contents.event.text);
}

function doGet(e: any) {
  return doPost(e);
}
