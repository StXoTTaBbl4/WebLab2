<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.Calendar" %><%--
  Created by IntelliJ IDEA.
  User: arums
  Date: 24.11.2022
  Time: 0:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, user-scalable=yes">
    <title>Web, Lab#1</title>
    <link rel="stylesheet" href="styles/index.css">
    <link rel="stylesheet" href="styles/w3.css">
    <link rel="shortcut icon" href="#">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=fire">
</head>

<body style="background-color:#F5F7D4;">
    <header><br>Румский Александр Максимович, P32121, Вариант #212121<br> <br></header>
    
    
    <div id="graph" class="w3-col">
      <canvas id="canvas" width="420px" height="420px"></canvas>
    </div>
    
    <div id="forma" class="w3-col">
        Parameters:
        <form id="info" class="validate_form" method="get">
            <p>
                <label>X:<br>
                  <input type="checkbox" class="x" name="x" id="n-3" value=-3>-3<br>
                  <input type="checkbox" class="x" name="x" id="n-2" value=-2>-2<br>
                  <input type="checkbox" class="x" name="x" id="n-1" value=-1>-1<br>
                  <input type="checkbox" class="x" name="x" id="n0" value=0>0<br>
                  <input type="checkbox" class="x" name="x" id="n1" value=1>1<br>
                  <input type="checkbox" class="x" name="x" id="n2" value=2>2<br>
                  <input type="checkbox" class="x" name="x" id="n3" value=3>3<br>
                  <input type="checkbox" class="x" name="x" id="n4" value=4>4<br>
                  <input type="checkbox" class="x" name="x" id="n5" value=5>5<br>
                  <input type="hidden" name="selectedX" class="selectedX" id="selectedX"/>
                </label>
            </p>
    
            <p>
                <label for="Y"  id="y_n">Y:</label>
                <input name="y_value" class="y" id="Y"  type="number" placeholder="-5...3" step="0.1" size="2" max="3.0" min="-3.0"/>
            </p>
    
            <p>
                <label for="R" id="r_n">R:</label>
                <input name="r_value" class="r" id="R"  type="number" placeholder="2...5" step="0.1" size="1" max="5.0" min="2.0"/>
                <!-- <input type="hidden" name="onlyR" class="onlyR" id="onlyR" value="false" checked/> -->
            </p>
    
            <p>
                <input type="submit" value="Submit"/>
            </p>
        </form>
        <button type="submit" class="w3-btn w3-small w3-round-xlarge w3-black w3-hover-green">Submit</button>
        <button type="submit" class="w3-btn w3-small w3-round-xlarge w3-black w3-hover-red">Reset</button>
    </div>
    
    <div id="res" class="w3-col">
        <table id="results" class="w3-table w3-striped w3-border w3-text-black" style="background-color:#F5F7D4; margin-top: 30px;">
            <tr style="background-color: #559E54;">
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Hit</th>
                <th>Time</th>
                <th>Exec.time</th>
            </tr>
            <tbody>
            <tr class='columns'>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>true</td>
                <td>11:22:33</td>
                <td>4ms</td>
            </tr>
            </tbody>
        </table>
    </div>
    
    
    <footer><%
        SimpleDateFormat formatter = new SimpleDateFormat("dd MMMM yyyy");
        out.println(formatter.format(Calendar.getInstance().getTime()));%>
        <br>
        <p id="test" class="font-effect-fire">All rights not reserved</p>
    </footer>
    
    <script src="JS/lib/jquery-3.6.1.min.js"></script>
    <script src="JS/graph.js" ></script>
    <script src="JS/client.js" ></script>
    </body>
</html>
