$(function(){
	
	var $test1 = $("#test1 input");
	
	test("Default text on Input[type=text]", function(){
		$test1.defaultBlur({
			defaultText: "Test"
		});
		
		equals($test1.val(), "Test", "Default text set");
		
		$test1.trigger("focusin");
		
		equals($test1.val(), "", "Default text removed on focus");
		
		$test1.trigger("focusout");
		
		equals($test1.val(), "Test", "Default text readded");
		
		$test1.val("this was added");
		
		equals($test1.val(), "this was added", "Text typed into input shouldn't have default text")
	
		$test1.trigger("focusin");
		
		equals($test1.val(), "this was added", "Giving focus after text set shouldn't do anything")
	
		$test1.trigger("focusout");
		
		equals($test1.val(), "this was added", "Blurring out of input after text set shouldn't do anything");
	});
	
	var $test2 = $("#test2 textarea");
	
	test("Default text on textarea", function(){
		$test2.defaultBlur({
			defaultText: "Test"
		});
		
		equals($test2.val(), "Test", "Default text set");
		
		$test2.trigger("focusin");
		
		equals($test2.val(), "", "Default text removed on focus");
		
		$test2.trigger("focusout");
		
		equals($test2.val(), "Test", "Default text readded");
		
		$test2.val("this was added");
		
		equals($test2.val(), "this was added", "Text typed into input shouldn't have default text")
	
		$test2.trigger("focusin");
		
		equals($test2.val(), "this was added", "Giving focus after text set shouldn't do anything")
	
		$test2.trigger("focusout");
		
		equals($test2.val(), "this was added", "Blurring out of input after text set shouldn't do anything");
	});
	
	var $test3 = $("#test");
	
	test("Default text on input[type=password]", function(){
		$test3.defaultBlur({
			defaultText: "Test"
		});
		equals($("#test").val(), "Test", "Default text set");
		
		$("#test").focus();
		equals($("#test").val(), "", "Default text removed on focus");
	
		$("#test").blur();
		equals($("#test").val(), "Test", "Default text readded");
		
		$("#test").val("this was added");
		equals($("#test").val(), "this was added", "Text typed into input shouldn't have default text")
	
		$("#test").trigger("focusin");
		equals($("#test").val(), "this was added", "Giving focus after text set shouldn't do anything")
	
		$("#test").trigger("focusout");
		equals($("#test").val(), "this was added", "Blurring out of input after text set shouldn't do anything");
	});
});