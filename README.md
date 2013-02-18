/********************************************/
/****** Rovo-Tabs Tabbing JQuery Plugin *****/
/********************************************/

	PURPOSE: Simple Tab-Switcher (Designed to work with JQuery Mobile and Twitter Bootstrap)

	HTML5 and JQuery based.

	Was not a big fan of the existing tab switching plugins out there and decided to make my own!

	Also thought it would be a good experience with learning how to write custom JQuery plugins!

	TARGET MARKUP:
	<div id="tabs">
		//OTHER MARKUP CAN APPEAR HERE//
		<ul class="rovo-tabs-list">
			<li><a class="rovo-tabs-active" data-rovo-tabs-content="#tab-1">Tab 1</a></li>
			<li><a data-rovo-tabs-content="#tab-2">Tab 2</a></li>
		</ul>
		//OTHER MARKUP CAN APPEAR HERE//
		<div class="rovo-tabs-content">
			<div id="tab-1">Tab 1 content</div>
			<div id="tab-2">Tab 2 content</div>
		</div>
		//OTHER MARKUP CAN APPEAR HERE//
	</div>


	SETUP CALL:
	
		/* NO INITIAL OPTIONS */
		var tabManager = $('#tabs').rovoTabs(); 

		/* WITH INITIAL OPTIONS */
		var tabManager = $('#tabs').rovoTabs({
			updateWindowHash : true
		});

	INITIAL OPTIONS: 
		
		-updateWindowHash : true or false (boolean)


	SWITCH TO A PARTICULAR TAB:
	
		tabManager.rovoTabs('switchToTab', '#tab-2');

	AUTOMATICALLY UPDATE WINDOW LOCATION HASH:
	
		Current URL: http://localhost.com:8888#tab-2

		tabManager.rovoTabs('updateWindowHash', true);
		tabManager.rovoTabs('switchToTab', '#tab-1');

		New URL: http://localhost.com:8888#tab-1