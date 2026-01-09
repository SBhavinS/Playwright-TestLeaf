/*Assignment Details:
Automate uploading and downloading a file on the web page without interacting with the Upload and Download button.
Preconditions:
- Use page fixture
- Load the URL (https://the-internet.herokuapp.com/upload)
- Load the URL (https://the-internet.herokuapp.com/download)
Assignment Requirements:
File Upload
- Upload a document without clicking the Upload button on the page
- Upload an image inside the red square area
- Assert that the file has been uploaded
File Download
- Download file.json from the list of files
- Assert that the file has been downloaded in the required path
Hints to Solve:
- Use setInputFiles(), fileChooser and waitForEvent() for the respective actions*/
import test from '@playwright/test';
import path from 'path';
import fs from 'fs';
test('File Upload and Download Test', async ({ page, browserName, context }) => {
    // // File Upload Section
    // await page.goto('https://the-internet.herokuapp.com/upload');
    // // Upload a document without clicking the Upload button on the page
    // const filePath = path.resolve(__dirname, '../../../Data/01_Enumeration.pdf');
    // const uploadInput = page.locator('#file-upload');
    // await uploadInput.setInputFiles(filePath);
    // await page.locator('#file-submit').click();
    // // Assert that the file has been uploaded
    // const uploadedFileName = await page.locator('#uploaded-files').textContent();
    // console.log('Uploaded file name:', uploadedFileName);
    // await test.expect(uploadedFileName).toContain('01_Enumeration.pdf');

/* Upload a document without clicking the Upload button on the page
- Upload an image inside the red square area
- Assert that the file has been uploaded*/

   await page.goto('https://the-internet.herokuapp.com/upload');
   const imagePath = path.resolve(__dirname, '../../../Data/Img1.png');
   // Wait for file chooser + click square
   const [fileChooser] = await Promise.all([
     page.waitForEvent('filechooser'),
     page.locator('#drag-drop-upload').click(), // square/div area
   ]);
   // Set file
   await fileChooser.setFiles(imagePath);
   const uploadedImageName = await page.locator('#drag-drop-upload').textContent();
   console.log('Uploaded image name:', uploadedImageName);
   await test.expect(uploadedImageName).toContain('Img1.png');




    // File Download Section
    await page.goto('https://the-internet.herokuapp.com/download');
    // Download file.json from the list of files
    const fileDownload=page.waitForEvent('download')
    page.locator('a[href="download/examplefile.json"]').click()
    const download = await fileDownload;
    // Assert that the file has been downloaded in the required path
    const downloadPath = path.resolve(__dirname, '../../../downloads');
    if (!fs.existsSync(downloadPath)){
        fs.mkdirSync(downloadPath);
    }
    const filePathDownloaded = path.join(downloadPath, await download.suggestedFilename());
    await download.saveAs(filePathDownloaded);
    console.log('Downloaded file path:', filePathDownloaded);
    await test.expect(fs.existsSync(filePathDownloaded)).toBeTruthy();
}
);
