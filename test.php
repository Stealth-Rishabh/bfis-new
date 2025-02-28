// C:/xampp/htdocs/test.php
<?php
header('Content-Type: application/json');
echo json_encode([
    'status' => 'success',
    'message' => 'PHP endpoint is working',
    'time' => date('Y-m-d H:i:s')
]);