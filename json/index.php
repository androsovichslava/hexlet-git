<?php
$json = '{
		"ru": ["пн", "вт", "ср"],
		"en": ["mn", "tu", "wd"]
	}';
$data = json_decode($json, true);
print_r($data['en']);
