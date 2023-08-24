<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) )
    exit;  

function custom_404_redirect() {
    if (is_404()) {
        // Redirect to index.php
        status_header(200); // Set HTTP status code to 200 (OK)
        include(get_template_directory() . '/index.php');
        exit();
    }
}
add_action('template_redirect', 'custom_404_redirect');

function add_style() { 
    wp_enqueue_style('style', get_stylesheet_uri()); 
}
add_action('wp_enqueue_scripts','add_style');


$packageJsonPath = __DIR__ . DIRECTORY_SEPARATOR . 'package.json';
$packageJsonContent = file_get_contents($packageJsonPath);
$packageJsonData = json_decode($packageJsonContent, true);
$current_env = $packageJsonData['config']['environment'];
define('IS_VITE_DEVELOPMENT', $current_env === 'development' ? true : false);

include "inc/inc.vite.php";