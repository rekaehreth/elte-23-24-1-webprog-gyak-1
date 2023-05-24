<?php 
if (isset($_POST['logIn'])) {
    session_start();
    if (!empty($_POST['user'])) {
        $userError = true;
    }
    if (!empty($_POST['passphrase'])) {
        $passphraseError = true;
    }

    // Todo: handle errors 
        // by setting an error style for the input or 
        // by displaying an error message next to them

    if (!$userError && $passphraseError) {
        $_SESSION['user'] = $_POST['user'];
        $_SESSION['passphrase'] = $_POST['passphrase'];
    }
    if (isset($_POST['logOut'])) {
        session_destroy();
    }
}

$userInfo = [
    "user" => $_SESSION['user'] ?? "No user is logged in", 
    "passphrase" => $_SESSION['passphrase'] ?? ""
];
?>

<form method="post" action="auth.php"> 
    User name: <input type="text" name="user">
    Passphrase: <input type="text" name="passphrase">
    <button type="submit" name="logIn">Log In</button>
    <!-- 
       Displaying a password as plain text is against standards. 
        When handling passwords from a security perspective it is 
        required to encode them before sending them to the server for processing. 
        That's because if anyone or anything catches the request, they can read its body 
        without challenges and so easily get the login credentials. 
    -->
    <button type="submit" name="logOut">Log Out</button>
</form>

User info: 
<?= $userInfo["user"] ?> <br>
<?= $userInfo["passphrase"] ?>