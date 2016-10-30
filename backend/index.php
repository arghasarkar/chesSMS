<?php
// Require the bundled autoload file - the path may need to change
// based on where you downloaded and unzipped the SDK
require __DIR__ . '/twilio-php-master/Twilio/autoload.php';

// Use the REST API Client to make requests to the Twilio REST API
use Twilio\Rest\Client;

// Your Account SID and Auth Token from twilio.com/console
$sid = 'ACea090ac9d7f0f6ff0fa5092d1e598648';
$token = 'e410372e6fe3af80c3bb4d69eeeb60df';
$client = new Client($sid, $token);
$NAV_NUM = "+447803565182";
$ARGHA_NUM = "+447554164303";
// Use the client to do fun stuff like send text messages!
$client->messages->create(
// the number you'd like to send the message to

    $ARGHA_NUM,
    array(
        // A Twilio phone number you purchased at twilio.com/console
        'from' => '+441234480304',
        // the body of the text message you'd like to send
        'body' => "Hey Jenny! Good luck on the bar exam!"
    )
);