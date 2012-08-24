        $(document).ready(function () {
            var os = (function () {
                var ua = navigator.userAgent.toLowerCase();
                return {
                    isWin2K: /windows nt 5.0/.test(ua),
                    isXP: /windows nt 5.1/.test(ua),
                    isVista: /windows nt 6.0/.test(ua),
                    isWin7: /windows nt 6.1/.test(ua)
                };
            } ());
            //change to target Windows XP and all other browsers
            if (os.isXP && !window.externalHost && jQuery.browser.version.substring(0, 2) == "8." || os.isXP && !window.externalHost && jQuery.browser.version.substring(0, 2) == "7.") {
                $('.node').hide(); // hide all nodes
                $('#chromeFrameContainer').slideDown(500); //Show chrome frame
                $(".modalBG").slideDown(500).css({ opacity: 0.5 });
            }
            //Windows Vista or Windows 7 upgrade browser message
            else if (os.isWin7 && !window.externalHost && jQuery.browser.version.substring(0, 2) == "8." || os.isWin7 && !window.externalHost && jQuery.browser.version.substring(0, 2) == "7." ||
                       os.isVista && !window.externalHost && jQuery.browser.version.substring(0, 2) == "8." || os.Vista && !window.externalHost && jQuery.browser.version.substring(0, 2) == "7.") {
                $('.node').hide(); // hide all nodes
                $('#IEBrowserWarning').slideDown(500); //Show chrome frame
                $(".modalBG").slideDown(500).css({ opacity: 0.5 });
            }
            else {}
        });

