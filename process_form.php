<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $services = isset($_POST["services"]) ? implode(", ", $_POST["services"]) : "";

    $to = "sairohitp007@gmail.com";
    $subject = "New Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message\nServices: $services";

    // Use mail() function to send the email
    mail($to, $subject, $body);

    // Optionally, you can redirect the user to a thank you page
    header("Location: thank_you_page.html");
    exit;
}
?>
