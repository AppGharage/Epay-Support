## Overview
Epay serves as a webhook-driven checkout-as-a-service. With our webhook driven platform, you get notified via your webhook URL or endpoint whenever a new payment comes through in real time and you only need to worry about how to respond when a payment is successful or not.
 
::: tip WHAT IS A WEBHOOK?
A webhook (also called a web callback or HTTP push API) is a way for an app to provide other applications with real-time information.
:::

Before you can recieve webhook notifications, you need to register a webhook url under your settings navigation's tab on your Epay dashboard. When an event such as a successful payment or a failed payment occurs, you are notified via your webhook URL. 

::: warning IMPORTANT
Epay's webhook notifications are sent via HTTP POST request, to your specified webhook URL.
:::

::: tip Use Cases of Webhooks
You might use webhooks as the bases to:
- Update a customer's membership record in your database when a subscription payment succeeds
- Email a customer with an event ticket or digital product when payment succeeds
- Email a customer when a payment fails
- Record payment history in your database 
:::

## Configuring your Webhooks Settings
Webhooks are configured in the Dashboad's Settings Navigation section. Add your Webhook endpoint/URL for receiving webhooks.

You can enter any URL as the endpoint or destination for recieving notifications. However, this should be a dedicated page on your server that is setup to receive webhook notifications.


## Recieving a webhook Notification
Creating a webhook endpoint on your server is not different from creating any page on your website. With PHP, you might create a new **.php** file on your server; with a framework like Laravel, you would add a new route with the desired URL. Webhook Data is sent as JSON in a post Request body. The full notification details are included and can be used directly after, parsing the JSON.

::: warning IMPORTANT
If you are using Rails, Django, Laravel or another web Framework, your site might automatically check that every post request contains a CSRF token. This is an important security feature. However, this security measure might also prevent your site from processing legitimate webhooks. You will need to exempt the webhooks route from CSRF protection.
:::

**Sample Webhook Notification**
```json
{
    "success": true,
    "transaction": {
        "reference": "EP-XSks6NGSvtd",
        "payment_method": "momo",
        "amount": "1",
        "status": "success",
        "description": "Payment for sample event",
        "customer": {
            "name": "sam",
            "email": "sam@gmail.com",
            "telephone": "054********"
        },
        "page": {
            "id": 73,
            "name": "Event Demo App",
            "description": "A demo payment page ",
            "slug": "st-event-demo-app"
        }
    }
}

```
::: tip TIP
Always return a 200 status code from the webhook endpoint as shown below
:::

## Handling a webhook Notification
Below is a sample php code as to how to handle a webhook Notification

```php
<?php

//Retrieve the request's body and parse it as JSON
$request = @file_get_contents('php://input');
$request_body = json_decode($request); 

//Do something with $request_body with example notification body shown above

//Respond with 200
http_response_code(200); //PHP 5.4 or greater
```

