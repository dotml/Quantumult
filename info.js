if ($response.statusCode != 200) {
    $done(Null);
}

var default_city = "Los Angeles";
var default_isp = "Cross-GFW.org";

function City_ValidCheck(para) {
    if (para) {
        return para
    } else {
        return default_city
    }
}

function ISP_ValidCheck(para) {
    if (para) {
        return para
    } else {
        return default_isp
    }
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = City_ValidCheck(obj['city']) + '-' + ISP_ValidCheck(obj['org']);
var ip = obj['query'];
var description = obj['isp'] + '\n' + City_ValidCheck(obj['regionName']) + '\n' + obj['query'] + '\n' + obj['timezone'];

$done({title, subtitle, ip, description});
