/**
 * Annotator Extension Main Script
 * Author: DominikMartin, BenjaminHosenfeld, Tobias Weller
 * Modified by Amir Faour to always display annotations (no need for user to click on "Annotate Image" tab)
 */
// flag representing the status of annotator mode
var loaded = false;
var installed = false;
(function() {
        api.existPage('Form:ImageAnnotation', function(content) {
            if (content) {
                installed = true;
            }
        });

        // append annotate button and status to menu
        if (mw.config.get('wgAction') == 'view') {
            $('#p-views>ul').append('<li id="ca-annotate"><span><a href="#" title="' + mw.msg('sia-button-desc') + '" accesskey="a">' + mw.msg('sia-button-text') + '</a><i class="fa fa-check" aria-hidden="true"></i></span></li>');

                        mw.loader.using('ext.imageannotator.module').then(function() {
                            $('#ca-annotate').addClass('selected');
                            // if module is loaded message will pop up
                            mw.notify(mw.message('sia-welcome-message'));
                        });
                    


            
        }

}());
