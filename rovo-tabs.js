/********************************************/
/****** Rovo-Tabs Custom JQuery Plugin ******/
/*
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

*/
/******************************************/
(function($) {
	var privateMethods = {
		setActiveTabLinkRef : function(newActiveTabLink) {
			this.activeTabLink.removeClass('rovo-tabs-active');
			this.activeTabLink = newActiveTabLink;
			this.activeTabLink.addClass('rovo-tabs-active');
		},

		showActiveTabAndHideSiblingTabs : function() {
			var activeTabContentRef = this.activeTabLink.data('rovo-tabs-content');
			var activeTabContentJQueryRef = this.find("div.rovo-tabs-content").children(activeTabContentRef).first();

			activeTabContentJQueryRef.show();
			activeTabContentJQueryRef.siblings().hide();
		},

		bindEventHandlers : function() {
			var tabs = this;
			tabs.tabsListElems.on("click", "a", function() {
				privateMethods.setActiveTabLinkRef.call(tabs, $(this));
				privateMethods.showActiveTabAndHideSiblingTabs.call(tabs);
			});
		}
	};

	var publicMethods = {
		init : function() {
			this.tabsListElems = this.find('ul.rovo-tabs-list > li');
			this.activeTabLink = this.tabsListElems.children('a.rovo-tabs-active').first();
			
			if(this.activeTabLink.length) {
				privateMethods.showActiveTabAndHideSiblingTabs.call(this);
			} else {
				//If first active tab not specified just set the first tab in the content list as the active tab
				var firstTabRef = this.tabsListElems.children("a").first().data("rovo-tabs-content");
				publicMethods.switchToTab.call(this, firstTabRef);
			}

			privateMethods.bindEventHandlers.call(this);
		},

		switchToTab : function(newTabRef) {
			var newActiveTabLink = this.tabsListElems.children("a[data-rovo-tabs-content='" + newTabRef + "']").first();
			privateMethods.setActiveTabLinkRef.call(this, newActiveTabLink);
			privateMethods.showActiveTabAndHideSiblingTabs.call(this);
		}
	};

	$.fn.rovoTabs = function(method) {

		if (publicMethods[method]) {
			publicMethods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if ( typeof method === 'object' || ! method) {
			publicMethods.init.apply(this, arguments);
		} else {
			return $.error('Method' + method + ' does not exist on jQuery.rovoTabs');
		}
		return this;
	};
})(jQuery);