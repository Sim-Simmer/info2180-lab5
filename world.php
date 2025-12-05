<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

$country='';
if (array_key_exists('country', $_GET)) {
    $country = $_GET['country'];
}

$query = "SELECT * FROM countries WHERE name LIKE '%$country%'";

$countries = $conn->query($query)->fetchAll(PDO::FETCH_ASSOC);
?>

<table>
  <tr>
    <th>Country Name</th>
    <th>Continent</th>
    <th>Independence Year</th>
    <th>Head of State</th>
  </tr>


<?php foreach($countries as $i): ?>
  <tr>
    <td><?=$i['name'] ?></td>
    <td><?=$i['continent'] ?></td>
    <td><?=$i['independence_year'] ?></td>
    <td><?=$i['head_of_state'] ?></td>
  </tr>
<?php endforeach; 
?>
</table>