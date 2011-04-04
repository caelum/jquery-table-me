var PagedTable = function(line_count, id, items_per_page) {
	this.line_count = line_count;
	this.id = id;
	this.visible_lines = [];
	this.items_per_page = items_per_page;
	
	this.pageSelectCallback = function(page_index, jq) {
		$(this.visible_lines).each(function (){
			this.hide();
		});
		this.visible_lines = [];
		
		var begin = page_index * this.items_per_page;
		var end = Math.min(begin + this.items_per_page, this.line_count);
		var self = this;
		$("#"+this.id+" tbody tr:lt(" + end + ")").each(function(i,e) {
			if(i >= begin) {
				$(e).show();
				self.visible_lines.push($(e));
			}
		});
		return false;
	};

	this.initPagination = function(){
		var self = this;
		$("#jtm-page_"+this.id).pagination(line_count, {
			callback: function(page_index, jq) {self.pageSelectCallback(page_index, jq)},
			items_per_page: items_per_page
		});
	};

	$("#" + this.id).after('<div id="jtm-page_' + this.id + '"><ul class="submenu"></ul></div>');
	$("#" + this.id + " tbody tr").hide();
	this.initPagination();
	var self = this;
	$("#"+this.id).bind("sortEnd",function() {self.initPagination()});
};

$(function() {
	$('.paged').each(function() {
		var tableId = $(this).attr('id');
		var entries = $('#' + tableId + ' tbody tr').size();
		new PagedTable(entries, tableId, 10);
	});
	$('.sortable').tablesorter();
});
