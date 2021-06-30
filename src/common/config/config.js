// default config
module.exports = {
  port: 30000, // 监听端口
  host: '0.0.0.0', // 监听地址
  default_module: 'api',
  weixin: {
    appid: 'wx806f35eaffeb9532', // 小程序 appid
    secret: 'f7698871f14601efdb1d7bef6cb03f2c', // 小程序密钥
    mch_id: '1588245271', // 商户帐号ID
    partner_key: 'lgs123456ltkj1122334455667788990', // 微信支付密钥
    notify_url: '' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
  },
  express: {
    // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
    appid: '', // 对应快递鸟用户后台 用户ID
    appkey: '', // 对应快递鸟用户后台 API key
    request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
  }
};
