# gs-newliner

Add newline to Google Sheets by Google App Script via Slack app

## Usage

```zsh
$ clasp push
```

## Required

- npm or yarn
- clasp

## Setup

### Google App Script(GAS)

1. Select project  
   Open or Create GAS related to Google Sheets
   - [Open project](https://script.google.com/home)
   - Create
     1. `clasp create`
     2. `clasp push`
     3. `clasp open`
2. Deploy the script as a web app

   - Project version: **New**  
     No update if don’t select **New**
   - Execute the app as: **Me**
   - Who has access to the app: **Anyone, even anonymous**

   ![Deploy the script as a web app](img/Deploy-the-script-as-a-web-app.png)
   ![Configure wep app](img/Configure-wep-app.png)

3. Keep the web app URL
   - `https://script.google.com/macros/...`

### Slack apps

1. [Access Your Apps](https://api.slack.com/apps)
2. Create new apps

   - App Name
   - Development Slack Workspace

   ![Create new apps](img/Create-new-apps.png)

3. Enable Event Subscriptions  
   ![Enable Event Subscriptions](img/Enable-Event-Subscriptions.png)
   1. Turn on the switch for Enable Events
   2. Input the wep app URL of GAS kept via Setup GAS  
      ![Enable](img/Enable-events.png)
      - Verified!!!  
        ![Verified](img/Verified-request-url.png)
      - Errored  
        If errored, check `doPost` function of GAS whether return request parameter in json format
        ![Errored](img/Error-request-url.png)
   3. Subscribe to bot events  
      Pick the right permission (recommended `message.channels`)  
      ![Select](img/Select-bot-events.png)
   4. Save changes
4. Install App to Workspace  
   ![Install App to Workspace](img/Install-App-to-Workspace.png)

5. Invite the bot to a channel
