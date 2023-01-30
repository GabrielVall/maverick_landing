$(function() {
    $(document).on("click","[data-ref]", function(){
        let url = $(this).data('ref');
        window.open(
            url,
            '_blank'
          );
    });
});