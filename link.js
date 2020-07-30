if ($response.statusCode !== 200) {
    $done(Null);
}

var default_city = "City of Las Vegas";
var default_isp = "Cross-GFW.org";

/**
 * @return {string}
 */
function City_ValidCheck(para) {
    if (para) {
        return para
    } else {
        return default_city
    }
}

/**
 * @return {string}
 */
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
var index = obj['org'].indexOf(' (');
var subtitle = City_ValidCheck(obj['city']) + '-' + ISP_ValidCheck(obj['org'].substring(0, index));
var ip = obj['query'];
var description = obj['isp'] + '\n' + City_ValidCheck(obj['regionName']) + '\n' + obj['query'] + '\n' + obj['timezone'];

$done({title, subtitle, ip, description});