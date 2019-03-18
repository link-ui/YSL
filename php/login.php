<?php
	header("Content-type:text/html;charset=utf-8");
//一、接收
	$userphone=$_GET['userphone'];
	$userpass=$_GET['userpass'];
	//二、处理
	//1、连接数据库服务器
	$conn=mysql_connect("localhost","root","root");
	if(!$conn){
		// die("连接失败".mysql_error());
	}else{
		//2、选择数据库
		mysql_select_db("ysl",$conn);
		//3、执行SQL语句
		$sqlstr="select * from usertable where userphone='$userphone' and userpass='$userpass'";
		$str="select username from usertable where userphone='$userphone'";
		$results=mysql_query($str,$conn);

		$query_row = mysql_fetch_array($results);
		if($query_row){
			echo $query_row[0];
		}else{
			echo "";
		}

		$result=mysql_query($sqlstr,$conn);
		echo $result;
		mysql_close($conn);
		
		if(mysql_num_rows($result)==0){
			echo "0";
		}else{
			echo "1";
		}
	}
?>