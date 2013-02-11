/********************************************/
/****** Rovo-Tabs Tabbing JQuery Plugin *****/
/********************************************/

	PURPOSE: Simple Tab-Switcher (Designed to work with JQuery Mobile)

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
	
		$('#tabs').rovoTabs();

	SWITCH TO A PARTICULAR TAB:
	
		$('#tabs').rovoTabs('switchToTab', '#tab-2');

