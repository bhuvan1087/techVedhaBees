const APPOINTMENTS_SHEET_NAME = 'Appointments';
const CONTACT_MESSAGES_SHEET_NAME = 'Contact Messages';

const APPOINTMENT_HEADERS = [
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

const CONTACT_MESSAGE_HEADERS = [
  'Message ID',
  'Submitted At',
  'Name',
  'Email',
  'Country',
  'Dial Code',
  'Mobile',
  'Message',
  'Status',
  'Source',
];

function doPost(event) {
  try {
    const data = JSON.parse(event.postData.contents || '{}');

    if (data.type === 'contact') {
      return saveContactMessage(data);
    }

    return saveAppointment(data);
  } catch (error) {
    return jsonResponse({
      ok: false,
      error: error.message,
    });
  }
}

function saveAppointment(data) {
    const sheet = getSheet(APPOINTMENTS_SHEET_NAME, APPOINTMENT_HEADERS);
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
}

function saveContactMessage(data) {
  const sheet = getSheet(CONTACT_MESSAGES_SHEET_NAME, CONTACT_MESSAGE_HEADERS);
  const messageId = Utilities.getUuid();

  sheet.appendRow([
    messageId,
    data.submittedAt || new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.country || '',
    data.dialCode || '',
    data.mobile || '',
    data.message || '',
    data.status || 'NEW',
    data.source || 'Website',
  ]);

  return jsonResponse({
    ok: true,
    messageId,
    message: 'Contact message saved',
  });
}

function doGet() {
  const sheet = getSheet(APPOINTMENTS_SHEET_NAME, APPOINTMENT_HEADERS);
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

function getSheet(sheetName, headers) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
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
