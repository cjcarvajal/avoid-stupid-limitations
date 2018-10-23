 let noLimits = document.getElementById('removeLimits');

 noLimits.onclick = function(element) {
     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
         chrome.tabs.executeScript(
             tabs[0].id, { code: `
                
                function removeElement(elem) {
                    if (elem)
                        elem.parentNode.removeChild(elem);
                }

             	elem = document.getElementsByClassName("tp-modal")[0];
                removeElement(elem);

             	elem = document.getElementsByClassName("tp-backdrop")[0];
				removeElement(elem);

				elem = document.getElementsByClassName("cookies-acceptance")[0];
				removeElement(elem);
	
				elem = document.getElementsByClassName("cc_banner-wrapper")[0];
				removeElement(elem);
             	` });
     });
 }