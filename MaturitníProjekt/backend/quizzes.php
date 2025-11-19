<?php
include 'db.php';
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents("php://input"), true);

if($method === 'GET') {
    // seznam kvízů
    $stmt = $pdo->query("SELECT * FROM quizzes");
    $quizzes = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($quizzes);
}

if($method === 'POST') {
    // uložení výsledku
    $user_id = $data['user_id'];
    $quiz_id = $data['quiz_id'];
    $score = $data['score'];

    $stmt = $pdo->prepare("INSERT INTO results (user_id, quiz_id, score) VALUES (?, ?, ?)");
    if($stmt->execute([$user_id, $quiz_id, $score])) {
        echo json_encode(["status"=>"success","message"=>"Výsledek uložen"]);
    } else {
        echo json_encode(["status"=>"error","message"=>"Chyba při ukládání výsledku"]);
    }
}
?>
