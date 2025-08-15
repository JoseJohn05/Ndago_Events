<?php
// event_booking.php
include 'database_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $Name = htmlspecialchars($_POST['Name']);
    $Email = htmlspecialchars($_POST['Email']);
    $Event = htmlspecialchars($_POST['events']);
    $Date = htmlspecialchars($_POST['Date']);
    $Notes = htmlspecialchars($_POST['Notes']);

    $stmt = $conn->prepare("INSERT INTO event_bookings (name, email, event_type, event_date, notes) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $Name, $Email, $Event, $Date, $Notes);

    if ($stmt->execute()) {
        echo "Booking saved successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}
?>