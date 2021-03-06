(function(){
    var template = document.getElementById('copy-button');
    var pre = document.getElementsByClassName('highlight');
    for (var i = 0; i < pre.length; i++) {
        pre[i].insertAdjacentHTML('beforebegin', template.innerHTML);
    };

    var copyCode = new Clipboard('.copy-button', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });

    // On success:
    // - Change the "Copy" text to "Copied".
    // - Swap it to "Copy" in 2s.

    copyCode.on('success', function(event) {
        event.clearSelection();
        event.trigger.textContent = 'Copied';
        window.setTimeout(function() {
            event.trigger.textContent = 'Copy';
        }, 2000);
    });

    // On error (Safari):
    // - Change to "Unable to copy"
    // - Swap it to "Copy" in 2s.

    copyCode.on('error', function(event) {
        event.trigger.textContent = 'Not supported';
        window.setTimeout(function() {
            event.trigger.textContent = 'Copy';
        }, 5000);
    });
})();
