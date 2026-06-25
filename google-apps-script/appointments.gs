const SHEET_NAME = 'Appointments';

const HEADERS = [
  'Appointment ID',
  'Submitted At',
  'Name',
  'Phone',
  'Email',
  'Department',
  'Preferred Date',
  'Preferred Time',
  'Message',
  'Status',
  'Source',
];

function doPost(event) {
  try {
    const sheet = getAppointmentsSheet();
    const data = JSON.parse(event.postData.contents || '{}');
    const appointmentId = Utilities.getUuid();

    sheet.appendRow([
      appointmentId,
      data.submittedAt || new Date().toISOString(),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.department || '',
      data.preferredDate || '',
      data.preferredTime || '',
      data.message || '',
      data.status || 'NEW',
      data.source || 'Website',
    ]);

    return jsonResponse({
      ok: true,
      appointmentId,
      message: 'Appointment saved',
    });
  } catch (error) {
    return jsonResponse({
      ok: false,
      error: error.message,
    });
  }
}

function doGet() {
  const sheet = getAppointmentsSheet();
  const rows = sheet.getDataRange().getValues();
  const headers = rows.shift();

  const appointments = rows.map((row) =>
    headers.reduce((record, header, index) => {
      record[toCamelCase(header)] = row[index];
      return record;
    }, {})
  );

  return jsonResponse({
    ok: true,
    appointments,
  });
}

function getAppointmentsSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function toCamelCase(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+(.)/g, (_, character) => character.toUpperCase());
}
