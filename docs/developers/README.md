## Overview
[Epay](https://epaygh.com/) serves as a webhook-driven checkout-as-a-service. With our webhook driven platform, you get notified via your webhook URL or endpoint whenever a new payment comes through in real time and you only need to worry about how to respond when a payment is successful or not.
 
::: tip WHAT IS A WEBHOOK?
Webhooks are an incredibly useful and a resource-lightway to implement event reactions. Sometimes people call webhooks "Reverese API" or "Callback".
With most APIs there's a request followed by a response whilst with a Webhook no request is required, it just sends a response/data when it's available.
Whenever there's something new, the webhook will send data to the webhook Url you specified.
:::

### Resources on Webhooks
* [Webhhook vs API](https://sendgrid.com/blog/webhook-vs-api-whats-difference/)
* [What is a webhook](https://codeburst.io/what-are-webhooks-b04ec2bf9ca2)


### Use cases Of Webhooks
You might use webhooks as the bases to:
- Update a customer's membership record in your database when a subscription payment succeeds
- Email a customer with an event ticket or digital product when payment succeeds
- Email a customer when a payment fails
- Record payment history in your database 


Before you can recieve webhook notifications, you need to register a webhook url under your [settings](https://epaygh.com/settings) navigation's tab. 
When an event such as a successful payment or a failed payment occurs, you are notified via your webhook URL. 

::: warning IMPORTANT
Epay's webhook notifications are sent via HTTP POST request, to your specified webhook URL.
:::



## Quick Start
Get up and running with our webhook driven service and start your integration.
Integrating Epay into your app or website can begin as soon as you [Create an Account](https://epaygh.com/register), requiring only three steps;
1. [Configure your Webhook](/developers/#configuring-your-webhooks-settings) to receive webhook notifications through the specified endpoint
2. [Connect your payment page](/developers/#connecting-your-payment-page) so you can tak payments from your customers directly into your Epay wallet 
3. [Recieve and Handle Webhook Notifications](/developers/#recieving-a-webhook-notification) to confirm payment transctions and fulfill purchases


## Configuring your Webhooks Settings
Webhooks are configured in the Dashboad's Settings Navigation section. Add your Webhook endpoint/URL for receiving webhooks.

You can enter any URL as the endpoint or destination for recieving notifications. However, this should be a dedicated page on your server that is setup to receive webhook notifications.


## Connecting your Payment Page
A **Payment Page** can represent anything you want to charge money for, including; a downloadable product, a private course, T-shirt etc .

You can simply connect your payment page to your application or website by hiding the link of the payment page behind a pay button so your customers get redirected
to the payment page when they click on the pay button. 

```html
<a href="https://epaygh.com/pay/st-event-demo-app" class="btn btn-primary">Pay</a>
```

::: tip TIP
You may also choose to use an iframe to load the payment page when a user clicks on the pay button.
:::

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

