<?php
// event_booking.php
include 'database_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = htmlspecialchars($_POST['User']);
    $email = htmlspecialchars($_POST['mail']);
    $password = password_hash($_POST['pass'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $password);

    if ($stmt->execute()) {
        echo "Registration successful!";
    } 
    else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}
if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        $Firstname = htmlspecialchars($_POST['firstname']);
        $Lastname = htmlspecialchars($_POST['lastname']);
        $Username = htmlspecialchars($_POST['User']);
        $Email = htmlspecialchars($_POST['mail']);
        $Password = htmlspecialchars($_POST['pass']);
        $viewPassword = isset($_POST['viewPassword']) ? 'Yes' : 'No';
        $Terms = isset($_POST['Terms']) ? 'Yes' : 'No';

            echo "<h2>Booking Details</h2>";
            echo "<br>";
            echo "Your first name is ".$Firstname;
            echo "<br>";
            echo "Your last name is ".$Lastname;
            echo "<br>";
            echo "Your email is: ".$Email;
            header("Location: ../Register.html");
        }
?>