require.config({
    baseUrl: '/static/script/',
    paths: {
        jquery : 'lib/jquery.2.0.3',
		less : 'lib/less-1.4.2',
		bootstrap : '../libs/bootstrap-3.0.0-dist/js/bootstrap.min'
    }
});


require(['jquery','less', 'bootstrap'],function($, less, bootstrap){
	$("#loginBtn").bind('click',function(){
		$('#myModal').modal("show");
	});
});