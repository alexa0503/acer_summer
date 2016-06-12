//找到url中匹配的字符串
function findInUrl(str){
	url = location.href;
	return url.indexOf(str) == -1 ? false : true;
}
//获取url参数
function queryString(key){
    return (document.location.search.match(new RegExp("(?:^\\?|&)"+key+"=(.*?)(?=&|$)"))||['',null])[1];
}

//产生指定范围的随机数
function randomNumb(minNumb,maxNumb){
	var rn=Math.round(Math.random()*(maxNumb-minNumb)+minNumb);
	return rn;
	}
	
var wHeight;
$(document).ready(function(){
	wHeight=$(window).height();
	if(wHeight>=980){
		//$('.page').css('margin-top',((wHeight-1139)/2-20)+'px');
		window.scroll(0,((1139-wHeight)/2+20));
		}
	$('#touchCanvas').on('touchmove',function(e){
		e.preventDefault();
		});
		
	loadImg();
	});
	
function loadImg(){
	var images=[];
	images.push("images/awdTxt1.png");
	images.push("images/earth.png");
	images.push("images/man1.png");
	images.push("images/man2.png");
	images.push("images/page1Img1.png");
	images.push("images/page3Img1.png");
	images.push("images/page3Img2.png");
	images.push("images/page3Img3.png");
	images.push("images/page4Img1.png");
	images.push("images/ruleBg.png");
	images.push("images/scrollHand.png");
	images.push("images/scrollEnd.png");
	images.push("images/snidPop.png");
	
    /*图片预加载*/
    var imgNum=0;
    $.imgpreload(images,
            {
                each: function () {
                    var status = $(this).data('loaded') ? 'success' : 'error';
                    if (status == "success") {
						var v = (parseFloat(++imgNum) / images.length).toFixed(2);
                        $(".loadingTxt span").html(Math.round(v * 100));
                    }
                },
                all: function () {
					goPage1();
                }
            });
	}
	
function goPage1(){
	$('.page0').fadeOut(500);
	$('.page1').fadeIn(500);
	}
	
function goPage2a(){
	gameType=1;
	$('.man').addClass('man1');
	$('.page1').fadeOut(500);
	$('.page2').fadeIn(500);
	earthZr();
	}
	
function goPage2b(){
	gameType=2;
	$('.man').addClass('man2');
	$('.page1').fadeOut(500);
	$('.pageSnid').fadeOut(500);
	$('.page2').fadeIn(500);
	earthZr();
	}
	
function snidShow(){
	$('.pageSnid').fadeIn(500);
	}
	
function snidClose(){
	$('.pageSnid').fadeOut(500);
	}
	
function showRule(){
	$('.pageRule').show();
	$('#scrollbar').tinyscrollbar();
	}
	
function closeRule(){
	$('.pageRule').fadeOut(500);
	}
	
var canSubmitSnid=true;//提交snid码的锁
function submitSnid(){
	var snid=$.trim($('.snidTxt').val());
	if(snid==''){
		alert('请输入SNID码');
		return false;
		}
		else{
			if(canSubmitSnid){
				//ajax提交验证snid
				canSubmitSnid=false;//加锁防止重复提交
				
				//ajax验证失败
				canSubmitSnid=true;//解锁
				
				//ajax验证成功
				goPage2b();
				}
			}
	}
	
var gameType=1;
var canTouch=true;//是否可以触摸
var cTick=true;//触摸后 释放前开关
var cSpeedSetp=1;//行走间隔 1-120
var cTime=10;//游戏时间 10s
var ctimeout;//倒计时timeout
var cStep=0;//触摸次数 20次一圈
var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20;
var earthZrTime;//地球自转time
function addSpeed(){
	if(canTouch){
		if(cTick){
			cTick=false;
			cStep++;
			clearInterval(earthZrTime);
			clearTimeout(c1);
			clearTimeout(c2);
			clearTimeout(c3);
			clearTimeout(c4);
			clearTimeout(c5);
			clearTimeout(c6);
			clearTimeout(c7);
			clearTimeout(c8);
			clearTimeout(c9);
			clearTimeout(c10);
			clearTimeout(c11);
			clearTimeout(c12);
			clearTimeout(c13);
			clearTimeout(c14);
			clearTimeout(c15);
			clearTimeout(c16);
			clearTimeout(c17);
			clearTimeout(c18);
			clearTimeout(c19);
			clearTimeout(c20);
			
			speedGo();
			c1=setTimeout(function(){
				speedGo();
				c2=setTimeout(function(){
					speedGo();
					c3=setTimeout(function(){
						speedGo();
						c4=setTimeout(function(){
							speedGo();
							c5=setTimeout(function(){
								speedGo();
								c6=setTimeout(function(){
									speedGo();
									c7=setTimeout(function(){
										speedGo();
										c8=setTimeout(function(){
											speedGo();
											c9=setTimeout(function(){
												speedGo();
												c10=setTimeout(function(){
													speedGo();
													c11=setTimeout(function(){
														speedGo();
														c12=setTimeout(function(){
															speedGo();
															earthZr();
															c13=setTimeout(function(){
																speedGo();
																c14=setTimeout(function(){
																	speedGo();
																	c15=setTimeout(function(){
																		speedGo();
																		c16=setTimeout(function(){
																			speedGo();
																			c17=setTimeout(function(){
																				speedGo();
																				c18=setTimeout(function(){
																					speedGo();
																					c19=setTimeout(function(){
																						speedGo();
																						c20=setTimeout(function(){
																							speedGo();
																							},5);
																						},5);
																					},5);
																				},5);
																			},5);
																		},5);
																	},5);
																},5);
															},5);
														},5);
													},5);
												},5);
											},5);
										},5);
									},5);
								},5);
							},5);
						},5);
					},5);
				},5);
			}
		}
	}
	
function speedGo(){
	cSpeedSetp++;
	if(cSpeedSetp>720){
		cSpeedSetp=1;
		}
	$('.earth').css('-webkit-transform','rotate('+(-(cSpeedSetp-1)*0.5)+'deg)');
	}
	
function reSpeed(){
	cTick=true;
	}
	
function earthZr(){
	earthZrTime=setInterval(function(){
		speedGo();
		},50);
	}
	
function startGame(){//绑定触摸事件
	$('#touchCanvas').on('touchstart',function(){addSpeed();});
	$('#touchCanvas').on('touchend',function(){reSpeed();});
	}

function gameStart(){//点击按钮后开始游戏
	$('.btn7').hide();
	$('#touchCanvas').show();
	$('.page2Img2').removeClass('page2Img2Act1').addClass('page2Img2Act2');
	$('.page2Img1').addClass('page2Img1Act');
	startGame();
	ctimeout=setTimeout(function(){endGame();},cTime*1000);
	}
	
function endGame(){
	canTouch=false;
	clearInterval(earthZrTime);
	clearTimeout(c1);
	clearTimeout(c2);
	clearTimeout(c3);
	clearTimeout(c4);
	clearTimeout(c5);
	clearTimeout(c6);
	clearTimeout(c7);
	clearTimeout(c8);
	clearTimeout(c9);
	clearTimeout(c10);
	clearTimeout(c11);
	clearTimeout(c12);
	clearTimeout(c13);
	clearTimeout(c14);
	clearTimeout(c15);
	clearTimeout(c16);
	clearTimeout(c17);
	clearTimeout(c18);
	clearTimeout(c19);
	clearTimeout(c20);
	//alert('点击次数:'+cStep+' 地球转:'+cStep/20+'圈');
	$('.eNumb').text((cStep/20));
	
	if(cStep==0){
		gameType=1;
		}
	
	window.scroll(0,0);
	$('.page2').fadeOut(500);
	if(gameType==2){
		$('.page3b').fadeIn(500);//1-11、13 等奖
		}
		else{
			$('.page3').fadeIn(500);//12等奖
			}
	$('.bottomBanner').fadeIn(500);
	}
	
function showAwardRule(){
	$('.pageAwardRule').fadeIn(500);
	}
	
function closeAwardRule(){
	$('.pageAwardRule').fadeOut(500);
	}
	
function showInfo(){
	$('.page3').fadeOut(500);
	$('.page3b').fadeIn(500);
	}
	
function playAgain(){
	window.location.reload();
	}

var canSubmitInfo=true;
function submitInfo(){
	var iName=$.trim($('.infoTxt1').val());
	var iTel=$.trim($('.infoTxt2').val());
	var iAddress=$.trim($('.infoTxt3').val());
	var pattern = /^1[3456789]\d{9}$/;
	if(iName==''){
		alert('请输入姓名');
		return false;
		}
	else if(iTel==''||!pattern.test(iTel)){
		alert('请输入正确的手机号码');
		return false;
		}
	else if(iAddress==''){
		alert('请输入地址');
		return false;
		}
	//ajax提交信息
	if(canSubmitInfo){
		canSubmitInfo=false;
	
		alert('信息提交成功');
		window.scroll(0,0);
		$('.page3b').fadeOut(500);
		$('.page4').show();
		$('#scrollbar2').tinyscrollbar();
		}
	}
	
var canSubmitInfo2=true;
function submitInfo2(){
	var iName=$.trim($('.infoTxtB1').val());
	var iTel=$.trim($('.infoTxtB2').val());
	var iAddress=$.trim($('.infoTxtB3').val());
	var pattern = /^1[3456789]\d{9}$/;
	if(iName==''){
		alert('请输入姓名');
		return false;
		}
	else if(iTel==''||!pattern.test(iTel)){
		alert('请输入正确的手机号码');
		return false;
		}
	else if(iAddress==''){
		alert('请输入地址');
		return false;
		}
	//ajax提交信息
	if(canSubmitInfo2){
		canSubmitInfo2=false;
	
		alert('信息提交成功');
		$('.btn15').hide();
		$('.infoSubmited2').show();
		}
	}
	
function showList(){
	window.scroll(0,0);
	$('.page1').fadeOut(500);
	$('.page4').show();
	$('.bottomBanner').fadeIn(500);
	$('#scrollbar2').tinyscrollbar();
	}
	
function goHome(){
	$('.page4').fadeOut(500);
	$('.bottomBanner').fadeOut(500);
	$('.page1').fadeIn(500);
	}
