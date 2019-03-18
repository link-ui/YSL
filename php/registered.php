<?php
header("Content-type:text/html;charset=utf-8");
//一、接收
// $userphone=$_POST["userphone"];
// $userpass=$_POST["userpass"];
$userphone = $_GET['userphone'];
$userpass=$_GET['userpass'];
$username=$_GET['username'];
//二、处理
	//1、连接数据库服务器
$conn=mysql_connect("localhost","root","root");
	if(!$conn){
		die("连接失败");
	}else{
		//2、选择数据库
		mysql_select_db("ysl",$conn);
		//3、执行SQL语句
		$str="select * from usertable where userphone='$userphone'";
		$result=mysql_query($str,$conn);
		if(mysql_num_rows($result)==0){
			$sql="insert into usertable(userphone,username,userpass)
			values('$userphone','$username','$userpass')";
			$result=mysql_query($sql,$conn);
			//4、关闭数据库
			mysql_close($conn);
		// 	if($result==1){
		// 		echo"注册成功,请<a href='denglu.html'>登录</a>";
		// 	}else{
		// 		echo"注册失败,请重新<a href='zhuce.html'>注册</a>";
		// 	}	
		// }else{
		// 	echo"用户已存在！<a href='denglu.html'>登录</a>";
		// }
			if($result==1){
				echo"1";
			}else{
				echo"0";
			}	
		}else{
			echo"2";
		}
	
	}
?>