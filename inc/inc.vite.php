<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) )
    exit;  

// deafult server address, port and entry point can be customized in vite.config.json
define('VITE_SERVER', 'http://localhost:3000');
define('VITE_ENTRY_POINT', '/src/index.jsx');

// enqueue hook
add_action( 'wp_enqueue_scripts', function() {
    if (defined('IS_VITE_DEVELOPMENT') && IS_VITE_DEVELOPMENT === true) {
        // insert hmr into head for live reload
        function vite_head_module_hook() {
            echo '<script type="module" crossorigin src="' . VITE_SERVER . VITE_ENTRY_POINT . '"></script>';
        }
        add_action('wp_head', 'vite_head_module_hook');      
    } 
});