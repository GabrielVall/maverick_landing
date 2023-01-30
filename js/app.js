$(function() {
    $(document).on("click","[ref]", function(){
        let url = $(this).data('ref');
        window.open(
            url,
            '_blank'
          );
    });
});