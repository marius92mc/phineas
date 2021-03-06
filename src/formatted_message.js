export default class FormattedMessage {
  getMessage() {
    return ({
        "text": "New comic book alert!",
        "attachments": [
            {
                "title": "The Further Adventures of Slackbot",
                "fields": [
                    {
                        "title": "Volume",
                        "value": "1",
                        "short": true
                    },
                    {
                        "title": "Issue",
                        "value": "3",
                "short": true
                    }
                ],
                "image_url": "http://i.imgur.com/OJkaVOI.jpg?1"
            },
            {
                "title": "Synopsis",
                "text": "After @episod pushed exciting changes to a devious new branch back in Issue 1, Slackbot notifies @don about an unexpected deploy..."
            },
            {
                "fallback": "Would you recommend it to customers?",
                "title": "Would you recommend it to customers?",
                "callback_id": "comic_1234_xyz",
                "color": "#3AA3E3",
                "attachment_type": "default",
                "actions": [
                    {
                        "name": "recommend",
                        "text": "Recommend",
                        "type": "button",
                        "value": "recommend"
                    },
                    {
                        "name": "no",
                        "text": "No",
                        "type": "button",
                        "value": "bad"
                    }
                ]
            }
        ]
      });
  }

}
