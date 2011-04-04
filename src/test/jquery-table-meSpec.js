Screw.Unit(function() {
	describe("Paged table", function() {
		it("submenu div is generated automatically", function() {
			new PagedTable(0,"pagedTable",10);
			expect($('#jtm-page_pagedTable div').hasClass('pagination')).to(be_true);
		});
		it("rows in other pages are hidden", function() {
			new PagedTable(2, "pagedTableWithEntries", 1);
			expect($('#headerShouldBeVisible').css('display')).to_not(equal, 'none');
			expect($('#shouldBeVisible').css('display')).to_not(equal, 'none');
			expect($('#shouldBeHidden').css('display')).to(equal, 'none');
		});
		it("rows in other pages are hidden when there is no tbody", function() {
			new PagedTable(2, "pagedTableWithEntriesWithoutTbody", 1);
			expect($('#shouldBeVisibleWithoutTbody').css('display')).to_not(equal, 'none');
			expect($('#shouldBeHiddenWithoutTbody').css('display')).to(equal, 'none');
		});
		it("callback shows correct rows", function() {
			var table = new PagedTable(3, "pagedTableSecondPage", 2);
			table.pageSelectCallback(1, null);
			expect($('#entry1page1').css('display')).to(equal, 'none');
			expect($('#entry2page1').css('display')).to(equal, 'none');
			expect($('#entry1page2').css('display')).to_not(equal, 'none');
		});
	});
});
