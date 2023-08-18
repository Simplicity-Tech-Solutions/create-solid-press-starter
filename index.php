<!DOCTYPE html>
<html lang="en"> 
    <head>
        <?php wp_head(); ?>
    </head> 
    <body>
        <?php 
            if (defined('IS_VITE_DEVELOPMENT') && IS_VITE_DEVELOPMENT === true) {
                $htmlFilePath = __DIR__ . '/index.html';
                echo file_get_contents($htmlFilePath);
            } else {
                $htmlFilePath = __DIR__ . '/dist/index.html';
                echo file_get_contents($htmlFilePath);
            }
        ?>
        <?php wp_footer(); ?>
    </body>
</html> 
