if (!GLOBAL) {
	var GLOBAL = {};
}
if (!GLOBAL.Panels) {
	GLOBAL.Panels = {};
}

function AboutUsPanel(argument) {
	var panel = new BasePanel();
	var AboutUsBox = $('<div>').addClass('fb-afooter-box').appendTo(panel);

	panel.data('fb').load = function() {
		$('<div>').addClass('fb-content-box').append('<div id="direction">\
		<h3>关于我们</h3>\
		<div>\
			<p>\
				&nbsp;&nbsp;&nbsp;&nbsp; 菲博国际旨在打造亚洲最有公信力，最受玩家欢迎的在线娱乐平台。菲博国际努力创新，追求完美，着眼于服务和产品的每个细节，拥有市场上最多样化的游戏项目，以为客户提供即时、刺激、体贴的娱乐产品与高品质服务为首要宗旨。\
			</p>\
			<p>\
				&nbsp;&nbsp;&nbsp;&nbsp; 在日渐热络、成熟的网路博彩市场中，除了多样化的游戏外，网路安全最为客户注重，菲博国际针对现阶段网络安全问题，成立了网路安全维护中心，彻底解决了网路安全的后顾之忧，诺顿分级评级核菲博国际为最安全网站之一；菲博国际获得GEOTRUST国际认证，确保网站公平公正，所有会员资料均经过加密，保障玩家隐私。菲博国际所有的游戏皆有共同的优点；无须耗时下载，操作介面简单明了、功能齐全、画面精致，游戏从每一局的开始至结束皆秉持着公平、公正、公开的原则。\
			</p>\
			<p>\
				<span> <strong>&nbsp;&nbsp;&nbsp;运动博彩</strong>\
				</span>\
				<br>\
				菲博国际在硬体上投注了大量的人力及资源，更由顶级的盘房进行专业操盘，提供完整赛事、搭配丰富的玩法组合给热爱体育的玩家。\
				<br>\
				<span> <strong>&nbsp;&nbsp; 彩票游戏</strong>\
				</span>\
				<br>以官方赛事结果为本类游戏唯一的胜负标准，让玩家在活泼的投注界面中，享受最公正的娱乐。</p>\
			<p>\
				&nbsp;&nbsp;&nbsp;&nbsp;菲博国际24小时不打烊，全天候处理客户出入款相关事宜；严格训练的客服团队，以专业、亲切的态度，迅速解决您于网站、游戏中遇到的种种问题，努力让客户皆有宾至如归的感觉。举办更多的优惠及促销活动，给客户提供更多的回馈及惊喜！玩家网上支付和所有银行交易由国际金融机构在高标准的安全和机密的网络中进行。进入玩家帐户资料也必须有玩家唯一的登录ID和密码，确保客户的资金安全有保障。同时也采用最先进的加密措施来保证玩家的游戏安全，7×24小时的后台检测和监控，确保我们可以提供一个完全公正和安全的网络游戏空间。客户在本平台的所有活动均严格保密，我们不会向第三方包括政府透露客户资料。\
			</p>\
		</div>\
	</div>').appendTo(AboutUsBox);
		panel.find('.fb-panel-mask').remove();
	};
	return panel;
}

GLOBAL.Panels["AboutUsPanel"] = AboutUsPanel;