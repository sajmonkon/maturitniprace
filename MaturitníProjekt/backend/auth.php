<?php
include 'db.php';
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents("php://input"), true);

if($method === 'POST') {
    if(isset($data['action']) && $data['action'] === 'register') {
        $username = $data['username'];
        $email = $data['email'];
        $password = password_hash($data['password'], PASSWORD_DEFAULT);

        $stmt = $pdo->prepare("INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)");
        if($stmt->execute([$username, $email, $password])) {
            echo json_encode(["status"=>"success","message"=>"Uživatel vytvořen"]);
        } else {
            echo json_encode(["status"=>"error","message"=>"Chyba při registraci"]);
        }
    } elseif(isset($data['action']) && $data['action'] === 'login') {
        $email = $data['email'];
        $password = $data['password'];

        $stmt = $pdo->prepare("SELECT * FROM users WHERE email=?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if($user && password_verify($password, $user['password_hash'])) {
            echo json_encode(["status"=>"success","user_id"=>$user['id'],"username"=>$user['username']]);
        } else {
            echo json_encode(["status"=>"error","message"=>"Špatné přihlašovací údaje"]);
        }
    }
}
?>
