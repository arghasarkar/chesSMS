<?php

class PusherCredentials
{
    private $KEY = "67569bcf687f83becd73";
    private $SECRET = "22de75c5fb5979b4dbb1";
    private $APP_ID = 264644;

    public function getKey() {
        return $this->KEY;
    }

    public function getSecret() {
        return $this->SECRET;
    }

    public function getAppId() {
        return $this->APP_ID;
    }
}