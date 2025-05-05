/**
 * Simple email subscription service that sends data to Google Sheets
 */

interface EmailSubscription {
  email: string;
  date: string;
  source: string;
}

// IMPORTANT: Replace this URL with your actual Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby4svSXRKfCR9aeWwNkz_CVxiyrNAb3iTisMKytg_-tYN_AP0TG7tpBCzb5zxeHhjUy5g/exec';

/**
 * Save an email subscription to Google Sheets
 */
export async function saveEmailSubscription(email: string, source: string = 'Website'): Promise<boolean> {
  try {
    const subscriptionData: EmailSubscription = {
      email,
      date: new Date().toISOString(),
      source
    };
    
    if (GOOGLE_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
      // For development/testing when Google Sheets isn't set up yet
      console.log('Google Script URL not configured. Email would be sent to Google Sheets:', subscriptionData);
      // Simulate a delay to mimic network request
      await new Promise(resolve => setTimeout(resolve, 500));
      return true;
    }
    
    // Send to Google Sheets
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(subscriptionData),
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors' // Necessary for CORS issues with Google Apps Script
    });
    
    return true;
  } catch (error) {
    console.error('Error saving email subscription:', error);
    return false;
  }
}

/**
 * Get all saved email subscriptions from localStorage
 */
export function getStoredEmailSubscriptions(): EmailSubscription[] {
  try {
    return JSON.parse(localStorage.getItem('subscribedEmails') || '[]');
  } catch (error) {
    console.error('Error retrieving email subscriptions:', error);
    return [];
  }
}

/**
 * Export subscriptions as CSV for manual upload
 */
export function exportSubscriptionsAsCSV(): string {
  const subscriptions = getStoredEmailSubscriptions();
  
  if (subscriptions.length === 0) {
    return 'No subscriptions found';
  }
  
  // Create CSV header
  let csv = 'Email,Date,Source\n';
  
  // Add each subscription as a row
  subscriptions.forEach(sub => {
    csv += `${sub.email},${sub.date},${sub.source}\n`;
  });
  
  return csv;
}

/**
 * Setup instructions for Google Sheets integration:
 * 
 * 1. Create a new Google Sheet
 * 2. Add headers: Email, Date, Source
 * 3. Go to Extensions > Apps Script
 * 4. Replace the default code with:
 * 
 * function doPost(e) {
 *   const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   const data = JSON.parse(e.postData.contents);
 *   
 *   // Add a row to the spreadsheet
 *   sheet.appendRow([
 *     data.email,
 *     data.date,
 *     data.source || 'Website'
 *   ]);
 *   
 *   return ContentService.createTextOutput(JSON.stringify({
 *     result: 'success',
 *     message: 'Email saved successfully'
 *   })).setMimeType(ContentService.MimeType.JSON);
 * }
 * 
 * 5. Deploy > New Deployment
 * 6. Select Web App
 * 7. Set "Who has access" to "Anyone"
 * 8. Click Deploy and copy the URL
 * 9. Replace the GOOGLE_SCRIPT_URL constant in this file with your URL
 */ 