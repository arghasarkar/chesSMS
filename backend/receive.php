<?php

require __DIR__ . '/twilio-php-master/Twilio/autoload.php';
require __DIR__ . '/Pusher/Pusher.php';

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

header("Access-Control-Allow-Origin: *");

$options = array(
    'encrypted' => true
);
$pusher = new Pusher(
    '67569bcf687f83becd73',
    '22de75c5fb5979b4dbb1',
    '264644',
    $options
);

/**
 * Function should go here to handle the receiving a new move from an user
 */
if ($message == "helpme") {
    $reply = "Reply back with a number between column number 1 to 7.\nText when its your team's turn.";
} else {
    // Check if the numbers are valid between 1 and 7

    $intVote = intval($message);

    if ($intVote > 0 && $intVote < 8) {
        /**
         * Raise a Pusher Event to update the voting.
         */

        $intVote--;
        $data['colour'] = 'red';
        $data['column'] = $intVote;
        $pusher->trigger('test_channel', 'newvote', $data);

        $reply = "Thanks for your vote!";

    } else {
        $reply = "I can't understand you.";
    }
}
?>



<Response>
    <Message>
        <?php echo $reply; ?>
    </Message>
</Response>
