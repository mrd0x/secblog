---
title: Spoofing File Extensions Using Google Drive and OneDrive
date: "2021-08-15"
featuredImage: ''
---

Google Drive and OneDrive contain spoofing vulnerabilities that can aid attackers with phishing<!-- end -->.

# Google Drive - Masquerading File Extension

First create your malicious .doc file and upload it to Google Drive.

![Doc-File](./doc_file_gdrive.png)

After uploading the file, modify the file extension to .docx.

![File-Rename](./file_rename.png)

Compose an email to the target and attach the file via Google Drive attachments. When the user opens up the email they see the following:

![Doc-And-Docx](./doc_and_docx.png)

But when they attempt to download the file, it'll be saved as the original extension (in this case .doc).

![Doc-And-Docx-Downoad](./doc_and_docx_download.png)

Of course, this can be done to any file extension. In the image below my .exe file looks like a .txt.

![Executable-File](./exe_file.png)

# OneDrive - Masquerading File Extension

Unfortunately, this isn't purely a Google problem as I realized OneDrive faces the same issue. Below I demonstrate two ways to masquerade extensions using OneDrive and Outlook.

## The Quick Way

**This method does not work if the target is using O365/Outlook.**

First upload your malicious .docm file to OneDrive (Avoid using .doc as I noticed OneDrive will automatically change it to .docx).

![Upload-Docm](./outlook1_upload_docm.png)

Next, go compose an email to the target and attach that file and immediately intercept the request via Burp (or any other HTTP proxy). In the first request look for your file extension and modify it to any extension you'd like. I changed my .docm to .docx.

![Burp-Outlook](./outlook_burp.png)

And upon checking the email and the user sees the spoofed extension. But upon download, the original extension is used.

![Spoofed-Docx](./outlook_docx.png)

![Outlook-Download](./outlook_download.png)

## The Longer Way

First upload your malicious .docm file to OneDrive (Avoid using .doc as I noticed OneDrive will automatically change it to .docx).

![Upload-Docm](./outlook1_upload_docm.png)

Next, you'll want to rename the file extension to docx. This requires a HTTP proxy as OneDrive won't allow you to change the extension via UI.

![Change-File-Extension](./outlook2_rename_to_docx.png)

Afterwards compose an email to the target and attach the .docx file. After sending the file go back and change the file to .docm.

![Compose-Email](./outlook3_email_docx_file.png)

The user sees file.docx but when they try to download it, it'll be file.docm.

![Delivered-Email](./outlook4_email_delivered.png)

![Download-Docm](./outlook5_download_docm.png)

And again to show you another example I use the same technique to hide my an executable as a .txt. And when the user tries to download the file they'll get a surprise.

![TXT-File](./outlook8_txt_delivered.png)

![EXE-Download](./outlook7_download_exe.png)

# Google Drive - Masquerade File Icon

Something really great Google and Microsoft do is give us an icon based off the file type. For example, if the file is a Word document Google will place that nice innocent looking 'blue W' beside the file. It helps you distinguish between a Word document and an executable. Wouldn't it be great if we can place that icon on our executable file to entice the user to click on it? Well luckily for us we can and it's **really simple**.

Modify your .exe file to .doc locally on your machine. After you upload it to Google Drive simply rename it to .exe. DONE!

![Icon-Spoof](./icon_spoof.gif)

And when you email it this is what recipients see in Gmail and Outlook respectively.

![Gmail-Spoof](./spoofed_icon_executable.png)

![Outlook-Spoof](./spoofed_icon_executable_outlook.png)

## Additional MIME Types

Check out this list of <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types" target="_blank">MIME types</a> by file extension and get creative.

![Image-Exe](./image_exe.png)

# Google Drive - Modify File's Timestamp

I'm not going through this one in detail but I was also able to play around with the modified timestamp.

![Spoofed-Date](./spoofed_date.png)

# Non-Existent File Extensions

Another less impressive method of phishing is to use non-existent file extensions. If you create a Word document via MS Word, modify the extension to anything and upload it to Google Drive you'll notice that Google still considers the file a Word document regardless of the extension.

## Scenario 1 (Best Case)

In this scenario, the user receives a download prompt and chooses the 'Open With' option. We try to entice the user to download the file.

![Pretext](./email_bait.png)

And if they want to verify the file first by viewing it online we include something like this:

![Gdrive-View](./gdrive_view.png)

The user now agrees to download the file, but instead of saving it they will open with the default application, MS Word.

![Scenario-One](./scenario1.gif)

## Scenario 2

In the second scenario, the file is automatically saved and the user will need to open it with Word somehow. Clearly this scenario is not as ideal because double clicking on the file wont't work. Nonetheless, below I demonstrate the scenario. I start with the assumption that the user had already downloaded the file. Although I would agree that this scenario seems less likely to happen we have to remember that the user had Google vouch for them that the file is a Word document.

![Scenario-Two](./scenario2.gif)

## Scenario 3

The third scenario involves sending the user the Google Drive link and upon downloading, Google will auto append the '.doc' extension.

![Scenario-Three](./scenario3.png)

# Things To Consider

* Cloud providers are always scanning your files for malicious content
* If your macros consist of any autorun functions (e.g AutoOpen) then Google will automatically flag it as malware.
* Be smart, don't spoof a .txt file as an .exe because it wiil still need to go through the browser security and smartscreen and other security measures.



