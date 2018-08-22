layui.use(['layer', "jquery"],
function() {
    var $ = layui.$,
    layer = layui.layer;

    refreshContent();

    setInterval(refreshContent, 10000);

    function refreshContent() {
        $(function() {
            //一言
            $.getJSON("https://v1.hitokoto.cn/?v=f&encode=json",
            function(data) {
                $(".content").text(data.hitokoto);
            });
        });
    }
});