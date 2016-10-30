<?php

require __DIR__ . '/twilio-php-master/Twilio/autoload.php';
use Twilio\Twiml;

$response = new Twiml;
$robots = "The Robots are coming! Head for the hills!";
$response->message($robots);
//print $response;


$number = $_POST["From"];
$message = $_POST["Body"];

$message = strtolower($message);
$message = str_replace(" ", "", $message);
$reply = "";
/**
 * Function should go here to handle the receiving a new move from an user
 */
if ($message == "helpme") {
    $reply = "Reply back with a number between column number 1 to 7.\nText when its your team's turn.";
} else {
    // Check
    $reply = $robots;
}
?>



<Response>
    <Message>
        <?php echo $reply; ?>
    </Message>
</Response>
