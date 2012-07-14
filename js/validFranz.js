jQuery.fn.franz = function(misOpciones){
		var c='';
		var alerta = "static/main/js/validFranz/alerta.png";
		var correcto = "static/main/js/validFranz/correcto.png";
		var info = "static/main/js/validFranz/info.png";

		$(".imgTool").remove();
	    $.each( misOpciones,function(i,a){

	    	var f = $(i);
	    	f.parent().css("position","relative");
	    	var tool = $('<span class="imgTool">&nbsp;<span class="tool">franz</span></span>');
	        f.after(tool);
	        if(a.required){
	        	var time1,
	        		min = a.min || 1,
	        	    max = a.max || 1000;
	        	f.on({
	        		blur	: 	function(){
	        			f.val($.trim(f.val()));
	        			var vl = f.val();
	        			var len = vl.length;
		        		if((len<min || len>max) && vl!=''){
			        		tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
		        			tool.css("display","inline");
			        	}	
			        	else if(vl!=''){
			        		tool.html('<span class="corrTool">&nbsp;</span><span class="tool bCorrecto">'+a.msgCorrecto+'</span>');
		        			tool.css("display","inline");
		        			if(time1){clearTimeout(time1);}
		        			time1 = setTimeout(function(){tool.css("display","none");},500);
			        	}
	        		},
	        		mouseover 	: 	function(){
	        			f.val($.trim(f.val()));
	        			var vl = f.val();
	        			var len = vl.length;
		        		if((len<min || len>max)){
		        			if(time1){clearTimeout(time1);}
		        			if(tool.css("display")!="inline"){
		        				tool.html('<span class="infoTool">&nbsp;</span><span class="tool bInfo">'+a.msgInfo+'</span>');
		    					tool.css("display","inline");
		        			}
			        		
			        	}	
	        		},
	        		mouseout 	: 	function(){
	        			f.val($.trim(f.val()));
	        			var vl = f.val();
	        			var len = vl.length;
		        		if(vl=='' || (len>=min && len<=max)){
		        			if(time1){clearTimeout(time1);}
			        		time1 = setTimeout(function(){tool.css("display","none");},500);
			        	}
	        		},
	        		keypress 	: 	function(e){
	        			key = e.which;
	        			keye = e.keyCode;
	        			tecla = String.fromCharCode(key).toLowerCase();
	        			letras = a.cadenaFra;
					    if(letras.indexOf(tecla)==-1 && keye!=9&& (key==37 || keye!=37)&& (keye!=39 || key==39) && keye!=8 && (keye!=46 || key==46) || key==161){
					    	e.preventDefault();
					    }
					}
	        	});
	        }

	        if(a.email){
	        	var time2;
	        	f.on({
	        		blur	: 	function(){
	        			f.val($.trim(f.val()));
	        			var vl = f.val();
		        		if(!(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(f.val()))&&$.trim(f.val())!=''){
		        			tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
		        			tool.css("display","inline");
		        		}
		        		else if(vl!=''){
			        		tool.html('<span class="corrTool">&nbsp;</span><span class="tool bCorrecto">'+a.msgCorrecto+'</span>');
		        			tool.css("display","inline");
		        			if(time2){clearTimeout(time2);}
		        			time2 = setTimeout(function(){tool.css("display","none");},500);
			        	}
	        		},
	        		mouseover 	: 	function(){
	        			f.val($.trim(f.val()));
	        			var vl = f.val();
		        		if(vl==0){
			        		tool.html('<span class="infoTool">&nbsp;</span><span class="tool bInfo">'+a.msgInfo+'</span>');
		    				tool.css("display","inline");
		    				if(time2){clearTimeout(time2);}
			        	}	
	        		},
	        		mouseout 	: 	function(){
	        			f.val($.trim(f.val()));
	        			var vl = f.val();
	        			var len = vl.length;
		        		if(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(vl) || vl==''){
		        			if(time2){clearTimeout(time2);}
			        		time2 = setTimeout(function(){tool.css("display","none");},500);
			        	}
	        		}
	        	});
	        }
	        if(a.select){
	        	var time3;
	        	f.on({
	        		change	: 	function(){
	        			var vl = f.val();
		        		if(vl == null || vl == 0){
		        			if(time3){clearTimeout(time3);}
		        			tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
		        			tool.css("display","inline");
		        		}
		        		else{
			        		tool.html('<span class="corrTool">&nbsp;</span><span class="tool bCorrecto">'+a.msgCorrecto+'</span>');
		        			tool.css("display","inline");
		        			if(time3){clearTimeout(time3);}
		        			time3 = setTimeout(function(){tool.css("display","none");},500);
			        	}
	        		},
	        		mouseover 	: 	function(){
	        			var vl = f.val();
		        		if(vl == null || vl == 0){
			        		tool.html('<span class="infoTool">&nbsp;</span><span class="tool bInfo">'+a.msgInfo+'</span>');
		    				tool.css("display","inline");
		    				if(time3){clearTimeout(time3);}
			        	}	
	        		},
	        		mouseout 	: 	function(){
	        			var vl = f.val();
		        		if(vl == null || vl == 0){
		        			if(time3){clearTimeout(time3);}
			        		time3 = setTimeout(function(){tool.css("display","none");},500);
			        	}
	        		}
	        	});
	        }
	        if(a.checkbox){
	        	var time4;
	        	f.on({
	        		blur	: 	function(){
	        			var vl = f.val();
		        		if(!f.is(":checked")){
		        			if(time4){clearTimeout(time4);}
		        			tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
		        			tool.css("display","inline");
		        		}
	        		},
	        		click	: 	function(){
	        			var vl = f.val();
		        		if(!f.is(":checked")){
		        			tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
		        			tool.css("display","inline");
							if(time4){clearTimeout(time4);}
		        		}
		        		else{
			        		tool.html('<span class="corrTool">&nbsp;</span><span class="tool bCorrecto">'+a.msgCorrecto+'</span>');
		        			tool.css("display","inline");
		        			if(time4){clearTimeout(time4);}
		        			time4 = setTimeout(function(){tool.css("display","none");},500);
			        	}
	        		},
	        		mouseover 	: 	function(){
	        			var vl = f.val();
		        		if(!f.is(":checked")){
			        		tool.html('<span class="infoTool">&nbsp;</span><span class="tool bInfo">'+a.msgInfo+'</span>');
		    				tool.css("display","inline");
		    				if(time4){clearTimeout(time4);}
			        	}	
	        		},
	        		mouseout 	: 	function(){
	        			var vl = f.val();
	        			if(f.is(":checked")){
	        				if(time4){clearTimeout(time4);}
	        				time4 = setTimeout(function(){tool.css("display","none");},500);
	        			}
	        		}
	        	});
	        }
	        if(a.radio){
	        	var time5;
	        	f.on({
	        		blur	: 	function(){
	        			var vl = f.val();
		        		if(!f.is(":checked")){
		        			if(time5){clearTimeout(time5);}
		        			tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
		        			tool.css("display","inline");
		        		}
	        		},
	        		click	: 	function(){
	        			var vl = f.val();
		        		if(!f.is(":checked")){
		        			tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
		        			tool.css("display","inline");
							if(time5){clearTimeout(time5);}
		        		}
		        		else {
			        		tool.html('<span class="corrTool">&nbsp;</span><span class="tool bCorrecto">'+a.msgCorrecto+'</span>');
		        			tool.css("display","inline");
		        			if(time5){clearTimeout(time5);}
		        			time5 = setTimeout(function(){tool.css("display","none");},500);
			        	}
	        		},
	        		mouseover 	: 	function(){
	        			var vl = f.val();
		        		if(!f.is(":checked")){
			        		tool.html('<span class="infoTool">&nbsp;</span><span class="tool bInfo">'+a.msgInfo+'</span>');
		    				tool.css("display","inline");
		    				if(time5){clearTimeout(time5);}
			        	}	
	        		},
	        		mouseout 	: 	function(){
	        			var vl = f.val();
	        			if(f.is(":checked")){
	        				if(time5){clearTimeout(time5);}
	        				time5 = setTimeout(function(){tool.css("display","none");},500);
	        			}
	        		}
	        	});
	        }

	        if(typeof(a.fun)=="function"){

	        	var time6;
	        	var min = a.min || 1;
	        	var max = a.max || 1000;
	        	f.on({
	        		blur	: 	function(){
	        			f.val($.trim(f.val()));
	        			var vl = f.val();
	        			var len = vl.length;

		        		if((len<min || len>max || !a.fun()) && vl!=''){
			        		tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
		        			tool.css("display","inline");
			        	}	
			        	else if(vl!=''){
			        		tool.html('<span class="corrTool">&nbsp;</span><span class="tool bCorrecto">'+a.msgCorrecto+'</span>');
		        			tool.css("display","inline");
		        			if(time6){clearTimeout(time6);}
		        			time6 = setTimeout(function(){tool.css("display","none");},500);
			        	}
	        		},
	        		mouseover 	: 	function(){
	        			f.val($.trim(f.val()));
	        			var vl = f.val();
	        			var len = vl.length;
		        		if((len<min || len>max)){
		        			if(time6){clearTimeout(time6);}
		        			if(tool.css("display")!="inline"){
		        				tool.html('<span class="infoTool">&nbsp;</span><span class="tool bInfo">'+a.msgInfo+'</span>');
		    					tool.css("display","inline");
		        			}
			        		
			        	}	
	        		},
	        		mouseout 	: 	function(){
	        			f.val($.trim(f.val()));
	        			var vl = f.val();
	        			var len = vl.length;
		        		if(vl=='' || (len>=min && len<=max && a.fun())){
		        			if(time6){clearTimeout(time6);}
			        		time6 = setTimeout(function(){tool.css("display","none");},500);
			        	}
	        		},
	        		keypress 	: 	function(e){
	        			key = e.which;
	        			keye = e.keyCode;
	        			tecla = String.fromCharCode(key).toLowerCase();
	        			letras = a.cadenaFra;
					    if(letras.indexOf(tecla)==-1 && keye!=9&& (key==37 || keye!=37)&& (keye!=39 || key==39) && keye!=8 && (keye!=46 || key==46) || key==161){
					    	e.preventDefault();
					    }
					}
	        	});
	        }
	        if (a.soloInfo) {
	        	var time7;
	        	f.on({
	        		mouseover : function() {
	        			f.val($.trim(f.val()));
	        			var vl = f.val();
		        		if(vl==''){
		        			if(time7){clearTimeout(time7);}
		        			if(tool.css("display")!="inline"){
		        				tool.html('<span class="infoTool">&nbsp;</span><span class="tool bInfo">'+a.msgInfo+'</span>');
		    					tool.css("display","inline");
		        			}
			        		
			        	}
	        		},
	        		mouseout 	: 	function(){
	        			f.val($.trim(f.val()));
	        			var vl = f.val();
		        		if(vl==''){
		        			if(time7){clearTimeout(time7);}
			        		time7 = setTimeout(function(){tool.css("display","none");},500);
			        	}
	        		}
	        	});
	        }
	    });
		$(this).submit(function() {
			var res = true;	
			$.each( misOpciones,function(i,a){
				
				var f = $(i);
		    	f.parent().css("position","relative");
		    	var tool = $('<span class="imgTool">&nbsp;<span class="tool">franz</span></span>');
		    	tool = f.next('span');
		        f.after(tool);
		        if(a.required){
		        	var min = a.min || 1,
		        	    max = a.max || 1000;
		        	f.val($.trim(f.val()));
	    			var vl = f.val();
	    			var len = vl.length;
	        		if((len<min || len>max)){
		        		tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
	        			tool.css("display","inline");res=false;
		        	}	
		        }
		        if(a.email){
		        	f.val($.trim(f.val()));
	    			var vl = f.val();
	        		if(!(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(f.val()))){
	        			tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
	        			tool.css("display","inline");res=false;
	        		}
		        }
		        if(a.select){
		        	var vl = f.val();
	        		if(vl == null || vl == 0){
	        			tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
	        			tool.css("display","inline");res=false;
	        		}
		        }
		        if(a.checkbox){
		        	var vl = f.val();
	        		if(!f.is(":checked")){
	        			tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
	        			tool.css("display","inline");res=false;
	        		}
		        }
		        if(a.radio){
		        	var vl = f.val();
		        	y=f;
		        	f.parent().children(".imgTool").remove();
		        	f = f[f.length-1];
		        	f=$(f);
		        	tool = tool[tool.length-1];
		        	tool = $(tool);
		        	f.after(tool);

	        		if(!y.is(":checked")){
	        			tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
	        			tool.css("display","inline");res=false;
	        		}
		        }
		        if(typeof(a.fun)=="function"){
		        	f.val($.trim(f.val()));
        			var vl = f.val();
        			var len = vl.length;

	        		if((len<min || len>max || !a.fun()) && vl!=''){
		        		tool.html('<span class="alerTool">&nbsp;</span><span class="tool bAlerta">'+a.msgRequired+'</span>');
	        			tool.css("display","inline");res=false;
		        	}	
		        }
			});
			return res;
		});
	}