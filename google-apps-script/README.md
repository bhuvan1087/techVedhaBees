# Google Sheets Appointment Setup

Use this folder to connect the website appointment form to Google Sheets.

## 1. Create the Sheet

1. Open Google Sheets.
2. Create a new spreadsheet named `TechVedhaBees Appointments`.
3. Go to `Extensions` > `Apps Script`.
4. Copy the code from `appointments.gs` into the Apps Script editor.
5. Save the project.

## 2. Deploy the Script

1. In Apps Script, click `Deploy` > `New deployment`.
2. Select type: `Web app`.
3. Execute as: `Me`.
4. Who has access: `Anyone`.
5. Click `Deploy`.
6. Copy the Web app URL.

## 3. Connect React

Create a `.env` file in the project root:

```env
VITE_APPOINTMENT_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart the Vite server after editing `.env`.

## 4. Test

1. Open `http://localhost:5173/#appointments`.
2. Submit an appointment.
3. Check the `Appointments` sheet.

The local website uses `no-cors`, so the browser cannot read the Apps Script response. If the request is accepted, the form shows a success message and the row should appear in Google Sheets.
