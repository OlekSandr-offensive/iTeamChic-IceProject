<?php
 
//https://api.telegram.org/1519597698:AAEZ2z_aNxBd3s7fNty4LDtUY9PGhyxRAqc/getUpdates
 
//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$comment = $_POST['user_comment'];
 
//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1519597698:AAEZ2z_aNxBd3s7fNty4LDtUY9PGhyxRAqc";
 
//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-577296701";
 
//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Комментарий' => $comment
);
 
//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
  echo "Thank you";
} else {
  echo "Error";
}
?>