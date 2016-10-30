<?php
header("Access-Control-Allow-Origin: *");
require __DIR__ . '/Pusher/Pusher.php';

$colour = $_GET["colour"];
$column = $_GET["column"];


$options = array(
    'encrypted' => true
);
$pusher = new Pusher(
    '67569bcf687f83becd73',
    '22de75c5fb5979b4dbb1',
    '264644',
    $options
);

$data['colour'] = $colour;
$data['column'] = $column;
var_dump($data);
$pusher->trigger('test_channel', 'my_event', $data);
