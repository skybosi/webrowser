// version config
var V_MAJOR = 0
var V_MIMOR = 0
var V_PATCH = 0
var V_HEX = ((V_MAJOR << 16) | (V_MIMOR << 8) | V_PATCH)
var PRODUCT_NAME = "MoYu_"
var VERSION = PRODUCT_NAME + V_MAJOR + "." + V_MIMOR + "." + V_PATCH

// server config
var SERVER_IP = "http://47.98.243.40"
var SERVER_DOMAIN = "https://www.young-ging.cn/quantum"
var SERVER_WS_DOMAIN = "wss://www.young-ging.cn"
var MoYu_PREFIX = SERVER_DOMAIN + "/file/downfile?filename="
var MoYu_PREFIX_NEW = SERVER_DOMAIN + "/myfs/"
var MoYu_Upload = SERVER_DOMAIN + "/file/upfile"

module.exports = {
  V_MAJOR: V_MAJOR,
  V_MIMOR: V_MIMOR,
  V_PATCH: V_PATCH,
  V_HEX: V_HEX,
  VERSION: VERSION,
  PRODUCT_NAME: PRODUCT_NAME,
  SERVER_DOMAIN: SERVER_DOMAIN,
  SERVER_WS_DOMAIN: SERVER_WS_DOMAIN,
  MoYu_PREFIX: MoYu_PREFIX_NEW,
  MoYu_Upload: MoYu_Upload,
}