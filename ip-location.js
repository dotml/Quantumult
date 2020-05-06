//原脚本地址 https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/IP_API.js

if ($response.statusCode != 200) {
  $done(null);
}

var default_city = "Los Angeles";
var default_isp = "Cross-GFW.org";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  if(para) {
    return para
  } else
  {
    return default_city
  }
}

function ISP_ValidCheck(para) {
  if(para) {
    return para
  } else
  {
    return default_isp
  }
}

function Area_check(para) {
  if(para=="Taiwan"){
    return "China Taiwan"
  } else
  {
    return para
  }
}
var body = $response.body;
var obj = JSON.parse(body);
var title =Area_check(obj['country']);
var subtitle =City_ValidCheck(obj['city']) + '-' + '(' + ISP_ValidCheck(obj['org']) + ')';
var ip = obj['query'];
var description = obj['isp'] + '\n' + City_ValidCheck(obj['regionName']) + '\n' + obj['query'] + '\n' + obj['timezone'];

$done({title, subtitle, ip, description});
